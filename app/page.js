"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

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
"/slider/slide11.jpg"
];

const [currentSlide, setCurrentSlide] = useState(0);
const iconStyle = {
  width:"30px",
  height:"30px",
  cursor:"pointer"
};
const inputStyle = {
  padding:"12px",
  border:"1px solid #ddd",
  borderRadius:"8px",
  fontSize:"14px",
  outline:"none",
  background:"#fff"
};
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

<img
  src={slides[currentSlide]}
  style={{
    width:"100%",
    height:"400px",
    objectFit:"cover"
  }}
/>


function sendEmail(e){

e.preventDefault();

const name = e.target.name.value;
const phone = e.target.phone.value;
const email = e.target.email.value;
const service = e.target.service.value;
const problem = e.target.problem.value;

const subject = "Qwickrepair Service Booking";

const body = 
`Full Name: ${name}%0D%0A
Phone: ${phone}%0D%0A
Email: ${email}%0D%0A
Service: ${service}%0D%0A%0D%0A
Problem:%0D%0A${problem}`;

const mailtoLink =
`mailto:qwickrepair@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

window.open(mailtoLink, "_blank");

}

return(

<div style={{fontFamily:"Arial"}}>

{/* HEADER */}
<header style={{
background:"#ffffff",
padding:"15px 40px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
}}>

<div style={{display:"flex",alignItems:"center",gap:"10px"}}>

<img src="/logo/Qwickrepair.png" style={{height:"50px"}}/>

<h2 style={{color:"#09B7A1"}}>Qwickrepair Solutions</h2>

</div>

<div style={{display:"flex",gap:"20px"}}>
<a href="#services">Services</a>
<a href="#about">About Us</a>
<a href="#about">Testimonials</a>
<a href="#booking">Book Now</a>
</div>

</header>

{/* HERO */}
<section style={{textAlign:"center",padding:"60px"}}>
<h1 style={{color:"#09B7A1"}}>Home Repair Services in Bengaluru</h1>
<p>Plumbing • Electrical • Carpentry • Pest Control • Painting • Cleaning</p>
</section>

{/* SLIDER */}
<div
style={{
maxWidth:"1200px",
margin:"0 auto",
padding:"10px"
}}
>

<img
  src={slides[currentSlide]}
  style={{
    width:"80%",
    height:"500px",
    objectFit:"cover",
    borderRadius:"12px",
    boxShadow:"0 6px 20px rgba(0,0,0,0.2)"
  }}
/>

</div>

{/* SERVICES */}
<section id="services" style={{padding:"60px",textAlign:"center"}}>

<h2>Our Services</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"30px",
marginTop:"40px"
}}>

<ServiceCard title="Plumbing" image="/services/plumbing.jpg" message="Plumbing service"/>
<ServiceCard title="Electrical" image="/services/electrical.jpg" message="Electrical service"/>
<ServiceCard title="Carpentry" image="/services/carpentry.jpg" message="Carpentry service"/>
<ServiceCard title="Painting" image="/services/painting.jpg" message="Painting service"/>
<ServiceCard title="Cleaning" image="/services/cleaning.jpg" message="Cleaning service"/>
<ServiceCard title="Pest Control" image="/services/pest-control.jpg" message="Pest Control service"/>

</div>

</section>

{/* ABOUT */}
<section id="about" style={{padding:"60px",background:"#f5f5f5"}}>

<h2 style={{color:"#09B7A1", textAlign:"center"}}>Why Qwickrepair?</h2>

<p style={{
maxWidth:"900px",
margin:"30px auto",
textAlign:"center",
lineHeight:"1.7"
}}>

At <b>Qwickrepair Solutions</b>, we bring together skilled professionals dedicated to delivering reliable and efficient home and commercial repair services.

From <b>plumbing, electrical, and carpentry</b> to <b>painting, cleaning, and pest control</b>, we offer a complete range of solutions tailored to your needs.

Whether it’s your home, office, or hotel, our on-call services and AMC support ensure you get timely assistance — exactly when you need it.

We are committed to providing a <b>high-quality, hassle-free, and dependable service experience</b>, backed by trained technicians, the right tools, and a customer-first approach.

</p>

</section>

{/* TESTIMONIALS */}

<div
style={{
padding:"60px",
background:"#f5f5f5",
textAlign:"center"
}}
>

<h2>Customer Testimonials</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"30px",
marginTop:"40px"
}}
>

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}>
<p>"Very quick plumbing service. Highly recommended!"</p>
<h4>- Ravi Kumar</h4>
<p>⭐⭐⭐⭐⭐</p>
</div>

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}>
<p>"Electrician was professional and fixed the issue fast."</p>
<h4>- Priya Sharma</h4>
<p>⭐⭐⭐⭐⭐</p>
</div>

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}>
<p>"Everything was done to satisfaction within the three days timeand they were very supportive, and the floors were cleaned afterward."</p>
<h4>- Manoj Kumar B</h4>
<p>⭐⭐⭐⭐⭐</p>
</div>

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}>
<p>"The pest control man was very polite and kind. His inspection and treatment in controlling the cockroach problem was really commendable."</p>
<h4>- Bharat Kunar</h4>
<p>⭐⭐⭐⭐⭐</p>
</div>

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
}}>
<p>"Cleaning service was excellent. Very satisfied."</p>
<h4>- Arjun Reddy</h4>
<p>⭐⭐⭐⭐⭐</p>
</div>

</div>

</div>

{/* BOOKING */}
<section id="booking" style={{
padding:"60px",
background:"#f4f7f7"
}}>

<div style={{
maxWidth:"1100px",
margin:"0 auto",
display:"flex",
flexWrap:"wrap",
gap:"40px",
justifyContent:"center"
}}>

{/* LEFT - FORM CARD */}
<div style={{
flex:"1",
minWidth:"300px",
background:"#fff",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 6px 20px rgba(0,0,0,0.1)"
}}>

<h2 style={{color:"#09B7A1",marginBottom:"20px"}}>
Book a Service
</h2>

<form onSubmit={sendEmail} style={{display:"flex",flexDirection:"column",gap:"15px"}}>

<input name="name" placeholder="Full Name" required style={inputStyle}/>
<input name="phone" placeholder="Phone Number" required style={inputStyle}/>
<input name="email" placeholder="Email Address" required style={inputStyle}/>

<select name="service" style={inputStyle}>
<option>Plumbing</option>
<option>Electrical</option>
<option>Carpentry</option>
<option>Pest Control</option>
<option>Painting</option>
<option>Cleaning</option>
</select>

<textarea name="problem" placeholder="Describe your problem" rows="4" style={inputStyle}/>

<button
style={{
background:"#09B7A1",
color:"#fff",
padding:"14px",
border:"none",
borderRadius:"8px",
fontWeight:"bold",
cursor:"pointer",
boxShadow:"0 4px 12px rgba(0,0,0,0.2)"
}}
>
Send Request
</button>

</form>

</div>

{/* RIGHT - CONTACT CARD */}
<div style={{
flex:"1",
minWidth:"300px",
background:"#fff",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 6px 20px rgba(0,0,0,0.1)"
}}>

<h2 style={{color:"#09B7A1",marginBottom:"20px"}}>
Contact Us
</h2>

<p style={{lineHeight:"1.7"}}>
<b style={{fontSize:"20px"}}>Qwickrepair Solutions</b><br/>
No. 143/2, 4th Cross, 1st Main,<br/>
Krishnayan Palya, Indiranagar,<br/>
Bengaluru - 560038

</p>

<div style={{marginTop:"20px",lineHeight:"0.2"}}>

<p><b>Email:</b> qwickrepair@gmail.com</p>
<p><b>Hours:</b> 8:00AM - 8:00PM</p> {/* SOCIAL ICONS */}
<div style={{
display:"flex",
gap:"12px",
marginTop:"10px"
}}>

<a href="#" target="_blank">
<img src="/icons/facebook.png" style={iconStyle}/>
</a>

<a href="#" target="_blank">
<img src="/icons/instagram.png" style={iconStyle}/>
</a>

<a href="#" target="_blank">
<img src="/icons/telegram.png" style={iconStyle}/>
</a>

<a href="https://wa.me/918880787787" target="_blank">
<img src="/icons/whatsapp.png" style={iconStyle}/>
</a>

</div>


</div>

</div>

</div>

</section>

{/* FLOATING */}
<div
style={{
position:"fixed",
right:"20px",
bottom:"20px",
display:"flex",
flexDirection:"column",
gap:"10px",
zIndex:999
}}
>

{/* CALL BUTTON */}
<a href="tel:+918880787787">

<button
style={{
background:"#09B7A1",
color:"#fff",
border:"none",
padding:"16px",
borderRadius:"60%",
cursor:"pointer",
boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
}}
>
📞
</button>

</a>

{/* WHATSAPP ICON */}
<a href="https://wa.me/918880787787" target="_blank">

<img
  src="/icons/whatsapp.png"
  alt="WhatsApp"
  style={{
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    cursor:"pointer"
  }}
/>

</a>

</div>

<div>

{/* FLOATING BUTTONS */}

<div style={{
position:"fixed",
right:"20px",
bottom:"20px"
}}>
  ...
</div>

{/* FOOTER */}
<footer
style={{
background:"#09B7A1",
color:"#fff",
textAlign:"center",
padding:"20px",
marginTop:"40px"
}}
>
<p style={{margin:0}}>
© 2026 Qwickrepair Solutions. All rights reserved.
</p>
</footer>

</div>

</div>
)

}

function ServiceCard({title,image,message}){

return(

<a
href={`https://wa.me/918880787787?text=${encodeURIComponent(message)}`}
target="_blank"
style={{textDecoration:"none",color:"#000"}}
>

<div
style={{
borderRadius:"12px",
overflow:"hidden",
boxShadow:"0 6px 20px rgba(0,0,0,0.1)",
background:"#fff",
textAlign:"center",
padding:"20px"
}}
>

<img
src={image}
style={{
width:"100%",
height:"120px",
objectFit:"contain",
marginBottom:"10px"
}}
/>

<h3>{title}</h3>

<p style={{color:"#09B7A1",fontWeight:"bold"}}>
Book Now
</p>

</div>

</a>

)

}

