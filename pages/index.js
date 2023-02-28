import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Sort from "../components/sort";

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 lg:flex justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Harga Crypto dalam Rupiah Hari Ini
            </h1>
          </div>
          <div>
            <Search />
          </div>
        </div>
      </header>

      {/* sort */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Sort />
      </div>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
