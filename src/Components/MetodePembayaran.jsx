function MetodePembayaran({ gambar, nama }) {
  return (
    <div className="flex justify-between px-10 py-4 shadow-xl ">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10  rounded-full">
          <img src={"/" + gambar} alt={"metode " + nama} className="" />
        </div>
        <p className="text-lg font-medium">{nama}</p>
      </div>
      <div className="my-auto">
        <input
          type="radio"
          className="w-5 h-5"
          name="metode_pembayaran"
          value={nama}
        />
      </div>
    </div>
  );
}

export default MetodePembayaran;
