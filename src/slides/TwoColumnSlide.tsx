import { Card } from 'pixel-retroui';
import './SlideStyles.css';

interface TwoColumnSlideProps {
  title: string;
  leftContent: string[];
  rightContent: string[];
}

export const TwoColumnSlide = ({ title, leftContent, rightContent }: TwoColumnSlideProps) => {
  return (
    <div className="slide-container">
      <Card className="slide-card">
        <h2 className="slide-title">{title}</h2>
        <div className="two-column-content">
          <Card className="column">
            {leftContent.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </Card>
          <Card className="column">
            {rightContent.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </Card>
        </div>
      </Card>
    </div>
  );
};
