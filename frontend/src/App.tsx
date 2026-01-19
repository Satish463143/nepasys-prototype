import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Development from "./pages/Development";
import Infrastructure from "./pages/Infrastructure";
import Contact from "./pages/Contact";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/in-development" element={<Development />} />
        <Route path="/cloud-infrastructure" element={<Infrastructure />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
