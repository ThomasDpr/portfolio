export interface CardProps {
  title: string;
  imageSrc: string;
  shortDescription?: string;
  iconSrc: string;
  variant?: 'default' | 'projects';
  id: string;
}
