import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import profileImage from "./assets/profilepics.jpeg";
import { personalInfo, services, caseStudies, testimonials } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-[#ecddd4] text-gray-800 font-sans">
      {/* HEADER / NAV */}
      <header className="p-6 bg-[#ecddd4] shadow-sm flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tighter">
          {personalInfo.name}
        </h1>
        <a
          href="#contact"
          className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Let's Talk
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="px-6 py-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
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
        <div className="md:w-7/12 text-center md:text-left">
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
                className="p-8 border rounded-2xl bg-gray-50 hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section id="work" className="px-6 py-20 bg-[#785042]  text-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
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

      {/* TESTIMONIALS */}
      <section className="px-6 py-20 bg-white">
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
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
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
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Let's Build Something Great
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-black text-white p-4 rounded-lg font-bold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
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
            href="https://linkedin.com"
            target="_blank"
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-blue-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-gray-700 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaXTwitter />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            className="bg-gray-900 p-4 rounded-full text-xl hover:bg-pink-600 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
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
