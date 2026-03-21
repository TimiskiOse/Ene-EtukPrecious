import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mreyvpkb");
  if (state.succeeded) {
    return <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center md:text-3xl">
        Let's Build Something Great
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="you@company.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your message here..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-black text-white p-4 rounded-lg font-bold hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>;
  }
  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center md:text-3xl">
        Let's Build Something Great
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="you@company.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-700 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your message here..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-black text-white p-4 rounded-lg font-bold hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
