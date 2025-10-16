import { Card } from 'pixel-retroui';
import './SlideStyles.css';

interface TitleWithTextSlideProps {
  title: string;
  content: string[];
}

export const TitleWithTextSlide = ({ title, content }: TitleWithTextSlideProps) => {
  return (
    <div className="slide-container">
      <Card className="slide-card">
        <h2 className="slide-title">{title}</h2>
        <div className="text-content">
          {content.map((text, index) => (
            <Card key={index} className="text-box">
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
