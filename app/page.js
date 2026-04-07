"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

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
    name: "Shashiala , Marathalli",
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
    title: "Bathroom Plumbing Upgrade",
    category: "Plumbing",
    image: "/slider/slide1.jpg",
  },
  {
    title: "Apartment Electrical Repair",
    category: "Electrical",
    image: "/slider/slide3.jpg",
  },
  {
    title: "Interior Painting Refresh",
    category: "Painting",
    image: "/slider/slide5.jpg",
  },
  {
    title: "Deep Cleaning Service",
    category: "Cleaning",
    image: "/slider/slide8.jpg",
  },
  {
    title: "Woodwork Finishing Project",
    category: "Carpentry",
    image: "/slider/slide10.jpg",
  },
  {
    title: "Residential Pest Control",
    category: "Pest Control",
    image: "/slider/slide11.jpg",
  },
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
  const [selectedService, setSelectedService] = useState("General Enquiry");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  function goToNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

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
        background: "#ffffff",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          background: "#ffffff",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <Image
            src="/logo/Qwickrepair.png"
            alt="Qwickrepair Solutions logo"
            width={160}
            height={50}
            style={{ height: "50px", width: "auto" }}
            priority
          />
          <h2 style={{ color: "#09B7A1", margin: 0 }}>Qwickrepair Solutions</h2>
        </div>

        <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="#services"
            style={{ color: "#1f2937", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700 }}
          >
            Services
          </a>
          <a
            href="#about"
            style={{ color: "#1f2937", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700 }}
          >
            About Us
          </a>
          <a
            href="#testimonials"
            style={{ color: "#1f2937", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700 }}
          >
            Testimonials
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitMessage("");
              setIsBookingOpen(true);
            }}
            style={{
              color: "#1f2937",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 700,
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </nav>
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
                <h3 style={{ margin: 0, color: "#111827" }}>Book a Service</h3>
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

      <section style={{ textAlign: "center", padding: "18px 20px 26px" }}>
        <h1
          style={{
            color: "#09B7A1",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            marginBottom: "8px",
            marginTop: 0,
          }}
        >
          Home Repair Services in Bengaluru
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
          Plumbing | Electrical | Carpentry | Pest Control | Painting | Cleaning
        </p>
      </section>

      <section
        style={{  
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 50px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 7",
            minHeight: "260px",
            overflow: "hidden",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
            background: "#0f172a",
          }}
        >
          <Image
            src={slides[currentSlide]}
            alt={`Qwickrepair service slide ${currentSlide + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
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
        </div>

      </section>

      <section id="services" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#09B7A1", textAlign: "center", marginTop: 0, fontSize: "30px" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
            gap: "clamp(14px, 2vw, 24px)",
            marginTop: "40px",
            maxWidth: "1200px",
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

      <section id="about" style={{ padding: "60px 20px", background: "#f5f5f5" }}>
        <h2 style={{ color: "#09B7A1", textAlign: "center", marginTop: 0, fontSize: "30px" }}>Why Qwickrepair?</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "30px auto 0",
            textAlign: "center",
            lineHeight: "1.8",
          }}
        >
          At <b>Qwickrepair Solutions</b>, we bring together skilled professionals dedicated to
          delivering reliable and efficient home and commercial repair services.
          <br />
          <br />
          From <b>plumbing, electrical, and carpentry</b> to <b>painting, cleaning, and pest control</b>,
          we offer a complete range of solutions tailored to your needs.
          <br />
          <br />
          Whether it is your home, office, or hotel, our on-call services and AMC support ensure you
          get timely assistance exactly when you need it.
          <br />
          <br />
          We are committed to providing a <b>high-quality, hassle-free, and dependable service experience</b>,
          backed by trained technicians, the right tools, and a customer-first approach.
        </p>
      </section>

      <section id="testimonials" style={{ padding: "60px 20px", background: "#f5f5f5", textAlign: "center" }}>
        <h2 style={{ color: "#09B7A1", textAlign: "center", marginTop: 0, fontSize: "30px" }}>Customer Testimonials</h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto 0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "stretch",
              width: "max-content",
              animation: "testimonial-scroll 42s linear infinite",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
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
        style={{
          padding: "60px 20px",
          background: "linear-gradient(180deg, #f8fffe 0%, #eef9f8 100%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#09B7A1", textAlign: "center", marginTop: 0, fontSize: "30px" }}>
          Project Gallery
        </h2>
        <p
          style={{
            maxWidth: "760px",
            margin: "18px auto 0",
            color: "#4b5563",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          A quick look at some of the completed repair, maintenance, and improvement work handled by our team.
        </p>

        <div
          style={{
            maxWidth: "1200px",
            margin: "34px auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "22px",
          }}
        >
          {projectGallery.map((project) => (
            <div
              key={project.title}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 14px 32px rgba(15, 23, 42, 0.1)",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  background: "#dbe5e7",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "18px 18px 20px" }}>
                <h3 style={{ margin: 0, color: "#111827", fontSize: "1.2rem", lineHeight: 1.4 }}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" style={{ padding: "70px 20px 40px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#39b7ab",
              textAlign: "center",
              marginTop: 0,
              marginBottom: "28px",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "0.02em",
            }}
          >
            Contact Us
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              columnGap: "72px",
              rowGap: "36px",
              alignItems: "start",
              width: "100%",
            }}
          >
            <div>
              <h3 style={{ marginTop: 0, marginBottom: "18px", color: "#111827" }}>Get a Quote!</h3>

              <BookingForm
                sendEmail={sendEmail}
                services={services}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                submitMessage={submitMessage}
                isSubmitting={isSubmitting}
              />
            </div>

            <div style={{ paddingTop: "18px" }}>
              <p style={{ color: "#15847c", fontSize: "1.9rem", marginTop: 0, marginBottom: "18px" }}>
                Better yet, see us in person!
              </p>
              <p style={{ lineHeight: 1.7, fontSize: "1.05rem", color: "#374151", marginBottom: "70px" }}>
                We stay in constant communication with our customers until the job is done. To get a
                free quote, or if you have questions or special requests, just drop us a line.
              </p>

              <h3
                style={{
                  color: "#15847c",
                  fontSize: "2rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-fonia)",
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

              <div style={{ marginTop: "28px", maxWidth: "520px", display: "flex", flexDirection: "column", gap: "12px" }}>
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

              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
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

      <div
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
          />
        </a>
      </div>

      <footer
        style={{
          background: "#09B7A1",
          color: "#fff",
          textAlign: "center",
          padding: "18px 20px",
        }}
      >
        <p style={{ margin: 0 }}>&copy; 2026 Qwickrepair Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, image, onSelect }) {
  return (
    <button
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
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          background: "#fff",
          textAlign: "center",
          height: "100%",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "clamp(14px, 2vw, 20px)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "clamp(84px, 12vw, 150px)",
            aspectRatio: "1 / 1",
            marginBottom: "14px",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 480px) 84px, (max-width: 900px) 110px, 150px"
            style={{ objectFit: "contain" }}
          />
        </div>

        <h3
          style={{
            marginTop: 0,
            marginBottom: "8px",
            lineHeight: 1.3,
            fontSize: "clamp(1rem, 2.1vw, 1.1rem)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#09B7A1",
            fontWeight: "bold",
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
          color: "#6b7280",
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
      style={{
        background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
        borderRadius: "24px",
        border: "1px solid #d1d5db",
        boxShadow: "0 14px 34px rgba(15, 23, 42, 0.08)",
        padding: "20px",
        textAlign: "left",
        minHeight: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
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
            color: "#111827",
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
              color: "#111827",
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
