function Ajakan() {
  return (
    <section className="ajakan">
      <div className="wadah">
        <div className="kotak">
          <div>
            <h2>Siap ikut NSPC 2027?</h2>
            <p>
              Pendaftaran segera dibuka. Siapkan proyekmu sekarang, dan hubungi
              kami bila ada yang ingin ditanyakan.
            </p>
          </div>
          <div className="tombol">
            <a className="tbl tbl-terang" href="/faq">
              <i className="fas fa-question-circle" aria-hidden="true" /> Baca FAQ
            </a>
            <a className="tbl tbl-garis" href="/contact">
              Hubungi Kami <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ajakan;
