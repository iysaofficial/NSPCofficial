/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

// Import CSS — styles.css (gaya lama) lalu nspc-ui.css (tampilan baru) yang menimpanya.
import "../assets/css/styles.css";
import "../assets/css/nspc-ui.css";
import { usePendaftaran, SERI } from "../lib/pendaftaran";

/*
 * Isi menu. Tautan edisi lama sengaja dibiarkan sebagai komentar seperti
 * sebelumnya — aktifkan kembali dengan memindahkannya ke `isi`.
 *
 * Buku Panduan 2026: https://drive.google.com/file/d/1Hfm8rpV7fx4ZGi_O0ByZ2H1M52vAxasx/view?usp=sharing
 * Buku Panduan 2025: https://drive.google.com/file/d/1wpmmubMDQP_wQ9XJuxe0ppAvHY3ESObY/view?usp=sharing
 * Buku Panduan 2024: https://drive.google.com/file/d/1STnLOXA-9nVlKTTcp9WZ-mY3bjoWDbVA/view?usp=sharing
 * Sertifikat Pembimbing 2026: /cert2026
 * Sertifikat Pembimbing 2025: https://drive.google.com/drive/folders/1168Gqp_t-une_HfMMhlB8A4tvlbcdxwZ?usp=sharing
 * Sertifikat Pembimbing 2024: https://drive.google.com/drive/folders/1OdGfiXdOXx2UTBY4GflTv9rcH8CO6F0q?usp=sharing
 * Galeri 2026: https://drive.google.com/drive/folders/12VSzP_kKDEKMGqZf8J5TOTmPFc4pMv6i?usp=sharing
 * Galeri 2025: https://drive.google.com/drive/folders/1hGC7x3E8gU_achrZ-J0u52uSR2G5R5BL?usp=sharing
 * Galeri 2024: https://drive.google.com/drive/folders/14Niucp6WAqmeQqTFTdt5A3NW98jsafKz?usp=sharing
 * Siaran Pers 2026: https://drive.google.com/file/d/1bsNac2XmMuUgIoC79u0N8cBlOUuz-2r5/view?usp=sharing
 * Siaran Pers 2025: https://drive.google.com/file/d/115ioYB9Yi-oLTRBO2GysgJIoxS_mgI5u/view?usp=sharing
 * Siaran Pers 2024: https://drive.google.com/file/d/1SXsbmmALUxxsOeSF_dyqSBxIxivy2Th8/view?usp=sharing
 * Kurasi 2025: https://drive.google.com/drive/folders/1-3IagOtB_ebgDPgR05Agt3v1ogYUa9Xm?usp=sharing
 * Kurasi 2024: https://drive.google.com/drive/folders/1wKdfpoiYnZFSHBtfCtPtdosKWrD0xVaD?usp=drive_link
 *
 * Item tanpa `href` tampil nonaktif dengan catatan "Segera". "Kurasi 2027"
 * dulu menaut folder Drive milik ISPC (sisa templat), jadi kini nonaktif.
 * Buku Panduan diisi dari dasbor (lihat `menuPanduan`).
 */
const MENU = [
  { label: "Beranda", href: "/" },
  { label: "Buku Panduan", isi: "panduan" },
  { label: "Daftar Pemenang", href: "/lowtahun" },
  {
    label: "Sertifikat",
    isi: [{ label: "Sertifikat Pembimbing 2027", catatan: "Segera" }],
  },
  {
    label: "Galeri",
    isi: [{ label: "Galeri 2027", catatan: "Segera" }],
  },
  {
    label: "Media",
    isi: [{ label: "Berita dari Media", catatan: "Segera" }],
  },
  {
    label: "Kurasi",
    isi: [{ label: "Kurasi 2027", catatan: "Segera" }],
  },
  { label: "Kontak", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

/*
 * Buku Panduan mengikuti dasbor, seperti situs invensi lain: guidebook baru
 * muncul setelah DITERBITKAN dari dasbor dan membuka modal panduan IYSA
 * (embed/panduan.js); Syarat & Ketentuan ikut tampil begitu edisinya di-pin.
 */
function menuPanduan(identitas, guidebook) {
  const isi = [];
  if (guidebook) {
    isi.push({ label: `Buku Panduan ${identitas?.tahun ?? ""}`.trim(), href: guidebook.url, luar: true, panduan: "guidebook" });
  } else {
    isi.push({ label: `Buku Panduan ${identitas?.tahun ?? "2027"}`, catatan: "Segera" });
  }
  if (identitas) isi.push({ label: "Syarat & Ketentuan", href: "#syarat-ketentuan", panduan: "tnc" });
  return isi;
}

function Tautan({ item, className, onClick }) {
  if (!item.href) {
    return (
      <span className={`nonaktif${className ? ` ${className}` : ""}`} aria-disabled="true">
        <span>{item.label}</span>
        {item.catatan && <span className="catatan">{item.catatan}</span>}
      </span>
    );
  }
  const luar = item.luar ? { target: "_blank", rel: "noreferrer" } : {};
  const panduan = item.panduan
    ? { "data-iysa-panduan": SERI, ...(item.panduan === "tnc" ? { "data-iysa-panduan-jenis": "tnc" } : {}) }
    : {};
  return (
    <a href={item.href} className={className} onClick={onClick} {...luar} {...panduan}>
      <span>{item.label}</span>
      {item.catatan && <span className="catatan">{item.catatan}</span>}
      {item.luar && <i className="fas fa-external-link-alt" aria-hidden="true" style={{ fontSize: 11 }} />}
    </a>
  );
}

const Navigation = () => {
  const [tergulir, setTergulir] = useState(false);
  const [terbuka, setTerbuka] = useState(false);
  const [turun, setTurun] = useState(null);
  const navRef = useRef(null);
  const { memuat, identitas, keadaan, guidebook } = usePendaftaran();
  const isiPanduan = menuPanduan(identitas, guidebook);
  /* Pendaftaran mengikuti togel dasbor; selama tertutup tombolnya nonaktif. */
  const tombolDaftar =
    keadaan === "buka" ? (
      <a href="/homeregist" className="tbl tbl-utama">
        Daftar Sekarang <i className="fas fa-arrow-right" aria-hidden="true" />
      </a>
    ) : (
      <span className="tbl tbl-utama" aria-disabled="true" title="Pendaftaran belum dibuka">
        {memuat ? "Pendaftaran" : "Pendaftaran Segera Dibuka"}
      </span>
    );
  const jalur = typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    const cek = () => setTergulir(window.scrollY > 12);
    cek();
    window.addEventListener("scroll", cek, { passive: true });
    return () => window.removeEventListener("scroll", cek);
  }, []);

  // Tutup menu turun saat klik di luar navigasi atau menekan Esc.
  useEffect(() => {
    const luar = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setTurun(null);
    };
    const esc = (e) => {
      if (e.key === "Escape") {
        setTurun(null);
        setTerbuka(false);
      }
    };
    document.addEventListener("click", luar);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("click", luar);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  const tutupSemua = () => {
    setTurun(null);
    setTerbuka(false);
  };

  return (
    <header
      ref={navRef}
      className={`nav-nspc${tergulir ? " tergulir" : ""}${terbuka ? " terbuka" : ""}`}
    >
      <div className="wadah baris">
        <a href="/" className="merek" aria-label="NSPC — Beranda">
          <img src="/assets/logo/NSPC LOGO.png" alt="NSPC" />
        </a>

        <nav className="menu-wadah" aria-label="Navigasi utama">
          <ul className="menu">
            {MENU.map((m) =>
              m.isi ? (
                <li key={m.label}>
                  <button
                    type="button"
                    className="pemicu"
                    aria-expanded={turun === m.label}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTurun(turun === m.label ? null : m.label);
                    }}
                  >
                    {m.label}
                    <i className="fas fa-chevron-down panah" aria-hidden="true" />
                  </button>
                  {turun === m.label && (
                    <ul className="turun">
                      {(m.isi === "panduan" ? isiPanduan : m.isi).map((s) => (
                        <li key={s.label}>
                          <Tautan item={s} onClick={tutupSemua} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={m.label}>
                  <Tautan
                    item={m}
                    className={jalur === m.href ? "aktif" : undefined}
                    onClick={tutupSemua}
                  />
                </li>
              ),
            )}
          </ul>
          <div className="aksi-ponsel">
            {tombolDaftar}
          </div>
        </nav>

        <div className="aksi">
          {tombolDaftar}
          <button
            type="button"
            className="burger"
            aria-label={terbuka ? "Tutup menu" : "Buka menu"}
            aria-expanded={terbuka}
            onClick={() => setTerbuka(!terbuka)}
          >
            <i className={terbuka ? "fas fa-times" : "fas fa-bars"} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
