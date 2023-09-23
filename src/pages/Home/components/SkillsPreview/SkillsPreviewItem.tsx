interface SkillsPreviewItemProps {
  src: string;
  alt: string;
  text: string;
  id?: string;
}

export const SkillsPreviewItem = ({ src, alt, text, id }: SkillsPreviewItemProps) => {
  return (
    <div className="skills__preview__item">
      <img src={src} alt={alt} className="skills__preview__item-icon" id={id} />
      <p className="skills__preview__item-text">{text}</p>
    </div>
  );
}
