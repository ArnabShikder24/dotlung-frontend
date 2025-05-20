'use client';

export default function AnimatedLine() {
  return (
    <div className="relative w-24 h-[1px] overflow-hidden rounded-sm">
      {/* Moving glowing bar */}
      <div className="absolute top-0 left-0 w-10 h-full bg-secondary animate-slide-nonlinear" />

      <style jsx>{`
        @keyframes slide-nonlinear {
          0% {
            transform: translateX(-120%);
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
            transform: translateX(200%);
            opacity: 0;
          }
        }

        .animate-slide-nonlinear {
          animation: slide-nonlinear 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}