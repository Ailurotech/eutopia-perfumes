import { useState } from "react";
import { Poppins } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when typing
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email before submission
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors((prev) => ({
        ...prev,
        email: emailError,
      }));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Add your API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

      // Clear form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-black">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className={clsx(
            poppins.className,
            "block text-sm font-medium text-black"
          )}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className={clsx(
            poppins.className,
            "block text-sm font-medium text-black"
          )}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={clsx(
            "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black",
            errors.email ? "border-red-500" : "border-gray-300"
          )}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className={clsx(
            poppins.className,
            "block text-sm font-medium text-black"
          )}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
          placeholder="Subject of your message"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className={clsx(
            poppins.className,
            "block text-sm font-medium text-black"
          )}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
          placeholder="Your message here..."
        />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            "w-full relative py-3 px-4 rounded-md font-medium transition-colors",
            isSubmitting
              ? "bg-gray-800 text-white cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-black"
          )}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <p className="text-green-600 text-center font-medium">
            Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500 text-center font-medium">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
