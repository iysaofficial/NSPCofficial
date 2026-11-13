import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangoff26() {
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
              Pilih berdasarkan jenjang acara yang Anda ikuti
            </h1>
          </div>
          <div className="content-button mt-4">
            {/* <a href="#" className="btn btn-action btn-lg">
              Universitas
            </a> */}
            <a href="https://drive.google.com/file/d/1azwpOUzbZ_lvxUchORv9ITatAveq00va/view?usp=sharing" className="btn btn-action btn-lg">
              Menengah (SMP/SMA)
            </a>
            <a href="https://drive.google.com/file/d/1Y-QTejkqMb2Cgj_TQZ4ZUz9ExfYIwtYI/view?usp=sharing" className="btn btn-action btn-lg">
              SD / Sederajat
            </a>
            {/* <a href="#" className="btn btn-action btn-lg">
              Umum
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangoff26;
