'use client';

export default function AnimatedLineVertical() {
  return (
    <div className="relative h-24 w-[1px] overflow-hidden rounded-sm ml-5 mt-3">
      {/* Moving glowing bar */}
      <div className="absolute top-0 left-0 h-10 w-full bg-secondary animate-slide-vertical" />

      <style jsx>{`
        @keyframes slide-vertical {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }

        .animate-slide-vertical {
          animation: slide-vertical 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
