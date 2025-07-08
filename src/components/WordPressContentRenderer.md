# WordPressContentRenderer Component

This component dynamically renders WordPress content from the WordPress REST API while maintaining the exact layout structure and design consistency.

## Features

- **Dynamic Column Layouts**: Automatically detects and renders WordPress column layouts (33.33%/66.66%, 25%/75%, 50%/50%)
- **Image Handling**: Renders WordPress images with proper Next.js Image optimization
- **Carousel Support**: Integrates with existing ImageCarousel component
- **Gallery Support**: Integrates with existing ImageGallery component
- **Error Handling**: Graceful fallback when parsing fails
- **Responsive Design**: Maintains responsive design patterns

## Usage

```tsx
import WordPressContentRenderer from './components/WordPressContentRenderer';

// In your blog page component
<WordPressContentRenderer 
  content={post.content.rendered}
  carouselImages={carouselImages}
  galleryImages={galleryImages}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `content` | `string` | Yes | WordPress HTML content from API |
| `carouselImages` | `Array<{src: any, alt: string}>` | No | Images for carousel sections |
| `galleryImages` | `Array<{src: any, alt: string}>` | No | Images for gallery sections |

## How It Works

### 1. Content Parsing
The component parses WordPress HTML content and identifies different block types:
- `wp-block-columns`: Column layouts with specific width ratios
- `wp-block-image`: Individual images
- Carousel sections (detected by content keywords)
- Gallery sections (detected by multiple images)
- Other content as text blocks

### 2. Layout Detection
For column layouts, it detects the flex-basis styles:
- `33.33%` → Left column gets `lg:w-[350px]`
- `66.66%` → Right column gets `lg:w-[600px]`
- `25%` → Left column gets `lg:w-[250px]`
- `75%` → Right column gets `lg:w-[700px]`

### 3. Rendering
Each block type is rendered with appropriate styling:
- **Columns**: Two-column layout with RevealOnScroll animations
- **Images**: Centered images with Next.js Image optimization
- **Carousel**: Uses existing ImageCarousel component
- **Gallery**: Uses existing ImageGallery component
- **Text**: Standard text rendering with RevealOnScroll

## WordPress Content Structure

The component expects WordPress content with this structure:

```html
<div class="wp-block-columns is-layout-flex">
  <div class="wp-block-column" style="flex-basis:33.33%">
    <!-- Left column content -->
  </div>
  <div class="wp-block-column" style="flex-basis:66.66%">
    <!-- Right column content -->
  </div>
</div>

<figure class="wp-block-image">
  <img src="..." alt="..." width="..." height="..." />
</figure>
```

## Error Handling

- If parsing fails, it falls back to rendering raw HTML
- Individual block errors are caught and logged
- Network errors for images are handled gracefully

## Integration with Existing Components

The component integrates seamlessly with:
- `RevealOnScroll`: For scroll animations
- `ImageCarousel`: For carousel sections
- `ImageGallery`: For gallery sections
- Next.js Image optimization

## Example Output

The component maintains the exact design structure:
- 33.33% columns get the secondary text styling
- 66.66% columns get the main content styling
- Images are centered and responsive
- All animations and styling are preserved 