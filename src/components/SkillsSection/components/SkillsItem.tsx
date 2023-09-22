interface SkillsItemProps {
  src: string;
  alt: string;
  text: string;
  id?: string;
}

export const SkillsItem = ({ src, alt, text, id }: SkillsItemProps) => {
  return (
    <div className="skills__sections__item">
      <img src={src} alt={alt} className="skills__sections__item-icon" id={id} />
      <p className="skills__sections__item-text">{text}</p>
    </div>
  );
}
