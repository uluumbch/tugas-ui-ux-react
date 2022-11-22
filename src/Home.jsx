import ButtonHome from "./ButtonHome";

function Home() {
    return (
        <div className="mx-auto max-w-md bg-primary h-screen">
            <div className="h-1/2 bg-[url('./bg_home.png')] p-4">
                <h1 className="text-3xl font-bold text-white">Beranda</h1>
                {/* <img src="./bg_home.png" alt="bg_home.png" /> */}
            </div>
            <div className="h-1/2 p-4 grid ">
                <ButtonHome Text="Pesan Kursi" />
                <ButtonHome Text="Pesan Makanan" />
                <ButtonHome Text="Pesan Minuman" />

            </div>
        </div>
    )
}

export default Home;