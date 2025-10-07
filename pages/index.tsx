import { FormEvent, useState } from "react";

import DefaultLayout from "@/layouts/default";

const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number when available
const whatsappMessage =
  "Hello, I'm interested in your tax services. Please help me with more details.";

const services = [
  {
    title: "Tax Consultation",
    description:
      "Work one-on-one with experienced tax specialists who tailor guidance to your personal or business needs.",
  },
  {
    title: "Tax Filing Service",
    description:
      "Let us prepare, review, and file your taxes with speed, accuracy, and complete peace of mind.",
  },
  {
    title: "Compliance Reviews",
    description:
      "Stay ahead of changing regulations with proactive compliance audits and planning sessions.",
  },
];

const advantages = [
  "Trusted by thousands of clients",
  "Experienced Tax Professionals",
  "Affordable & Transparent Pricing",
  "Quick & Secure Online Process",
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer:
      "Book a consultation in minutes and receive personalized tax guidance within 24 hours.",
  },
  {
    question: "Can you help with both personal and business taxes?",
    answer:
      "Yes, our advisors support individuals, freelancers, and businesses of every size.",
  },
  {
    question: "Is the online process secure?",
    answer:
      "Absolutely—your financial data is encrypted end-to-end and handled by vetted professionals.",
  },
];

const testimonials = [
  {
    name: "Jordan M.",
    role: "Small Business Owner",
    quote:
      "They handled every detail of my quarterly filings so I could focus on growing my company.",
  },
  {
    name: "Priya S.",
    role: "Freelance Designer",
    quote:
      "Affordable, fast, and incredibly reassuring—my tax season has never been smoother.",
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
      `Hello, I'm interested in your tax services.\n\nName: ${formState.name}\nEmail: ${formState.email}\nNeeds: ${formState.needs || "General Inquiry"}`,
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
                Easily Handle Your Taxes with Us
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Simplify Your Tax Journey Today!
              </h1>
              <p className="max-w-xl text-lg text-slate-200">
                Get personalized tax help, tailored to your needs. We make
                filing painless for individuals and businesses alike—no jargon,
                no stress.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-semibold text-white">
                    [Your Business Name]
                  </p>
                  <p>www.yourwebsite.com</p>
                  <p>contact@yourbusiness.com</p>
                  <p>WhatsApp: +1 (234) 567-8901</p>
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
                    Chat with Us on WhatsApp
                    <span aria-hidden className="text-lg">
                      →
                    </span>
                  </button>
                  <p className="text-xs text-slate-400">
                    We respond in under 15 minutes during business hours.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wider text-slate-400">
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Featured on Finance Today
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Trusted by 1,200+ Clients
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Partnered with LedgerPro
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative mx-auto max-w-md rounded-3xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                <h2 className="text-2xl font-semibold text-white">
                  Fast, Reliable, and Affordable Tax Solutions
                </h2>
                <p className="mt-3 text-sm text-slate-200">
                  Explore our services and discover how our experts keep your
                  taxes accurate, compliant, and stress-free all year round.
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

        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-6 rounded-3xl bg-white p-10 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="group rounded-2xl border border-transparent bg-slate-50 p-6 text-slate-900 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center gap-3 text-lg font-semibold">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition group-hover:scale-105">
                    ✓
                  </span>
                  {advantage}
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Our team delivers consistent results backed by decades of
                  combined experience and innovative digital tools.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Success Stories from Real Clients
            </h2>
            <p className="text-base text-slate-600">
              Discover how our tax experts have supported entrepreneurs,
              freelancers, and families to maximize returns while staying
              compliant.
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
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">
                Watch how we simplify taxes
              </h3>
              <p className="text-sm text-slate-200">
                Share your success story or embed a short explainer video to
                show clients what to expect when working with your team.
              </p>
            </div>
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-slate-200">
              Video Placeholder
            </div>
            <div className="space-y-2 text-sm text-slate-200">
              <p className="font-semibold text-white">
                Need expert advice now?
              </p>
              <p>
                Our certified professionals are ready to step in with actionable
                insights, audit support, and year-round planning.
              </p>
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
              Chat with Us on WhatsApp
            </button>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl rounded-3xl bg-white px-6 py-16 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Ready to Experience Stress-Free Taxes?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Send us a message and our team will reach out with tailored
              solutions for your personal or business tax needs.
            </p>
          </div>
          <form
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  required
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  placeholder="Your full name"
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
                  placeholder="you@example.com"
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
              What do you need help with?
              <textarea
                className="min-h-[120px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="Tell us about your tax situation"
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
              Chat with Us on WhatsApp
              <span aria-hidden>→</span>
            </button>
            <p className="text-center text-xs text-slate-500">
              By clicking send, you&apos;ll be redirected to WhatsApp with your
              information pre-filled.
            </p>
          </form>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl bg-white px-8 py-12 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
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
            © {new Date().getFullYear()} [Your Business Name]. All rights
            reserved. Crafted to help you take the stress out of tax season.
          </p>
        </footer>
      </main>
    </DefaultLayout>
  );
}
