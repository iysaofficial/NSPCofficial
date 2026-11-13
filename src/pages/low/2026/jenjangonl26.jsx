import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangonl26() {
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
            <a href="https://drive.google.com/file/d/1ThYVx-5jpraPcusC7hCfyh_BUYIbvch3/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Universitas
            </a>
            <a href="https://drive.google.com/file/d/1ijps9XO6uK-Jpue76kqLvPHWO6uIIDea/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Menengah (SMP/SMA)
            </a>
            <a href="https://drive.google.com/file/d/12JP6VGc0QtQXZvp3hNMSob9QnEc0NjAY/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              SD / Sederajat
            </a>
            <a href="https://drive.google.com/file/d/1sJ1rWjPEdp0C6adjjmjufWFiD-aS2ieS/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Umum
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangonl26;