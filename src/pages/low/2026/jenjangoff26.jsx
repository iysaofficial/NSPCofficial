import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangoff26() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>List of Winners 2026</h1>
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
            {/* <a href="#" className="btn btn-action btn-lg">
              University
            </a> */}
            <a href="https://drive.google.com/file/d/1azwpOUzbZ_lvxUchORv9ITatAveq00va/view?usp=sharing" className="btn btn-action btn-lg">
              Secondary
            </a>
            <a href="https://drive.google.com/file/d/1Y-QTejkqMb2Cgj_TQZ4ZUz9ExfYIwtYI/view?usp=sharing" className="btn btn-action btn-lg">
              Elementary
            </a>
            {/* <a href="#" className="btn btn-action btn-lg">
              Public
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangoff26;
