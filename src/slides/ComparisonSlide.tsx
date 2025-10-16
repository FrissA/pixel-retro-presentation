import { Card } from 'pixel-retroui';
import './SlideStyles.css';

interface ComparisonItem {
  label: string;
  items: string[];
}

interface ComparisonSlideProps {
  title: string;
  left: ComparisonItem;
  right: ComparisonItem;
}

export const ComparisonSlide = ({ title, left, right }: ComparisonSlideProps) => {
  return (
    <div className="slide-container">
      <Card className="slide-card">
        <h2 className="slide-title">{title}</h2>
        <div className="comparison-content">
          <Card className="comparison-column">
            <h3 className="comparison-label">{left.label}</h3>
            <ul>
              {left.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>
          <div className="vs-divider">VS</div>
          <Card className="comparison-column">
            <h3 className="comparison-label">{right.label}</h3>
            <ul>
              {right.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Card>
    </div>
  );
};
