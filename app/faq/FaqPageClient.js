"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, ClipboardList, Menu, PhoneCall, ShieldCheck, Wrench, X } from "lucide-react";

const serviceAreas = "Bengaluru Homes and Businesses";
const services = [
  { title: "Plumbing", image: "/services/plumbing.jpg" },
  { title: "Electrical", image: "/services/electrical.jpg" },
  { title: "Carpentry", image: "/services/carpentry.jpg" },
  { title: "Painting", image: "/services/painting.jpg" },
  { title: "Cleaning", image: "/services/cleaning.jpg" },
  { title: "Pest Control", image: "/services/pest-control.jpg" },
];

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

const faqSections = [
  {
    title: "Booking and Scheduling",
    description: "Learn how bookings, slot confirmations, and service coordination work before your visit is scheduled.",
    icon: ClipboardList,
    items: [
      {
        question: "What services can I book with Qwickrepair?",
        answer:
          "Qwickrepair handles plumbing, electrical work, carpentry, painting, cleaning, pest control, and general repair support for homes, offices, and commercial spaces in Bengaluru.",
      },
      {
        question: "How do I book a service?",
        answer:
          "You can book by using the contact form on the homepage, calling the team directly, or sending your job details on WhatsApp. Sharing your location, issue, and preferred visit time helps speed things up.",
      },
      {
        question: "Do you offer same-day service?",
        answer:
          "Same-day support may be available depending on the type of job, technician availability, and your Bengaluru location. Urgent requests are best shared by phone or WhatsApp for a faster response.",
      },
      {
        question: "Can I choose a preferred time slot?",
        answer:
          "Yes. You can mention your preferred date and time while booking. The team will confirm an available slot or suggest the nearest alternative.",
      },
    ],
  },
  {
    title: "Pricing and Estimates",
    description: "Understand quotations, inspection charges, pricing factors, and how material costs are usually handled.",
    icon: BriefcaseBusiness,
    items: [
      {
        question: "How do I get a quote?",
        answer:
          "You can request a quote by sharing the service type, issue details, photos if available, and your location. Smaller jobs may be quoted quickly, while larger jobs may need a site inspection first.",
      },
      {
        question: "Are site visits or inspection charges included?",
        answer:
          "Some jobs may require a paid inspection or site visit before final pricing is confirmed. If that applies, the charge is shared in advance before the visit is scheduled.",
      },
      {
        question: "What affects the final price?",
        answer:
          "Final pricing depends on the scope of work, materials needed, job complexity, service location, and whether extra work is added after the original estimate.",
      },
      {
        question: "Do you provide material as well?",
        answer:
          "Yes, material procurement can often be arranged as part of the service. The cost of materials is usually added separately unless a combined estimate is shared.",
      },
    ],
  },
  {
    title: "Service Coverage and Work Process",
    description: "Find out where Qwickrepair works, what happens after an enquiry, and how job execution is managed.",
    icon: Wrench,
    items: [
      {
        question: "Which areas do you serve?",
        answer:
          "Qwickrepair is focused on Bengaluru. If your property is on the edge of the service zone, the team can confirm availability after you share the exact location.",
      },
      {
        question: "Do you handle both residential and commercial work?",
        answer:
          "Yes. Services are available for apartments, villas, offices, shops, and other commercial spaces, depending on the type and scale of the work.",
      },
      {
        question: "What happens after I submit a request?",
        answer:
          "The team reviews your request, contacts you to confirm the issue and location, shares next steps or a quote, and then schedules the technician visit once everything is approved.",
      },
      {
        question: "Can additional work be added after the job starts?",
        answer:
          "Yes, but additional tasks may require updated pricing and timing. The team will usually confirm the change before moving ahead.",
      },
    ],
  },
  {
    title: "Support and Trust",
    description: "See the fastest ways to reach the team and what support options are available for urgent or ongoing needs.",
    icon: ShieldCheck,
    items: [
      {
        question: "How can I contact Qwickrepair quickly?",
        answer:
          "For the fastest response, call or WhatsApp Qwickrepair directly. The contact form is helpful too, but phone and WhatsApp are usually better for urgent requests.",
      },
      {
        question: "What if online form submission is unavailable?",
        answer:
          "If the website cannot send your request online, Qwickrepair already provides a WhatsApp fallback from the booking flow so you can still send your job details immediately.",
      },
      {
        question: "Do you support recurring maintenance needs?",
        answer:
          "Yes. Ongoing support and Annual Maintenance Contract style work can be discussed for homes, apartments, offices, and commercial facilities that need regular upkeep.",
      },
      {
        question: "Where can I go next if I am ready to book?",
        answer:
          "Use the booking section on the homepage to submit your details, or jump straight to WhatsApp if you want to share your request with the team right away.",
      },
    ],
  },
];

const totalQuestions = faqSections.reduce((count, section) => count + section.items.length, 0);

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

function toSectionId(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function BookingForm({
  sendEmail,
  services: bookingServices,
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
        background: "transparent",
        padding: "8px 0",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <input name="name" placeholder="Name" required style={contactInputStyle} />
      <input name="email" type="email" placeholder="Email*" required style={contactInputStyle} />
      <input name="phone" placeholder="Phone: *" required style={contactInputStyle} />
      <input name="house" placeholder="Flat/House No." style={contactInputStyle} />
      <input name="address" placeholder="Address (Street, City, Zip Code)" style={contactInputStyle} />
      <select
        name="service"
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
        style={contactInputStyle}
      >
        <option value="General Enquiry">Service Request</option>
        {bookingServices.map((service) => (
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

const menuLinkStyle = {
  color: "#1f2937",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 700,
  borderBottom: "2px solid transparent",
  paddingBottom: "4px",
  lineHeight: 1,
};

const buttonResetStyle = {
  border: "none",
  cursor: "pointer",
};

export default function FaqPageClient() {
  const [selectedService, setSelectedService] = useState("General Enquiry");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [headerHeight, setHeaderHeight] = useState(78);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

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
          <Link href="/" className="qr-header-brand" style={{ textDecoration: "none", color: "inherit" }}>
            <Image
              className="qr-header-logo"
              src="/logo/Qwickrepair.png"
              alt="Qwickrepair Solutions logo"
              width={160}
              height={50}
              style={{ width: "clamp(88px, 23vw, 108px)", height: "auto" }}
              priority
            />
            <h2 className="qr-header-title qr-display-heading" style={{ margin: 0, fontFamily: "Roboto, sans-serif" }}>
              <span style={{ fontFamily: "var(--font-fonia), Roboto, sans-serif" }}>Q</span>
              wickrepair <span style={{ fontFamily: "var(--font-fonia), Roboto, sans-serif" }}>S</span>
              olutions
            </h2>
          </Link>

          <div className="qr-header-actions">
            <button
              className="qr-book-now"
              type="button"
              onClick={() => {
                setSubmitMessage("");
                setIsBookingOpen(true);
              }}
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
                <Link href="/" onClick={() => setIsMenuOpen(false)} style={menuLinkStyle}>
                  Home
                </Link>
                <Link href="/#about" onClick={() => setIsMenuOpen(false)} style={menuLinkStyle}>
                  About Us
                </Link>
                <Link href="/#services" onClick={() => setIsMenuOpen(false)} style={menuLinkStyle}>
                  Services
                </Link>
                <Link href="/#testimonials" onClick={() => setIsMenuOpen(false)} style={menuLinkStyle}>
                  Testimonials
                </Link>
                <Link href="/#gallery" onClick={() => setIsMenuOpen(false)} style={menuLinkStyle}>
                  Project Gallery
                </Link>
                <Link href="/#booking" onClick={() => setIsMenuOpen(false)} style={menuLinkStyle}>
                  Contact
                </Link>
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
                <h3 className="qr-display-heading" style={{ margin: 0, color: "#09B7A1" }}>
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
        className="qr-main qr-faq-page"
        style={{
          width: "100%",
          padding: `${Math.max(headerHeight - 10, 64)}px clamp(14px, 3vw, 28px) 0`,
          boxSizing: "border-box",
        }}
      >
        <section id="faq-top" className="qr-faq-hero">
          <div className="qr-faq-shell">
            <div className="qr-faq-hero-grid">
              <div className="qr-faq-hero-copy">
                <p className="qr-faq-eyebrow">Support Center</p>
                <h1 className="qr-faq-title">Choose a topic to explore the answers you need.</h1>
                <p className="qr-faq-intro">
                  Browse our most common support topics for clear guidance on bookings, pricing, service coverage, and
                  customer support before you contact Qwickrepair.
                </p>
                <div className="qr-faq-highlight-row" aria-label="FAQ highlights">
                  <div className="qr-faq-highlight-card">
                    <span className="qr-faq-highlight-value">{totalQuestions}+</span>
                    <span className="qr-faq-highlight-label">Detailed answers</span>
                  </div>
                  <div className="qr-faq-highlight-card">
                    <span className="qr-faq-highlight-value">4</span>
                    <span className="qr-faq-highlight-label">Support categories</span>
                  </div>
                  <div className="qr-faq-highlight-card">
                    <span className="qr-faq-highlight-value">Clear</span>
                    <span className="qr-faq-highlight-label">Pricing guidance</span>
                  </div>
                </div>
              </div>

              <div className="qr-faq-hero-card">
                <div className="qr-faq-card-block">
                  <p className="qr-faq-card-label">Quick Snapshot</p>
                  <p className="qr-faq-card-title">Need help right now?</p>
                  <p className="qr-faq-card-copy">
                    Visit the homepage to book a service, call the team, or continue on WhatsApp for urgent requests.
                  </p>
                </div>
                <div className="qr-faq-trust-list">
                  <div className="qr-faq-trust-item">
                    <span className="qr-faq-trust-dot" />
                    <span>Transparent answers around booking, pricing, and scheduling.</span>
                  </div>
                  <div className="qr-faq-trust-item">
                    <span className="qr-faq-trust-dot" />
                    <span>Service coverage tailored for {serviceAreas}.</span>
                  </div>
                  <div className="qr-faq-trust-item">
                    <span className="qr-faq-trust-dot" />
                    <span>Direct next steps when you are ready to book.</span>
                  </div>
                </div>
                <div className="qr-faq-hero-actions">
                  <button type="button" onClick={() => setIsBookingOpen(true)} className="qr-faq-primary-link" style={buttonResetStyle}>
                    Book a Service
                  </button>
                  <Link href="/" className="qr-faq-secondary-link">
                    Back to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="qr-faq-content">
          <div className="qr-faq-shell qr-faq-sections">
            <section className="qr-faq-overview-card" aria-labelledby="faq-overview-heading">
              <div className="qr-faq-overview-header">
                <div>
                  <p className="qr-faq-section-kicker">Browse by topic</p>
                  <h2 id="faq-overview-heading" className="qr-faq-overview-title">
                    Support topics
                  </h2>
                </div>
                <p className="qr-faq-overview-copy">
                  Select a category below to jump directly to the detailed answers for that topic.
                </p>
              </div>
              <div className="qr-faq-overview-grid">
                {faqSections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <a key={section.title} href={`#${toSectionId(section.title)}`} className="qr-faq-overview-item">
                      <span className="qr-faq-overview-icon-wrap">
                        <Icon size={28} strokeWidth={1.8} />
                      </span>
                      <span className="qr-faq-overview-text">
                        <span className="qr-faq-overview-name">{section.title}</span>
                        <span className="qr-faq-overview-description">{section.description}</span>
                        <span className="qr-faq-overview-meta">{section.items.length} questions</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>

            {faqSections.map((section) => (
              <article key={section.title} id={toSectionId(section.title)} className="qr-faq-section-card">
                <div className="qr-faq-section-heading">
                  <p className="qr-faq-section-kicker">Category</p>
                  <h2>{section.title}</h2>
                  <p className="qr-faq-section-copy">{section.description}</p>
                </div>

                <div className="qr-faq-list">
                  {section.items.map((item) => (
                    <details key={item.question} className="qr-faq-item">
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="qr-faq-cta">
          <div className="qr-faq-shell qr-faq-cta-card">
            <div>
              <p className="qr-faq-eyebrow">Still need help?</p>
              <h2 className="qr-faq-cta-title">Reach the Qwickrepair team directly for job-specific guidance.</h2>
            </div>
            <div className="qr-faq-hero-actions">
              <button type="button" onClick={() => setIsBookingOpen(true)} className="qr-faq-primary-link" style={buttonResetStyle}>
                Go to Booking
              </button>
              <Link href="/#services" className="qr-faq-secondary-link">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="qr-section qr-booking-section"
          style={{
            padding: "clamp(32px, 4vh, 48px) 0 clamp(40px, 5vh, 64px)",
            width: "100%",
            background: "transparent",
          }}
        >
          <div style={{ maxWidth: "100%", margin: "0 auto" }}>
            <h2
              className="qr-section-heading"
              style={{
                color: "#09B7A1",
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
                  We stay in constant communication with our customers until the job is done. To get a free quote, or
                  if you have questions or special requests, just drop us a line.
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
                  <span style={{ color: "#09B7A1", fontFamily: "Roboto, sans-serif" }}>wickrepair </span>
                  <span style={{ color: "#FF6633" }}>S</span>
                  <span style={{ color: "#09B7A1", fontFamily: "Roboto, sans-serif" }}>olutions</span>
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
                  143/2, 1st Main, 4th Cross, Krishnayan Palya, Indiranagar, Bengaluru, Karnataka 560038
                </p>

                <div
                  className="qr-contact-details"
                  style={{ marginTop: "28px", maxWidth: "520px", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <details style={{ padding: 0 }}>
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
                          <p style={{ margin: 0, color: "#111827", fontWeight: 700, lineHeight: 1.5 }}>{faq.question}</p>
                          <p style={{ margin: "6px 0 0", color: "#4b5563", lineHeight: 1.7 }}>{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </details>

                  <details style={{ padding: 0 }}>
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
        style={{
          width: "100%",
          background: "#46b9a7",
          color: "#ffffff",
          textAlign: "center",
          padding: "18px 12px",
          fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
          lineHeight: 1.5,
          boxSizing: "border-box",
        }}
      >
        © 2026 Qwickrepair Solutions. All rights reserved.
      </div>

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
              boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
            }}
          />
        </a>
      </div>
    </div>
  );
}
