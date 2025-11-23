import Image from "next/image";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

import PricingSection from "@/components/PricingSection";
import DefaultLayout from "@/layouts/default";

const whatsappNumber = "628117697999";
const whatsappMessage =
  "Halo, saya ingin berkonsultasi terkait layanan pajak dari Pajakita Consultant. Mohon informasinya.";

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

const metrics = [
  {
    label: "Rasio Keberhasilan Sengketa",
    value: "96%",
    helper: "dengan pendekatan evidence-based",
  },
  {
    label: "Waktu Respons Rata-rata",
    value: "15 mnt",
    helper: "melalui WhatsApp & email",
  },
  {
    label: "Dokumen Tersimpan Aman",
    value: "12k+",
    helper: "terenkripsi dan ter-arsip",
  },
];

const processSteps = [
  {
    title: "Discovery & Diagnosis",
    detail:
      "Kami memetakan kebutuhan pajak Anda melalui quick call dan audit dokumen singkat.",
  },
  {
    title: "Strategi & Rencana Kerja",
    detail:
      "Menyusun action plan, timeline, serta estimasi biaya yang transparan.",
  },
  {
    title: "Eksekusi & Monitoring",
    detail:
      "Pelaporan, review, dan reminder otomatis dengan laporan progres berkala.",
  },
  {
    title: "Evaluasi & Optimalisasi",
    detail:
      "Analisis hasil serta peluang efisiensi pajak untuk periode berikutnya.",
  },
];

const testimonials = [
  {
    name: "Rama A.",
    role: "Direktur Keuangan Startup",
    quote:
      "Pajakita membantu kami merapikan administrasi pajak sehingga perusahaan lebih fokus mengembangkan produk.",
  },
  {
    name: "Nadia P.",
    role: "Freelancer Kreatif",
    quote:
      "Proses pelaporan jadi jauh lebih mudah dan saya tidak khawatir lagi saat musim SPT tahunan.",
  },
];

function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`transition duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className ?? ""}`}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

export default function IndexPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    needs: "",
  });

  const [activeFaq, setActiveFaq] = useState<string | null>(
    faqs[0]?.question ?? null
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = encodeURIComponent(
      `Halo, saya ingin berkonsultasi dengan Pajakita Consultant.\n\nNama: ${formState.name}\nEmail: ${formState.email}\nKebutuhan: ${formState.needs || "Konsultasi Pajak"}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <DefaultLayout>
      <main className="flex flex-col gap-24 pb-24 scroll-smooth">
        <AnimatedSection
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
          id="hero"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute right-[-10%] top-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-[-20%] left-1/3 h-80 w-80 rotate-12 rounded-full bg-amber-300/10 blur-3xl" />
          </div>
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
                Urusan Pajak Lebih Mudah Bersama Pajakita Consultant
              </h1>
              <p className="max-w-xl text-lg text-slate-200">
                Dapatkan strategi pajak yang tepat, transparan, dan sesuai
                kebutuhan. Kami mendampingi Anda dari perencanaan hingga
                pelaporan tanpa ribet.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-semibold text-white">
                    Pajakita Consultant
                  </p>
                  <p>www.pajakita.id</p>
                  <p>free_corner200460@yahoo.com</p>
                  <p>WhatsApp: +62 811-7697-999</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-emerald-300"
                    type="button"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          whatsappMessage
                        )}`,
                        "_blank"
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
              {/* <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wider text-slate-400">
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Terdaftar di IAPI & IKPI
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Dipercaya 1.200+ Klien
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Mitra Resmi DJP Online
                </span>
              </div> */}
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
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-6xl px-6" delay={100}>
          <div className="grid gap-4 rounded-3xl bg-slate-900 px-6 py-8 text-slate-50 shadow-2xl shadow-slate-900/20 ring-1 ring-white/10 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-300/70 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-300/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                <p className="text-sm uppercase tracking-wide text-emerald-200">
                  {metric.label}
                </p>
                <p className="mt-2 text-4xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-200">{metric.helper}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6" delay={150} id="pricing">
          <PricingSection />
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-6xl px-6" delay={200}>
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
        </AnimatedSection>

        <AnimatedSection
          className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row"
          delay={250}
        >
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
                  "_blank"
                )
              }
            >
              Hubungi Kami via WhatsApp
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-6xl px-6" delay={300}>
          <div className="overflow-hidden rounded-3xl bg-white p-10 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
                  Alur Kerja
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Interaktif & transparan dari onboarding hingga laporan akhir
                </h2>
                <p className="text-base text-slate-600">
                  Setiap tahap dilengkapi update otomatis, sehingga Anda bisa
                  memantau progres tanpa harus menanyakan status berulang.
                </p>
                <div className="relative pl-4">
                  <div className="absolute left-4 top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-emerald-400 to-transparent" />
                  <div className="space-y-5">
                    {processSteps.map((step, index) => (
                      <div
                        key={step.title}
                        className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white"
                      >
                        <div className="absolute -left-7 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-emerald-600 shadow-lg ring-1 ring-emerald-100">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-400/20" />
                <div className="relative space-y-4">
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-100">
                    Dashboard Klien
                  </p>
                  <h3 className="text-2xl font-semibold">
                    Notifikasi realtime & arsip digital
                  </h3>
                  <p className="text-sm text-slate-200">
                    Setiap pengiriman dokumen dan tenggat akan muncul sebagai
                    kartu status. Klik untuk membuka arsip terenkripsi atau
                    kirim pesan cepat ke konsultan Anda.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Reminder SPT Masa",
                      "Upload Bukti Potong",
                      "Jadwalkan Call",
                    ].map((item) => (
                      <div
                        key={item}
                        className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm shadow-inner transition hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                            •
                          </span>
                          <span className="font-semibold text-white">
                            {item}
                          </span>
                        </div>
                        <button
                          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-100 transition group-hover:bg-emerald-400 group-hover:text-slate-900"
                          type="button"
                          onClick={() =>
                            window.open(
                              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                              "_blank"
                            )
                          }
                        >
                          Tindaklanjuti
                        </button>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-300">
                    Akses kapan saja tanpa harus menginstal aplikasi tambahan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="mx-auto w-full max-w-6xl rounded-3xl bg-white px-6 py-16 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10"
          delay={350}
          id="contact"
        >
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
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-6xl px-6" delay={400}>
          <div className="rounded-3xl bg-white px-8 py-12 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <button
                  key={faq.question}
                  aria-expanded={activeFaq === faq.question}
                  className="flex w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-left transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white"
                  type="button"
                  onClick={() =>
                    setActiveFaq((current) =>
                      current === faq.question ? null : faq.question
                    )
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                    <span
                      aria-hidden
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
                        activeFaq === faq.question
                          ? "rotate-45 border-emerald-300 bg-emerald-50 text-emerald-600"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className={`grid overflow-hidden text-sm text-slate-600 transition-[grid-template-rows] duration-300 ${
                      activeFaq === faq.question
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <footer className="mx-auto w-full max-w-6xl px-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Pajak Kita Consultant. Semua hak cipta
            dilindungi. Kami hadir untuk menyederhanakan kewajiban pajak Anda.
          </p>
        </footer>
      </main>
    </DefaultLayout>
  );
}
