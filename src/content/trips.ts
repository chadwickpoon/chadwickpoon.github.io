export interface TrailPoint { longitude: number; latitude: number; elevationMetres?: number; }
export interface Trip {
  slug: string;
  title: string;
  location: string;
  date: string;
  description: string;
  route: readonly TrailPoint[];
  photos: readonly { src: string; alt: string; caption?: string }[];
}

// Intentionally empty until Chadwick selects a real trip and supplies its route/photos.
export const trips: readonly Trip[] = [];
