import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Bayar() {
  const MySwal = withReactContent(Swal);
  const toasClick = () => {
    MySwal.fire({
      title: "Pembayaran berhasil",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: "success",
    });
  };
  return (
    <div className="mx-auto max-w-md bg-[url('./bg_bayar.png')] bg-contain h-[1000px]">
      <div className="h-1/2  p-4">
        <h1 className="text-3xl font-bold text-white">Pembayaran</h1>
      </div>
      <div className="h-1/2 p-4 relative bg-white rounded-t-xl ">
        <h3 className="font-semibold">Detail Booking</h3>
        <div className="flex justify-between my-4">
          <p>Nama</p>
          <p>Andrea Jabir</p>
        </div>
        <div className="flex justify-between my-4">
          <p>No. Kursi</p>
          <p>1</p>
        </div>
        <div className="flex justify-between my-4">
          <p>Waktu Pemesanan</p>
          <p>09.20 WIB</p>
        </div>
        <div className="flex justify-between my-4">
          <p>Biaya Layanan</p>
          <p>Rp5.000</p>
        </div>
        <div className="">
          <h3 className="font-semibold">Persayaratan dan Ketentuan</h3>
          <ol className="list-decimal text-red-500 mx-2">
            <li>Maksimal pemesanan kursi 30 menit sebelum check in.</li>
            <li>Biaya layanan diambil dari harga item termurah.</li>
            <li>
              Toleransi keterlambatan hanya 10 menit, biaya layanan dapat
              diganti dengan item yang harganya sama
            </li>
          </ol>
        </div>

        <button
          onClick={toasClick}
          className="bg-primary text-white py-3 rounded-full w-full"
        >
          Bayar
        </button>
      </div>
    </div>
  );
}

export default Bayar;
