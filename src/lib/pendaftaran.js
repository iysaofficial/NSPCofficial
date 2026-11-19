/**
 * NSPC ← dasbor IYSA (API publik), standar situs resmi event IYSA.
 *
 * - Buka/tutup pendaftaran ditentukan TOGEL di dasbor (detail edisi →
 *   Pendaftaran Terbuka), bukan kode situs ini.
 * - Guidebook tampil hanya bila panitia sudah MENERBITKANNYA dari dasbor;
 *   tanpa itu tombolnya tidak ada (bukan tombol mati). Tombolnya membuka modal
 *   panduan IYSA (embed/panduan.js di index.html): guidebook + Syarat & Ketentuan.
 * - Formulir pendaftaran = `daftar.js` dasbor: tim, anggota, pembimbing, dan
 *   tagihan langsung tercatat di dasbor.
 * - Edisi yang dibaca = edisi yang di-pin di dasbor (IT → APIs), jadi
 *   pergantian tahun tidak perlu mengubah kode.
 */
import { useEffect, useState } from "react";

export const SERI = "NSPC";
const API = "https://api-dashboard.iysa.or.id";

/** `buka` | `belum` | `tutup` | `tak_diketahui` — togel yang memutuskan, tanggal hanya menjelaskan. */
export function keadaanPendaftaran(id) {
  if (!id) return "tak_diketahui";
  if (id.pendaftaran_dibuka) return "buka";
  const hariIni = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  if (id.pendaftaran_tutup && hariIni > id.pendaftaran_tutup) return "tutup";
  if (id.pendaftaran_buka && hariIni < id.pendaftaran_buka) return "belum";
  return "tutup";
}

let simpanan = null;
function ambilData() {
  if (!simpanan) {
    simpanan = fetch(`${API}/api/public/v1/${SERI}?sections=identitas,guidebook`, { headers: { Accept: "application/json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        const seksi = {};
        for (const s of j?.data?.sections ?? []) seksi[s.key] = s.isi;
        const gb = seksi.guidebook;
        return {
          identitas: seksi.identitas ?? null,
          guidebook: gb?.url ? { url: gb.url, terbit: gb.terbit ?? null } : null,
        };
      })
      .catch(() => ({ identitas: null, guidebook: null }));
  }
  return simpanan;
}

/** { memuat, identitas, keadaan, guidebook } */
export function usePendaftaran() {
  const [hasil, setHasil] = useState({ memuat: true, identitas: null, keadaan: "tak_diketahui", guidebook: null });
  useEffect(() => {
    let hidup = true;
    ambilData().then(({ identitas, guidebook }) => {
      if (hidup) setHasil({ memuat: false, identitas, guidebook, keadaan: keadaanPendaftaran(identitas) });
    });
    return () => { hidup = false; };
  }, []);
  return hasil;
}

export function formatTanggal(iso) {
  if (!iso) return "";
  const d = new Date(`${iso.slice(0, 10)}T00:00:00+07:00`);
  return isNaN(d) ? iso : d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
}

/** Muat daftar.js sekali, lalu pasang formulir ke setiap `[data-iysa-daftar]`. */
export function pasangFormulir() {
  const pasang = () => window.IysaDaftar?.pasang?.();
  if (document.querySelector("script[data-iysa-daftar-loader]")) { pasang(); return; }
  const s = document.createElement("script");
  s.src = `${API}/embed/daftar.js`;
  s.defer = true;
  s.setAttribute("data-iysa-daftar-loader", "");
  s.onload = pasang;
  document.body.appendChild(s);
}
