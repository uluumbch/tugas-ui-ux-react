import { useState } from "react";
import { Link } from "react-router-dom";
import ItemStatusTempatDuduk from "./Components/ItemStatusTempatDuduk";

function TempatDuduk() {
  const [dipilih, setDipilih] = useState(false);
  const [dipilih2, setDipilih2] = useState(false);
  const handleClick = () => {
    setDipilih((current) => !current);
  };

  return (
    <div className="mx-auto max-w-lg h-[1000px] bg-white">
      <div className="mx-5">
        <div className="nav flex justify-center py-7">
          <h2 className="font-bold text-black text-2xl">Komipa</h2>
        </div>
        <div className="grid grid-cols-4 gap-2 shadow-md p-5 ">
          <ItemStatusTempatDuduk status={"Dipilih"} warna={"#004A74"} />
          <ItemStatusTempatDuduk status={"Tersedia"} warna={"#FED400"} />
          <ItemStatusTempatDuduk status={"Hampir Tersedia"} warna={"#EEE6BE"} />
          <ItemStatusTempatDuduk status={"Tidak Tersedia"} warna={"#D9D9D9"} />
        </div>
        <div className="grid grid-cols-5 gap-2 gap-y-5 shadow-md py-3 mt-5">
          <div
            className="h-10 w-10 rounded m-auto text-center bg-primary"
            style={{
              background: dipilih ? "#004A74" : "#FED400",
              color: dipilih ? "#fff" : "#000",
            }}
            onClick={handleClick}
          >
            1
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            2
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            3
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#D9D9D9]">
            4
          </div>
          <div
            className="h-10 w-10 rounded m-auto text-center bg-[#FED400]"
            style={{
              background: dipilih2 ? "#004A74" : "#FED400",
              color: dipilih2 ? "#fff" : "#000",
            }}
            onClick={() => setDipilih2((current) => !current)}
          >
            5
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            6
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            7
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            8
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            9
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            10
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            11
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#EEE6BE]">
            12
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#EEE6BE]">
            13
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            14
          </div>
          <div className="h-10 w-10 rounded m-auto text-center bg-[#FED400]">
            15
          </div>
        </div>
        <Link to="/data-diri">
          <button className="bg-primary text-white py-3 w-full rounded-full">
            Lanjutkan Pemesanan
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TempatDuduk;
