import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ResearchPage } from "./pages/Research";
import { HomePage } from "./pages/Homepage";
import Layout from "./layout";
import  PublicationsPage  from "./pages/publications";
import { TeachingPage } from "./pages/teachings";
import GroupPage from "./pages/group";
import ProjectsSection from "./pages/projectPage";
import GalleryPage from "./pages/GalleryPage";
import ResearchStudentsPage from "./pages/callForStudents";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <HomePage />
        </Layout>
      }
      />
      <Route path="/research" element={
        <Layout>
          <ResearchPage />
        </Layout>
      }
      />
      <Route path="/group" element={<Layout><GroupPage /></Layout>} />
      <Route path="/publication" element={<Layout>
        <PublicationsPage />
      </Layout>} />
      <Route path="/teaching" element={<Layout>
        <TeachingPage />
      </Layout>} />
      <Route path="/project" element={<Layout>
        <ProjectsSection />
      </Layout>} />
      <Route path="/gallery" element={<Layout>
        <GalleryPage />
      </Layout>} />
      <Route path="/student_research" element={<Layout>
        <ResearchStudentsPage />
      </Layout>} />

    </Routes>
  );
}

export default App;
