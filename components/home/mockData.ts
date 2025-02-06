import { LearningData, MyCourseData } from "../../types";

export const mockWatchingData: LearningData[] = [
  {
    id: "1",
    title: "UI/UX Design",
    imageUrl: "./assets/images/uiux.png",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "Learn the fundamentals of UI/UX design with practical examples",
    duration: "15:30",
  },
  {
    id: "2",
    title: "App Design",
    imageUrl: "./assets/images/app-design.png",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "Master mobile app design principles and best practices",
    duration: "12:45",
  },
  {
    id: "3",
    title: "Figma Basics",
    imageUrl: "./assets/images/figmaDesign.png",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "Get started with Figma - The essential tools and features",
    duration: "20:15",
  },
  {
    id: "4",
    title: "Icon Design",
    imageUrl: "./assets/images/icon.png",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    description: "Create professional icons for modern applications",
    duration: "18:20",
  },
  {
    id: "5",
    title: "Design Systems",
    imageUrl: "./assets/images/design-systems.png",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "Build and maintain scalable design systems",
    duration: "25:10",
  },
] as const;

export const mockMyCourseData: MyCourseData[] = [
  {
    id: "1",
    title: "UI/UX Design Fundamentals",
    institution: "Design Academy",
    rating: 4.7,
    description:
      "Ce cours couvre les bases de la conception UX/UI, y compris les principes de design, les wireframes et les prototypes.",
    imageUrl: require("@/assets/images/uiux.png"),
    progress: 40,
  },
  {
    id: "2",
    title: "Responsive Web Design",
    institution: "Web Development Institute",
    rating: 4.5,
    description:
      "Apprenez à créer des sites web adaptatifs et accessibles sur tous les appareils à l'aide de CSS et des frameworks modernes.",
    imageUrl: require("@/assets/images/iconDesign.png"),
    progress: 60,
  },
  {
    id: "3",
    title: "Figma for Beginners",
    institution: "Creative Design School",
    rating: 4.8,
    description:
      "Découvrez les fonctionnalités essentielles de Figma pour concevoir des interfaces modernes et collaborer efficacement.",
    imageUrl: require("@/assets/images/figmaDesign.png"),
    progress: 25,
  },
];
