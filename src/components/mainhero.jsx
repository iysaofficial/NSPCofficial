import { usePendaftaran, formatTanggal, SERI } from "../lib/pendaftaran";

/*
 * Hero beranda. Latar aurora tetap dari body (styles.css); isi disusun
 * dua kolom: ajakan di kiri, kartu logo di kanan, fakta singkat di bawah.
 *
 * Judul dan tombol mengikuti togel pendaftaran di dasbor IYSA (edisi yang
 * di-pin); guidebook tampil hanya bila sudah diterbitkan dari dasbor.
 */
function MainHero() {
  const { memuat, identitas, keadaan, guidebook } = usePendaftaran();
  const tahun = identitas?.tahun ?? "2027";

  let tombol;
  if (keadaan === "buka") {
    tombol = (
      <a className="tbl tbl-terang" href="/homeregist">
        Daftar Sekarang <i className="fas fa-arrow-right" aria-hidden="true" />
      </a>
    );
  } else {
    const teks = memuat
      ? "Memuat…"
      : keadaan === "belum" && identitas?.pendaftaran_buka
        ? `Pendaftaran dibuka ${formatTanggal(identitas.pendaftaran_buka)}`
        : keadaan === "tutup" && identitas
          ? "Pendaftaran ditutup"
          : "Pendaftaran Segera Dibuka";
    tombol = (
      <span className="tbl tbl-terang" aria-disabled="true">
        <i className="fas fa-hourglass-half" aria-hidden="true" /> {teks}
      </span>
    );
  }

  return (
    <section className="hero-nspc" id="beranda">
      <div className="wadah">
        <div className="kisi">
          <div>
            <span className="label-pil">
              <span className="titik" aria-hidden="true" />
              National Science Project Competition
            </span>
            <h1>
              {keadaan === "buka" ? "Pendaftaran Dibuka" : "Segera Hadir"}
              <span className="sorot">NSPC {tahun}</span>
            </h1>
            <p className="pengantar">
              Panggung bagi para inovator, peneliti, dan pemikir muda, serta
              pendidik, dosen, dan peneliti dari berbagai bidang. Tampilkan ide
              Anda, raih pengakuan, dan berkontribusilah bagi masa depan sains.
            </p>
            <div className="tombol">
              {tombol}
              {guidebook && (
                <a className="tbl tbl-garis" href={guidebook.url} target="_blank" rel="noreferrer" data-iysa-panduan={SERI}>
                  <i className="fas fa-book-open" aria-hidden="true" /> Buku Panduan
                </a>
              )}
              <a className="tbl tbl-garis" href="#kategori">
                Lihat Kategori <i className="fas fa-arrow-down" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="panggung" aria-hidden="true">
            <div className="kartu-logo">
              <img src="/assets/logo/NSPC LOGO.png" alt="" />
            </div>
            <span className="lencana l1">
              <i className="fas fa-flask" /> Proyek Sains
            </span>
            <span className="lencana l2">
              <i className="fas fa-award" /> Medali &amp; Sertifikat
            </span>
            <span className="lencana l3">
              <i className="fas fa-users" /> Pelajar &amp; Umum
            </span>
          </div>
        </div>

        <div className="fakta">
          <div>
            <i className="fas fa-layer-group" aria-hidden="true" />
            <p className="m-0">
              <strong>6 Kategori</strong>
              <span>Sains, teknik, dan pendidikan</span>
            </p>
          </div>
          <div>
            <i className="fas fa-user-graduate" aria-hidden="true" />
            <p className="m-0">
              <strong>Pelajar &amp; Umum</strong>
              <span>Siswa, mahasiswa, guru, dosen, peneliti</span>
            </p>
          </div>
          <div>
            <i className="fas fa-laptop-house" aria-hidden="true" />
            <p className="m-0">
              <strong>Daring &amp; Luring</strong>
              <span>Pilih cara ikut yang paling nyaman</span>
            </p>
          </div>
          <div>
            <i className="fas fa-globe-asia" aria-hidden="true" />
            <p className="m-0">
              <strong>Oleh IYSA</strong>
              <span>Indonesian Young Scientist Association</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
