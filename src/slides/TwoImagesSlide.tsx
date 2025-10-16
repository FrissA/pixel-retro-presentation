import { Card } from 'pixel-retroui';
import './SlideStyles.css';

interface ImageData {
  src: string;
  alt?: string;
  caption?: string;
}

interface TwoImagesSlideProps {
  title: string;
  content?: string[];
  images: [ImageData, ImageData];
}

export const TwoImagesSlide = ({ title, content, images }: TwoImagesSlideProps) => {
  return (
    <div className="slide-container">
      <Card className="slide-card">
        <h2 className="slide-title">{title}</h2>
        {content && content.length > 0 && (
          <div className="slide-content">
            {content.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}
        <div className="two-images-grid">
          {images.map((image, index) => (
            <Card key={index} className="image-card">
              <img src={image.src} alt={image.alt || `Image ${index + 1}`} />
              {image.caption && <p className="image-caption">{image.caption}</p>}
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
