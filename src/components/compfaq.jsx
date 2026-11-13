import "../assets/css/styles.css";
import React, { useState } from 'react';


export default function CompFaq() {
    
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>FAQ</h1>
        <a href="/">Beranda</a>
      </div>
    {/* PAGE HEADER END */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0b8be3" fill-opacity="5" d="M0,32L0,96L96,96L96,192L192,192L192,160L288,160L288,96L384,96L384,256L480,256L480,224L576,224L576,192L672,192L672,96L768,96L768,128L864,128L864,288L960,288L960,192L1056,192L1056,160L1152,160L1152,128L1248,128L1248,64L1344,64L1344,192L1440,192L1440,0L1344,0L1344,0L1248,0L1248,0L1152,0L1152,0L1056,0L1056,0L960,0L960,0L864,0L864,0L768,0L768,0L672,0L672,0L576,0L576,0L480,0L480,0L384,0L384,0L288,0L288,0L192,0L192,0L96,0L96,0L0,0L0,0Z"></path>
    </svg> */}
      <section className="faq-section">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>SETELAH MENDAFTAR</h2>
              </div>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      className="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div>
                        <div className="card-body">
                            <p>{item.answer}</p>
                            <img
                            src={item.gambar}
                            alt=""
                            style={{ cursor: 'pointer' }}
                            onClick={openModal}
                            />
                        </div>

                        {isModalOpen && (
                            <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>
                                &times;
                                </span>
                                <img src={item.gambar} alt="" />
                            </div>
                            </div>
                        )}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <br />
                <br />
                <h2>SELAMA ACARA BERLANGSUNG</h2>
              </div>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data2.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      className="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <br />
                <br />
                <h2>SETELAH ACARA</h2>
              </div>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data3.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-After-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      className="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const data = [
  {
    no: "1",
    datatarget: "#faqCollapse-1",
    id: "faqCollapse-1",
    question: "Minsa, kapan kami akan mendapatkan LoA kami? Dikirim ke mana?",
    answer:
      "Setelah kami menerima pendaftaran kamu, kami akan mengirimkan email konfirmasi selambatnya 1x24 jam, dan untuk LoA akan kami kirimkan ke alamat email ketua tim selambatnya 3x24 jam setelah pendaftaran.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-2",
    id: "faqCollapse-2",
    question:
      "Minsa, saya sudah mendaftar satu minggu yang lalu, tapi mengapa saya belum menerima LoA dan Invoice?",
    answer:
      "Coba periksa folder spam di email ketua tim kamu, mungkin email dari tim IYSA masuk ke folder spam.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-3",
    id: "faqCollapse-3",
    question: "Di mana tempat mengunggah berkas kompetisi?",
    answer:
      "Tautan drive untuk mengunggah berkas dan tautan untuk mengunggah bukti pembayaran akan dicantumkan di dalam invoice.",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-4",
    id: "faqCollapse-4",
    question:
      "Saya ingin membayar biaya pendaftaran tetapi mengapa saya tidak menemukan invoice-nya? Dan pembayarannya ditransfer ke mana?",
    answer:
      "Ayo, sudahkah kamu membaca LoA sampai selesai? Karena kami mengirimkan invoice bersama dengan LoA tim kamu, pastikan kamu sudah membaca email dari kami sampai habis ya! Untuk pembayaran, kamu dapat mentransfer ke rekening yang tertera pada invoice. Pastikan kamu membayar sesuai dengan nominal yang tertera pada invoice, ya!",
  },
  {
    no: "5",
    datatarget: "#faqCollapse-5",
    id: "faqCollapse-5",
    question:
      "Minsa, saya sudah membayar biaya pendaftaran. Di mana saya bisa mengunggah bukti pembayaran?",
    answer:
      "Jika sudah melakukan pembayaran, kamu bisa mengunggah buktinya ke tautan yang tercantum pada invoice, dan pastikan kamu mengisi serta mengunggah bukti transfer dengan benar agar panitia dapat mendata dengan benar juga.",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-6",
    id: "faqCollapse-6",
    question: "Kapan kuitansi (receipt) akan dikirimkan kepada kami?",
    answer:
      "Kami akan mengirimkan kuitansi pembayaran maksimal 7 hari kerja ke email ketua tim, setelah kamu mengunggah bukti pembayaran!",
  },
  {
    no: "7",
    datatarget: "#faqCollapse-7",
    id: "faqCollapse-7",
    question:
      "Minsa, satu minggu lagi penjurian, kenapa saya belum menerima jadwal presentasi tim saya?",
    answer:
      "Jadwal presentasi peserta online akan kami kirimkan selambatnya 2 hari sebelum penjurian berlangsung ke grup WhatsApp dan juga email ketua tim. Pastikan kamu rajin memeriksa informasi yang kami berikan di grup WhatsApp dan juga email ya!",
  },
];

const data2 = [
  {
    no: "1",
    datatarget: "#faqCollapse-during-1",
    id: "faqCollapse-during-1",
    question: "Kapan jadwal presentasi akan diberikan oleh panitia?",
    answer:
      "Jadwal presentasi akan kami berikan selambatnya 2 hari sebelum penjurian berlangsung atau bisa juga lebih cepat, dan kami kirimkan melalui grup WA serta email ketua tim.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-during-2",
    id: "faqCollapse-during-2",
    question:
      "Aplikasi apa yang digunakan untuk presentasi online? Zoom, Google Meet, atau yang lainnya?",
    answer:
      "Untuk penjurian online, kami selalu menggunakan aplikasi Zoom dan pastikan aplikasi Zoom kamu sudah versi terbaru.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-during-3",
    id: "faqCollapse-during-3",
    question: "Kapan tautan Zoom akan diberikan oleh panitia?",
    answer:
      "Tautan Zoom akan kami berikan pada hari penjurian, dan akan kami kirimkan secara berkala di grup sesuai jam presentasi tim kalian.",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-during-4",
    id: "faqCollapse-during-4",
    question: "Berapa banyak akun Zoom yang bisa bergabung dan bagaimana format penamaannya?",
    answer:
      'Teman-teman bisa masuk ke Zoom maksimal dengan 5 akun untuk peserta, dan semua akun Zoom harus mengikuti format nama yang sudah kami berikan yaitu "Nomor Ruangan_Nama Ketua Tim_Nama Institusi".',
  },
  {
    no: "5",
    datatarget: "#faqCollapse-during-5",
    id: "faqCollapse-during-5",
    question: "Berapa lama durasi peserta melakukan presentasi?",
    answer:
      "Teman-teman akan diberikan waktu 15 menit untuk 1 sesi presentasi yang akan dibagi menjadi 2, yaitu 7 menit awal untuk presentasi dan 8 menit akhir untuk sesi tanya jawab dengan juri.",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-during-6",
    id: "faqCollapse-during-6",
    question: "Berapa banyak juri yang akan datang ke booth peserta offline?",
    answer:
      "Sama seperti penjurian online, akan ada 2 juri yang menilai setiap tim. Dan setelah selesai dinilai kamu akan diberikan stiker sebagai tanda booth kamu sudah dinilai, pastikan kamu mendapatkan 2 stiker ya.",
  },
  {
    no: "7",
    datatarget: "#faqCollapse-during-7",
    id: "faqCollapse-during-7",
    question: "Apakah kami boleh merapikan booth setelah selesai dinilai?",
    answer:
      "Kamu bisa mulai merapikan booth ketika semua tim sudah selesai dinilai, jadi jika kamu sudah selesai dinilai kamu bisa berkunjung dulu ke booth peserta lain.",
  },
];

const data3 = [
  {
    no: "1",
    datatarget: "#faqCollapse-After-1",
    id: "faqCollapse-After-1",
    question: "Kapan pemenang akan diumumkan?",
    answer:
      "Pengumuman pemenang dilaksanakan pada hari terakhir di setiap acara, kamu bisa mengecek tanggalnya pada jadwal yang tertera di Buku Panduan.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-After-2",
    id: "faqCollapse-After-2",
    question:
      "Di mana kami bisa melihat hasil pemenang?",
    answer:
      "Kamu bisa mengecek hasil akhir di situs web resmi dari acara yang kamu ikuti.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-After-3",
    id: "faqCollapse-After-3",
    question: "Kapan E-sertifikat akan dikirimkan?",
    answer:
      "IYSA TIDAK mengirimkan E-Sertifikat untuk peserta Nasional atau Peserta Indonesia yang mengikuti acara secara online. Peserta Nasional Online hanya akan mendapatkan sertifikat dalam bentuk cetak/hardcopy yang nantinya akan dikirimkan bersama dengan medali melalui ekspedisi JNE.",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-After-4",
    id: "faqCollapse-After-4",
    question: "Kapan pengiriman sertifikat peserta online?",
    answer:
      'Sertifikat akan dikirimkan selambatnya satu bulan setelah pengumuman pemenang. Kamu bisa mengecek secara berkala resi pengiriman yang kami kirimkan di grup WhatsApp apakah sertifikat kamu sudah dikirim atau belum.',
  },
  {
    no: "5",
    datatarget: "#faqCollapse-After-5",
    id: "faqCollapse-After-5",
    question: "Di mana kami bisa mendapatkan sertifikat pembimbing?",
    answer:
      "Kamu bisa melihat dan mengunduh sertifikat pembimbing di situs web resmi dari acara yang kamu ikuti.",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-After-6",
    id: "faqCollapse-After-6",
    question: "Bagaimana cara melakukan penggandaan medali?",
    answer:
      "Untuk peserta offline, kamu bisa langsung melakukan penggandaan medali di tempat setelah pengumuman pemenang berlangsung. Dan untuk peserta online, kamu bisa melakukan penggandaan medali melalui tautan yang kami kirimkan di grup WhatsApp, informasi penggandaan akan kami kirimkan di grup WhatsApp selambatnya 2 hari setelah pengumuman pemenang.",
  }
];