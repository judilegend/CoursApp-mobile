export interface LearningData {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  duration: string;
}

export interface MyCourseData {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  progress: number;
  institution: string;
  description: string;
}

export interface HomeScreenProps {}

export interface BottomNavigationProps {}

export interface SearchBarProps {}

export interface LearningSection {
  watchingData: LearningData[];
  myCourseData: MyCourseData[];
}

export interface WatchingItemProps {
  data: LearningData;
}

export interface MyCourseItemProps {
  data: MyCourseData;
}
