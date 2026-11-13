function About() {

    return (
        <>
        <section id="about" className="about-section ">
            <div className="container row mx-auto">
                <h1 className="text-center mb-3">About ISPC</h1>
                <div className="content-img col-lg-6 col-12 text-center">
                    <img src="./assets/logo/ISPC LOGO.png" className="img-fluid" alt="" />
                </div>
                <div className="content-text col-lg-6 col-12">
                    <p className="mb-2">
                        The International Science Project Competition (ISPC) is an international science competition organized by the Indonesian Young Scientist Association (IYSA). This competition aims to foster interest and motivation in science among the young generation worldwide.
                    </p>
                    {/* <p className="mb-2">
                        The International Science Project Competition (ISPC) is an international science competition organized through a collaboration between the Indonesian Young Scientist Association (IYSA) and Universitas Muhammadiyah Malang (UMM). This competition aims to foster interest and motivation in science among the young generation worldwide.
                    </p> */}
                    <p className="mb-2">
                        ISPC is expected to contribute to improving the quality of science education in Indonesia and globally. The competition will encourage students to be more motivated to learn science and develop their potential.
                    </p>
                    <p className="mb-2">
                        ISPC also aims to strengthen international collaboration in science.The competition will bring together students from various countries and provide them with an opportunity to exchange ideas and experiences.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
  }
  
  export default About
