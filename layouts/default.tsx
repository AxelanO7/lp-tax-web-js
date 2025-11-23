import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Head />
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Pajakita Consultant
            </p>
            <p className="text-xl font-semibold text-white sm:text-2xl">
              Solusi Pajak Profesional dan Terpercaya
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/50 px-5 py-2 font-medium text-emerald-300 transition hover:border-emerald-300 hover:text-white"
              href="mailto:free_corner200460@yahoo.com"
            >
              free_corner200460@yahoo.com
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 font-semibold text-slate-900 shadow-lg transition hover:bg-emerald-300"
              href="https://wa.me/6281234567890"
              rel="noreferrer"
              target="_blank"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2 text-sm text-slate-300">
            <p className="text-base font-semibold text-white">
              Pajakita Consultant
            </p>
            <p>
              Jalan Sunset Road No.89, Ruko Sunset Indah I No.Kav 1, Kuta,
              Badung Regency, Bali 80361
            </p>
            {/* <p>NPWP: 12.345.678.9-012.000</p> */}
          </div>
          <div className="space-y-2 text-sm text-slate-400">
            <p className="font-semibold uppercase tracking-wider text-slate-200">
              Informasi Kontak
            </p>
            <p>Telepon: +62 812-3456-7890</p>
            <p>Email: free_corner200460@yahoo.com</p>
            <p>WhatsApp: +62 812-3456-7890</p>
          </div>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="font-semibold uppercase tracking-wider text-slate-200">
              Jam Operasional
            </p>
            <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
            <p>Sabtu: 09.00 - 14.00 WIB</p>
            <p>Minggu &amp; Hari Libur: Tutup</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
