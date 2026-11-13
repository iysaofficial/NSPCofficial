import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Kategori26() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Daftar Pemenang 2026</h1>
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
            {/* <a
              href=""
              target="_blank"
              className="btn btn-action btn-lg"
            >
              ISPC SPECIAL AWARD
            </a> */}
            <a href="/jenjangonl26" className="btn btn-action btn-lg">
              ISPC ONLINE
            </a>
            <a href="/jenjangoff26" className="btn btn-action btn-lg">
              ISPC OFFLINE
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Kategori26;
