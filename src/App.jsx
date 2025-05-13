import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import { EnrolledCoursesProvider } from "./context/EnrolledCoursesContext";

function App() {
  return (
    <EnrolledCoursesProvider>
      <Header />
      <SchoolCatalog />
      <ClassSchedule />
    </EnrolledCoursesProvider>
  );
}
export default App;
