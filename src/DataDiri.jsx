import { Link } from "react-router-dom";
import InputDataDiri from "./Components/InputDataDiri";

function DataDiri() {
  return (
    <div className="mx-auto max-w-md h-[1000px] bg-white">
      <div className="nav flex justify-center py-7">
        <h2 className="font-bold text-primary text-4xl">Data Diri</h2>
      </div>
      <div className="flex flex-col">
        <div className="mx-auto">
          <img src="./welcome.svg" alt="" />
        </div>
        <form action="" method="post" className="pt-5">
          <InputDataDiri
            idInput="nama"
            namaInput="Nama Lengkap"
            placeholderInput="Masukkan nama"
          />
          <InputDataDiri
            idInput="email"
            namaInput="Email"
            placeholderInput="email@mail.com"
          />
          <InputDataDiri
            idInput="nohp"
            namaInput="No. HP"
            placeholderInput="0822xxxxxx"
          />
          <div className="flex mx-5 gap-2">
            <input
              type="checkbox"
              name="konfirmasi"
              id="konfirmasi"
              className=" checked:bg-primary checked:border-transparent"
            />
            <label htmlFor="konfirmasi" className="select-none">
              Data diri sudah sesuai
            </label>
          </div>
          <div className="mx-5">
            <Link to="/pembayaran">
              <button className="rounded-full bg-primary py-2 w-full text-white font-bold text-2xl">
                Lanjutkan
              </button>
            </Link>
          </div>
        </form>
        <div className="mt-10">
          <p className="text-center text-sm text-gray-400">Sponsored by</p>
          <div className="flex justify-center">
            <img src="./logo_ugm.png" alt="" />
          </div>
          <p className="text-center text-md text-gray-400">
            Universitas Gadjah Mada
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataDiri;
