import { Card } from 'pixel-retroui';
import './SlideStyles.css';

interface CoverSlideProps {
  title: string;
  subtitle?: string;
  author?: string;
}

export const CoverSlide = ({ title, subtitle, author }: CoverSlideProps) => {
  return (
    <div className="slide-container">
      <Card className="slide-card cover-slide">
        <div className="cover-content">
          <h1 className="cover-title">{title}</h1>
          {subtitle && <h2 className="cover-subtitle">{subtitle}</h2>}
          {author && <p className="cover-author">{author}</p>}
        </div>
      </Card>
    </div>
  );
};
