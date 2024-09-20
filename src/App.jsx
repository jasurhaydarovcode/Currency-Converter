import { Routes, Route } from "react-router-dom";
import Converter from "@/components/Converter";
import NotFound from "@/components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Converter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
