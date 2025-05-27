'use client';

export default function AnimatedLine() {
  return (
    <>
      <div className="relative w-28 h-[1px] overflow-hidden bg-transparent">
        <div className="absolute top-0 left-0 h-full bg-secondary rounded-full animate-glow-slide" />
      </div>

      <style jsx>{`
        @keyframes glowSlide {
          0% {
            transform: translateX(0%) translate3d(-100px, 0, 0);
            opacity: 0;
            width: 0%;
          }
          5% {
            opacity: 1;
            width: 10%;
          }
          40% {
            width: 50%;
          }
          70% {
            width: 90%;
          }
          85% {
            width: 100%;
            opacity: 1;
          }
          90% {
            opacity: 0;
            transform: translateX(200%) translate3d(-100px, 0, 0);
            width: 100%;
          }
          100% {
            opacity: 0;
            transform: translateX(200%) translate3d(-100px, 0, 0);
            width: 100%;
          }
        }

        .animate-glow-slide {
          animation: glowSlide 1.5s cubic-bezier(0.4, 0, 1, 1) infinite;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </>
  );
}