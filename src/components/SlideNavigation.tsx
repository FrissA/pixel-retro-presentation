import { useNavigate } from 'react-router-dom';
import { useEffect, useCallback, useState } from 'react';
import './SlideNavigation.css';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
}

export const SlideNavigation = ({ currentSlide, totalSlides }: SlideNavigationProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      navigate(`/slide/${slideNumber}`);
    }
  }, [navigate, totalSlides]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const goToNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  // Show navigation when slide changes
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Show navigation on mouse move
  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          goToPrevious();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Spacebar
          event.preventDefault();
          goToNext();
          break;
        case 'Home':
          goToSlide(1);
          break;
        case 'End':
          goToSlide(totalSlides);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToSlide, goToNext, goToPrevious, totalSlides]);

  return (
    <div className={`slide-navigation ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="slide-counter">
        {currentSlide}
      </div>
    </div>
  );
};
