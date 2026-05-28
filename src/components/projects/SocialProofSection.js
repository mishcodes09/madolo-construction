const videos = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    title: "Luxury Residential Build Progress",
    views: "24K views",
    link: "https://tiktok.com",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    title: "Behind The Scenes On Site",
    views: "18K views",
    link: "https://tiktok.com",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    title: "Interior Transformation Reveal",
    views: "31K views",
    link: "https://tiktok.com",
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
              Social Content
            </p>

            <h2 className="text-dark text-3xl md:text-4xl">Keep Up With Us</h2>
          </div>

          <a
            href="https://www.tiktok.com/@nkosiyazidlamin?_r=1&_t=ZS-96iIoFy5kbi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-dark hover:text-primary transition-colors duration-200"
          >
            Follow us on TikTok →
          </a>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-dark" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-dark text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                  {video.title}
                </h3>

                <p className="font-body text-sm text-brand-text/60">
                  {video.views}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
