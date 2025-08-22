import Image from "next/image";
import { ThemeToggle } from "../toggle/ThemeToggle";

export function Header() {
  return (
    <div className="flex items-center justify-between mt-4 mb-8">
      <div className="size-24 h-auto">
        <Image
          src="https://framerusercontent.com/images/fvLSnD9bf6I3La6OY0WNANfFtA.svg"
          alt="Cakto logo"
          width={50}
          height={50}
        />
      </div>
      <ThemeToggle />
    </div>
  );
}
