"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';
import ImageCarousel from './ImageCarousel';
import ImageGallery from './ImageGallery';

interface WordPressContentRendererProps {
  content: string;
  carouselImages?: Array<{ src: any; alt: string }>;
  galleryImages?: Array<{ src: any; alt: string }>;
}

interface ParsedBlock {
  type: 'columns' | 'image' | 'carousel' | 'gallery' | 'text';
  data: any;
}

const WordPressContentRenderer: React.FC<WordPressContentRendererProps> = ({
  content,
  carouselImages = [],
  galleryImages = []
}) => {
  const [parsedBlocks, setParsedBlocks] = useState<ParsedBlock[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const parseContent = (htmlContent: string): ParsedBlock[] => {
      try {
        const blocks: ParsedBlock[] = [];
        
        // Create a temporary div to parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        // Process each child node
        Array.from(tempDiv.children).forEach((element, index) => {
          try {
            if (element.classList.contains('wp-block-columns')) {
              // Handle column layout
              const columns = Array.from(element.querySelectorAll('.wp-block-column'));
              if (columns.length >= 2) {
                const leftColumn = columns[0];
                const rightColumn = columns[1];
                
                // Extract flex-basis to determine column widths
                const leftStyle = leftColumn.getAttribute('style') || '';
                const rightStyle = rightColumn.getAttribute('style') || '';
                
                // Check for specific width patterns
                const leftWidth = leftStyle.includes('33.33%') ? 33.33 : 
                                  leftStyle.includes('25%') ? 25 : 
                                  leftStyle.includes('50%') ? 50 : 33.33;
                const rightWidth = rightStyle.includes('66.66%') ? 66.66 : 
                                  rightStyle.includes('75%') ? 75 : 
                                  rightStyle.includes('50%') ? 50 : 66.66;
                
                blocks.push({
                  type: 'columns',
                  data: {
                    leftColumn: {
                      content: leftColumn.innerHTML,
                      width: leftWidth
                    },
                    rightColumn: {
                      content: rightColumn.innerHTML,
                      width: rightWidth
                    }
                  }
                });
              }
            } else if (element.tagName === 'FIGURE' && element.classList.contains('wp-block-image')) {
              // Handle images
              const img = element.querySelector('img');
              if (img) {
                blocks.push({
                  type: 'image',
                  data: {
                    src: img.getAttribute('src'),
                    alt: img.getAttribute('alt') || '',
                    width: img.getAttribute('width'),
                    height: img.getAttribute('height'),
                    className: img.getAttribute('class') || ''
                  }
                });
              }
            } else if (
              element.classList.contains('carousel-section') ||
              element.innerHTML.includes('carousel') ||
              element.innerHTML.includes('slider')
            ) {
              // Handle carousel sections: extract images
              const imgs = Array.from(element.querySelectorAll('img'));
              const images = imgs.map(img => ({
                src: img.getAttribute('src'),
                alt: img.getAttribute('alt') || '',
              }));
              blocks.push({
                type: 'carousel',
                data: {
                  images,
                  content: element.innerHTML
                }
              });
            } else if (element.classList.contains('gallery-section') || 
                        element.innerHTML.includes('gallery') ||
                        element.querySelectorAll('img').length > 2) {
              // Handle gallery sections
              blocks.push({
                type: 'gallery',
                data: {
                  content: element.innerHTML
                }
              });
            } else if (element.tagName === 'DIV' && element.innerHTML.trim()) {
              // Handle other div content
              blocks.push({
                type: 'text',
                data: {
                  content: element.outerHTML
                }
              });
            }
          } catch (elementError) {
            console.error('Error parsing element:', elementError);
            // Fallback: treat as text
            blocks.push({
              type: 'text',
              data: {
                content: element.outerHTML
              }
            });
          }
        });
        
        return blocks;
      } catch (parseError) {
        console.error('Error parsing WordPress content:', parseError);
        setError('Failed to parse content');
        return [];
      }
    };

    if (typeof window !== 'undefined' && content) {
      const blocks = parseContent(content);
      setParsedBlocks(blocks);
      setError(null);
    }
  }, [content]);

  // Render individual blocks
  const renderBlock = (block: ParsedBlock, index: number) => {
    try {
      switch (block.type) {
        case 'columns':
          const leftWidth = block.data.leftColumn.width;
          const rightWidth = block.data.rightColumn.width;
          
          // Determine column classes based on width
          const leftColumnClass = leftWidth === 33.33 ? "lg:w-[350px]" : 
                                  leftWidth === 25 ? "lg:w-[250px]" : 
                                  "lg:w-[400px]";
          const rightColumnClass = rightWidth === 66.66 ? "lg:w-[600px]" : 
                                  rightWidth === 75 ? "lg:w-[700px]" : 
                                  "lg:w-[500px]";
          
          return (
            <div key={index} className={`lg:flex justify-between ${index === 0 ? 'mt-8' : 'mt-20'}`}>
              <div className={`font-caslon italic ${leftColumnClass} text-secondary ${index !== 0 ? 'text-[1.0625rem] lg:text-[1.75rem]' : 'text-[1.125rem] lg:text-[1.375rem]'}`}>
                <RevealOnScroll>
                  <div 
                    className="mb-4 "
                    dangerouslySetInnerHTML={{ __html: block.data.leftColumn.content }}
                  />
                </RevealOnScroll>
              </div>
              <div className={`$${index === 0 ? 'font-caslon text-[1.375rem] lg:text-[2.25rem] leading-[31px] lg:leading-[44px]' : 'font-asty leading-6'} ${rightColumnClass} mt-5 lg:mt-0 text-white`.replace('$','')}>
                <RevealOnScroll>
                  <div 
                    dangerouslySetInnerHTML={{
                      __html:
                        block.data.rightColumn.content
                          .replace(/<p>/g, '')
                          .replace(/<\/p>/g, '')
                          .replace(/<br\s*\/?>(\n)?/gi, '')
                    }}
                  />
                </RevealOnScroll>
              </div>
            </div>
          );
          
        case 'image':
          return (
            <div key={index} className="flex justify-center mt-20 w-full">
              <RevealOnScroll>
                <Image
                  src={block.data.src}
                  alt={block.data.alt}
                  width={parseInt(block.data.width) || 800}
                  height={parseInt(block.data.height) || 800}
                  className="w-full h-auto"
                />
              </RevealOnScroll>
            </div>
          );
          
        case 'carousel':
          return (
            <div key={index} className="w-screen max-w-none px-0 left-1/2 right-1/2 -translate-x-1/2 relative overflow-visible -ml-[10px]">
              <ImageCarousel images={block.data.images} />
            </div>
          );
          
        case 'gallery':
          return (
            <div key={index}>
              <RevealOnScroll>
                <ImageGallery images={galleryImages} />
              </RevealOnScroll>
            </div>
          );
          
        case 'text':
          return (
            <div key={index} className="mt-10">
              <RevealOnScroll>
                <div 
                  className="font-asty leading-6"
                  dangerouslySetInnerHTML={{ __html: block.data.content }}
                />
              </RevealOnScroll>
            </div>
          );
          
        default:
          return null;
      }
    } catch (renderError) {
      console.error('Error rendering block:', renderError);
      return (
        <div key={index} className="mt-10 text-red-500">
          Error rendering content block
        </div>
      );
    }
  };

  if (error) {
    return (
      <div className="lg:w-[1100px] mx-auto px-4">
        <div className="text-red-500">Error: {error}</div>
        <div 
          className="font-asty leading-6 mt-10"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  }

  return (
    <div className="lg:w-[1100px] mx-auto px-4">
      {parsedBlocks.length > 0 ? (
        parsedBlocks.map((block, index) => renderBlock(block, index))
      ) : (
        <div 
          className="font-asty leading-6 mt-10"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default WordPressContentRenderer; 