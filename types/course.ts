export type Course = {
  id: string;
  title: string;
  institution: string;
  rating: number;
  description: string;
  imageUrl: any; // Utilisation de require()
  image?: string;
  progress: number;
};
