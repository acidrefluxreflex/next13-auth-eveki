import ContactForm from "../components/ContactForm";

export default function ContactSection() {
  return (
    <div className="container block  max-w-4xl p-0 xs:p-5 ">
      <h1 className="mb-4 text-4xl font-futura text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r  to-asagi from-botann">
          Contact
        </span>
      </h1>
      <div className="container block justify-left max-w-3xl">
        <ContactForm />
      </div>
    </div>
  );
}
