import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ResearchPage } from "./pages/Research";
import { HomePage } from "./pages/Homepage";
import Layout from "./layout";
import  PublicationsPage  from "./pages/publications";
import { TeachingPage } from "./pages/teachings";
import GroupPage from "./pages/group";

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

    </Routes>
  );
}

export default App;
