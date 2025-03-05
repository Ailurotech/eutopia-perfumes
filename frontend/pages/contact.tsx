import Head from "next/head";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon } from "@/components/common/Icon";
import { Poppins, Playfair_Display } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function ContactPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get in Touch: We're Here to Assist You.\nChris Huang, Jan 20, 11:10PM.\nThe Main one (Under the Eutopia Perfumes)"
        />
      </Head>
      <main className="min-h-screen bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className={clsx(playfair.className, "text-4xl mb-6")}>
              Get In Touch
            </h1>
            <p
              className={clsx(
                poppins.className,
                "text-gray-600 max-w-2xl mx-auto leading-relaxed"
              )}
            >
              We are eager to assist you with any questions or inquiries you may
              have. You can easily get in touch with us by filling out the
              provided contact form, reaching out via email, or visiting our
              office using the address.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className={clsx(playfair.className, "text-2xl mb-8")}>
                  Contact Information
                </h2>
                <div className="space-y-8">
                  {/* Email Section */}
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={clsx(
                          poppins.className,
                          "font-semibold mb-2"
                        )}
                      >
                        Email
                      </h3>
                      <a
                        href="mailto:info@eutopiaperfumes.com.au"
                        className="text-primary hover:underline"
                      >
                        info@eutopiaperfumes.com.au
                      </a>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={clsx(
                          poppins.className,
                          "font-semibold mb-2"
                        )}
                      >
                        Phone
                      </h3>
                      <a
                        href="tel:+61420367614"
                        className="text-primary hover:underline"
                      >
                        +61 420 367 614
                      </a>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className={clsx(
                          poppins.className,
                          "font-semibold mb-2"
                        )}
                      >
                        Address
                      </h3>
                      <address className="not-italic leading-relaxed">
                        Unit 9/54 Quilton Place
                        <br />
                        Crestmead
                        <br />
                        QLD 4132
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0454949459547!2d153.0885163!3d-27.6024444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914452a4404e85%3A0x9f1a897c1f98d86c!2s54%20Quilton%20Pl%2C%20Crestmead%20QLD%204132!5e0!3m2!1sen!2sau!4v1709700821983!5m2!1sen!2sau"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
