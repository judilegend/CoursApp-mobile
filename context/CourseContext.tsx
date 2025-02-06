import React, { createContext, useContext, useState } from "react";
import { mockMyCourseData } from "@/components/home/mockData";
import { MyCourseData } from "@/types";

type CourseContextType = {
  selectedCourse: MyCourseData | null;
  setSelectedCourse: (course: MyCourseData) => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<MyCourseData | null>(
    null
  );

  return (
    <CourseContext.Provider value={{ selectedCourse, setSelectedCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within a CourseProvider");
  }
  return context;
};
