function About() {
  return (
    <>
      <section id="about" className="about-section ">
        <div className="container row mx-auto">
          <h1 className="text-center mb-3">Tentang NSPC</h1>
          <div className="content-img col-lg-6 col-12 text-center">
            <img
              src="./assets/logo/NSPC LOGO.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="content-text col-lg-6 col-12">
            <p className="mb-2">
              National Science Project Competition (NSPC) adalah kompetisi sains
              internasional yang diselenggarakan oleh Indonesian Young Scientist
              Association (IYSA). Kompetisi ini bertujuan untuk menumbuhkan
              minat dan motivasi di bidang sains di kalangan generasi muda di
              seluruh dunia.
            </p>
            {/* <p className="mb-2">
                        National Science Project Competition (NSPC) adalah kompetisi sains internasional yang diselenggarakan melalui kolaborasi antara Indonesian Young Scientist Association (IYSA) dan Universitas Muhammadiyah Malang (UMM). Kompetisi ini bertujuan untuk menumbuhkan minat dan motivasi di bidang sains di kalangan generasi muda di seluruh dunia.
                    </p> */}
            <p className="mb-2">
              NSPC diharapkan dapat berkontribusi dalam meningkatkan kualitas
              pendidikan sains di Indonesia maupun secara global. Kompetisi ini
              akan mendorong para pelajar untuk lebih termotivasi dalam
              mempelajari sains dan mengembangkan potensi mereka.
            </p>
            <p className="mb-2">
              NSPC juga bertujuan untuk memperkuat kolaborasi internasional di
              bidang sains. Kompetisi ini akan mempertemukan para pelajar dari
              berbagai negara dan memberikan mereka kesempatan untuk bertukar
              ide serta pengalaman.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
