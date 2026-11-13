import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangonl25() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners 2025</h1>
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
            <a href="https://drive.google.com/file/d/1s0GmsgfkAXciD3f-OYL3ZiBkh8D24H2d/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              University
            </a>
            <a href="https://drive.google.com/file/d/1cLyYbnzCTTinoFyD30-lXy_SlK4_4JCg/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Secondary
            </a>
            <a href="https://drive.google.com/file/d/1Q768SCFbzP7YEle46u2vzGpo_zpW-Dm_/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Elementary
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangonl25;