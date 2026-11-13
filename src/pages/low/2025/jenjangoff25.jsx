import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangoff25() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Daftar Pemenang 2025</h1>
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
            <a href="https://drive.google.com/file/d/1G2CPkCbjWVGf5U0aJv1tfyJsEnsnMy8n/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Universitas
            </a>
            <a href="https://drive.google.com/file/d/11EG8AzoovsJRpO0K0Lz54769caGsYgsD/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              SMA / Sederajat
            </a>
            <a href="https://drive.google.com/file/d/1LErcbREOsuIUQ91wx4mHA0ICON5AX3Jx/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              SMP / Sederajat
            </a>
            <a href="https://drive.google.com/file/d/1GgXMlPJ0ie14N04RzYbrQ8-kjhhVcsVv/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              SD / Sederajat
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangoff25;