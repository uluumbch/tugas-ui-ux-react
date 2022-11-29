import ButtonHome from "./Components/ButtonHome";

function Home() {
  return (
    <div className="mx-auto max-w-md bg-[url('./bg_home.png')] h-[1000px]">
      <div className="h-1/2  p-4">
        <h1 className="text-3xl font-bold text-white">Beranda</h1>
      </div>
      <div className="h-1/2 p-4 flex flex-col gap-10  bg-primary rounded-t-3xl">
        <ButtonHome Text="Pesan Kursi" />
        <ButtonHome Text="Pesan Makanan" />
        <ButtonHome Text="Pesan Minuman" />
      </div>
    </div>
  );
}

export default Home;
