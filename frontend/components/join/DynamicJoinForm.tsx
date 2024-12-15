import { useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import clsx from "clsx";
import Select from "react-select";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface FormField {
  fieldType: string;
  fieldLabel: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  layout?: "full" | "half";
  layoutGroup?: string;
}

interface DynamicJoinFormProps {
  title: string;
  description: string;
  fields: FormField[];
}

export default function DynamicJoinForm({
  title,
  description,
  fields,
}: DynamicJoinFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.fieldLabel]) {
        newErrors[field.fieldLabel] = "This field is required";
      }

      if (field.fieldType === "email" && formData[field.fieldLabel]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.fieldLabel])) {
          newErrors[field.fieldLabel] = "Please enter a valid email address";
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "join",
          formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormData({});
      setErrors({});
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    switch (field.fieldType) {
      case "multiSelect":
        return (
          <Select
            isMulti
            name={field.fieldLabel}
            placeholder={field.placeholder || "Select options..."}
            options={field.options?.map((option) => ({
              value: option,
              label: option,
            }))}
            value={
              formData[field.fieldLabel]?.map((value: string) => ({
                value,
                label: value,
              })) || []
            }
            onChange={(selectedOptions) => {
              setFormData({
                ...formData,
                [field.fieldLabel]: selectedOptions.map(
                  (option) => option.value
                ),
              });
            }}
            className="text-black"
            classNames={{
              control: (state) =>
                `!border-gray-300 !rounded-md ${state.isFocused ? "!ring-2 !ring-primary !border-transparent" : ""}`,
              option: (state) =>
                `!text-black ${state.isSelected ? "!bg-primary" : state.isFocused ? "!bg-primary/10" : ""}`,
              multiValue: () => "!bg-primary/20",
              multiValueLabel: () => "!text-primary-dark",
              multiValueRemove: () =>
                "!text-primary-dark hover:!bg-primary/30 hover:!text-primary-dark",
            }}
          />
        );
      case "textarea":
        return (
          <textarea
            name={field.fieldLabel}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.fieldLabel] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [field.fieldLabel]: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
          />
        );
      case "radio":
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={field.fieldLabel}
                  value={option}
                  checked={formData[field.fieldLabel] === option}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.fieldLabel]: e.target.value,
                    })
                  }
                  className="text-primary"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );
      default:
        return (
          <input
            type={field.fieldType}
            name={field.fieldLabel}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.fieldLabel] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [field.fieldLabel]: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        );
    }
  };

  // Group fields by layout group
  const groupedFields = fields.reduce(
    (acc, field) => {
      if (field.layout === "half" && field.layoutGroup) {
        if (!acc.groups[field.layoutGroup]) {
          acc.groups[field.layoutGroup] = [];
        }
        acc.groups[field.layoutGroup].push(field);
      } else {
        acc.singles.push(field);
      }
      return acc;
    },
    { groups: {} as Record<string, FormField[]>, singles: [] as FormField[] }
  );

  const renderFieldGroup = (groupFields: FormField[]) => (
    <div className="grid grid-cols-2 gap-4">
      {groupFields.map((field, index) => (
        <div key={index} className="space-y-2">
          <label
            className={clsx(poppins.className, "block text-sm font-medium")}
          >
            {field.fieldLabel}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {renderField(field)}
          {errors[field.fieldLabel] && (
            <p className="text-red-500 text-sm">{errors[field.fieldLabel]}</p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className={clsx(playFair.className, "text-3xl text-center mb-4")}>
        {title}
      </h1>
      <p className={clsx(poppins.className, "text-center mb-8 text-gray-600")}>
        {description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Render grouped fields */}
        {Object.values(groupedFields.groups).map((group, index) => (
          <div key={`group-${index}`}>{renderFieldGroup(group)}</div>
        ))}

        {/* Render single fields */}
        {groupedFields.singles.map((field, index) => (
          <div key={`single-${index}`} className="space-y-2">
            <label
              className={clsx(poppins.className, "block text-sm font-medium")}
            >
              {field.fieldLabel}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {renderField(field)}
            {errors[field.fieldLabel] && (
              <p className="text-red-500 text-sm">{errors[field.fieldLabel]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-center">
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
        </div>
      </form>
    </div>
  );
}
