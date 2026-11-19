import { useEffect } from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import { usePendaftaran, pasangFormulir, formatTanggal, SERI } from "../../lib/pendaftaran";

/**
 * Halaman pendaftaran NSPC — standar situs invensi IYSA.
 *
 * Saat togel "Pendaftaran Terbuka" di dasbor dinyalakan, formulir dasbor
 * (embed/daftar.js) dipasang di sini: tim, anggota, pembimbing, dan tagihan
 * langsung tercatat di dasbor IYSA. Selama tertutup, yang tampil keterangan.
 */
function HomeRegist() {
  const { memuat, identitas, keadaan, guidebook } = usePendaftaran();
  const tahun = identitas?.tahun ?? "2027";

  useEffect(() => {
    if (keadaan === "buka") pasangFormulir();
  }, [keadaan]);

  const keterangan =
    keadaan === "belum"
      ? `Pendaftaran NSPC ${tahun} belum dibuka${identitas?.pendaftaran_buka ? ` — dibuka ${formatTanggal(identitas.pendaftaran_buka)}` : ""}. Silakan kembali lagi nanti.`
      : keadaan === "tutup" && identitas
        ? "Pendaftaran untuk edisi ini sudah ditutup. Ikuti Instagram @iysa_official untuk informasi edisi berikutnya."
        : `Pendaftaran NSPC ${tahun} segera dibuka. Ikuti Instagram @iysa_official untuk pengumumannya.`;

  return (
    <>
      <Navigation />
      <section className="daftar-nspc">
        <div className="wadah">
          <div className="kepala-seksi">
            <span className="alis">Formulir Pendaftaran</span>
            <h1>{keadaan === "buka" ? `Daftar NSPC ${tahun}` : `Pendaftaran NSPC ${tahun}`}</h1>
          </div>

          {memuat ? (
            <div className="kotak-info"><p>Memuat informasi pendaftaran…</p></div>
          ) : keadaan === "buka" ? (
            <div className="formulir">
              <div data-iysa-daftar="nspc" data-iysa-bahasa="id" />
            </div>
          ) : (
            <div className="kotak-info">
              <i className="fas fa-hourglass-half besar" aria-hidden="true" />
              <p>{keterangan}</p>
              <div className="tombol">
                {guidebook && (
                  <a className="tbl tbl-terang" href={guidebook.url} target="_blank" rel="noreferrer" data-iysa-panduan={SERI}>
                    <i className="fas fa-book-open" aria-hidden="true" /> Buku Panduan
                  </a>
                )}
                <a className="tbl tbl-garis" href="https://instagram.com/iysa_official" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" aria-hidden="true" /> @iysa_official
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
