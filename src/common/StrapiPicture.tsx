import React, { FC } from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/utils/utils.helpers';
import { cn } from '@/lib/utils';

// Types
export interface StrapiPictureType {
  data: {
    attributes: {
      name: string;
      url: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
    };
  } | null;
}

interface StrapiPictureProps {
  picture?: StrapiPictureType | null;
  classNames?: string;
  isLCP?: boolean;
  fallbackWidth?: number;
  fallbackHeight?: number;
}

// Constants
const DEFAULT_FALLBACK = {
  width: 600,
  height: 400,
  imageUrl: '/images/placeholder.svg',
  alt: 'Image placeholder'
} as const;

// Composants
const FallbackImage: FC<{
  width?: number;
  height?: number;
  classNames?: string;
}> = ({
  width = DEFAULT_FALLBACK.width,
  height = DEFAULT_FALLBACK.height,
  classNames
}) => (
  <div
    className={cn(
      'relative bg-gray-200 dark:bg-gray-700 transition-colors',
      classNames
    )}
    style={{
      width,
      height,
      aspectRatio: `${width}/${height}`
    }}
    role="img"
    aria-label="Image en cours de chargement"
  >
    <div className="absolute inset-0 animate-pulse" />
  </div>
);

const StrapiPicture: FC<StrapiPictureProps> = ({
  picture,
  classNames,
  isLCP = false,
  fallbackWidth = DEFAULT_FALLBACK.width,
  fallbackHeight = DEFAULT_FALLBACK.height,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  if (!picture?.data?.attributes) {
    return (
      <FallbackImage
        width={fallbackWidth}
        height={fallbackHeight}
        classNames={classNames}
      />
    );
  }

  const { attributes } = picture.data;
  const imageUrl = getStrapiMedia(attributes.url);

  if (!imageUrl || imageError) {
    return (
      <FallbackImage
        width={fallbackWidth}
        height={fallbackHeight}
        classNames={classNames}
      />
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <FallbackImage
          width={fallbackWidth}
          height={fallbackHeight}
          classNames={classNames}
        />
      )}
      <Image
        src={imageUrl}
        alt={attributes.alternativeText || attributes.name || DEFAULT_FALLBACK.alt}
        width={attributes.width || fallbackWidth}
        height={attributes.height || fallbackHeight}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          classNames
        )}
        priority={isLCP}
        loading={isLCP ? 'eager' : 'lazy'}
        onError={() => setImageError(true)}
        onLoadingComplete={() => setIsLoading(false)}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        placeholder="blur"
      />
    </div>
  );
};

// Error Boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('StrapiPicture Error:', error, errorInfo);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

// Utility function
export const isValidStrapiPicture = (
  picture?: StrapiPictureType | null
): picture is StrapiPictureType => {
  return Boolean(
    picture?.data?.attributes?.url
  );
};

// Main export component
export const SafeStrapiPicture: FC<StrapiPictureProps> = (props) => {
  if (!isValidStrapiPicture(props.picture)) {
    return (
      <FallbackImage
        width={props.fallbackWidth}
        height={props.fallbackHeight}
        classNames={props.classNames}
      />
    );
  }

  return (
    <ErrorBoundary
      fallback={
        <FallbackImage
          width={props.fallbackWidth}
          height={props.fallbackHeight}
          classNames={props.classNames}
        />
      }
    >
      <StrapiPicture {...props} />
    </ErrorBoundary>
  );
};

// Set display names
FallbackImage.displayName = 'FallbackImage';
StrapiPicture.displayName = 'StrapiPicture';
SafeStrapiPicture.displayName = 'SafeStrapiPicture';

export default SafeStrapiPicture;