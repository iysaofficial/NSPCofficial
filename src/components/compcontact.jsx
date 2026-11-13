import { useEffect } from "react";
function CompContact() {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

    const form = document.forms.namedItem("contact");

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
          });
          alert("Pesan berhasil dikirim!");
          form.reset();
        } catch (error) {
          console.error("Error:", error);
          alert("Gagal mengirim pesan.");
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
    <>
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Kontak</h1>
        <a href="/">Beranda</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase mb-5">Hubungi Kami</h2>
          </div>
          <form
            action=""
            name="contact"
            method="POST"
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
          >
            <input type="hidden" name="Event" value="ISPC" readOnly />
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                {/* Name input */}
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="Name"
                    placeholder="Nama Anda *"
                    required
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Nama wajib diisi.
                  </div>
                </div>
                {/* Email address input  */}
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="Email"
                    placeholder="Email Anda *"
                    required
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    Email wajib diisi.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email tidak valid.
                  </div>
                </div>
              </div>
              {/* Message input */}
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea
                    className="form-control"
                    id="message"
                    name="Message"
                    placeholder="Pesan Anda *"
                    required
                  ></textarea>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    Pesan wajib diisi.
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Gagal mengirim pesan!
              </div>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                className="btn btn-xl text-uppercase"
                id="submitButton"
                type="submit"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CompContact;
