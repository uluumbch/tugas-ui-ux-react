function ItemTempatDuduk({ noKursi }) {
  return (
    <div
      className="h-10 w-10 rounded m-auto text-center bg-primary"
      style={{
        background: dipilih ? "#FED400" : "#004A74",
        color: dipilih ? "#000" : "#fff",
      }}
      onClick={handleClick}
    >
      {noKursi}
    </div>
  );
}

export default ItemTempatDuduk;
