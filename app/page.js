"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Menu, PhoneCall, X } from "lucide-react";

const slides = [
  "/slider/slide1.jpg",
  "/slider/slide2.jpg",
  "/slider/slide3.jpg",
  "/slider/slide4.jpg",
  "/slider/slide5.jpg",
  "/slider/slide6.jpg",
  "/slider/slide7.jpg",
  "/slider/slide8.jpg",
  "/slider/slide9.jpg",
  "/slider/slide10.jpg",
  "/slider/slide11.jpg",
];

const testimonials = [
  {
    text: "Quick and safe wiring repair. Technician fixed frequent power cuts efficiently. Very professional and reliable service.",
    name: "Ravi Kumar, Whitefield",
    age: "Mar'22",
    rating: 5,
  },
  {
    text: "Bathroom pipe replacement done neatly. Good quality work and fair pricing. Highly recommend this service.  ",
    name: "Stalin N, Kasturinagar",
    age: "Jul'22",
    rating: 4,
  },
  {
    text: "Everything was done to satisfaction within three days, and the team was very supportive throughout.",
    name: "Sonita B, Nikoo Homes",
    age: "Nov'23",
    rating: 5,
  },
  {
    text: "Custom shelves installed beautifully. Strong build and neat finish. Team handled everything with care.",
    name: "Shashikala , Marathalli",
    age: "Jan'24",
    rating: 5,
  },
  {
    text: "Renovation work exceeded expectations. Proper planning and execution. Team maintained cleanliness throughout.",
    name: "Pihu B, Kolte Patil Raaga",
    age: "Feb'24",
    rating: 5,
  },
  {
    text: "Kitchen sink blockage cleared quickly. Technician explained the issue well. Smooth and hassle-free experience.",
    name: "Manoj Kumar, Nikoo Homes",
    age: "Aug'24",
    rating: 4,
  },
  {
    text: "Fan and switchboard repair done perfectly. Fast response and affordable pricing. Truly satisfied with the service.",
    name: "Bharat K S, Mahadevpura",
    age: "Jan'25",
    rating: 5,
  },
  {
    text: "Door alignment fixed smoothly. No more noise or gaps. Very professional and punctual carpentry service.",
    name: "Arjun Reddy, Shobha City",
    age: "Mar'25",
    rating: 4,
  },
];

const projectGallery = [
  {
    title: "Home Deep Cleaning",
    image: "/project-gallery/cleaning.jpg",
  },
  {
    title: "Electrical Repair 1",
    image: "/project-gallery/electrical_repair1.jpg",
  },
  {
    title: "Leakage Fixing",
    image: "/project-gallery/leakage-fixing.jpg",
  },
  {
    title: "Plumbing Upgrade",
    image: "/project-gallery/plumbing-upgrade.jpg",
  },
  {
    title: "Carpentry Work",
    image: "/project-gallery/carpentry-work2.jpeg",
  },
  {
    title: "Electrical Repair 5",
    image: "/project-gallery/electrical_repair5.jpeg",
  },
  {
    title: "Kitchen Repair 1",
    image: "/project-gallery/kitchen-repair1.jpeg",
  },
  {
    title: "Kitchen Repair 2",
    image: "/project-gallery/kitchen-repair2.jpeg",
  },
  {
    title: "Metal Fabrication",
    image: "/project-gallery/metal-fabrication4.jpg",
  },
  {
    title: "False Ceiling",
    image: "/project-gallery/false-ceiling2.jpeg",
  },
  {
    title: "Painting Work",
    image: "/project-gallery/painting.jpg",
  },
  {
    title: "Pest Control",
    image: "/project-gallery/pest-control.jpg",
  },
];

const galleryPageSize = 8;
const galleryRotationStep = 6;

const faqs = [
  {
    question: "What services can I book with Qwickrepair?",
    answer:
      "You can book plumbing, electrical, carpentry, painting, cleaning, and pest control services for homes, offices, and commercial spaces.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Same-day support may be available depending on the service type, technician availability, and your location in Bengaluru.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can submit the contact form, call us, or message us on WhatsApp with your service details to receive a quote.",
  },
];

const terms = [
  "Site visits and inspection charges may apply for certain jobs and will be shared in advance.",
  "Final pricing depends on scope of work, material requirements, and service location.",
  "Work schedules are subject to technician availability, traffic conditions, and customer confirmation.",
  "Any additional work requested after job start may require revised pricing and timelines.",
];

const services = [
  { title: "Plumbing", image: "/services/plumbing.jpg" },
  { title: "Electrical", image: "/services/electrical.jpg" },
  { title: "Carpentry", image: "/services/carpentry.jpg" },
  { title: "Painting", image: "/services/painting.jpg" },
  { title: "Cleaning", image: "/services/cleaning.jpg" },
  { title: "Pest Control", image: "/services/pest-control.jpg" },
];

const whatsappNumber = "918880787787";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const socialIconPaths = {
  facebook: "/icons/facebook.png",
  instagram: "/icons/instagram.png",
  telegram: "/icons/telegram.png",
  whatsapp: "/icons/whatsapp.png",
};

const socialLinks = [
  {
    name: "Facebook",
    href: process.env.NEXT_PUBLIC_QWICKREPAIR_FACEBOOK_URL,
    icon: socialIconPaths.facebook,
  },
  {
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_QWICKREPAIR_INSTAGRAM_URL,
    icon: socialIconPaths.instagram,
  },
  {
    name: "Telegram",
    href: process.env.NEXT_PUBLIC_QWICKREPAIR_TELEGRAM_URL,
    icon: socialIconPaths.telegram,
  },
  {
    name: "WhatsApp",
    href: whatsappUrl,
    icon: socialIconPaths.whatsapp,
  },
];

const iconStyle = {
  width: "30px",
  height: "30px",
  cursor: "pointer",
};

const contactInputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px 14px",
  border: "1px solid #d7dee3",
  borderRadius: "14px",
  fontSize: "16px",
  outline: "none",
  background: "#fff",
  color: "#1f2937",
  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

function openWhatsAppFallback(payload) {
  const message = [
    "Hello Qwickrepair, I would like to request a service.",
    "",
    `Service: ${payload.service || "General Enquiry"}`,
    `Name: ${payload.name || "Not provided"}`,
    `Email: ${payload.email || "Not provided"}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Flat/House No.: ${payload.house || "Not provided"}`,
    `Address: ${payload.address || "Not provided"}`,
    "",
    "Details:",
    payload.details || "Not provided",
  ].join("\n");

  const whatsappRequestUrl = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
  const popup = window.open(whatsappRequestUrl, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.href = whatsappRequestUrl;
  }
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGalleryStart, setCurrentGalleryStart] = useState(0);
  const [isTestimonialsPaused, setIsTestimonialsPaused] = useState(false);
  const [selectedService, setSelectedService] = useState("General Enquiry");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [headerHeight, setHeaderHeight] = useState(78);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (projectGallery.length <= galleryPageSize) {
      return;
    }

    const galleryInterval = setInterval(() => {
      setCurrentGalleryStart((prev) => (prev + galleryRotationStep) % projectGallery.length);
    }, 10 * 60 * 1000);

    return () => clearInterval(galleryInterval);
  }, []);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    let resizeObserver;
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateHeaderHeight);
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "services", "about", "testimonials", "gallery", "booking"];
    const updateActiveSection = () => {
      if (window.scrollY <= 80) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - headerHeight;
        if (top <= 24) currentSection = id;
      }
      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [headerHeight]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const { hash, pathname, search } = window.location;
    if (!hash) {
      return;
    }

    const sectionId = hash.slice(1);
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
      window.history.replaceState(null, "", `${pathname}${search}`);
      return;
    }

    const top = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `${pathname}${search}`);
  }, [headerHeight]);

  function openBookingForm() {
    setSubmitMessage("");
    setIsBookingOpen(true);
    setIsMenuOpen(false);
  }

  function scrollToSection(sectionId) {
    if (typeof window === "undefined") {
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  function getNavLinkStyle(sectionId) {
    const isActive = activeSection === sectionId;
    return {
      color: "#1f2937",
      textDecoration: "none",
      fontSize: "0.95rem",
      fontWeight: 700,
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      borderBottom: isActive ? "2px solid #09B7A1" : "2px solid transparent",
      paddingBottom: "4px",
      lineHeight: 1,
    };
  }

  function goToNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

  function goToPreviousSlide() {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  const visibleGallery = Array.from(
    { length: Math.min(galleryPageSize, projectGallery.length) },
    (_, index) => projectGallery[(currentGalleryStart + index) % projectGallery.length]
  );

  const carouselArrowButtonStyle = {
    border: "none",
    background: "rgba(255, 255, 255, 0.12)",
    color: "#ffffff",
    width: "34px",
    height: "34px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "none",
  };

  async function sendEmail(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const getValue = (fieldName) => String(formData.get(fieldName) || "").trim();
    const payload = {
      service: getValue("service"),
      name: getValue("name"),
      email: getValue("email"),
      phone: getValue("phone"),
      house: getValue("house"),
      address: getValue("address"),
      details: getValue("details"),
    };

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.code === "EMAIL_UNAVAILABLE") {
          openWhatsAppFallback(payload);
          form.reset();
          setSelectedService("General Enquiry");
          setSubmitMessage("WhatsApp opened with your request because online email is unavailable right now.");
          return;
        }

        throw new Error(
          result.error ||
            "We could not send your request right now. Please call or WhatsApp Qwickrepair and we will help you directly."
        );
      }

      form.reset();
      setSelectedService("General Enquiry");
      setSubmitMessage("Your request has been sent successfully.");
      setIsBookingOpen(false);
    } catch (error) {
      setSubmitMessage(
        error.message ||
          "We could not send your request right now. Please call or WhatsApp Qwickrepair and we will help you directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      style={{
        color: "#1f2937",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <header
        ref={headerRef}
        style={{
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          boxSizing: "border-box",
          zIndex: 50,
        }}
      >
        <div className="qr-header-shell" style={{ width: "100%", boxSizing: "border-box" }}>
          <div className="qr-header-brand">
            <Image
              className="qr-header-logo"
              src="/logo/Qwickrepair.png"
              alt="Qwickrepair Solutions logo"
              width={160}
              height={50}
              style={{ width: "clamp(88px, 23vw, 108px)", height: "auto" }}
              priority
            />
            <h2
              className="qr-header-title qr-display-heading"
              style={{ margin: 0, fontFamily: "Roboto, sans-serif" }}
            >
              <span style={{ fontFamily: "var(--font-fonia), Roboto, sans-serif" }}>Q</span>
              wickrepair{" "}
              <span style={{ fontFamily: "var(--font-fonia), Roboto, sans-serif" }}>S</span>
              olutions
            </h2>
          </div>

          <div className="qr-header-actions">
            <button
              className="qr-book-now"
              type="button"
              onClick={openBookingForm}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                color: "#ffffff",
                lineHeight: 1,
                background: "linear-gradient(135deg, #2fc3ad 0%, #176a72 100%)",
                border: "none",
                padding: "8px 14px",
                borderRadius: "999px",
                cursor: "pointer",
                boxShadow: "0 8px 18px rgba(17, 94, 89, 0.18)",
                minWidth: "clamp(132px, 14vw, 180px)",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "clamp(0.9rem, 1.15vw, 1.15rem)", fontWeight: 800, letterSpacing: "0.02em" }}>
                BOOK NOW
              </span>
              <span style={{ fontSize: "clamp(0.55rem, 0.72vw, 0.7rem)", fontWeight: 600, lineHeight: 1.1 }}>
                Reserve Your Slot
              </span>
            </button>

            <div
              className="qr-header-menu-wrap"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="qr-header-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="qr-header-menu-btn"
                onClick={() => setIsMenuOpen((open) => !open)}
                style={{
                  border: "1px solid #dbe5e7",
                  background: "#ffffff",
                  color: "#1f2937",
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isMenuOpen ? "0 10px 24px rgba(15, 23, 42, 0.12)" : "0 4px 14px rgba(15, 23, 42, 0.08)",
                }}
              >
                {isMenuOpen ? <X size={24} strokeWidth={2.4} /> : <Menu size={24} strokeWidth={2.4} />}
              </button>

              <nav id="qr-header-menu" className={`qr-header-nav${isMenuOpen ? " qr-header-nav-open" : ""}`}>
                {["home", "about", "services", "testimonials", "gallery", "booking"].map((sectionId) => (
                  <button
                    key={sectionId}
                    type="button"
                    onClick={() => scrollToSection(sectionId)}
                    style={{
                      ...getNavLinkStyle(sectionId),
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    {sectionId === "home"
                      ? "Home"
                      : sectionId === "services"
                        ? "Services"
                        : sectionId === "about"
                          ? "About Us"
                          : sectionId === "testimonials"
                            ? "Testimonials"
                            : sectionId === "gallery"
                              ? "Project Gallery"
                              : "Contact"}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {isBookingOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a service"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 5000,
          }}
        >
          <button
            type="button"
            aria-label="Close booking form backdrop"
            onClick={() => setIsBookingOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              border: "none",
              background: "rgba(15, 23, 42, 0.55)",
              padding: 0,
              margin: 0,
              cursor: "default",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "min(100%, 560px)",
              boxSizing: "border-box",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              borderRadius: "20px",
              padding: "26px 22px",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <div>
                <h3 className="qr-display-heading" style={{ margin: 0 }}>
                  Book a Service
                </h3>
                <p style={{ margin: "6px 0 0", color: "#4b5563", lineHeight: 1.5 }}>
                  Fill in your details and we will get back to you quickly.
                </p>
                {submitMessage ? (
                  <p
                    style={{
                      margin: "10px 0 0",
                      color: submitMessage.includes("successfully") ? "#15847c" : "#b91c1c",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {submitMessage}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => setIsBookingOpen(false)}
                aria-label="Close booking form"
                style={{
                  border: "none",
                  background: "#f3f4f6",
                  width: "38px",
                  height: "38px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "20px",
                  lineHeight: 1,
                  color: "#111827",
                }}
              >
                ×
              </button>
            </div>

            <BookingForm
              sendEmail={sendEmail}
              services={services}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              submitMessage={submitMessage}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      ) : null}

      <main
        className="qr-main"
        style={{
          width: "100%",
          padding: `${Math.max(headerHeight - 10, 64)}px clamp(14px, 3vw, 28px) 0`,
          boxSizing: "border-box",
        }}
      >
      <section
        id="home"
        className="qr-section qr-hero"
        style={{
          textAlign: "center",
          padding: "clamp(10px, 1.8vh, 16px) 0 clamp(8px, 1.8vw, 14px)",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: 0,
          }}
        >
          <h1
            className="qr-display-heading"
            style={{
              color: "#09B7A1",
              fontFamily: "Roboto, sans-serif",
              fontSize: "clamp(2.1rem, 5.7vw, 3.8rem)",
              lineHeight: 1.1,
              margin: "0 0 clamp(10px, 2vw, 14px)",
              textWrap: "balance",
            }}
          >
            Home Repair Services in Bengaluru
          </h1>
          <p
            style={{
              fontSize: "clamp(0.98rem, 2.4vw, 1.1rem)",
              lineHeight: 1.7,
              margin: 0,
              color: "#374151",
              textWrap: "balance",
            }}
          >
            Plumbing | Electrical | Carpentry | Painting | Cleaning | Pest Control
          </p>
        </div>
      </section>

      <section
        className="qr-section qr-slider-section"
        style={{  
          padding: "0 0 10px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "2.7 / 1",
            height: "auto",
            minHeight: "clamp(220px, 30vw, 520px)",
            maxHeight: "70vh",
            overflow: "hidden",
            borderRadius: "clamp(14px, 2vw, 18px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
            background: "#0f172a",
          }}
        >
          <Image
            src={slides[currentSlide]}
            alt={`Qwickrepair service slide ${currentSlide + 1}`}
            fill
            sizes="(max-width: 520px) calc(100vw - 24px), (max-width: 980px) calc(100vw - 28px), calc(100vw - 56px)"
            style={{ objectFit: "cover" }}
            priority
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(15,23,42,0.08) 0%, rgba(15,23,42,0.35) 100%)",
            }}
          />

          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPreviousSlide}
            style={{
              ...carouselArrowButtonStyle,
              position: "absolute",
              left: "clamp(10px, 2vw, 18px)",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNextSlide}
            style={{
              ...carouselArrowButtonStyle,
              position: "absolute",
              right: "clamp(10px, 2vw, 18px)",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>

      </section>

      <section
        id="services"
        className="qr-section qr-section-divider qr-services-section"
        style={{ padding: "clamp(4px, 0.8vh, 8px) 0 clamp(40px, 5vh, 64px)", textAlign: "center" }}
      >
        <h2 className="qr-section-heading" style={{ textAlign: "center", marginTop: 0 }}>
          Our Services
        </h2>

        <div
          className="qr-services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "clamp(14px, 2vw, 24px)",
            marginTop: "clamp(14px, 2vh, 22px)",
            marginBottom: "clamp(20px, 3vh, 36px)",
            marginInline: "auto",
            width: "100%",
            alignItems: "stretch",
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onSelect={() => {
                setSelectedService(service.title);
                setSubmitMessage("");
                setIsBookingOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      <section id="about" className="qr-section qr-section-divider" style={{ padding: "clamp(14px, 2vh, 24px) 0 clamp(18px, 3vh, 28px)", background: "#ffffff" }}>
        <h2 className="qr-section-heading" style={{ textAlign: "center", marginTop: 0 }}>
          About Us
        </h2>

        <div className="qr-about-copy" style={{ width: "100%", margin: "clamp(12px, 2vh, 18px) auto 0", textAlign: "left", lineHeight: "1.8" }}>
          <p style={{ margin: 0 }}>
            At Qwickrepair Solutions, our journey began in 2022 with a simple goal—to make repair and maintenance
            services more reliable, accessible, and hassle-free for everyone. What started as a small initiative has
            grown into a trusted service provider, proudly serving over 1500+ customers across residential and
            commercial spaces up to 2026.
          </p>
          <p style={{ margin: "14px 0 0" }}>
            Over the years, we have built a strong reputation by consistently delivering quality workmanship and
            dependable service. Our team of skilled professionals specializes in a wide range of services, including
            plumbing, electrical, carpentry, painting, cleaning, and pest control. Each project we take on reflects our
            commitment to precision, efficiency, and customer satisfaction.
          </p>
          <p style={{ margin: "14px 0 0" }}>
            Our journey has been marked by continuous learning and improvement. With every service request, we have
            refined our processes, strengthened our team, and enhanced our ability to respond quickly and effectively.
            This growth has enabled us to handle diverse requirements—from small household repairs to large-scale
            commercial maintenance—with the same level of dedication and professionalism.
          </p>
          <p style={{ margin: "14px 0 0" }}>
            We take pride in the trust our customers place in us. Their positive experiences and repeat engagements have
            been the driving force behind our success. By offering on-call services as well as Annual Maintenance
            Contracts (AMC), we ensure that our clients receive timely support and long-term solutions tailored to their
            needs.
          </p>
          <p style={{ margin: "14px 0 0" }}>
            As we move forward, Qwickrepair Solutions remains committed to innovation, quality service, and building
            lasting relationships. Our journey so far has been strong and fulfilling, and we look forward to serving
            many more customers with the same passion, reliability, and excellence that define us today.
          </p>
        </div>
      </section>

      <section id="testimonials" className="qr-section qr-section-divider" style={{ padding: "clamp(4px, 0.8vh, 8px) 0 clamp(18px, 3vh, 28px)", textAlign: "center", background: "#ffffff" }}>
        <h2 className="qr-section-heading" style={{ textAlign: "center", marginTop: 0 }}>
          Customer Testimonials
        </h2>

        <div
          className="qr-testimonials-carousel"
          onMouseEnter={() => setIsTestimonialsPaused(true)}
          onMouseLeave={() => setIsTestimonialsPaused(false)}
          style={{
            width: "100%",
            margin: "clamp(14px, 2vh, 22px) auto 0",
            overflow: "hidden",
          }}
        >
          <div
            className="qr-testimonials-track"
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "stretch",
              width: "max-content",
              animation: "testimonial-scroll 42s linear infinite",
              animationPlayState: isTestimonialsPaused ? "paused" : "running",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                className="qr-testimonial-item"
                key={`${testimonial.name}-${index}`}
                style={{
                  width: "min(340px, calc(100vw - 56px))",
                  flex: "0 0 auto",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="qr-section qr-section-divider"
        style={{
          padding: "clamp(4px, 0.8vh, 8px) 0 clamp(18px, 3vh, 28px)",
          background: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 className="qr-section-heading" style={{ textAlign: "center", marginTop: 0 }}>
          Project Gallery
        </h2>
        <p
          style={{
            width: "100%",
            margin: "clamp(12px, 2vh, 18px) auto 0",
            color: "#4b5563",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          A quick look at some of the completed repair, maintenance, and improvement work handled by our team.
        </p>

        <div className="qr-gallery-grid">
          {visibleGallery.map((project) => (
            <div key={project.image} className="qr-gallery-item">
              <div className="qr-gallery-image-frame">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 520px) 92vw, (max-width: 900px) 46vw, (max-width: 1200px) 31vw, 23vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="qr-section qr-section-divider qr-booking-section" style={{ padding: "clamp(6px, 1vh, 10px) 0 clamp(18px, 2.5vh, 28px)", background: "#ffffff" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          <h2
            className="qr-section-heading"
            style={{
              textAlign: "center",
              marginTop: 0,
              marginBottom: "28px",
              letterSpacing: "0.02em",
            }}
          >
            Contact Us
          </h2>

          <div
            className="qr-booking-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              columnGap: "72px",
              rowGap: "36px",
              alignItems: "start",
              width: "100%",
            }}
          >
            <div className="qr-booking-form-side">
              <h3 className="qr-display-heading" style={{ marginTop: 0, marginBottom: "18px", color: "#09B7A1" }}>
                Get a Quote!
              </h3>

              <BookingForm
                sendEmail={sendEmail}
                services={services}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                submitMessage={submitMessage}
                isSubmitting={isSubmitting}
              />
            </div>

            <div className="qr-contact-side" style={{ paddingTop: "18px" }}>
              <p className="qr-contact-lead" style={{ color: "#15847c", fontSize: "1.9rem", marginTop: 0, marginBottom: "18px" }}>
                Better yet, see us in person!
              </p>
              <p className="qr-contact-copy" style={{ lineHeight: 1.7, fontSize: "1.05rem", color: "#374151", marginBottom: "70px" }}>
                We stay in constant communication with our customers until the job is done. To get a
                free quote, or if you have questions or special requests, just drop us a line.
              </p>

              <h3
                className="qr-display-heading qr-footer-address"
                style={{
                  color: "#15847c",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginTop: 0,
                  marginBottom: "6px",
                }}
              >
                <span style={{ color: "#FF6633" }}>Q</span>
                <span style={{ color: "#09B7A1" }}>wickrepair </span>
                <span style={{ color: "#FF6633" }}>S</span>
                <span style={{ color: "#09B7A1" }}>olutions</span>
              </h3>
              <p
                style={{
                  lineHeight: 1.7,
                  fontSize: "1.05rem",
                  color: "#4b5563",
                  maxWidth: "420px",
                  marginTop: 0,
                }}
              >
                143/2, 1st Main, 4th Cross, Krishnayan Palya, Indiranagar, Bengaluru, Karnataka
                560038
              </p>

              <div className="qr-contact-details" style={{ marginTop: "28px", maxWidth: "520px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <details
                  style={{
                    padding: 0,
                  }}
                >
                  <summary
                    className="details-summary"
                    style={{
                      cursor: "pointer",
                      color: "#15847c",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      lineHeight: 1.5,
                    }}
                  >
                    FAQ
                  </summary>
                  <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <p style={{ margin: 0, color: "#111827", fontWeight: 700, lineHeight: 1.5 }}>
                          {faq.question}
                        </p>
                        <p style={{ margin: "6px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </details>

                <details
                  style={{
                    padding: 0,
                  }}
                >
                  <summary
                    className="details-summary"
                    style={{
                      cursor: "pointer",
                      color: "#15847c",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      lineHeight: 1.5,
                    }}
                  >
                    Terms & Conditions
                  </summary>
                  <ul style={{ margin: "14px 0 0", paddingLeft: "18px", color: "#4b5563", lineHeight: 1.8 }}>
                    {terms.map((term) => (
                      <li key={term}>{term}</li>
                    ))}
                  </ul>
                </details>
              </div>

              <div className="qr-social-links" style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                {socialLinks.map((link) => {
                  const icon = <Image src={link.icon} alt={link.name} width={30} height={30} style={iconStyle} />;

                  if (!link.href) {
                    return (
                      <span
                        key={link.name}
                        aria-label={`${link.name} link coming soon`}
                        title={`${link.name} link coming soon`}
                        style={{ display: "inline-flex" }}
                      >
                        {icon}
                      </span>
                    );
                  }

                  return (
                    <a key={link.name} href={link.href} target="_blank" rel="noreferrer" aria-label={link.name}>
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <div
        className="qr-floating-actions"
        style={{
          position: "fixed",
          right: "16px",
          bottom: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 999,
        }}
      >
        <a href="tel:+918880787787" aria-label="Call Qwickrepair">
          <button
            className="qr-floating-action-btn"
            type="button"
            style={{
              background: "#09B7A1",
              color: "#fff",
              border: "none",
              width: "54px",
              height: "54px",
              borderRadius: "14px",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneCall size={22} strokeWidth={2.5} />
          </button>
        </a>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
          <Image
            src={socialIconPaths.whatsapp}
            alt="WhatsApp"
            width={50}
            height={50}
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "14px",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
            }}
            className="qr-floating-action-btn"
          />
        </a>
      </div>

      <footer
        className="qr-footer"
        style={{
          background: "#09B7A1",
          color: "#fff",
          textAlign: "center",
          padding: "18px 20px",
        }}
      >
        <div style={{ width: "100%", margin: "0 auto" }}>
          <p style={{ margin: 0 }}>&copy; 2026 Qwickrepair Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, image, onSelect }) {
  return (
    <button
      className="qr-service-card-button"
      type="button"
      onClick={onSelect}
      style={{
        color: "#000",
        minWidth: 0,
        width: "100%",
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <div
        className="qr-service-card"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          background: "#fff",
          textAlign: "center",
          height: "100%",
          minHeight: "clamp(250px, 24vw, 340px)",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "clamp(12px, 1.8vw, 18px)",
          padding: "clamp(20px, 2.6vw, 32px)",
        }}
      >
        <div
          className="qr-service-card-image"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "clamp(104px, 14vw, 172px)",
            aspectRatio: "1 / 1",
            marginBottom: "clamp(4px, 1vw, 10px)",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 480px) 104px, (max-width: 900px) 132px, 172px"
            style={{ objectFit: "contain" }}
          />
        </div>

        <h3
          className="qr-service-card-title"
          style={{
            marginTop: 0,
            marginBottom: 0,
            lineHeight: 1.3,
            fontSize: "clamp(1rem, 2.1vw, 1.1rem)",
          }}
        >
          {title}
        </h3>
        <p
          className="qr-service-card-cta"
          style={{
            color: "#09B7A1",
            fontWeight: "bold",
            marginTop: "auto",
            marginBottom: 0,
            fontSize: "clamp(0.95rem, 1.8vw, 1rem)",
          }}
        >
          Book Now
        </p>
      </div>
    </button>
  );
}

function BookingForm({
  sendEmail,
  services,
  selectedService,
  setSelectedService,
  submitMessage,
  isSubmitting,
}) {
  return (
    <form
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        background: "#ffffff",
        padding: "8px 0",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <input name="name" placeholder="Name" required style={contactInputStyle} />
      <input name="email" type="email" placeholder="Email*" required style={contactInputStyle} />
      <input name="phone" placeholder="Phone: *" required style={contactInputStyle} />
      <input name="house" placeholder="Flat/House No." style={contactInputStyle} />
      <input
        name="address"
        placeholder="Address (Street, City, Zip Code)"
        style={contactInputStyle}
      />
      <select
        name="service"
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
        style={contactInputStyle}
      >
        <option value="General Enquiry">Service Request</option>
        {services.map((service) => (
          <option key={service.title} value={service.title}>
            {service.title}
          </option>
        ))}
      </select>
      <textarea
        name="details"
        placeholder="Let us know the details of what you are looking for, and we'll contact you with a quote."
        rows="7"
        style={{
          ...contactInputStyle,
          resize: "vertical",
          lineHeight: 1.6,
          fontFamily: "inherit",
          fontSize: "14px",
        }}
      />

      <p
        style={{
          margin: "-6px 0 0",
          color: "rgba(107, 114, 128, 0.5)",
          fontSize: "0.9rem",
          lineHeight: 1.5,
        }}
      >
        Fill in your details and submit your request. If email is temporarily unavailable, WhatsApp will open automatically.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          background: "linear-gradient(90deg, #41b9ab 0%, #46b9a7 100%)",
          color: "#000",
          padding: "13px 24px",
          border: "none",
          borderRadius: "12px",
          fontFamily: "inherit",
          fontWeight: 700,
          letterSpacing: "0.18em",
          cursor: "pointer",
          marginTop: "6px",
          opacity: isSubmitting ? 0.7 : 1,
          boxShadow: "0 14px 28px rgba(65, 185, 171, 0.22)",
          alignSelf: "flex-start",
          minWidth: "140px",
        }}
      >
        {isSubmitting ? "SENDING..." : "SEND"}
      </button>

      {submitMessage ? (
        <p
          style={{
            margin: 0,
            color: submitMessage.includes("successfully") ? "#15847c" : "#b91c1c",
            fontSize: "0.95rem",
          }}
        >
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}

function TestimonialCard({ testimonial }) {
  const displayName = testimonial.name.split(",")[0];
  const location = testimonial.name.includes(",") ? testimonial.name.split(",").slice(1).join(",").trim() : "";
  const avatarLabel = displayName.charAt(0).toUpperCase();
  const stars = "\u2605".repeat(testimonial.rating || 5);

  return (
    <div
      className="qr-testimonial-card"
      style={{
        background: "#f3f4f6",
        borderRadius: "24px",
        border: "1px solid #d1d5db",
        boxShadow: "none",
        padding: "20px",
        textAlign: "left",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "translateY(-6px)";
        event.currentTarget.style.boxShadow = "0 18px 34px rgba(15, 23, 42, 0.14)";
        event.currentTarget.style.borderColor = "#9fd9d2";
        event.currentTarget.style.background = "#f8fafc";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translateY(0)";
        event.currentTarget.style.boxShadow = "none";
        event.currentTarget.style.borderColor = "#d1d5db";
        event.currentTarget.style.background = "#f3f4f6";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            background: "#e5e7eb",
            color: "#39b7ab",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "1.75rem",
            flexShrink: 0,
          }}
        >
          {avatarLabel}
        </div>

        <div style={{ minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              color: "#39b7ab",
              fontWeight: 700,
              fontSize: "1.1rem",
              lineHeight: 1.25,
            }}
          >
            {displayName}
          </p>
          {location ? (
            <p
              style={{
                margin: 0,
                color: "#111827",
                fontSize: "0.95rem",
                lineHeight: 1.4,
              }}
            >
              {location}
            </p>
          ) : null}
          <p
            style={{
              margin: 0,
              color: "#111827",
              fontSize: "0.9rem",
              lineHeight: 1.4,
            }}
          >
            {testimonial.age}
          </p>
        </div>
      </div>

      <div
        className="qr-testimonial-body"
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          border: "1px solid #e5e7eb",
          padding: "24px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "18px",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#f59e0b",
            fontSize: "1.3rem",
            letterSpacing: "2px",
            lineHeight: 1,
          }}
        >
          {stars}
        </p>

        <p
          style={{
            margin: 0,
            color: "#1f2937",
            lineHeight: 1.7,
            fontSize: "1rem",
            fontWeight: 500,
          }}
        >
          {testimonial.text}
        </p>
      </div>
    </div>
  );
}
