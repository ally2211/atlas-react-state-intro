import React, { createContext, useState, useContext } from "react";

const EnrolledCoursesContext = createContext();

export function EnrolledCoursesProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enroll = (course) => {
    setEnrolledCourses((prev) => {
      // Prevent duplicates by courseNumber
      if (prev.some((c) => c.courseNumber === course.courseNumber)) return prev;
      return [...prev, course];
    });
  };

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, enroll }}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
}

export function useEnrolledCourses() {
  return useContext(EnrolledCoursesContext);
}
