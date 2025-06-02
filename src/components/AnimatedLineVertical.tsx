'use client';

export default function AnimatedLineVertical() {
  return (
    <div className="relative h-24 w-[1px] overflow-hidden rounded-sm ml-5 mt-3">
      {/* Moving glowing bar */}
      <div className="absolute top-0 left-0 h-10 w-full bg-secondary animate-glow-slide" />

      <style jsx>{`
        @keyframes glowSlide {
          0% {
            transform: translateY(0%) translate3d(0, -100px, 0);
            opacity: 0;
            height: 0%;
          }
          5% {
            opacity: 1;
            height: 10%;
          }
          40% {
            height: 50%;
          }
          70% {
            height: 90%;
          }
          85% {
            height: 100%;
            opacity: 1;
          }
          90% {
            opacity: 0;
            transform: translateY(200%) translate3d(0, -100px, 0);
            height: 100%;
          }
          100% {
            opacity: 0;
            transform: translateY(200%) translate3d(0, -100px, 0);
            height: 100%;
          }
        }

        .animate-glow-slide {
          animation: glowSlide 1.5s cubic-bezier(0.4, 0, 1, 1) infinite;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}
