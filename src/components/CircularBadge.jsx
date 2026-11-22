import { ArrowUpRight } from "lucide-react";
import Magnet from "./Magnet";

export default function CircularBadge() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <defs>
          <path
            id="circlePath"
            d="M 60,60 m -43,0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
          />
        </defs>

        <text
          fill="currentColor"
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="3"
        >
          <textPath href="#circlePath">
            STUDIO DIGITAL KREATIF • GARUDEV •
          </textPath>
        </text>
      </svg>

      <Magnet padding={50} magnetStrength={2} maxOffset={10} scale={1.08}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 hover:scale-110">
          <ArrowUpRight size={25} strokeWidth={1.5} />
        </div>
      </Magnet>
    </div>
  );
}
