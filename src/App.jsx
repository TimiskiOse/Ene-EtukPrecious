import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import ContactForm from "./components/ContactForm";
import { useState } from "react";
import profileImage from "./assets/profilepic.jpeg";
import icon from "./assets/icon.PNG";
import {
  personalInfo,
  services,
  caseStudies,
  testimonials,
  portfolio,
} from "./data";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#ecddd4] text-gray-800 font-sans">
      {/* HEADER / NAV */}
      <header className="p-4 bg-[#ecddd4] shadow-sm flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src={icon} alt="Icon" className="h-10 w-10" />
          <h1 className="text-xl font-bold tracking-tighter">
            {personalInfo.name}
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="hover:text-gray-600 transition">
            Services
          </a>
          <a href="#work" className="hover:text-gray-600 transition">
            Work
          </a>
          <a
            href="#contact"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#ecddd4] shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600"
            >
              Services
            </a>

            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600"
            >
              Work
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-black text-white px-6 py-2 rounded-full"
            >
              Let's Talk
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT COLUMN: Image, Name, and Role */}
        <div className="md:w-5/12 flex flex-col items-center md:items-start md:text-left">
          <img
            src={profileImage}
            alt={personalInfo.name}
            className="w-full h-full object-cover rounded-2xl shadow-xl mb-6 border border-white"
          />
          <h2 className="text-2xl font-bold uppercase text-gray-900">
            {personalInfo.name}
          </h2>
          <p className="text-xl text-blue-600 font-semibold mt-1 tracking-wide">
            {personalInfo.role}
          </p>
        </div>

        {/* RIGHT COLUMN: Headline, Summary, and Buttons */}
        <div className="md:w-7/12 md:text-left">
          <h2 className="text-2xl font-bold leading-tight md:text-4xl mb-6">
            Helping Brands Grow Through
            <span className="text-blue-600 text-xl md:text-3xl">
              {" "}
              Strategic Social Media Management
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#work"
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-black text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">My Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 border rounded-2xl bg-gray-50 hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex gap-4 mt-4">
                  <FaInstagram className="text-2xl text-pink-500 mb-3" />
                  <FaXTwitter className="text-2xl text-black mb-3" />
                  <FaTiktok className="text-2xl text-black mb-3" />
                  <FaLinkedin className="text-2xl text-blue-700 mb-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="px-6 py-20 bg-[#785042]  text-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Work Experience
          </h3>
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-[#ecddd4] p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-1/3">
                  <h4 className="text-2xl font-bold text-black">
                    {study.client}
                  </h4>
                  <p className="text-gray-900 mt-2">{study.role}</p>
                  <p className="text-sm text-gray-800 mt-1">{study.timeline}</p>
                </div>
                <div className="md:w-2/3">
                  <h5 className="font-semibold text-black text-lg mb-2">
                    Strategy:
                  </h5>
                  <p className="text-gray-800 mb-4">{study.strategy}</p>
                  <h5 className="font-semibold text-black text-lg mb-2">
                    Results:
                  </h5>
                  <ul className="list-disc list-inside text-gray-800">
                    {study.results.map((res, index) => (
                      <li key={index}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / CONTENT SHOWCASE */}
      <section id="work" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Content I've Created
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolio.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-300"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white font-semibold text-center px-4">
                    View Post
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-6 py-10 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-black">100K+</h3>
            <p className="text-gray-600">Followers Grown</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black">250%</h3>
            <p className="text-gray-600">Average Engagement</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black">10+</h3>
            <p className="text-gray-600">Brands Managed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black">6+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            What Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <p className="text-lg italic text-gray-700 mb-8">
                  "{test.quote}"
                </p>

                {/* Avatar, Name, and Role */}
                <div className="flex items-center gap-4">
                  <img
                    src={test.image}
                    alt={test.author}
                    className="w-14 h-14 rounded-full object-contain border-2 border-gray-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{test.author}</h4>
                    <p className="text-sm text-gray-500">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="px-6 py-20 bg-[#ecddd4]">
        <ContactForm />
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="flex justify-center gap-6 mb-8">
          {/* Email */}
          <a
            href={"mailto:preciouseneetuk@gmail.com"}
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-gray-800 hover:text-white hover:scale-110 transition duration-300"
          >
            <MdEmail />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/precious-ene-etuk-0597893a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-blue-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/preciouseneetuk?s=21"
            target="_blank"
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-gray-700 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaXTwitter />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/precious_eneetuk?igsh=MTJ5YTFlM2ZjZjF4OA=="
            target="_blank"
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-pink-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@preciouseneetuk?_r=1&_t=ZS-94sRQsdaa85"
            target="_blank"
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-white hover:text-black hover:scale-110 transition duration-300"
          >
            <FaTiktok />
          </a>
        </div>

        {/* copyright */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
