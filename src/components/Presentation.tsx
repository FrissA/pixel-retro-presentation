import { useParams, Navigate } from 'react-router-dom';
import { SlideNavigation } from './SlideNavigation';
import {
  CoverSlide,
  TitleWithTextSlide,
  TwoColumnSlide,
  ComparisonSlide,
  TextWithImageSlide,
  TwoImagesSlide,
  FourImagesSlide,
  BulletPointsSlide,
} from '../slides';

// Example slides - you can modify these or add more
const exampleSlides = [
  // Slide 1: Cover
  <CoverSlide
    title="My Presentation Title"
    subtitle="A Pixel-Retro Presentation"
    author="Your Name"
  />,
  
  // Slide 2: Bullet Points
  <BulletPointsSlide
    title="Key Points"
    subtitle="Main Topics"
    points={[
      'First important point to discuss',
      'Second key concept to cover',
      'Third critical element',
      'Fourth essential topic',
    ]}
  />,
  
  // Slide 3: Title with Text Boxes
  <TitleWithTextSlide
    title="Overview"
    content={[
      'This is the first text box. You can add any content here to explain your topic.',
      'This is the second text box. Each box is clearly separated for easy reading.',
      'Add as many text boxes as you need to convey your message effectively.',
    ]}
  />,
  
  // Slide 4: Two Column
  <TwoColumnSlide
    title="Two-Column Layout"
    leftContent={[
      'Left column content goes here.',
      'Perfect for comparing two concepts.',
      'Or showing related information side by side.',
    ]}
    rightContent={[
      'Right column content goes here.',
      'This layout helps organize information clearly.',
      'Great for pros and cons or before and after.',
    ]}
  />,
  
  // Slide 5: Comparison
  <ComparisonSlide
    title="Comparison"
    left={{
      label: 'Option A',
      items: [
        'Feature 1 of Option A',
        'Feature 2 of Option A',
        'Feature 3 of Option A',
        'Feature 4 of Option A',
      ],
    }}
    right={{
      label: 'Option B',
      items: [
        'Feature 1 of Option B',
        'Feature 2 of Option B',
        'Feature 3 of Option B',
        'Feature 4 of Option B',
      ],
    }}
  />,
  
  // Slide 6: Text with Image
  <TextWithImageSlide
    title="Text with Image"
    content={[
      'This slide combines text with an image.',
      'The image can be positioned on the left or right.',
      'Perfect for explaining concepts with visual aids.',
    ]}
    imageSrc="https://via.placeholder.com/400x300/4a9eff/ffffff?text=Your+Image"
    imageAlt="Example image"
    imagePosition="right"
  />,
  
  // Slide 7: Two Images
  <TwoImagesSlide
    title="Two Images Side by Side"
    content={['This layout is perfect for showing two related images with optional captions.']}
    images={[
      {
        src: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Image+1',
        alt: 'First image',
        caption: 'Caption for first image',
      },
      {
        src: 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Image+2',
        alt: 'Second image',
        caption: 'Caption for second image',
      },
    ]}
  />,
  
  // Slide 8: Four Images
  <FourImagesSlide
    title="Image Gallery"
    content={['Showcase up to four images in a grid layout.']}
    images={[
      {
        src: 'https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Image+1',
        alt: 'Image 1',
        caption: 'Image 1',
      },
      {
        src: 'https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Image+2',
        alt: 'Image 2',
        caption: 'Image 2',
      },
      {
        src: 'https://via.placeholder.com/300x200/95e1d3/ffffff?text=Image+3',
        alt: 'Image 3',
        caption: 'Image 3',
      },
      {
        src: 'https://via.placeholder.com/300x200/f38181/ffffff?text=Image+4',
        alt: 'Image 4',
        caption: 'Image 4',
      },
    ]}
  />,
];

export const Presentation = () => {
  const { slideNumber } = useParams<{ slideNumber: string }>();
  const currentSlide = parseInt(slideNumber || '1', 10);
  const totalSlides = exampleSlides.length;

  // Redirect to first slide if no slide number or invalid
  if (!slideNumber || isNaN(currentSlide) || currentSlide < 1 || currentSlide > totalSlides) {
    return <Navigate to="/slide/1" replace />;
  }

  return (
    <>
      {exampleSlides[currentSlide - 1]}
      <SlideNavigation currentSlide={currentSlide} totalSlides={totalSlides} />
    </>
  );
};
