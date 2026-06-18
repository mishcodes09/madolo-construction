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
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error) setError("");
  };

  // Validate form before submission
  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Please enter your full name.");
      return false;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return false;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!form.projectType.trim()) {
      setError("Please select a project type.");
      return false;
    }

    if (!form.message.trim()) {
      setError("Please enter a message or project description.");
      return false;
    }

    if (form.message.trim().length < 10) {
      setError("Please enter a message with at least 10 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError("");

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // 1. Save to Supabase
      const { error: supabaseError } = await supabase.from("leads").insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_type: form.projectType,
          message: form.message,
        },
      ]);

      if (supabaseError) {
        // Handle specific Supabase errors
        if (supabaseError.code === "PGRST204") {
          throw new Error("Unable to save your information. Please try again.");
        }
        throw new Error(
          supabaseError.message ||
            "Failed to save your information. Please try again.",
        );
      }

      // 2. Attempt to open WhatsApp
      try {
        const message = `
Hi Maddlo Construction,

Name: ${form.name}
Phone: ${form.phone}
Project Type: ${form.projectType}

Message:
${form.message}
`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        const whatsappWindow = window.open(whatsappUrl, "_blank");

        // Check if WhatsApp window was blocked
        if (!whatsappWindow) {
          console.warn(
            "WhatsApp window may have been blocked by browser. Message saved but WhatsApp not opened.",
          );
        }
      } catch (whatsappError) {
        console.error("Error opening WhatsApp:", whatsappError);
        // Don't fail the entire submission if WhatsApp fails
      }

      // 3. Success state
      setSubmitted(true);

      // 4. Reset form after delay
      setTimeout(() => {
        setSubmitted(false);

        setForm({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      }, 3500);
    } catch (err) {
      console.error("Error submitting form:", err);

      // Display user-friendly error message
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";

      setError(errorMessage);

      // Attempt to submit via email as fallback if Supabase fails
      // This could be implemented with a serverless function like Vercel Edge Functions
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
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-700 font-body text-sm animate-in fade-in">
                ✅ Thank you! We&apos;ll be in touch shortly.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-700 font-body text-sm animate-in fade-in">
                ⚠️ {error}
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
                    disabled={loading}
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={loading}
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={loading}
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={loading}
                    className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={loading}
                  className="w-full font-body text-sm text-dark bg-brand-bg border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb191a]/30 focus:border-[#eb191a] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-[#eb191a] text-white font-body font-semibold text-sm py-4 hover:bg-[#c7000c] transition-colors duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Sending..."
                  : submitted
                    ? "✓ Message Sent"
                    : "Request a Free Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
