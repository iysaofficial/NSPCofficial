import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { indonesiaOnlineTerms, indonesiaOfflineTerms } from "../data/terms";
import { useState, useEffect } from "react";

function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(terms); // Set isi terms sesuai pilihan
    setTermsAccepted(false); // Reset state persetujuan
    setShowModal(true); // Tampilkan modal
  };

  const handleViewTerms = () => {
    window.open(
      "https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing",
      "_blank",
    );
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Harap setujui Syarat & Ketentuan untuk melanjutkan.");
    }
  };

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto">
                FORMULIR PENDAFTARAN UNTUK PESERTA INDONESIA
              </h1>
              <h3 className="mx-auto mt-5 mb-2">
                Pilih Kategori Kompetisi untuk Pendaftaran ISPC 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a className="btn btn-action text-center me-lg-5" href="#!">
              Segera Hadir <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a
              className="btn btn-action text-center me-lg-5"
              onClick={() =>
                handleOpenModal("/indo-online", indonesiaOnlineTerms)
              }
            >
              Kompetisi Online <i className="fa-solid fa-earth-americas"></i>
            </a> */}
            <a className="btn btn-action text-center me-lg-5" href="#!">
              Segera Hadir <i className="fa-solid fa-earth-americas"></i>
            </a>
            {/* <a className="btn btn-action text-center me-lg-5" onClick={() =>
              handleOpenModal("/indo-offline", indonesiaOfflineTerms)
            }>
              Kompetisi Offline{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a> */}
          </div>
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Syarat &amp; Ketentuan</h2>
              <button
                onClick={() => setShowModal(false)}
                className="modal-close-btn"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              {termsContent}
              <p>
                Harap tinjau syarat dan ketentuan dengan saksama sebelum
                melanjutkan.
              </p>
            </div>
            <div className="modal-footer">
              <div className="terms-agreement">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                </div>
                <label htmlFor="terms">
                  Saya telah membaca dan menyetujui{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewTerms();
                    }}
                  >
                    Syarat &amp; Ketentuan
                  </a>
                  .
                </label>
              </div>
              <div className="modal-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleAccept}
                  disabled={!termsAccepted}
                >
                  Setuju &amp; Lanjutkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeIndo;
