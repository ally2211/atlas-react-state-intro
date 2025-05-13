import React from "react";
import { useEnrolledCourses } from "./context/EnrolledCoursesContext";

export default function ClassSchedule() {
  const { enrolledCourses } = useEnrolledCourses();

  if (enrolledCourses.length === 0) {
    return <p>No classes enrolled yet.</p>;
  }

  return (
    <div className="class-schedule">
      <h2>Class Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.trimester}</td>
              <td>{course.courseNumber}</td>
              <td>{course.courseName}</td>
              <td>{course.semesterCredits}</td>
              <td>{course.totalClockHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
