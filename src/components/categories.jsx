/*
 * Kategori lomba. Nama mengikuti kategori NSPC 2027 di dasbor IYSA;
 * kategori kelima dulu tertulis dua kali sebagai "Penelitian Tindakan Kelas",
 * yang satu seharusnya Pendidikan untuk Umum (dasbor: Education for Public).
 */
const KATEGORI = [
  {
    ikon: "fas fa-chart-line",
    nama: "Social Science",
    teks: "Penelitian tentang masyarakat, ekonomi, budaya, dan perilaku manusia.",
    untuk: "Pelajar & mahasiswa",
  },
  {
    ikon: "fas fa-lightbulb",
    nama: "Innovative Science",
    teks: "Ide dan temuan baru yang menjawab masalah nyata dengan pendekatan ilmiah.",
    untuk: "Pelajar & mahasiswa",
  },
  {
    ikon: "fas fa-leaf",
    nama: "Environmental Science",
    teks: "Proyek untuk lingkungan, energi bersih, dan keberlanjutan.",
    untuk: "Pelajar & mahasiswa",
  },
  {
    ikon: "fas fa-cogs",
    nama: "Engineering",
    teks: "Rancangan alat, sistem, dan teknologi tepat guna.",
    untuk: "Pelajar & mahasiswa",
  },
  {
    ikon: "fas fa-graduation-cap",
    nama: "Pendidikan untuk Umum",
    teks: "Karya di bidang pendidikan dari guru, dosen, dan peneliti.",
    untuk: "Guru, dosen, peneliti",
  },
  {
    ikon: "fas fa-flask",
    nama: "Penelitian Tindakan Kelas",
    teks: "Penelitian tindakan kelas untuk meningkatkan mutu pembelajaran.",
    untuk: "Guru, dosen, peneliti",
  },
];

function Categories() {
  return (
    <section id="kategori" className="seksi kategori-nspc">
      <div className="wadah">
        <div className="kepala-seksi">
          <span className="alis">Kategori Lomba</span>
          <h2>Pilih bidang yang paling sesuai dengan proyekmu</h2>
          <p>
            Enam kategori untuk pelajar, mahasiswa, dan umum. Setiap kategori
            dinilai oleh juri yang ahli di bidangnya.
          </p>
        </div>
        <div className="kisi-kategori">
          {KATEGORI.map((k, i) => (
            <article className="kartu-kategori" key={k.nama}>
              <span className="nomor">{String(i + 1).padStart(2, "0")}</span>
              <span className="ikon">
                <i className={k.ikon} aria-hidden="true" />
              </span>
              <h3>{k.nama}</h3>
              <p>{k.teks}</p>
              <span className="untuk">{k.untuk}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
