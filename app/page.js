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
  "/slider/Slide7.jpg",
  "/slider/Slide8.jpg",
  "/slider/slide9.jpg",
  "/slider/Slide10.jpg",
  "/slider/slide11.jpg",
];

const testimonials = [
  {
    text: "Very quick plumbing service. Highly recommended!",
    name: "Ravi Kumar, Whitefield",
  },
  {
    text: "Electrician was professional and fixed the issue fast.",
    name: "Priya Patel, Kasturinagar",
  },
  {
    text: "Everything was done to satisfaction within three days, and the team was very supportive throughout.",
    name: "Sonita B, Nikoo Homes",
  },
  {
    text: "The service was prompt, clear, and reliable from booking to completion.",
    name: "Kuhu, Kolte Patil Raaga",
  },
  {
    text: "Work was completed neatly and on time, and the staff stayed helpful the whole way.",
    name: "Manoj Kumar B, Nikoo Homes",
  },
  {
    text: "Pest control service was polite, thorough, and effective.",
    name: "Bharat Kumar, Mahadevpura",
  },
  {
    text: "Cleaning service was excellent. Very satisfied.",
    name: "Arjun Reddy, Shobha City",
  },
];

const services = [
  { title: "Plumbing", image: "/services/plumbing.jpg" },
  { title: "Electrical", image: "/services/electrical.jpg" },
  { title: "Carpentry", image: "/services/carpentry.jpg" },
  { title: "Painting", image: "/services/painting.jpg" },
  { title: "Cleaning", image: "/services/cleaning.jpg" },
  { title: "Pest Control", image: "/services/pest-control.jpg" },
];

const iconStyle = {
  width: "30px",
  height: "30px",
  cursor: "pointer",
};

const contactInputStyle = {
  width: "100%",
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [selectedService, setSelectedService] = useState("General Enquiry");
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

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(testimonialInterval);
  }, []);

  async function sendEmail(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const payload = {
      service: form.service.value.trim(),
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      house: form.house.value.trim(),
      address: form.address.value.trim(),
      details: form.details.value.trim(),
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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "We could not send your request right now. Please call or WhatsApp Qwickrepair and we will help you directly."
        );
      }

      form.reset();
      setSelectedService("General Enquiry");
      setSubmitMessage("Your request has been sent successfully.");
    } catch (error) {
      setSubmitMessage(
        error.message ||
          "We could not send your request right now. Please call or WhatsApp Qwickrepair and we will help you directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const activeTestimonial = testimonials[testimonialIndex];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
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
          <a
            href="#booking"
            style={{ color: "#1f2937", textDecoration: "none", fontSize: "0.95rem", fontWeight: 700 }}
          >
            Book Now
          </a>
        </nav>
      </header>

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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "18px",
          }}
        >
          {slides.map((_, index) => (
            <button
              key={`slide-dot-${index}`}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === currentSlide ? "34px" : "10px",
                height: "10px",
                borderRadius: "999px",
                border: "none",
                background: index === currentSlide ? "#09B7A1" : "#cbd5e1",
                cursor: "pointer",
                transition: "all 0.25s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>

      <section id="services" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginTop: 0 }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "24px",
            marginTop: "40px",
            maxWidth: "1200px",
            marginInline: "auto",
            width: "100%",
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onSelect={() => {
                setSelectedService(service.title);
                setSubmitMessage("");
              }}
            />
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: "60px 20px", background: "#f5f5f5" }}>
        <h2 style={{ color: "#09B7A1", textAlign: "center", marginTop: 0 }}>Why Qwickrepair?</h2>

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
        <h2 style={{ marginTop: 0 }}>Customer Testimonials</h2>

        <div
          style={{
            maxWidth: "780px",
            margin: "40px auto 0",
            background: "#fff",
            padding: "32px 24px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "16px" }}>
            &ldquo;{activeTestimonial.text}&rdquo;
          </p>
          <h4 style={{ margin: 0, color: "#09B7A1" }}>- {activeTestimonial.name}</h4>
          <p
            style={{
              letterSpacing: "4px",
              marginTop: "14px",
              marginBottom: "20px",
              color: "#d4af37",
            }}
          >
            {"\u2605\u2605\u2605\u2605\u2605"}
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {testimonials.map((testimonial, index) => (
              <button
                key={`${testimonial.name}-${index}`}
                type="button"
                onClick={() => setTestimonialIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  border: "none",
                  background: index === testimonialIndex ? "#09B7A1" : "#cbd5e1",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
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

              <form
                onSubmit={sendEmail}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  background: "#ffffff",
                  padding: "8px 0",
                }}
              >
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

                <input name="name" placeholder="Name" required style={contactInputStyle} />
                <input name="email" type="email" placeholder="Email*" required style={contactInputStyle} />
                <input name="phone" placeholder="Phone: *" required style={contactInputStyle} />
                <input name="house" placeholder="Flat/House No." style={contactInputStyle} />
                <input
                  name="address"
                  placeholder="Address (Street, City, Zip Code)"
                  style={contactInputStyle}
                />
                <textarea
                  name="details"
                  placeholder="Let us know the details of what you are looking for, and we'll contact you with a quote."
                  rows="7"
                  style={{ ...contactInputStyle, resize: "vertical", lineHeight: 1.6 }}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: "linear-gradient(90deg, #41b9ab 0%, #46b9a7 100%)",
                    color: "#000",
                    padding: "13px 24px",
                    border: "none",
                    borderRadius: "12px",
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
            </div>

            <div style={{ paddingTop: "18px" }}>
              <p style={{ color: "#15847c", fontSize: "1.9rem", marginTop: 0, marginBottom: "18px" }}>
                Better yet, see us in person!
              </p>
              <p style={{ lineHeight: 1.7, fontSize: "1.05rem", color: "#374151", marginBottom: "26px" }}>
                We stay in constant communication with our customers until the job is done. To get a
                free quote, or if you have questions or special requests, just drop us a line.
              </p>

              <h3 style={{ color: "#15847c", fontSize: "2rem", fontWeight: 700, marginBottom: "16px" }}>
                Qwickrepair Solutions
              </h3>
              <p style={{ lineHeight: 1.7, fontSize: "1.05rem", color: "#4b5563", maxWidth: "420px" }}>
                143/2, 1st Main, 4th Cross, Krishnayan Palya, Indiranagar, Bengaluru, Karnataka
                560038
              </p>

              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Image src="/icons/facebook.png" alt="Facebook" width={30} height={30} style={iconStyle} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Image src="/icons/instagram.png" alt="Instagram" width={30} height={30} style={iconStyle} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Telegram">
                  <Image src="/icons/telegram.png" alt="Telegram" width={30} height={30} style={iconStyle} />
                </a>
                <a href="https://wa.me/918880787787" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <Image src="/icons/whatsapp.png" alt="WhatsApp" width={30} height={30} style={iconStyle} />
                </a>
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
              borderRadius: "50%",
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

        <a href="https://wa.me/918880787787" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
          <Image
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            width={50}
            height={50}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: "pointer",
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
    <a
      href="#booking"
      onClick={onSelect}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          background: "#fff",
          textAlign: "center",
          padding: "20px",
          height: "100%",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "120px", marginBottom: "10px" }}>
          <Image src={image} alt={title} fill sizes="200px" style={{ objectFit: "contain" }} />
        </div>

        <h3>{title}</h3>
        <p style={{ color: "#09B7A1", fontWeight: "bold", marginBottom: 0 }}>Book Now</p>
      </div>
    </a>
  );
}
