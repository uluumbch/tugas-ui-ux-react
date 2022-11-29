import { Routes, Route, Outlet, Link } from "react-router-dom";
import Bayar from "./Bayar";
import DataDiri from "./DataDiri";
import Home from "./Home";
import Pembayaran from "./Pembayaran";
import TempatDuduk from "./TempatDuduk";

function App() {
  return (
    <div className="App bg-gray-200 p-2 font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pesankursi" element={<TempatDuduk />} />
        <Route path="data-diri" element={<DataDiri />} />
        <Route path="pembayaran" element={<Pembayaran />} />
        <Route path="konfirmasi" element={<Bayar />} />
      </Routes>
    </div>
  );
}

export default App;
