import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Kategori24() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners 2024</h1>
        <a href="/lowtahun">Previous Page</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="low-section">
        <div className="text-center">
          <div className="content-title">
            <h1>
              Choose based on the Category of the event you are participating in
            </h1>
          </div>
          <div className="content-button mt-4">
            <a
              href="https://drive.google.com/file/d/1JDIZduTPseApKgXGtfnyGR5gSO8TQYwU/view?usp=sharing"
              target="_blank"
              className="btn btn-action btn-lg"
            >
              All List of Winner
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