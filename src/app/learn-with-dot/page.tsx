"use client";
import DotImage from "../../assets/images/learn-with-dot.png";
import ShapeBg from "../../components/ShapeBg";
import HeroBanner from "../../components/HeroBanner";
import MagicSection from "../../components/MagicSection";
import ContactNav from "../../components/ContactNav";

const LearnWithDot = () => {
    const item = [
        {
          "imageSrc": DotImage,
          "title": "Learn WITH DOT",
          "description": "I have worked worldwide weaving wonders for top brands, events, and concepts.",
          "exploreText": "EXPLORE",
          "text1": "Together we can make my magic.",
          "text2": "I create dominant and in demand online identities and communities by developing kick ass campaigns utilizing unique content specific to your brand ethos.",
          "text3": "The digital world can be a difficult one to navigate. Sometimes you need that unicorn to guide you through the good and the bad to enhance, target, and execute your best strategy. This is where I thrive. I've run campaigns for agencies, headed up social media teams for a variety of companies, and have initiated my own start ups in graphic design, video production and more. I can not only lend my expertise and experience, but I've walked the walk, not just talked the talk!"
        },
    ]
    const tableItems = [
        { width: "200%", title: "OFFF" },
        { width: "180%", title: "Motionographer" },
        { width: "200%", title: "F5" },
        { width: "170%", title: "Sonar+D" },
        { width: "180%", title: "DDD" },
        { width: "200%", title: "Ladies Wine Design" },
        { width: "170%", title: "Catalunya Cannabis" },
        { width: "160%", title: "360VR.Barcelona" },
      ];
      const contactData = {
        title: "LET’S TALK",
        phone: "+1 661 368 5864",
        email: "hello@dotlung.com",
        tips: {
          title: "Don’t miss out on this!",
          description:
            "Get my top 5 tips to grow your Instagram / LinkedIn by entering your e-mail address here:",
        },
        socialLinks: [
          { name: "FACEBOOK", href: "#" },
          { name: "INSTAGRAM", href: "#" },
          { name: "TWITTER", href: "#" },
          { name: "SNAPCHAT", href: "#" },
          { name: "SKYPE", href: "#" },
        ],
      };
      
    return (
        <div className="container mx-auto">
              <ShapeBg />
              <HeroBanner
                 imageSrc={item[0].imageSrc}
                 title={item[0].title}
                 description={item[0].description}
                 exploreText={item[0].exploreText}
              />
              <MagicSection
                text1={item[0].text1}
                text2={item[0].text2}
                text3={item[0].text3}
              />
    
            {
           <div className=" flex items-center justify-center ">
                <div className="text-white text-2xl font-serif">
                    {tableItems.map((data, index) => (
                    <div key={index} className="mb-4 relative">
                        <span className="block pb-2 ">{data.title}</span>
                        <div
                        className=" border-b-2 absolute top-4"
                        style={{
                            border: "1px solid rgb(241, 67, 54)",
                            width: data.width,
                        }}
                        ></div>
                    </div>
                    ))}
                </div>
            </div>
            }
            <ContactNav
            title={contactData.title}
            phone={contactData.phone}
            email={contactData.email}
            tips={contactData.tips} // Pass the entire object
            socialLinks={contactData.socialLinks} // Don't forget socialLinks
            />


        
            
        </div>
    );
};

export default LearnWithDot;