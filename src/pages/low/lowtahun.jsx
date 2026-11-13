import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function Lowtahun() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Daftar Pemenang</h1>
        <a href="/">Beranda</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="low-section">
        <div className="text-center">
          <div className="content-title">
            <h1>Pilih berdasarkan tahun acara yang Anda ikuti</h1>
          </div>
          <div className="content-button mt-4">
            <a href="#" className="btn btn-action btn-lg">
              Coming Soon 2027
            </a>
            {/* <a href="/kategori25" className="btn btn-action btn-lg">
              2025
            </a>
            <a href="/kategori24" className="btn btn-action btn-lg">
              2024
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Lowtahun;
