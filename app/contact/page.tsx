import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2  pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Contact Us
        </h1>
      </div>
      <div className="grid gap-y-8 gap-4 md:grid-cols-2 md:gap-6 lg:gap-10 pt-8">
        <ContactForm />
        <div className="w-full"></div>
      </div>
    </section>
  );
}
