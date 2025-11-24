"use client";

import { useMemo, useState } from "react";

const SERVICE_OPTIONS = [
  "Konsultasi Pajak Pribadi",
  "Penyusunan & Pelaporan SPT",
  "Pendampingan Pemeriksaan Pajak",
  "Konsultasi Pajak Badan / PT / CV",
];

const PACKAGE_OPTIONS = [
  "Paket Basic (untuk kebutuhan pajak individu sederhana)",
  "Paket Pro (untuk freelancer / UMKM dengan beberapa sumber penghasilan)",
  "Paket Badan Usaha (PT / CV / Yayasan)",
  "Paket Full Pendampingan Pemeriksaan",
];

const HIGHLIGHTS = [
  {
    title: "Tim konsultan senior",
    description:
      "Lebih dari 10 tahun mendampingi wajib pajak individu dan badan.",
  },
  {
    title: "Pendampingan end-to-end",
    description:
      "Mulai dari konsultasi awal sampai laporan selesai dan siap kirim.",
  },
  {
    title: "Respon WhatsApp cepat",
    description: "Dalam hitungan jam di hari kerja, tanpa biaya awal.",
  },
];

type ContactState = {
  name: string;
  email: string;
  phone: string;
};

type ErrorState = Record<string, string>;

const ADMIN_WHATSAPP_NUMBER = "628117697999";

const QuoteRequestForm = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [contact, setContact] = useState<ContactState>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<ErrorState>({});

  const toggleService = (service: string) => {
    setSelectedServices((prev) => {
      const nextSelection = prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service];

      if (nextSelection.length > 0) {
        setErrors((prevErrors) => {
          if (!prevErrors.services) {
            return prevErrors;
          }

          const nextErrors = { ...prevErrors };

          delete nextErrors.services;

          return nextErrors;
        });
      }

      return nextSelection;
    });
  };

  const handlePackageChange = (pkg: string) => {
    setSelectedPackage(pkg);
    setErrors((prev) => {
      if (!prev.package) {
        return prev;
      }

      const nextErrors = { ...prev };

      delete nextErrors.package;

      return nextErrors;
    });
  };

  const handleContactChange = (field: keyof ContactState, value: string) => {
    setContact((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const nextErrors = { ...prev };

      delete nextErrors[field];

      return nextErrors;
    });
  };

  const validate = () => {
    const nextErrors: ErrorState = {};

    if (selectedServices.length === 0) {
      nextErrors.services = "Pilih minimal satu layanan.";
    }

    if (!selectedPackage) {
      nextErrors.package = "Pilih paket utama Anda.";
    }

    if (!contact.name.trim()) {
      nextErrors.name = "Nama lengkap wajib diisi.";
    }

    if (!contact.email.trim()) {
      nextErrors.email = "Email wajib diisi.";
    } else if (!contact.email.includes("@")) {
      nextErrors.email = "Masukkan email yang valid.";
    }

    if (!contact.phone.trim()) {
      nextErrors.phone = "Nomor WhatsApp wajib diisi.";
    }

    return nextErrors;
  };

  const previewMessage = useMemo(() => {
    const hasInput =
      contact.name.trim() ||
      contact.email.trim() ||
      contact.phone.trim() ||
      selectedServices.length > 0 ||
      selectedPackage;

    if (!hasInput) {
      return "Pesan WhatsApp Anda akan terlihat di sini setelah mengisi form.";
    }

    const servicesList =
      selectedServices.length > 0
        ? selectedServices.map((service) => `• ${service}`).join("\n")
        : "Belum memilih layanan";

    return `Halo Pajakita Consultant,\n\nNama: ${contact.name || "-"}\nEmail: ${
      contact.email || "-"
    }\nNo. Telepon: ${contact.phone || "-"}\n\nLayanan yang saya butuhkan:\n${
      servicesList || "-"
    }\n\nPaket yang saya pilih: ${selectedPackage || "Belum memilih"}`;
  }, [contact, selectedPackage, selectedServices]);

  const handleSubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return;
    }

    setErrors({});

    const servicesList = selectedServices
      .map((service) => `* ${service}`)
      .join("\n");

    const message = `Halo Pajakita Consultant,\n\nNama: ${contact.name}\nEmail: ${contact.email}\nNo. Telepon: ${contact.phone}\n\nLayanan yang saya butuhkan:\n\n${servicesList}\n\nPaket yang saya pilih: ${selectedPackage}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#050d16] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
                Solusi Pajak Profesional
              </p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-50 sm:text-4xl">
                Urusan Pajak Lebih Mudah Bersama Pajakita Consultant
              </h1>
              <p className="mt-4 text-base text-slate-300">
                Pilih paket pendampingan pajak yang paling sesuai, isi data
                kontak, dan kami akan menindaklanjuti melalui WhatsApp dalam
                hitungan jam kerja.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/5 bg-slate-900/80 p-5 shadow-inner shadow-black/20"
                  >
                    <h3 className="text-sm font-semibold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur">
              <h2 className="text-2xl font-semibold text-slate-50">
                Pilih Layanan yang Anda Butuhkan
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Anda dapat memilih lebih dari satu layanan pendampingan.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {SERVICE_OPTIONS.map((service) => {
                  const id = service.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  const isChecked = selectedServices.includes(service);

                  return (
                    <label
                      key={service}
                      aria-label={service}
                      className={`group relative flex cursor-pointer flex-col gap-3 rounded-2xl border p-5 transition focus-within:ring-2 focus-within:ring-emerald-500/60 focus-within:ring-offset-2 focus-within:ring-offset-slate-950 ${
                        isChecked
                          ? "border-emerald-500/60 bg-emerald-500/10"
                          : "border-white/10 bg-slate-950/60 hover:border-emerald-400/40"
                      }`}
                      htmlFor={id}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-semibold text-slate-100">
                          {service}
                        </span>
                        <span
                          className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs font-semibold ${
                            isChecked
                              ? "border-emerald-400 bg-emerald-500 text-slate-950"
                              : "border-slate-600 text-slate-500"
                          }`}
                        >
                          {isChecked ? "✓" : "+"}
                        </span>
                      </div>
                      <input
                        checked={isChecked}
                        className="sr-only"
                        id={id}
                        type="checkbox"
                        onChange={() => toggleService(service)}
                      />
                    </label>
                  );
                })}
              </div>
              {errors.services ? (
                <p className="mt-3 text-xs text-red-400">{errors.services}</p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-xl backdrop-blur">
              <h2 className="text-xl font-semibold text-slate-50">
                Pilih Paket Pendampingan
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Paket utama menentukan cakupan layanan dan intensitas
                pendampingan tim kami.
              </p>
              <div className="mt-6 space-y-4">
                {PACKAGE_OPTIONS.map((pkg) => {
                  const id = pkg.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  const isActive = selectedPackage === pkg;

                  return (
                    <label
                      key={pkg}
                      aria-label={pkg}
                      className={`relative flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition focus-within:ring-2 focus-within:ring-emerald-500/60 focus-within:ring-offset-2 focus-within:ring-offset-slate-950 ${
                        isActive
                          ? "border-emerald-500/60 bg-emerald-500/10 shadow-lg shadow-emerald-500/20"
                          : "border-white/10 bg-slate-950/60 hover:border-emerald-400/40"
                      }`}
                      htmlFor={id}
                    >
                      <span
                        className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 text-[10px] font-bold ${
                          isActive
                            ? "border-emerald-400 bg-emerald-500 text-slate-950"
                            : "border-slate-600 text-slate-400"
                        }`}
                      >
                        {isActive ? "✓" : ""}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-50">
                          {pkg}
                        </p>
                        <p className="mt-2 text-xs text-slate-400">
                          Pilih paket ini bila cakupan pekerjaan pajak Anda
                          sesuai dengan deskripsinya.
                        </p>
                      </div>
                      <input
                        checked={isActive}
                        className="sr-only"
                        id={id}
                        name="package"
                        type="radio"
                        onChange={() => handlePackageChange(pkg)}
                      />
                    </label>
                  );
                })}
              </div>
              {errors.package ? (
                <p className="mt-3 text-xs text-red-400">{errors.package}</p>
              ) : null}
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-xl backdrop-blur">
              <h2 className="text-xl font-semibold text-slate-50">
                Lengkapi Data Kontak
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Kami akan segera menghubungi Anda melalui WhatsApp setelah form
                ini terkirim.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <label
                    className="text-xs font-medium text-slate-300"
                    htmlFor="name"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                    id="name"
                    placeholder="Nama Lengkap"
                    type="text"
                    value={contact.name}
                    onChange={(event) =>
                      handleContactChange("name", event.target.value)
                    }
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    className="text-xs font-medium text-slate-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                    id="email"
                    placeholder="nama@email.com"
                    type="email"
                    value={contact.email}
                    onChange={(event) =>
                      handleContactChange("email", event.target.value)
                    }
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    className="text-xs font-medium text-slate-300"
                    htmlFor="phone"
                  >
                    Nomor WhatsApp
                  </label>
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                    id="phone"
                    placeholder="08xxxxxxxxxx"
                    type="tel"
                    value={contact.phone}
                    onChange={(event) =>
                      handleContactChange("phone", event.target.value)
                    }
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-medium text-slate-900 transition hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
                  type="button"
                  onClick={handleSubmit}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.52 3.48a11.78 11.78 0 0 0-17.9 14.26L2 22l4.39-1.15a11.77 11.77 0 0 0 5.68 1.45h.01c6.48 0 11.77-5.29 11.78-11.78a11.7 11.7 0 0 0-3.34-8.04ZM12.08 20.5h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-2.6.68.69-2.54-.24-.39a9.8 9.8 0 1 118.3-5.13 9.8 9.8 0 0 1-9.79 9.96Zm5.38-7.34c-.29-.14-1.7-.84-1.97-.93-.27-.1-.47-.14-.66.14-.2.29-.76.92-.93 1.11-.17.2-.34.22-.63.07-.29-.14-1.21-.45-2.3-1.45-.85-.76-1.42-1.7-1.58-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.2-.29.29-.48.1-.2.05-.36-.02-.51-.07-.14-.66-1.59-.91-2.18-.24-.58-.48-.5-.66-.51-.17 0-.36-.02-.56-.02-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.18 3 .15.2 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.35.24-.65.24-1.21.17-1.35-.07-.13-.26-.2-.55-.34Z" />
                  </svg>
                  Kirim via WhatsApp
                </button>
                <p className="text-center text-xs text-slate-500">
                  Chat WhatsApp akan terbuka dan Anda bisa lanjut konsultasi
                  tanpa biaya awal.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-500/20 bg-slate-950/70 p-6 text-sm text-slate-300 shadow-lg shadow-emerald-500/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  Preview Pesan WhatsApp
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
                  Terkirim Aman
                </span>
              </div>
              <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/5 bg-slate-900/70 p-4 font-sans text-xs leading-relaxed text-slate-200">
                {previewMessage}
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center text-sm text-slate-400 shadow-xl backdrop-blur">
          <p>
            Pertanyaan umum seputar pajak? Tim kami siap menjawab dan membantu
            Anda merancang strategi yang paling efisien untuk kebutuhan pajak
            pribadi maupun bisnis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestForm;
