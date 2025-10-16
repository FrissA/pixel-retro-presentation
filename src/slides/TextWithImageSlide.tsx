import { Card } from 'pixel-retroui';
import './SlideStyles.css';

interface TextWithImageSlideProps {
  title: string;
  content: string[];
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

export const TextWithImageSlide = ({ 
  title, 
  content, 
  imageSrc, 
  imageAlt = 'Image',
  imagePosition = 'right' 
}: TextWithImageSlideProps) => {
  return (
    <div className="slide-container">
      <Card className="slide-card">
        <h2 className="slide-title">{title}</h2>
        <div className={`text-image-content ${imagePosition}`}>
          <div className="text-section">
            {content.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <Card className="image-section">
            <img src={imageSrc} alt={imageAlt} />
          </Card>
        </div>
      </Card>
    </div>
  );
};
