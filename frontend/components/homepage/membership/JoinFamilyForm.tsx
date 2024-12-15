import React, { useState } from "react";
import ServiceIconsRow from "./ServiceIconsRow";
import { Playfair_Display, Poppins } from "next/font/google";
import clsx from "clsx";
import { Toast } from "../../common/Toast";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const JoinFamilyForm = () => {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formType: "newsletter",
            formData: { email },
          }),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        setEmail("");
        setErrorMessage(null);
        setToast({
          message: "Form submitted successfully!",
          type: "success",
          isVisible: true,
        });
      } catch (error) {
        setErrorMessage("Failed to submit. Please try again.");
        setToast({
          message: "Failed to submit. Please try again.",
          type: "error",
          isVisible: true,
        });
      }
    } else {
      setErrorMessage("Invalid email format");
    }
  };

  return (
    <div className="flex flex-col justify-between bg-[#f6f5f5] w-full">
      <div className="flex flex-col mt-10 items-center py-10 px-4 md:px-8">
        <h2
          className={clsx(
            playFair.className,
            "text-2xl md:text-4xl mb-4 md:mb-6 text-gray-500 tracking-wide"
          )}
        >
          JOIN OUR FAMILY
        </h2>

        <p
          className={clsx(
            poppins.className,
            "font-semibold text-center text-gray-400 mb-4 max-w-xl leading-relaxed"
          )}
        >
          Join our newsletter to stay ahead with the latest arrivals, exclusive
          offers, and insider access to our community events.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full pb-20 flex justify-center items-center"
      >
        <div className="w-full  px-28 lg:px-60 xl:px-96">
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              aria-label="Your Email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              required
              autoComplete="email"
              className="relative w-full p-4 pr-12 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="absolute top-[12px] right-[20px] flex items-center justify-center bg-transparent text-gray-400 focus:outline-none hover:scale-110 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M4 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </form>

      <div className="w-full">
        <ServiceIconsRow />
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
};

export default JoinFamilyForm;
