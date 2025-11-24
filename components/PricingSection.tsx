import React from "react";

interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  waMessageTemplate: string;
}

const WHATSAPP_NUMBER = "628117697999";

const packages: PricingPackage[] = [
  {
    id: "basic",
    name: "Konsultasi Cepat (Basic)",
    description: "Sesi 30 menit, solusi dasar untuk masalah pajak ringan.",
    price: "Rp 250.000",
    waMessageTemplate:
      "Halo, saya tertarik dengan layanan **Konsultasi Cepat (Basic)**. Mohon info ketersediaan slot dan link pembayaran. Terima kasih!",
  },
  {
    id: "standar",
    name: "Laporan Bulanan (Standar)",
    description: "Pendampingan pelaporan PPN & PPh bulanan. Cocok untuk UMKM.",
    price: "Rp 1.500.000/bln",
    waMessageTemplate:
      "Halo, saya tertarik dengan paket **Laporan Bulanan (Standar)**. Mohon info detail pendaftaran dan ketersediaan slot. Terima kasih!",
  },
  {
    id: "premium",
    name: "Pendampingan Tahunan (Premium)",
    description:
      "Pelaporan pajak badan/pribadi tahunan, review dokumen lengkap.",
    price: "Rp 5.000.000",
    waMessageTemplate:
      "Halo, saya tertarik dengan paket **Pendampingan Tahunan (Premium)**. Mohon info langkah pendaftaran dan dokumen apa yang diperlukan. Terima kasih!",
  },
  {
    id: "pro",
    name: "Paket Kepatuhan (Pro)",
    description:
      "Full-Service (Bulanan & Tahunan) + Tax Planning dan bantuan audit.",
    price: "Harga Custom",
    waMessageTemplate:
      "Halo, saya tertarik dengan paket **Paket Kepatuhan (Pro)**. Saya ingin mendiskusikan harga custom. Mohon konfirmasi ketersediaan untuk panggilan singkat. Terima kasih!",
  },
];

const handleSelectPackage = (messageTemplate: string) => {
  const encodedMessage = encodeURIComponent(messageTemplate);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

const PricingSection: React.FC = () => {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-slate-950 text-slate-50 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-300">
            Paket Layanan Pajak
          </p>
          <h2
            className="mt-3 text-3xl font-semibold sm:text-4xl"
            id="pricing-heading"
          >
            Pilih Paket yang Sesuai dengan Kebutuhan Bisnis Anda
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Kami menyediakan pendampingan pajak end-to-end mulai dari konsultasi
            cepat, pelaporan bulanan, hingga layanan kepatuhan penuh dengan tim
            ahli yang responsif.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-teal-950/40 transition hover:-translate-y-1 hover:border-teal-500/70 hover:shadow-teal-800/40"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {pkg.name}
                  </h3>
                  <span className="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-200">
                    Populer
                  </span>
                </div>
                <p className="text-3xl font-bold text-teal-300">{pkg.price}</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {pkg.description}
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-0.5 h-2 w-2 rounded-full bg-teal-400"
                    />
                    Konsultasi via WA/Meet dengan konsultan pajak terverifikasi.
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-0.5 h-2 w-2 rounded-full bg-teal-400"
                    />
                    Ringkasan pekerjaan & reminder otomatis setiap periode.
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-0.5 h-2 w-2 rounded-full bg-teal-400"
                    />
                    Dukungan dokumen & pengarsipan digital aman.
                  </li>
                </ul>
              </div>

              <button
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-teal-500 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                type="button"
                onClick={() => handleSelectPackage(pkg.waMessageTemplate)}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
