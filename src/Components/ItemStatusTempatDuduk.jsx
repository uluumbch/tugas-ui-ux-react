function ItemStatusTempatDuduk({ warna, status }) {
  return (
    <div className="flex gap-1 items-center">
      <div className="h-8 w-6" style={{ background: warna }}></div>
      <p>{status}</p>
    </div>
  );
}

export default ItemStatusTempatDuduk;
