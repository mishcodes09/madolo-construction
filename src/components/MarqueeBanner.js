const items = [
  "Residential Construction",
  "Renovations",
  "Finishes",
  "Free Quotations",
  "Residential Construction",
  "Renovations",
  "Finishes",
  "Free Quotations",
  "Residential Construction",
  "Renovations",
  "Finishes",
  "Free Quotations",
  "Residential Construction",
  "Renovations",
  "Finishes",
  "Free Quotations",
];

export default function MarqueeBanner() {
  return (
    <div className="bg-dark py-4 overflow-hidden">
      <div className="marquee-track whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="inline-flex items-center gap-4 mr-8">
            <span className="font-body text-white/90 text-sm tracking-wide">
              {item}
            </span>
            <span className="text-[#eb191a] text-lg">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
