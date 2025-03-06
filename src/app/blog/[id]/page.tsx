import Image from "next/image";
import React from "react";
import blog1 from "../../../assets/images/blog1.png";

const BlogPage = () => {
  return (
    <>
      <div className="lg:w-[1100px] mx-auto px-4 py-8 mt-20">
        <div className="flex items-center justify-between font-caslon text-sm border-b-2 border-secondary pb-4">
          <p>12.01.2022</p>
          <p>BACK TO BLOG</p>
        </div>
        <div className="flex justify-between mt-10">
          <p className="font-asty text-secondary">#eatwithdot</p>
          <p className="font-asty w-[530px] text-3xl">
            <span className="italic text-secondary">Ladies, Wine, Barcelona.</span> But not on their own. I create strong online identities & communities and develop kickass campaigns.
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <Image className="w-[90%]" src={blog1} alt="blog 1" />
        </div>
        <div className="flex justify-between mt-20">
          <p className="font-asty w-[350px] text-2xl">
            <span className="italic text-secondary">Ladies, Wine, Barcelona.</span> But not on their own. I create strong online identities & communities and develop kickass
          </p>
          <p className="font-asty w-[600px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.</p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;