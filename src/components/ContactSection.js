"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const WHATSAPP_NUMBER = "27615444038";

const projectTypes = [
  "Residential Construction",
  "Interior Design",
  "Renovations",
  "Finishes",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // 1. Save to Supabase
      const { error } = await supabase.from("leads").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_type: form.projectType,
          message: form.message,
        },
      ]);

      if (error) throw error;

      // 2. Success state
      setSubmitted(true);

      // 3. Open WhatsApp
      const message = `
Hi Madolo Construction,

Name: ${form.name}
Phone: ${form.phone}
Project Type: ${form.projectType}

Message:
${form.message}
`;

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
      );

      // 4. Reset form
      setTimeout(() => {
        setSubmitted(false);

        setForm({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      }, 2500);
    } catch (err) {
      console.error("Error saving lead:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Image */}
          <div className="relative overflow-hidden h-72 lg:h-auto">
            <Image
              src="/images/request.jpeg"
              alt="Contact Maddlo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
          </div>

          {/* Right Form */}
          <div className="px-8 md:px-14 py-14 flex flex-col justify-center">
            <p className="font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] font-medium mb-2">
              Get in Touch
            </p>

            <h2 className="text-dark text-3xl md:text-4xl mb-8">
              Request a Free Quote
            </h2>

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700 font-body text-sm">
                ✅ Thank you! We&apos;ll be in touch shortly.
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-xs font-medium text-brand-text/60 uppercase tracking-wide block mb-1.5"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-body text-xs font-medium text-brand-text/60 uppercase tracking-wide block mb-1.5"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="font-body text-xs font-medium text-brand-text/60 uppercase tracking-wide block mb-1.5"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+27 000 000 0000"
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="font-body text-xs font-medium text-brand-text/60 uppercase tracking-wide block mb-1.5"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select type
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="font-body text-xs font-medium text-brand-text/60 uppercase tracking-wide block mb-1.5"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#eb191a] text-white font-body font-semibold text-sm py-4 hover:bg-[#c7000c] transition-colors duration-300 mt-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request a Free Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
