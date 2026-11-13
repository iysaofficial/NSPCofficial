import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

function Jenjangoff25() {
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
            <a href="https://drive.google.com/file/d/1G2CPkCbjWVGf5U0aJv1tfyJsEnsnMy8n/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              University
            </a>
            <a href="https://drive.google.com/file/d/11EG8AzoovsJRpO0K0Lz54769caGsYgsD/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Senior High School
            </a>
            <a href="https://drive.google.com/file/d/1LErcbREOsuIUQ91wx4mHA0ICON5AX3Jx/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Junior High School
            </a>
            <a href="https://drive.google.com/file/d/1GgXMlPJ0ie14N04RzYbrQ8-kjhhVcsVv/view?usp=sharing" target="_blank" className="btn btn-action btn-lg">
              Elementary
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jenjangoff25;