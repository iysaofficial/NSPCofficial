import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Kategori24() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Daftar Pemenang 2024</h1>
        <a href="/lowtahun">Halaman Sebelumnya</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="low-section">
        <div className="text-center">
          <div className="content-title">
            <h1>
              Pilih berdasarkan kategori acara yang Anda ikuti
            </h1>
          </div>
          <div className="content-button mt-4">
            <a
              href="https://drive.google.com/file/d/1JDIZduTPseApKgXGtfnyGR5gSO8TQYwU/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              Semua Daftar Pemenang
            </a>
            {/* <a href="/jenjangofl24" className="btn btn-action btn-lg">
              ISPC OFFLINE
            </a>
            <a href="/jenjangonl24" className="btn btn-action btn-lg">
              ISPC ONLINE
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Kategori24;
