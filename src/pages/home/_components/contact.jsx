import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const ContactPage = () => {
  return (
    <section className="relative h-screen" id="contact">
      {/* Wave Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0"
      >
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,160L48,133.3C96,107,192,53,288,80C384,107,480,213,576,213.3C672,213,768,107,864,80C960,53,1056,107,1152,106.7C1248,107,1344,53,1392,26.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* <section className="flex flex-col items-center justify-center h-screen">
        <div className="relative z-10 max-w-xl text-center space-y-6">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-300">
            Feel free to reach out if you’d like to collaborate or just say hi
            👋
          </p>

          <div className="flex flex-col gap-4 items-center">
            <a
              href="mailto:youremail@example.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FiMail size={20} /> youremail@example.com
            </a>
            <a
              href="tel:+621234567890"
              className="flex items-center gap-2 hover:text-green-400 transition-colors"
            >
              <FiPhone size={20} /> +62 123 4567 890
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FiLinkedin size={22} />
            </a>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default ContactPage;
