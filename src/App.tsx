import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Research } from "./pages/Research";
import { HomePage } from "./pages/Homepage";
import Layout from "./layout";
import  PublicationsPage  from "./pages/publications";
import { TeachingPage } from "./pages/teachings";

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
          <Research />
        </Layout>
      }
      />
      {/* <Route path="/group" element={<GroupPage />} /> */}
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
