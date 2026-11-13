import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import "../../assets/css/registration.css";

function HomeRegist() {
  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Participant for Registration ISPC 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              href="#!"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              Coming Soon <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a href="/homeindo" className="btn-regist btn-action text-center me-lg-5 m-2">
              Indonesia Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a> */}
            <a
              href="#!"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              Coming Soon <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a href="/homeinter" className="btn-regist btn-action text-center me-lg-5 m-2">
              International Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
