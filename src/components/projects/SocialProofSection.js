"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TIKTOK_PROFILE = "https://www.tiktok.com/@nkosiyazidlamin";

const videos = [
  {
    id: 1,
    videoSrc: "/videos/project1.mp4",
    title: "Installing Architrave Doors",
    caption:
      "Watch how we transform a space with precision architrave door installation. Every detail matters — from frame to finish.",
    views: "2.1M",
    likes: "184K",
    shares: "12K",
    tags: ["#Construction", "#Doors", "#Maddlo"],
    link: "https://www.tiktok.com/@nkosiyazidlamin/video/7437177862668455224?_r=1&_t=ZS-96iIoFy5kbi",
  },
  {
    id: 2,
    videoSrc: "/videos/project2.mp4",
    title: "Deckboard Installation",
    caption:
      "Step-by-step deckboard installation. See the craftsmanship that goes into every outdoor living space we build.",
    views: "15K",
    likes: "2.1K",
    shares: "340",
    tags: ["#Decking", "#OutdoorLiving", "#Maddlo"],
    link: "https://www.tiktok.com/@nkosiyazidlamin/video/7519896711595068678?is_from_webapp=1&sender_device=pc",
  },
  {
    id: 3,
    videoSrc: "/videos/project3.mp4",
    title: "Interior Transformation",
    caption:
      "Before and after — a complete interior transformation. From bare walls to a stunning finished space.",
    views: "31K",
    likes: "4.8K",
    shares: "890",
    tags: ["#Interior", "#Renovation", "#Maddlo"],
    link: "https://www.tiktok.com/@nkosiyazidlamin/video/7614925860897934613?is_from_webapp=1&sender_device=pc",
  },
];

export default function SocialProofSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef([]);
  const scrollRef = useRef(null);
  const programmaticScroll = useRef(false);

  // Play/pause videos based on active index
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentVideo) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [currentVideo]);

  // Sync mute state to all video elements
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) v.muted = muted;
    });
  }, [muted]);

  const goToVideo = useCallback((index) => {
    const next = Math.max(0, Math.min(videos.length - 1, index));
    setCurrentVideo(next);
    if (scrollRef.current) {
      programmaticScroll.current = true;
      scrollRef.current.scrollTo({
        top: next * scrollRef.current.clientHeight,
        behavior: "smooth",
      });
      setTimeout(() => {
        programmaticScroll.current = false;
      }, 700);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (programmaticScroll.current || !scrollRef.current) return;
    const idx = Math.round(
      scrollRef.current.scrollTop / scrollRef.current.clientHeight,
    );
    if (idx !== currentVideo && idx >= 0 && idx < videos.length) {
      setCurrentVideo(idx);
    }
  }, [currentVideo]);

  const handleEnded = useCallback(() => {
    goToVideo((currentVideo + 1) % videos.length);
  }, [currentVideo, goToVideo]);

  const active = videos[currentVideo];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-10xl mx-auto px-10 md:px-20 lg:px-16">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <p className="font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] font-medium mb-3">
              Our Work
            </p>
            <h2 className="text-dark text-3xl md:text-4xl">
              Take a look at our projects
            </h2>
          </div>
          <a
            href={TIKTOK_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-dark hover:text-[#eb191a] transition-colors duration-200"
          >
            Follow us on TikTok →
          </a>
        </div>

        {/* ── Main Content ── */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 xl:gap-24">
          {/* ────────────────────────────────────────
              LEFT: Phone Mockup with TikTok Scroll
          ──────────────────────────────────────── */}
          <div className="flex-shrink-0 flex flex-col items-center ml-6 md:ml-10 lg:ml-16">
            {/* Phone frame */}
            <div className="relative" style={{ width: 288, height: 580 }}>
              {/* Outer shell */}
              <div className="absolute inset-0 rounded-[44px] bg-[#111111] shadow-[0_32px_80px_rgba(0,0,0,0.28),_0_8px_24px_rgba(0,0,0,0.18)]" />

              {/* Side buttons */}
              <div className="absolute -left-[3px] top-[86px]  w-[3px] h-7 rounded-l bg-[#2c2c2c]" />
              <div className="absolute -left-[3px] top-[124px] w-[3px] h-10 rounded-l bg-[#2c2c2c]" />
              <div className="absolute -left-[3px] top-[172px] w-[3px] h-10 rounded-l bg-[#2c2c2c]" />
              <div className="absolute -right-[3px] top-[118px] w-[3px] h-14 rounded-r bg-[#2c2c2c]" />

              {/* Screen */}
              <div className="absolute inset-[5px] rounded-[40px] overflow-hidden bg-black">
                {/* Status bar */}
                <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-5 pt-[14px]">
                  <span
                    className="text-white font-semibold"
                    style={{ fontSize: 11 }}
                  >
                    9:41
                  </span>
                  {/* Dynamic island */}
                  <div className="absolute top-[10px] inset-x-0 flex justify-center pointer-events-none">
                    <div className="w-[88px] h-[26px] bg-black rounded-full" />
                  </div>
                  {/* Status icons */}
                  <div className="flex items-center gap-[4px]">
                    <div className="flex items-end gap-[2px]">
                      {[3, 5, 7, 9].map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] bg-white rounded-sm"
                          style={{ height: h }}
                        />
                      ))}
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-3 h-3 ml-0.5"
                    >
                      <path
                        d="M1.42 9a16 16 0 0 1 21.16 0M5 12.55a11 11 0 0 1 14.08 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="flex items-center gap-[2px] ml-0.5">
                      <div className="w-[18px] h-[9px] border border-white/70 rounded-[2px] flex items-center px-[2px]">
                        <div className="flex-1 h-[5px] bg-white rounded-[1px]" />
                      </div>
                      <div className="w-[2px] h-[5px] bg-white/50 rounded-r-[1px]" />
                    </div>
                  </div>
                </div>

                {/* TikTok video feed */}
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-scroll"
                  style={{
                    scrollSnapType: "y mandatory",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className="relative flex-shrink-0"
                      style={{ height: "100%", scrollSnapAlign: "start" }}
                    >
                      {/* Video */}
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={video.videoSrc}
                        muted={muted}
                        playsInline
                        preload="metadata"
                        onEnded={
                          index === currentVideo ? handleEnded : undefined
                        }
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25 pointer-events-none" />

                      {/* ── TikTok Right-side actions ── */}
                      <div className="absolute right-3 bottom-[88px] flex flex-col items-center gap-4 z-10">
                        {/* Profile avatar + follow */}
                        <div className="relative mb-2">
                          <div className="w-9 h-9 rounded-full border-2 border-white bg-[#eb191a]/70 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-b from-[#eb191a]/60 to-[#eb191a]" />
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#E9010E] rounded-full flex items-center justify-center">
                            <span
                              className="text-white leading-none select-none"
                              style={{ fontSize: 10 }}
                            >
                              +
                            </span>
                          </div>
                        </div>

                        {/* Like */}
                        <div className="flex flex-col items-center gap-0.5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-6 h-6 drop-shadow"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span
                            className="text-white font-semibold drop-shadow"
                            style={{ fontSize: 9 }}
                          >
                            {video.likes}
                          </span>
                        </div>

                        {/* Comment */}
                        <div className="flex flex-col items-center gap-0.5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="w-6 h-6 drop-shadow"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span
                            className="text-white font-semibold drop-shadow"
                            style={{ fontSize: 9 }}
                          >
                            {video.shares}
                          </span>
                        </div>

                        {/* Bookmark */}
                        <div className="flex flex-col items-center gap-0.5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="w-6 h-6 drop-shadow"
                          >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                          <span
                            className="text-white font-semibold drop-shadow"
                            style={{ fontSize: 9 }}
                          >
                            Save
                          </span>
                        </div>

                        {/* Share */}
                        <div className="flex flex-col items-center gap-0.5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="w-6 h-6 drop-shadow"
                          >
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                          </svg>
                          <span
                            className="text-white font-semibold drop-shadow"
                            style={{ fontSize: 9 }}
                          >
                            Share
                          </span>
                        </div>
                      </div>

                      {/* ── Bottom: username / caption / tags / music ── */}
                      <div className="absolute bottom-6 left-3 right-14 z-10">
                        <p
                          className="text-white font-bold leading-tight"
                          style={{ fontSize: 11 }}
                        >
                          @nkosiyazidlamin
                        </p>
                        <p
                          className="text-white mt-0.5 leading-snug"
                          style={{ fontSize: 10 }}
                        >
                          {video.title}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {video.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-white/65"
                              style={{ fontSize: 9 }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Music ticker */}
                        <div className="flex items-center gap-1 mt-1.5">
                          <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-2.5 h-2.5 flex-shrink-0"
                          >
                            <path d="M9 18V5l12-2v13" />
                            <circle cx="6" cy="18" r="3" />
                            <circle cx="18" cy="16" r="3" />
                          </svg>
                          <span
                            className="text-white/60 truncate"
                            style={{ fontSize: 9 }}
                          >
                            Maddlo Construction
                          </span>
                        </div>
                      </div>

                      {/* ── Mute toggle ── */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setMuted((m) => !m);
                        }}
                        className="absolute z-20 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center"
                        style={{ top: 52, right: 12 }}
                        aria-label={muted ? "Unmute" : "Mute"}
                      >
                        {muted ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="w-3.5 h-3.5"
                          >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <line x1="23" y1="9" x2="17" y2="15" />
                            <line x1="17" y1="9" x2="23" y2="15" />
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="w-3.5 h-3.5"
                          >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                        )}
                      </button>

                      {/* ── Progress dots ── */}
                      <div
                        className="absolute z-20 flex gap-1.5"
                        style={{
                          top: 52,
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {videos.map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-full bg-white transition-all duration-300 ${
                              i === index ? "opacity-100" : "opacity-40"
                            }`}
                            style={{ width: i === index ? 18 : 6, height: 6 }}
                          />
                        ))}
                      </div>

                      {/* Home indicator */}
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-[4px] rounded-full bg-white/35 z-10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile navigation (visible below lg) */}
            <div className="flex items-center gap-5 mt-5 lg:hidden">
              <button
                onClick={() => goToVideo(currentVideo - 1)}
                disabled={currentVideo === 0}
                className="w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center disabled:opacity-25 hover:border-dark/50 transition-colors"
                aria-label="Previous video"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="font-body text-sm text-dark/50 tabular-nums">
                {currentVideo + 1} / {videos.length}
              </span>
              <button
                onClick={() => goToVideo(currentVideo + 1)}
                disabled={currentVideo === videos.length - 1}
                className="w-10 h-10 rounded-full border border-dark/20 flex items-center justify-center disabled:opacity-25 hover:border-dark/50 transition-colors"
                aria-label="Next video"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ────────────────────────────────────────
              RIGHT: Info Panel
          ──────────────────────────────────────── */}
          <div className="flex-1 min-w-0 w-full">
            {/* TikTok handle */}
            <a
              href={TIKTOK_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-10 group"
            >
              <div className="w-7 h-7 bg-[#010101] rounded-lg flex items-center justify-center flex-shrink-0">
                {/* TikTok logo */}
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" />
                </svg>
              </div>
              <span className="font-body text-sm text-dark/60 group-hover:text-[#eb191a] transition-colors duration-200">
                @nkosiyazidlamin
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-3 h-3 text-dark/30 group-hover:text-[#eb191a] transition-colors duration-200"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>

            {/* ── Desktop: Step Timeline ── */}
            <div className="hidden lg:block">
              {videos.map((video, index) => {
                const isActive = index === currentVideo;
                const isPast = index < currentVideo;
                const isFuture = index > currentVideo;

                return (
                  <div key={video.id} className="relative flex gap-6">
                    {/* Vertical line connecting steps */}
                    {index < videos.length - 1 && (
                      <div
                        className="absolute left-[9px] top-5 bottom-0 w-[2px] transition-all duration-500"
                        style={{
                          backgroundColor: isFuture
                            ? "rgba(17,17,17,0.1)"
                            : "#111111",
                        }}
                      />
                    )}

                    {/* Step dot */}
                    <div className="relative z-10 flex-shrink-0 pt-[5px]">
                      <div
                        className="w-[18px] h-[18px] rounded-full border-2 transition-all duration-300"
                        style={{
                          backgroundColor: isActive
                            ? "#111111"
                            : isPast
                              ? "rgba(17,17,17,0.35)"
                              : "transparent",
                          borderColor: isActive
                            ? "#111111"
                            : isPast
                              ? "rgba(17,17,17,0.35)"
                              : "rgba(17,17,17,0.15)",
                        }}
                      />
                    </div>

                    {/* Step content */}
                    <button
                      onClick={() => goToVideo(index)}
                      className={`pb-10 last:pb-0 text-left flex-1 min-w-0 group ${index === videos.length - 1 ? "pb-0" : "pb-10"}`}
                    >
                      <h3
                        className="text-2xl md:text-3xl leading-tight mb-2 transition-all duration-300"
                        style={{
                          color: isActive
                            ? "#111111"
                            : isPast
                              ? "rgba(17,17,17,0.38)"
                              : "rgba(17,17,17,0.18)",
                        }}
                      >
                        {video.title}
                      </h3>

                      <p
                        className="font-body text-sm leading-relaxed transition-all duration-300"
                        style={{
                          color: isActive
                            ? "rgba(17,17,17,0.55)"
                            : "rgba(17,17,17,0.18)",
                        }}
                      >
                        {video.caption}
                      </p>

                      {/* Stats — only for active video */}
                      {isActive && (
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
                          <span className="font-body text-xs text-dark/40 flex items-center gap-1.5">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="w-3.5 h-3.5 flex-shrink-0"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            {video.views} views
                          </span>
                          <span className="font-body text-xs text-dark/40 flex items-center gap-1.5">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="w-3.5 h-3.5 flex-shrink-0"
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            {video.likes} likes
                          </span>
                          <a
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-body text-xs text-[#eb191a] hover:underline transition-colors duration-200"
                          >
                            Watch on TikTok →
                          </a>
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* ── Mobile: Current video info card ── */}
            <div className="lg:hidden">
              <div className="border-l-2 border-dark pl-5">
                <h3 className="text-2xl text-dark leading-tight mb-2">
                  {active.title}
                </h3>
                <p className="font-body text-sm text-dark/55 leading-relaxed mb-4">
                  {active.caption}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="font-body text-xs text-dark/40 flex items-center gap-1.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {active.views} views
                  </span>
                  <span className="font-body text-xs text-dark/40 flex items-center gap-1.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {active.likes} likes
                  </span>
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs text-[#eb191a] hover:underline"
                  >
                    Watch on TikTok →
                  </a>
                </div>
              </div>
            </div>

            {/* ── CTAs ── */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 lg:mt-12">
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-3 bg-[#E9010E] text-white px-8 py-4 font-body font-medium hover:bg-[#c7000c] transition-all duration-300 hover:scale-[1.02]"
              >
                View All Projects
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={TIKTOK_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-dark/20 text-dark px-8 py-4 font-body font-medium hover:border-dark/40 transition-all duration-300"
              >
                Follow on TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
