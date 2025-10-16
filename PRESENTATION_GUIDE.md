# Pixel-Retro Presentation

A retro-styled presentation website built with React, TypeScript, and the pixel-retroui library.

## Features

- 🎮 **8 Different Slide Templates** - Versatile layouts for any presentation
- 🗺️ **URL-based Navigation** - Each slide has its own URL (`/slide/1`, `/slide/2`, etc.)
- ⌨️ **Keyboard Controls** - Navigate with arrow keys, spacebar, Home, and End
- 🖱️ **Click Navigation** - Previous/Next buttons for easy navigation
- 🎨 **Pixel-Retro Theme** - Nostalgic 8-bit aesthetic using pixel-retroui

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

## Slide Templates

### 1. **CoverSlide** - Main Title Slide
Perfect for your presentation intro.

```tsx
<CoverSlide
  title="My Presentation Title"
  subtitle="A Pixel-Retro Presentation"
  author="Your Name"
/>
```

### 2. **BulletPointsSlide** - Key Points
Display bullet points for lists and key concepts.

```tsx
<BulletPointsSlide
  title="Key Points"
  subtitle="Main Topics"
  points={[
    'First important point',
    'Second key concept',
    'Third critical element',
  ]}
/>
```

### 3. **TitleWithTextSlide** - Multiple Text Boxes
Show multiple text sections in separate boxes.

```tsx
<TitleWithTextSlide
  title="Overview"
  content={[
    'First text box content',
    'Second text box content',
    'Third text box content',
  ]}
/>
```

### 4. **TwoColumnSlide** - Side-by-Side Content
Compare or show related information in two columns.

```tsx
<TwoColumnSlide
  title="Two-Column Layout"
  leftContent={[
    'Left column text 1',
    'Left column text 2',
  ]}
  rightContent={[
    'Right column text 1',
    'Right column text 2',
  ]}
/>
```

### 5. **ComparisonSlide** - VS Comparison
Perfect for comparing two options or concepts.

```tsx
<ComparisonSlide
  title="Comparison"
  left={{
    label: 'Option A',
    items: [
      'Feature 1 of Option A',
      'Feature 2 of Option A',
    ],
  }}
  right={{
    label: 'Option B',
    items: [
      'Feature 1 of Option B',
      'Feature 2 of Option B',
    ],
  }}
/>
```

### 6. **TextWithImageSlide** - Text + Single Image
Combine text with an image (left or right positioned).

```tsx
<TextWithImageSlide
  title="Text with Image"
  content={[
    'Explanation text goes here',
    'More details about the topic',
  ]}
  imageSrc="/path/to/image.png"
  imageAlt="Description"
  imagePosition="right"  // or "left"
/>
```

### 7. **TwoImagesSlide** - Two Images Side-by-Side
Show two images with optional captions.

```tsx
<TwoImagesSlide
  title="Two Images"
  content={['Optional description text']}
  images={[
    {
      src: '/path/to/image1.png',
      alt: 'First image',
      caption: 'Caption 1',
    },
    {
      src: '/path/to/image2.png',
      alt: 'Second image',
      caption: 'Caption 2',
    },
  ]}
/>
```

### 8. **FourImagesSlide** - Four Images Grid
Display up to four images in a grid layout.

```tsx
<FourImagesSlide
  title="Image Gallery"
  content={['Optional description']}
  images={[
    { src: '/img1.png', alt: 'Image 1', caption: 'Caption 1' },
    { src: '/img2.png', alt: 'Image 2', caption: 'Caption 2' },
    { src: '/img3.png', alt: 'Image 3', caption: 'Caption 3' },
    { src: '/img4.png', alt: 'Image 4', caption: 'Caption 4' },
  ]}
/>
```

## How to Customize Your Presentation

1. Open `src/components/Presentation.tsx`
2. Modify the `exampleSlides` array
3. Replace the example slides with your own content
4. Add or remove slides as needed
5. Each slide in the array automatically gets a slide number

## Keyboard Shortcuts

- **Arrow Keys (←/→ or ↑/↓)** - Navigate between slides
- **Spacebar** - Go to next slide
- **Home** - Jump to first slide
- **End** - Jump to last slide

## File Structure

```
src/
├── components/
│   ├── Presentation.tsx      # Main presentation component
│   ├── SlideNavigation.tsx   # Navigation controls
│   └── SlideNavigation.css   # Navigation styles
├── slides/
│   ├── CoverSlide.tsx
│   ├── BulletPointsSlide.tsx
│   ├── TitleWithTextSlide.tsx
│   ├── TwoColumnSlide.tsx
│   ├── ComparisonSlide.tsx
│   ├── TextWithImageSlide.tsx
│   ├── TwoImagesSlide.tsx
│   ├── FourImagesSlide.tsx
│   ├── SlideStyles.css       # Slide component styles
│   └── index.ts              # Slide exports
├── App.tsx                   # Router configuration
├── main.tsx                  # App entry point
└── index.css                 # Global styles
```

## Tips

- Images should be placed in the `public` folder or use external URLs
- Adjust the `SlideStyles.css` to customize the look of your slides
- The presentation is responsive and works on different screen sizes
- You can duplicate any slide template and reuse it with different content

## License

MIT
