import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Courses from "./pages/Traning&LMS";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Security from "./pages/Security";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/security" element={<Security />} />
        <Route path="/training-lms" element={<Courses />} />
        <Route path="/cloud-infrastructure" element={<Infrastructure />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
