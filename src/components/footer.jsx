import "../assets/css/styles.css";
import "../assets/css/nspc-ui.css";
import { useEffect } from "react";

const SOSMED = [
  { ikon: "fab fa-facebook-f", label: "Facebook", href: "https://www.facebook.com/Indonesia-Young-scientist-Association-106523338057326" },
  { ikon: "fab fa-whatsapp", label: "WhatsApp", href: "https://wa.me/+6281770914129" },
  { ikon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/" },
  { ikon: "fab fa-instagram", label: "Instagram", href: "https://instagram.com/iysa_official" },
];

const Footer = () => {
  // Langganan kabar: tetap dikirim ke Google Apps Script yang sama.
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
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  return (
    <footer className="footer-section kaki-nspc">
      <div className="wadah">
        <div className="langganan">
          <div>
            <h3>Dapatkan kabar terbaru NSPC</h3>
            <p>Jadwal pendaftaran, pengumuman, dan informasi penting langsung ke surel Anda.</p>
          </div>
          <form name="footer-newsletter" method="POST" action="">
            <label htmlFor="surel-langganan" className="visually-hidden">
              Alamat surel
            </label>
            <input
              id="surel-langganan"
              type="email"
              placeholder="nama@email.com"
              required
              name="Email"
            />
            <button type="submit" className="tbl tbl-utama">
              Berlangganan
            </button>
          </form>
        </div>

        <div className="kolom">
          <div>
            <span className="logo-kaki">
              <img src="/assets/logo/NSPC LOGO.png" alt="NSPC" />
            </span>
            <p className="ringkas">
              National Science Project Competition (NSPC) adalah kompetisi sains
              yang diselenggarakan oleh Indonesian Young Scientist Association
              (IYSA) untuk menumbuhkan minat dan motivasi di bidang sains di
              kalangan generasi muda.
            </p>
          </div>

          <div>
            <h5>Tautan</h5>
            <ul>
              <li><a href="/lowtahun"><i className="fas fa-trophy" aria-hidden="true" />Daftar Pemenang</a></li>
              <li><a href="/faq"><i className="fas fa-question-circle" aria-hidden="true" />FAQ</a></li>
              <li>
                <a href="https://iysa.or.id" target="_blank" rel="noreferrer">
                  <i className="fas fa-globe" aria-hidden="true" />Situs Web IYSA
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/14Niucp6WAqmeQqTFTdt5A3NW98jsafKz?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-images" aria-hidden="true" />Dokumentasi Acara
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Kontak</h5>
            <ul>
              <li>
                <a href="https://goo.gl/maps/gEzFyE9gtXEyRfA26" target="_blank" rel="noreferrer">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />Jl. Kemang RT 03 RW 06
                </a>
              </li>
              <li>
                <a href="mailto:NSPC.iysa@gmail.com">
                  <i className="fas fa-envelope" aria-hidden="true" />NSPC.iysa@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/+6288213248890" target="_blank" rel="noreferrer">
                  <i className="fas fa-phone" aria-hidden="true" />+62 882 1324 8890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Ikuti Kami</h5>
            <div className="sosmed-nspc">
              {SOSMED.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={s.ikon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hak">
          <span>© {new Date().getFullYear()} NSPC Official. Hak cipta dilindungi undang-undang.</span>
          <span>
            Diselenggarakan oleh <a href="https://iysa.or.id" target="_blank" rel="noreferrer">IYSA</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
