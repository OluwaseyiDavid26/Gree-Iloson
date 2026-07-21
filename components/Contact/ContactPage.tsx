"use client";
import { useState } from "react";

// Replace with your actual Formspree endpoint — sign up free at formspree.io,
// create a form, and swap this ID for yours (e.g. "https://formspree.io/f/abcdwxyz")
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear that field's error the moment the user starts fixing it
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!formData.message.trim()) next.message = "Please add a message.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white">
      {/* ── MAIN CONTACT SECTION ─────────────────────── */}
      <section className="w-full px-5 sm:px-8 lg:px-14 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Info col (2/5) */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Intro */}
              <div>
                <h2
                  className="text-[#1A2B6B] font-bold leading-tight mb-4"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  Get in Touch
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you need steel products, cement supply, truck haulage
                  or engineering services — reach out and our team will get back
                  to you within 24 hours.
                </p>
              </div>

              {/* Contact info cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Call Us",
                    value: "09065611162",
                    href: "tel:09065611162",
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    accent: "#C49A3C",
                  },
                  {
                    label: "Email Us",
                    value: "info@Ilosongroup.com",
                    href: "mailto:info@Ilosongroup.com",
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    accent: "#1A2B6B",
                  },
                  {
                    label: "Visit Us",
                    value: ["28B, Ondo Road, Akure, Ondo State."],
                    href: "https://maps.google.com",
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    accent: "#C49A3C",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200 group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{
                        background: item.accent + "15",
                        color: item.accent,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      {Array.isArray(item.value) ? (
                        item.value.map((line, j) => (
                          <p
                            key={j}
                            className="text-[#1A2B6B] font-semibold text-sm"
                          >
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-[#1A2B6B] font-semibold text-sm">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349065611162"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 w-fit"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Socials */}
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      label: "Facebook",
                      href: "#",
                      icon: (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Instagram",
                      href: "#",
                      icon: (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle
                            cx="17.5"
                            cy="6.5"
                            r="1"
                            fill="currentColor"
                            stroke="none"
                          />
                        </svg>
                      ),
                    },
                    {
                      label: "Twitter",
                      href: "#",
                      icon: (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ),
                    },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-[#1A2B6B] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form col (3/5) */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 rounded-3xl border border-gray-100 bg-gray-50">
                  <div className="w-16 h-16 rounded-full bg-[#C49A3C]/15 flex items-center justify-center mb-6">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C49A3C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    className="text-[#1A2B6B] font-bold text-2xl mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-10"
                >
                  <h3
                    className="text-[#1A2B6B] font-bold text-xl mb-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Send Us a Message
                  </h3>
                  <p className="text-gray-400 text-sm mb-8">
                    Fill in the form below and we&apos;ll respond promptly.
                  </p>

                  <div className="flex flex-col gap-5">
                    {/* Name + Phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none transition-colors duration-200 ${
                            errors.name
                              ? "border-red-400 focus:border-red-400"
                              : "border-gray-200 focus:border-[#1A2B6B]"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs">{errors.name}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 xxx xxxx xxx"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1A2B6B] transition-colors duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@email.com"
                        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none transition-colors duration-200 ${
                          errors.email
                            ? "border-red-400 focus:border-red-400"
                            : "border-gray-200 focus:border-[#1A2B6B]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1A2B6B] transition-colors duration-200 appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="iron-steel">Iron & Steel Supply</option>
                        <option value="cement">Cement Distribution</option>
                        <option value="haulage">Truck Haulage & Leasing</option>
                        <option value="transformer">
                          Transformer Installation
                        </option>
                        <option value="borehole">Borehole Installation</option>
                        <option value="project-management">
                          Project Management
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or enquiry..."
                        rows={5}
                        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none transition-colors duration-200 resize-none ${
                          errors.message
                            ? "border-red-400 focus:border-red-400"
                            : "border-gray-200 focus:border-[#1A2B6B]"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs">{errors.message}</p>
                      )}
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-sm text-center">
                        Something went wrong sending your message — please try
                        again, or reach us directly via WhatsApp/phone above.
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-[#1A2B6B] hover:bg-[#152259] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1A2B6B]/20"
                    >
                      {status === "submitting" ? "Sending…" : "Send Message ↗"}
                    </button>

                    <p className="text-gray-300 text-xs text-center">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
