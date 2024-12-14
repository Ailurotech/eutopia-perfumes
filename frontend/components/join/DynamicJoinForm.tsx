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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      return;
    }

    // Handle form submission
    try {
      // Add your API call here
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({});
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
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

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
