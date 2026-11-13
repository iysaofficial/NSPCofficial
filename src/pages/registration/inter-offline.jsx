"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function InternationalOffline() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180; // batasan maksimal karakter
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const [selectedNamaSekolah, setselectedNamaSekolah] = useState("");
  const maxSchoolChars = 500; // batasan maksimal karakter
  const maxProjectChars = 160; // batasan maksimal karakter
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate();

  const handleInputNameChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  const handleInputNameSchoolChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxSchoolChars) {
      setselectedNamaSekolah(value);
    }
  };

  const handleInputProjectChange = (e) => {
    const { value } = e.target;
    if (value.length <= maxProjectChars) {
      setselectedMaxProject(value);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    // Logika untuk menentukan harga berdasarkan kategori yang dipilih
    switch (value) {
      case "National Science Project Competition - Offline Competition":
        break;
      case "National Science Project Competition - Offline Competition + Full Package":
        break;
      default:
        setCategoryPrice("");
        break;
    }
  };

  useEffect(() => {
    const termsAccepted = sessionStorage.getItem("termsAccepted");

    if (!termsAccepted) {
      alert("Anda harus menyetujui Syarat & Ketentuan terlebih dahulu.");
      navigate("/homeinter"); // Navigasi ke halaman HomeIndo
    }
  }, [navigate]);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwF12qN1WRk0DFueRdC7ETiL4QI7T9A4DJ8nWARdhzCk3i1wtAaSvFU2OJyFF8P0030/exec";

  useEffect(() => {
    const form = document.forms["regist-form"];

    if (form) {
      const handleSubmit = async (e) => {
        e.preventDefault();
        setShowModal(true);
        setCanClick(false);
        setCountdown(5); // Set ulang countdown saat modal muncul

        let count = 5;
        const interval = setInterval(() => {
          count -= 1;
          setCountdown(count);

          if (count <= 1) {
            clearInterval(interval); // Hentikan countdown di angka 1
            setCanClick(true);
          }
        }, 1000);
      };

      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  const handleConfirmSubmit = async () => {
    setShowModal(false); // Close the modal
    const form = document.forms["regist-form"];

    if (!form) return;

    setIsLoading(true);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setStatusMessage("Data berhasil dikirim!");

        // Ambil data sebelum reset
        const formData = {
          namaLengkap: selectedMaxNamaLengkap,
          projectTitle: selectedMaxProject,
          category: selectedCategory,
          namasekolah: selectedNamaSekolah,
        };

        form.reset();

        // Navigasi ke halaman Thank You dengan query string
        setTimeout(() => {
          navigate(
            `/thankyouinter?namaLengkap=${encodeURIComponent(
              formData.namaLengkap,
            )}&projectTitle=${encodeURIComponent(
              formData.projectTitle,
            )}&category=${encodeURIComponent(
              formData.category,
            )}&namasekolah=${encodeURIComponent(formData.namasekolah)}`,
          );
        }, 1000);
      } else {
        setStatusMessage("Terjadi kesalahan saat mengirim data.");
      }
    } catch (error) {
      setStatusMessage("Terjadi kesalahan saat mengirim data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <section className="registration-section">
        <div className="container">
          <div className="content">
            <div className="sub">FORMULIR PENDAFTARAN</div>
            <h1 className="garis-bawah"></h1>
            <br />
            <br />
            <h4>
              HALO PESERTA ISPC 2026, Harap perhatikan informasi berikut sebelum
              mengisi formulir pendaftaran:
            </h4>
            <br />
            <p>
              1.&nbsp; &nbsp; Harap isi data yang diperlukan dengan benar dan
              pastikan tidak ada kesalahan penulisan. Pastikan juga bahwa data
              yang dikirimkan sudah final dan tidak mengalami perubahan.
            </p>
            <p>
              2.&nbsp; &nbsp;Setelah memastikan data sudah benar, Anda dapat
              mengklik tombol{" "}
              <span className="fw-bold">&quot;KIRIM FORMULIR&quot;</span> cukup
              satu kali. Jika data telah berhasil dikirimkan, Anda akan
              dialihkan ke halaman lain.
            </p>
            <p>
              3.&nbsp; &nbsp;Akan ada email informasi bahwa pendaftaran telah
              diterima yang dikirimkan ke alamat email ketua tim, dan berkas
              akan divalidasi oleh tim kami. Mohon bersabar dan tunggu maksimal
              3 hari setelah waktu pendaftaran, Letter of Acceptance (LOA) akan
              dikirimkan ke alamat email ketua tim.
            </p>
            <br></br>
            <br></br>

            {showModal && (
              <div className="modal-overlay-submit">
                <div className="modal-submit text-lg-center text-md-center">
                  <h2 className="text-center">⚠️PERINGATAN!</h2>
                  <p>
                    Data yang sudah dikirimkan tidak dapat diubah. Panitia akan
                    menggunakan data terakhir yang dikirimkan untuk pencetakan
                    sertifikat.
                    <br />
                    <b>PASTIKAN SELURUH DATA SUDAH BENAR!</b>
                    <br />
                    <b>
                      JANGAN MENDAFTAR ULANG DENGAN DATA YANG SAMA BERKALI-KALI!
                    </b>
                  </p>

                  <div className="modal-buttons-submit">
                    <button onClick={() => setShowModal(false)}>Kembali</button>
                    <button
                      onClick={handleConfirmSubmit}
                      disabled={!canClick || isLoading}
                    >
                      {isLoading
                        ? "Mengirim..."
                        : canClick
                          ? "Lanjutkan"
                          : `Mohon tunggu... ${countdown}`}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form name="regist-form">
              <h1 className="text-sm md:text-lg lg:text-5xl">BIODATA</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="CATEGORY_PARTICIPANT" className="form-label">
                    Kategori Peserta
                  </label>
                  <select
                    type="text"
                    id="CATEGORY_PARTICIPANT"
                    name="CATEGORY_PARTICIPANT"
                    className="form-control"
                    placeholder="Pilih Kategori Peserta"
                    value=""
                    required
                  >
                    <option value="International Participant">
                      Peserta Internasional
                    </option>
                  </select>
                </div>
                <div className="input-box">
                  <label htmlFor="CATEGORY_COMPETITION" className="form-label">
                    Kategori Kompetisi
                  </label>
                  <select
                    type="text"
                    id="CATEGORY_COMPETITION"
                    name="CATEGORY_COMPETITION"
                    className="form-control"
                    placeholder="Pilih Kategori Kompetisi"
                    required
                    onChange={handleCategoryChange}
                  >
                    <option value="">--Pilih Kategori Kompetisi--</option>
                    <option value="National Science Project Competition - Offline Competition">
                      Kompetisi Offline
                    </option>
                    <option value="National Science Project Competition - Offline Competition + Full Package">
                      Kompetisi Offline + Paket Lengkap (Full Package)
                    </option>
                  </select>
                </div>
              </div>

              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_LENGKAP" className="form-label">
                    Nama Ketua &amp; Anggota Tim
                  </label>
                  <label>
                    <p>
                      Catatan: Masukkan nama ketua tim dan anggota tim dengan
                      nama ketua tim di bagian paling awal, dengan format
                      sebagai berikut:
                    </p>
                    <p>Catatan: maksimal 5 anggota + 1 ketua tim</p>
                    <h6>Kamal Putra</h6>
                    <h6>Ranu Ramadhan</h6>
                    <h6>Irsyad Zaidan</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_LENGKAP"
                    name="NAMA_LENGKAP"
                    className="form-control"
                    placeholder="Masukkan Nama Ketua & Anggota Tim"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                  ></textarea>
                  <p>
                    {selectedMaxNamaLengkap.length} / {maxNameChars} karakter
                  </p>
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_WHATSAPP" className="form-label">
                    Nomor WhatsApp Ketua Tim
                    <p>
                      Harap tuliskan dengan kode telepon, contoh: (kode telepon)
                      (nomor Anda) +62 8177091xxxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="form-control"
                    placeholder="Masukkan Nomor WhatsApp Ketua Tim"
                    required
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="PHONE_CODE" className="form-label">
                    Kode Telepon Negara
                  </label>
                  <select
                    type="text"
                    id="PHONE_CODE"
                    name="PHONE_CODE"
                    className="form-control"
                    placeholder="Pilih Kode Telepon Negara"
                    required
                  >
                    <option value="">--Pilih Kode Telepon Negara--</option>
                    <option value="Afganistan +93">Afganistan +93</option>
                    <option value="Afrika Selatan +27">
                      Afrika Selatan +27
                    </option>
                    <option value="Afrika Tengah +236">
                      Afrika Tengah +236
                    </option>
                    <option value="Albania +355">Albania +355</option>
                    <option value="Algeria +213">Algeria +213</option>
                    <option value="Amerika Serikat +1">
                      Amerika Serikat +1
                    </option>
                    <option value="Arab Saudi +966">Arab Saudi +966</option>
                    <option value="Australia +61">Australia +61</option>
                    <option value="Azerbaijan +994">Azerbaijan +994</option>
                    <option value="Austria +43">Austria +43</option>
                    <option value="Bangladesh +880">Bangladesh +880</option>
                    <option value="Belanda +31">Belanda +31</option>
                    <option value="Belarus +375">Belarus +375</option>
                    <option value="Bolivia +591">Bolivia +591</option>
                    <option value="Brasil +55">Brasil +55</option>
                    <option value="Brunei Darussalam +673">
                      Brunei Darussalam +673
                    </option>
                    <option value="China +86">China +86</option>
                    <option value="Filipina +63">Filipina +63</option>
                    <option value="Finlandia +358">Finlandia +358</option>
                    <option value="Hongaria +36">Hongaria +36</option>
                    <option value="Hongkong +852">Hongkong +852</option>
                    <option value="India +91">India +91</option>
                    <option value="Irak +964">Irak +964</option>
                    <option value="Iran +98">Iran +98</option>
                    <option value="Irlandia +353">Irlandia +353</option>
                    <option value="Jepang +81">Jepang +81</option>
                    <option value="Kamboja +855">Kamboja +855</option>
                    <option value="Kazakhstan +7">Kazakhstan +7</option>
                    <option value="Korea Selatan +82">Korea Selatan +82</option>
                    <option value="Republik Kongo +243">
                      Republik Kongo +243
                    </option>
                    <option value="Kosta Rika +506">Kosta Rika +506</option>
                    <option value="Lebanon +961">Lebanon +961</option>
                    <option value="Malaysia +60">Malaysia +60</option>
                    <option value="Maroko +212">Maroko +212</option>
                    <option value="Mexico +52">Mexico +52</option>
                    <option value="Myanmar +95">Myanmar +95</option>
                    <option value="Nepal +977">Nepal +977</option>
                    <option value="Pakistan +92">Pakistan +92</option>
                    <option value="Rumania +40">Rumania +40</option>
                    <option value="Singapura +65">Singapura +65</option>
                    <option value="Slovenia +386">Slovenia +386</option>
                    <option value="Taiwan +886">Taiwan +886</option>
                    <option value="Thailand +66">Thailand +66</option>
                    <option value="Turki +90">Turki +90</option>
                    <option value="Turkmenistan +993">Turkmenistan +993</option>
                    <option value="Uni Emirat Arab +971">
                      Uni Emirat Arab +971
                    </option>
                    <option value="Uzbekistan +998">Uzbekistan +998</option>
                    <option value="Vietnam +84">Vietnam +84</option>
                    <option value="Zimbabwe +263">Zimbabwe +263</option>
                  </select>
                </div>
                <div className="input-box">
                  <label htmlFor="LEADER_EMAIL" className="form-label">
                    Alamat Email Ketua Tim
                  </label>
                  <label>
                    <p>
                      Catatan: Harap isi email dengan benar, pengiriman LOA akan
                      dikirimkan melalui alamat email ketua tim yang diisi.
                    </p>
                  </label>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    className="form-control"
                    placeholder="Masukkan Alamat Email Ketua Tim Anda"
                    required
                  />
                </div>
              </div>

              {/* DATA SEKOLAH START */}
              {/* DATA SEKOLAH START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">DATA SEKOLAH</h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAMA_SEKOLAH" className="form-label">
                    Nama Sekolah/Universitas
                  </label>
                  <label>
                    <p>
                      Catatan: Jika seluruh anggota berasal dari institusi yang
                      sama, cukup tuliskan 1 institusi saja.
                    </p>
                    <p>
                      Jika anggota tim tidak berasal dari institusi yang sama,
                      masukkan nama sekolah dengan format sesuai urutan nama
                      ketua tim dan anggota tim dari masing-masing sekolah,
                      dengan format sebagai berikut:
                    </p>
                    <h6>SMA CERIA</h6>
                    <h6>SMA BAHAGIA</h6>
                    <h6>SMA TADIKA MESRA</h6>
                  </label>
                  <textarea
                    type="text"
                    id="NAMA_SEKOLAH"
                    name="NAMA_SEKOLAH"
                    className="form-control"
                    placeholder="Masukkan Nama Sekolah/Universitas Ketua & Anggota Tim"
                    required
                    value={selectedNamaSekolah}
                    onChange={handleInputNameSchoolChange}
                  ></textarea>
                  <p>
                    {selectedNamaSekolah.length} / {maxSchoolChars} karakter
                  </p>
                </div>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="GRADE" className="form-label">
                    Jenjang Pendidikan{" "}
                  </label>
                  <select
                    type="text"
                    id="GRADE"
                    name="GRADE"
                    className="form-control"
                    placeholder="Pilih Jenjang Pendidikan"
                    required
                  >
                    <option value="">--Pilih Jenjang Pendidikan Anda--</option>
                    <option value="Elementary">SD / Sederajat</option>
                    <option value="Secondary">Menengah (SMP/SMA)</option>
                    <option value="University">Universitas</option>
                    <option value="Public (Teachers, Lecture, Researchers)">
                      Umum (Guru, Dosen, Peneliti)
                    </option>
                  </select>
                </div>
                <div className="input-box">
                  <label htmlFor="COUNTRY" className="form-label">
                    Negara
                  </label>
                  <input
                    type="text"
                    id="COUNTRY"
                    name="COUNTRY"
                    className="form-control"
                    placeholder="Negara Anda"
                    required
                  />
                </div>
              </div>

              {/* DATA PEMBIMBING START */}
              {/* DATA PEMBIMBING START */}
              <h1 className="text-sm md:text-lg lg:text-5xl">
                DATA PEMBIMBING
              </h1>
              <h1 className="garis-bawah"></h1>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="NAME_SUPERVISOR" className="form-label">
                    Nama Guru/Pembimbing
                  </label>
                  <textarea
                    type="text"
                    id="NAME_SUPERVISOR"
                    name="NAME_SUPERVISOR"
                    className="form-control"
                    placeholder="Masukkan Nama Guru/Pembimbing"
                    required
                  ></textarea>
                </div>
                <div className="input-box">
                  <label
                    htmlFor="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-label"
                  >
                    Nomor WhatsApp Guru/Pembimbing
                    <p>
                      Harap tuliskan dengan kode telepon, contoh: (kode telepon)
                      (nomor Anda) +62 8177091xxxx
                    </p>
                  </label>
                  <input
                    type="number"
                    id="WHATSAPP_NUMBER_SUPERVISOR"
                    name="WHATSAPP_NUMBER_SUPERVISOR"
                    className="form-control"
                    placeholder="Masukkan Nomor WhatsApp Guru/Pembimbing"
                    required
                  />
                </div>
                <div className="input-box">
                  <label
                    htmlFor="EMAIL_TEACHER_SUPERVISOR"
                    className="form-label"
                  >
                    Alamat Email Guru/Pembimbing
                  </label>
                  <input
                    type="email"
                    id="EMAIL_TEACHER_SUPERVISOR"
                    name="EMAIL_TEACHER_SUPERVISOR"
                    className="form-control"
                    placeholder="Masukkan Alamat Email Guru/Pembimbing"
                    required
                  />
                </div>
              </div>
              {/* DATA PEMBIMBING END */}
              {/* DATA PEMBIMBING END */}

              {/* DETAIL PROJECT START */}
              {/* DETAIL PROJECT START */}
              <div className="">
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  DETAIL PROYEK
                </h1>
                <h1 className="garis-bawah"></h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="PROJECT_TITLE" className="form-label">
                    Judul Proyek
                  </label>
                  <textarea
                    type="text"
                    id="PROJECT_TITLE"
                    name="PROJECT_TITLE"
                    className="form-control"
                    placeholder="Masukkan Judul Proyek Anda"
                    required
                    value={selectedMaxProject}
                    onChange={handleInputProjectChange}
                  ></textarea>
                  <p>
                    {selectedMaxProject.length} / {maxProjectChars} karakter
                  </p>
                </div>
                <div className="input-box">
                  <label htmlFor="CATEGORIES" className="form-label">
                    Kategori
                  </label>
                  <select
                    id="CATEGORIES"
                    name="CATEGORIES"
                    className="form-control"
                    placeholder="--Pilih-- "
                    required
                  >
                    <option value="">--Pilih Kategori--</option>
                    <option value="Social Science">
                      Ilmu Sosial (Social Science)
                    </option>
                    <option value="Innovative Science">
                      Sains Inovatif (Innovative Science)
                    </option>
                    <option value="Environmental Science">
                      Ilmu Lingkungan (Environmental Science)
                    </option>
                    <option value="Engineering">Teknik (Engineering)</option>
                    <option value="Education for Public (Teachers, Lecture, Researchers)">
                      Pendidikan untuk Umum (Guru, Dosen, Peneliti)
                    </option>
                    <option value="Classroom Action Research for Public (Teachers, Lecture, Researchers)">
                      Penelitian Tindakan Kelas untuk Umum (Guru, Dosen,
                      Peneliti)
                    </option>
                  </select>
                </div>
                <div className="input-box">
                  <label htmlFor="YES_NO" className="form-label">
                    Apakah judul proyek pernah berpartisipasi dalam kompetisi
                    invensi dan inovasi sebelumnya?
                  </label>
                  <select
                    type="text"
                    id="YES_NO"
                    name="YES_NO"
                    className="form-control"
                    placeholder="--Pilih-- "
                    required
                  >
                    <option value="">--Pilih--</option>
                    <option value="Yes">Ya</option>
                    <option value="No">Tidak</option>
                  </select>
                </div>
                <div className="input-box">
                  <label
                    htmlFor="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-label"
                  >
                    Jika judul proyek pernah berpartisipasi dalam kompetisi
                    invensi dan inovasi lainnya, harap tuliskan nama
                    kompetisinya
                  </label>
                  <textarea
                    type="text"
                    id="JUDUL_PERNAH_BERPATISIPASI"
                    name="JUDUL_PERNAH_BERPATISIPASI"
                    className="form-control"
                    placeholder="Masukkan Nama Kompetisi"
                  ></textarea>
                  <div className="mt-5" id="form_alerts"></div>
                </div>
              </div>

              {/* GENERAL INFORMATION START */}
              {/* GENERAL INFORMATION START */}
              <div className="">
                <h1 className="text-sm md:text-lg lg:text-5xl">
                  INFORMASI UMUM
                </h1>
                <h1 className="garis-bawah"></h1>
              </div>
              <div className="user-details">
                <div className="input-box">
                  <label htmlFor="SOSMED" className="form-label">
                    Jika Anda tidak memiliki nomor WhatsApp, harap tuliskan akun
                    media sosial Anda. (Contoh: Instagram/FB/Telegram/Line)
                  </label>
                  <label>
                    <p>
                      Salin tautan URL Anda (Contoh:
                      https://www.instagram.com/iicyms_official/) atau tuliskan
                      nama pengguna Anda (Contoh: iysa_official)
                    </p>
                  </label>
                  <input
                    type="text"
                    id="SOSMED"
                    name="SOSMED"
                    className="form-control"
                    placeholder="Masukkan Akun Media Sosial Anda"
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="INFORMATION_RESOURCES" className="form-label">
                    Sumber Informasi Kompetisi ISPC 2026
                  </label>
                  <select
                    type="text"
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="form-control"
                    placeholder="--Pilih Sumber Informasi-- "
                    required
                  >
                    <option value="">--Pilih Sumber Informasi--</option>
                    <option value="ISPC Website">Situs Web ISPC</option>
                    <option value="IYSA Website">Situs Web IYSA</option>
                    <option value="IYSA Instagram">Instagram IYSA</option>
                    <option value="ISPC Instagram">Instagram ISPC</option>
                    <option value="Supervisor/School">
                      Pembimbing/Sekolah
                    </option>
                    <option value="IYSA Facebook">Facebook IYSA</option>
                    <option value="IYSA Linkedin">Linkedin IYSA</option>
                    <option value="IYSA Email">Email IYSA</option>
                    <option value="ISPC Email">Email ISPC</option>
                    <option value="Previous Event">Acara Sebelumnya</option>
                    <option value="Others">Lainnya</option>
                  </select>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="KIRIM FORMULIR" />
              </div>
            </form>

            {/* Loader dan Status Message */}
            {isLoading && (
              <div className="overlay-loader">
                <div className="loader"></div>
                <div>
                  {statusMessage && (
                    <p className="status-message">{statusMessage}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
