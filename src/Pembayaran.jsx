import { Link } from "react-router-dom";
import MetodePembayaran from "./Components/MetodePembayaran";

function Pembayaran() {
  return (
    <div className="mx-auto max-w-md h-[1000px] bg-white">
      <div className="nav flex justify-center py-7">
        <h2 className="font-bold text-black text-2xl">Pembayaran</h2>
      </div>
      <div className="flex flex-col mx-5">
        <h3 className="text-black text-xl">Rekomendasi Pembayaran</h3>
        <form className="flex flex-col">
          <MetodePembayaran nama={"Gopay"} gambar={"gopay.png"} />
          <MetodePembayaran nama={"Dana"} gambar={"dana.svg"} />
          <MetodePembayaran nama={"Shopeepay"} gambar={"spay.png"} />
          <MetodePembayaran nama={"Link Aja"} gambar={"linkaja.svg"} />
          <div className="flex justify-between mt-5">
            <p>Total Bayar</p>
            <p>Rp5.000</p>
          </div>

          <div className="">
            <Link to="/konfirmasi">
              <button className="rounded-full bg-primary py-2 w-full text-white font-bold text-2xl">
                Bayar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pembayaran;
