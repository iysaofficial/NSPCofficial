import "../assets/css/styles.css";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

    const form = document.forms.namedItem("footer-newsletter");

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
          });
          alert("Data berhasil dikirim!");
          form.reset();
        } catch (error) {
          console.error("Error:", error);
          alert("Gagal mengirim data.");
        }
      };

      form.addEventListener("submit", handleSubmit);

      // cleanup listener
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <section>
      <footer className="footer-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-6">
              <div className="subscribe mb-5">
                <form
                  action=""
                  name="footer-newsletter"
                  method="POST"
                  className="subscribe-form"
                >
                  <div className="form-group d-flex">
                    <input
                      type="email"
                      className="form-control rounded-left"
                      placeholder="Masukkan alamat email"
                      required
                      name="Email"
                    />
                    <input
                      type="submit"
                      value="Berlangganan"
                      className="form-control submit px-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-area-content">
                <img
                  src="./assets/logo/NSPC LOGO.png"
                  alt="logo"
                  className="main-logo"
                />
                <p className="mb-2">
                  National Science Project Competition (NSPC) adalah kompetisi
                  sains internasional yang diselenggarakan oleh Indonesian Young
                  Scientist Association (IYSA). Kompetisi ini bertujuan untuk
                  menumbuhkan minat dan motivasi di bidang sains di kalangan
                  generasi muda di seluruh dunia.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-3 mt-lg-0">
              <div className="single-footer-widget">
                <h5>Tautan Informasi</h5>

                <ul className="footer-quick-links list-unstyled">
                  <li>
                    <a href="https://iysa.or.id" target="_blank">
                      Situs Web Utama Kami
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/drive/folders/14Niucp6WAqmeQqTFTdt5A3NW98jsafKz?usp=sharing"
                      target="_blank"
                    >
                      Dokumentasi Acara Terbaru
                    </a>
                  </li>
                  {/* <li><a href="https://registration-ISPC.vercel.app/" target="_blank">Pendaftaran di Sini</a></li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h5>Informasi Tentang Kami</h5>

                <ul className="footer-quick-links address-link list-unstyled">
                  <li>
                    <a href="https://goo.gl/maps/gEzFyE9gtXEyRfA26">
                      <i className="fa fa-map-marker me-1"></i>
                      Jl. Kemang RT 03 RW 06
                    </a>
                  </li>
                  <li>
                    <a href="mailto:NSPC.iysa@gmail.com">
                      <i className="fa fa-envelope me-1"></i>
                      NSPC.iysa@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+6288213248890">
                      <i className="fa fa-phone me-1"></i>
                      +6288213248890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h5>Ikuti Media Sosial Kami</h5>
                <ul className="footer-quick-links sosmed list-unstyled">
                  <li>
                    <a
                      href="https://www.facebook.com/Indonesia-Young-scientist-Association-106523338057326"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/+6281770914129"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/iysa_official"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row align-items-center">
              <p className="text-center">
                <i className="far fa-copyright me-1"></i>
                2024 NSPC Official. Hak Cipta Dilindungi Undang-Undang
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
