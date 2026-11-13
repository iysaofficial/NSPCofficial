import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function Cert2026() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Certificate Supervisor 2026</h1>
        <a href="/">Home</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="low-section">
        <div className="text-center">
          <div className="content-title">
            <h1>
              Choose your Certificate Category
            </h1>
          </div>
          <div className="content-button mt-4">
            <a href="https://drive.google.com/drive/folders/1sXpxFNbxyLJn6rMhMGl3ZSAHOUew15tR?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Online Certificate
            </a>
            <a href="https://drive.google.com/drive/folders/19xWrXektgkLE2-tpqd2d2obm2br4uQ0C?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Offline Certificate
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cert2026;
