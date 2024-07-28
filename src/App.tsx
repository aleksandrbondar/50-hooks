
import Memo from "./Memo.tsx";
import UseMemo from "./UseMemo.tsx";
import UseCallback from "./UseCallback.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutEffect from "./UseLayoutEffect.tsx";
import Navbar from "./Navbar.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LayoutEffect />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="*" element={<LayoutEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
