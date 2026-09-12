export function CharacterCompanion({ small = false }: { small?: boolean }) {
  return <div className={`companion ${small ? "companion-small" : ""}`}>
    <span className="guide-initials" aria-label="Chadwick Poon">cp<span aria-hidden="true">.</span></span>
  </div>;
}
