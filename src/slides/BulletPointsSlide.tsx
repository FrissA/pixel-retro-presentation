import { Card } from 'pixel-retroui';
import './SlideStyles.css';

interface BulletPointsSlideProps {
  title: string;
  subtitle?: string;
  points: string[];
}

export const BulletPointsSlide = ({ title, subtitle, points }: BulletPointsSlideProps) => {
  return (
    <div className="slide-container">
      <Card className="slide-card">
        <h2 className="slide-title">{title}</h2>
        {subtitle && <h3 className="slide-subtitle">{subtitle}</h3>}
        <Card className="bullet-points-content">
          <ul className="bullet-list">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Card>
      </Card>
    </div>
  );
};
