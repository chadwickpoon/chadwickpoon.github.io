import Image from "next/image";

export function CharacterCompanion({ small = false }: { small?: boolean }) {
  return <div className={`companion ${small ? "companion-small" : ""}`}>
    <Image className="guide-avatar" src="/characters/dog-walker-pfp.png" alt="Chadwick’s Dog Walker avatar" width={1000} height={1000} unoptimized />
  </div>;
}
