import ContactForm from "../components/ContactForm";

export default function ContactSection() {
  return (
    <div className="container block  max-w-4xl">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Contact
        </span>
      </h1>
      <div className="container block justify-left max-w-3xl">
        <ContactForm />
      </div>
    </div>
  );
}
