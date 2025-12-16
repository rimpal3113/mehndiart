import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xowti7j",
        "template_usm5f9d",
        form.current,
        "JD1XzWoME1pcvUgGt"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  // Framer Motion variants
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen flex items-center px-4 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE – CONTACT FORM */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 text-[#653239]">
            Send Us a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#653239]"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#653239]"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#653239]"
            />

            <button
              type="submit"
              className="w-full bg-[#653239] text-white py-2 rounded-md hover:bg-[#4e252a] transition"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-600 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {error && (
              <p className="text-red-600 text-sm text-center">
                ❌ Failed to send message. Try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT SIDE – CONTACT DETAILS */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#653239]">
            Contact Information
          </h2>

          <div className="space-y-6 text-[#653239]">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#AF7A6D]" />
              <p className="text-lg">rimmehndiart31@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#AF7A6D]" />
              <p className="text-lg">+91 8488904795</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#AF7A6D]" />
              <p className="text-lg">Anand, Gujarat, India</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
