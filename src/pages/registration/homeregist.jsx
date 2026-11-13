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
                FORMULIR PENDAFTARAN
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Pilih Kategori Peserta untuk Pendaftaran ISPC 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              href="#!"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              Segera Hadir <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a href="/homeindo" className="btn-regist btn-action text-center me-lg-5 m-2">
              Peserta Indonesia{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a> */}
            <a
              href="#!"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              Segera Hadir <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a href="/homeinter" className="btn-regist btn-action text-center me-lg-5 m-2">
              Peserta Internasional{" "}
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
