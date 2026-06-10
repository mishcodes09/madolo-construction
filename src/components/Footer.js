// components/Footer.jsx
import React from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nkosiyazidlamin?_r=1&_t=ZS-96iIoFy5kbi",
    icon: "tiktok",
  },
];

const TikTokIcon = () => (
  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.5 2h2.5a5.5 5.5 0 005.5 5.5V10a8 8 0 01-5-1.6V15a6 6 0 11-6-6c.3 0 .6 0 .9.1v3.1a3 3 0 10-2.9 2.9 3 3 0 002.9-2.9V2z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0 text-primary"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0 text-primary"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const getSocialIcon = (icon) => {
  switch (icon) {
    case "tiktok":
      return <TikTokIcon />;
    default:
      return null;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/transparent.png"
                alt="Madolo Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              Premium construction and interior design solutions built on trust,
              precision, and decades of expertise.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary transition-colors duration-200 flex items-center justify-center"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Navigation
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-white/50 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm font-body text-white/50">
              {/* Address */}
              <li className="flex items-start gap-2">
                <LocationIcon />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=East+London+Eastern+Cape+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  East London, Eastern Cape, South Africa
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2">
                <PhoneIcon />
                <a
                  href="tel:+27615444038"
                  className="hover:text-primary transition-colors"
                >
                  +27 61 544 4038
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2">
                <EmailIcon />
                <a
                  href="mailto:info@madolo.org.za"
                  className="hover:text-primary transition-colors"
                >
                  info@madolo.org.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-sm">
            &copy; {currentYear} Madolo Innovative Construction.
          </p>
          <p className="font-body text-white/30 text-sm">
            A division of Isakhono Inovations (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
