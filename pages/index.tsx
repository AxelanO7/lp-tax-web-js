import Image from "next/image";
import { FormEvent, useState } from "react";

import PricingSection from "@/components/PricingSection";
import DefaultLayout from "@/layouts/default";

const whatsappNumber = "6281234567890";
const whatsappMessage =
  "Halo, saya ingin berkonsultasi terkait layanan pajak dari LP Tax Consultant. Mohon informasinya.";

const services = [
  {
    title: "Konsultasi Pajak Pribadi",
    description:
      "Pendampingan untuk karyawan, profesional, hingga UMKM dalam menyusun strategi pajak yang optimal dan sesuai regulasi.",
  },
  {
    title: "Penyusunan & Pelaporan SPT",
    description:
      "Tim kami memastikan seluruh dokumen pajak tersusun rapi, tepat waktu, dan meminimalkan risiko sanksi.",
  },
  {
    title: "Pendampingan Pemeriksaan Pajak",
    description:
      "Ahli pajak kami siap mewakili Anda dalam pemeriksaan, keberatan, hingga banding agar hak Anda tetap terlindungi.",
  },
];

const advantages = [
  {
    title: "Pengalaman 10+ Tahun",
    description:
      "Konsultan berlisensi dengan pengalaman menangani berbagai sektor industri dan kebutuhan pajak yang kompleks.",
  },
  {
    title: "Biaya Transparan",
    description:
      "Estimasi biaya yang jelas sejak awal tanpa biaya tersembunyi sehingga mudah disesuaikan dengan anggaran Anda.",
  },
  {
    title: "Layanan Cepat & Aman",
    description:
      "Dokumen Anda dijaga kerahasiaannya dengan sistem keamanan berbasis cloud dan komunikasi real-time.",
  },
  {
    title: "Pendampingan End-to-End",
    description:
      "Mulai dari konsultasi awal, penyusunan strategi, hingga implementasi kami mendampingi setiap langkah Anda.",
  },
];

const faqs = [
  {
    question: "Seberapa cepat saya bisa mulai konsultasi?",
    answer:
      "Reservasi jadwal dalam hitungan menit dan tim kami akan menghubungi Anda maksimal 24 jam setelah formulir diterima.",
  },
  {
    question: "Apakah melayani pajak pribadi dan badan?",
    answer:
      "Ya. Kami menangani kebutuhan pajak individu, profesional, yayasan, hingga perusahaan skala besar.",
  },
  {
    question: "Bagaimana keamanan data saya?",
    answer:
      "Semua dokumen terenkripsi dan hanya dapat diakses oleh konsultan yang menangani kasus Anda.",
  },
];

const testimonials = [
  {
    name: "Rama A.",
    role: "Direktur Keuangan Startup",
    quote:
      "LP Tax membantu kami merapikan administrasi pajak sehingga perusahaan lebih fokus mengembangkan produk.",
  },
  {
    name: "Nadia P.",
    role: "Freelancer Kreatif",
    quote:
      "Proses pelaporan jadi jauh lebih mudah dan saya tidak khawatir lagi saat musim SPT tahunan.",
  },
];

export default function IndexPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    needs: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = encodeURIComponent(
      `Halo, saya ingin berkonsultasi dengan LP Tax Consultant.\n\nNama: ${formState.name}\nEmail: ${formState.email}\nKebutuhan: ${formState.needs || "Konsultasi Pajak"}`,
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <DefaultLayout>
      <main className="flex flex-col gap-24 pb-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />
                Pendamping Pajak Andal untuk Bisnis & Individu
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Urusan Pajak Lebih Mudah Bersama LP Tax Consultant
              </h1>
              <p className="max-w-xl text-lg text-slate-200">
                Dapatkan strategi pajak yang tepat, transparan, dan sesuai
                kebutuhan. Kami mendampingi Anda dari perencanaan hingga
                pelaporan tanpa ribet.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-semibold text-white">LP Tax Consultant</p>
                  <p>www.lptax.id</p>
                  <p>hello@lptax.id</p>
                  <p>WhatsApp: +62 812-3456-7890</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-emerald-300"
                    type="button"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          whatsappMessage,
                        )}`,
                        "_blank",
                      )
                    }
                  >
                    Konsultasi Gratis via WhatsApp
                    <span aria-hidden className="text-lg">
                      →
                    </span>
                  </button>
                  <p className="text-xs text-slate-400">
                    Respons cepat dalam 15 menit di jam kerja.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wider text-slate-400">
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Terdaftar di IAPI & IKPI
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Dipercaya 1.200+ Klien
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Mitra Resmi DJP Online
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative mx-auto max-w-md rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                <h2 className="text-2xl font-semibold text-white">
                  Layanan Pajak Cepat, Andal, dan Terjangkau
                </h2>
                <p className="mt-3 text-sm text-slate-200">
                  Temukan layanan unggulan kami yang memastikan setiap kewajiban
                  pajak dipenuhi tepat waktu dengan proses yang aman dan
                  transparan.
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  {services.map((service) => (
                    <li
                      key={service.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white/10"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-200">
                        {service.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <PricingSection />

        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 rounded-3xl bg-white p-10 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="group rounded-2xl border border-transparent bg-slate-50 p-6 text-slate-900 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition group-hover:scale-105">
                    ✓
                  </span>
                  {advantage.title}
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Cerita Sukses Klien Kami
            </h2>
            <p className="text-base text-slate-600">
              Bagaimana kami membantu klien menjaga kepatuhan pajak sekaligus
              mengoptimalkan cashflow bisnis mereka.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl"
                >
                  <blockquote className="text-slate-700">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                    {testimonial.name}
                    <span className="block text-xs font-normal text-slate-500">
                      {testimonial.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6 rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-200">
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-900"
                >
                  💼
                </span>
                Pajak Kita
              </div>
              <h3 className="text-2xl font-semibold">
                Pendampingan pajak dengan dokumentasi yang rapi
              </h3>
              <p className="text-sm text-slate-200">
                Kami menjaga seluruh arsip pajak digital Anda, mulai dari bukti
                potong hingga rekonsiliasi, lengkap dengan catatan progres yang
                dapat diakses setiap saat.
              </p>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-inner">
              <Image
                alt="Tim konsultan pajak meninjau laporan keuangan di ruang meeting"
                className="h-full w-full object-cover"
                height={675}
                src="/pajak-team.svg"
                width={1200}
              />
            </figure>
            <div className="space-y-3 text-sm text-slate-200">
              <p className="font-semibold text-white">
                Butuh saran ahli sekarang?
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400"
                  />
                  Laporan konsistensi data pajak yang bisa diunduh kapan saja.
                </li>
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400"
                  />
                  Reminder tenggat otomatis untuk SPT masa dan tahunan.
                </li>
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-0.5 h-2 w-2 rounded-full bg-emerald-400"
                  />
                  Konsultasi tatap muka maupun daring sesuai preferensi Anda.
                </li>
              </ul>
            </div>
            <button
              className="w-full rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-emerald-300"
              type="button"
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                  "_blank",
                )
              }
            >
              Hubungi Kami via WhatsApp
            </button>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl rounded-3xl bg-white px-6 py-16 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Siap Nikmati Pengelolaan Pajak Tanpa Stres?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Kirimkan detail Anda dan kami akan menghubungi dengan solusi yang
              disesuaikan untuk pajak pribadi maupun badan.
            </p>
          </div>
          <form
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Nama Lengkap
                <input
                  required
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  placeholder="Masukkan nama Anda"
                  type="text"
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((state) => ({
                      ...state,
                      name: event.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  required
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  placeholder="nama@email.com"
                  type="email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((state) => ({
                      ...state,
                      email: event.target.value,
                    }))
                  }
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Ceritakan kebutuhan Anda
              <textarea
                className="min-h-[120px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="Contoh: Pendampingan SPT Tahunan Badan"
                value={formState.needs}
                onChange={(event) =>
                  setFormState((state) => ({
                    ...state,
                    needs: event.target.value,
                  }))
                }
              />
            </label>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-400"
              type="submit"
            >
              Kirim via WhatsApp
              <span aria-hidden>→</span>
            </button>
            <p className="text-center text-xs text-slate-500">
              Setelah klik kirim Anda akan diarahkan ke WhatsApp dengan data
              terisi otomatis.
            </p>
          </form>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl bg-white px-8 py-12 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-6xl px-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} LP Tax Consultant. Semua hak cipta
            dilindungi. Kami hadir untuk menyederhanakan kewajiban pajak Anda.
          </p>
        </footer>
      </main>
    </DefaultLayout>
  );
}
