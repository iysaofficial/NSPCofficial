const POIN = [
  {
    ikon: "fas fa-seedling",
    judul: "Menumbuhkan minat sains",
    teks: "Menumbuhkan minat dan motivasi di bidang sains di kalangan generasi muda.",
  },
  {
    ikon: "fas fa-chalkboard-teacher",
    judul: "Pendidikan sains yang lebih baik",
    teks: "Mendorong pelajar lebih termotivasi mempelajari sains dan mengembangkan potensinya.",
  },
  {
    ikon: "fas fa-handshake",
    judul: "Kolaborasi dan bertukar ide",
    teks: "Mempertemukan peserta dari berbagai daerah untuk bertukar ide serta pengalaman.",
  },
];

function About() {
  return (
    <section id="about" className="seksi seksi-lembut tentang">
      <div className="wadah kisi">
        <div className="teks">
          <span className="alis">Tentang NSPC</span>
          <h2>Kompetisi proyek sains untuk generasi peneliti berikutnya</h2>
          <p>
            National Science Project Competition (NSPC) adalah kompetisi sains
            yang diselenggarakan oleh Indonesian Young Scientist Association
            (IYSA). Kompetisi ini bertujuan untuk menumbuhkan minat dan motivasi
            di bidang sains di kalangan generasi muda.
          </p>
          <p>
            NSPC diharapkan dapat berkontribusi dalam meningkatkan kualitas
            pendidikan sains di Indonesia maupun secara global, sekaligus
            memperkuat kolaborasi di bidang sains.
          </p>
        </div>
        <div className="poin">
          {POIN.map((p) => (
            <div className="kartu-poin" key={p.judul}>
              <span className="ikon">
                <i className={p.ikon} aria-hidden="true" />
              </span>
              <div>
                <h3>{p.judul}</h3>
                <p>{p.teks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
