import ButtonHome from "./Components/ButtonHome";

function Home() {
    return (
        <div className="mx-auto max-w-md bg-[url('./bg_home.png')] h-screen">
            <div className="h-1/2  p-4">
                <h1 className="text-3xl font-bold text-white">Beranda</h1>
                {/* <img src="./bg_home.png" alt="bg_home.png" /> */}
            </div>
            <div className="h-1/2 p-4 grid bg-primary rounded-t-xl">
                <ButtonHome Text="Pesan Kursi" />
                <ButtonHome Text="Pesan Makanan" />
                <ButtonHome Text="Pesan Minuman" />

            </div>
        </div>
    )
}

export default Home;