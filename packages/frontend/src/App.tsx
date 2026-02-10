import { Routes, Route } from "react-router-dom";
import MainLayout from '@/layouts/MainLayout.tsx';
import Home from '@/pages/Home.tsx';
import About from '@/pages/About.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />           {/* / */}
        <Route path="about" element={<About />} />   {/* /about */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;