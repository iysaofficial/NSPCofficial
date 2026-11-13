import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function Lowtahun() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners</h1>
        <a href="/">Home</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="low-section">
        <div className="text-center">
          <div className="content-title">
            <h1>Select by the year of the event you are participating in</h1>
          </div>
          <div className="content-button mt-4">
            <a href="/kategori26" className="btn btn-action btn-lg">
              2026
            </a>
            <a href="/kategori25" className="btn btn-action btn-lg">
              2025
            </a>
            <a href="/kategori24" className="btn btn-action btn-lg">
              2024
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Lowtahun;