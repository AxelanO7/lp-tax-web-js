"use client";

import { useState } from "react";

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

type ContactState = {
  name: string;
  email: string;
  phone: string;
};

type ErrorState = Record<string, string>;

const ADMIN_WHATSAPP_NUMBER = "6281234567890";

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

    const message = `Halo LP Tax Consultant,\n\nNama: ${contact.name}\nEmail: ${contact.email}\nNo. Telepon: ${contact.phone}\n\nLayanan yang saya butuhkan:\n\n${servicesList}\n\nPaket yang saya pilih: ${selectedPackage}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section className="mx-auto mt-12 max-w-3xl px-4">
      <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm md:p-8">
        <header className="mb-8 space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">
            Minta Penawaran &amp; Pendampingan Pajak
          </h2>
          <p className="text-sm text-slate-400 md:text-base">
            Pilih layanan yang Anda perlukan, lalu kami bantu melalui WhatsApp.
          </p>
        </header>

        <div className="space-y-8">
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-slate-100">
                Pilih Layanan yang Anda Butuhkan
              </h3>
              <p className="text-sm text-slate-400">
                Bisa pilih lebih dari satu.
              </p>
            </div>
            <div className="space-y-3">
              {SERVICE_OPTIONS.map((service) => {
                const id = service.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                const isChecked = selectedServices.includes(service);

                return (
                  <label
                    key={service}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-3 transition hover:border-emerald-500/40"
                    htmlFor={id}
                  >
                    <input
                      checked={isChecked}
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500/60"
                      id={id}
                      type="checkbox"
                      onChange={() => toggleService(service)}
                    />
                    <span className="text-sm text-slate-100">{service}</span>
                  </label>
                );
              })}
            </div>
            {errors.services ? (
              <p className="text-red-400 text-xs mt-2">{errors.services}</p>
            ) : null}
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-slate-100">
                Pilih Paket Utama
              </h3>
              <p className="text-sm text-slate-400">
                Satu paket utama yang paling sesuai dengan kebutuhan Anda.
              </p>
            </div>
            <div className="space-y-3">
              {PACKAGE_OPTIONS.map((pkg) => {
                const id = pkg.toLowerCase().replace(/[^a-z0-9]+/g, "-");

                return (
                  <label
                    key={pkg}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-3 transition hover:border-emerald-500/40"
                    htmlFor={id}
                  >
                    <input
                      checked={selectedPackage === pkg}
                      className="mt-1 h-4 w-4 border-slate-700 text-emerald-500 focus:ring-emerald-500/60"
                      id={id}
                      name="package"
                      type="radio"
                      onChange={() => handlePackageChange(pkg)}
                    />
                    <span className="text-sm text-slate-100">{pkg}</span>
                  </label>
                );
              })}
            </div>
            {errors.package ? (
              <p className="text-red-400 text-xs mt-2">{errors.package}</p>
            ) : null}
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-slate-100">
              Kontak Anda
            </h3>
            <div className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
                  id="name"
                  placeholder="Nama Lengkap"
                  type="text"
                  value={contact.name}
                  onChange={(event) =>
                    handleContactChange("name", event.target.value)
                  }
                />
                {errors.name ? (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
                  id="email"
                  placeholder="nama@email.com"
                  type="email"
                  value={contact.email}
                  onChange={(event) =>
                    handleContactChange("email", event.target.value)
                  }
                />
                {errors.email ? (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Nomor WhatsApp
                </label>
                <input
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
                  id="phone"
                  placeholder="08xxxxxxxxxx"
                  type="tel"
                  value={contact.phone}
                  onChange={(event) =>
                    handleContactChange("phone", event.target.value)
                  }
                />
                {errors.phone ? (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 font-medium text-slate-900 transition hover:bg-emerald-400"
              type="button"
              onClick={handleSubmit}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.52 3.48a11.78 11.78 0 0 0-17.9 14.26L2 22l4.39-1.15a11.77 11.77 0 0 0 5.68 1.45h.01c6.48 0 11.77-5.29 11.78-11.78a11.7 11.7 0 0 0-3.34-8.04ZM12.08 20.5h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-2.6.68.69-2.54-.24-.39a9.8 9.8 0 1 1 18.3-5.13 9.8 9.8 0 0 1-9.79 9.96Zm5.38-7.34c-.29-.14-1.7-.84-1.97-.93-.27-.1-.47-.14-.66.14-.2.29-.76.92-.93 1.11-.17.2-.34.22-.63.07-.29-.14-1.21-.45-2.3-1.45-.85-.76-1.42-1.7-1.58-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.2-.29.29-.48.1-.2.05-.36-.02-.51-.07-.14-.66-1.59-.91-2.18-.24-.58-.48-.5-.66-.51-.17 0-.36-.02-.56-.02-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.18 3 .15.2 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.35.24-.65.24-1.21.17-1.35-.07-.13-.26-.2-.55-.34Z" />
              </svg>
              Kirim via WhatsApp
            </button>
            <p className="text-center text-xs text-slate-500">
              Chat WhatsApp akan terbuka dan Anda bisa lanjut konsultasi tanpa
              biaya awal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestForm;
