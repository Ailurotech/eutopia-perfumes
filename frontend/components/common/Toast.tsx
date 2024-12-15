import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-4 right-4 z-50"
        >
          <div
            className={clsx(
              "rounded-lg shadow-lg p-4 flex items-center gap-2 min-w-[300px]",
              type === "success" ? "bg-green-50" : "bg-red-50"
            )}
          >
            <div
              className={clsx(
                "flex-1",
                type === "success" ? "text-green-800" : "text-red-800"
              )}
            >
              {message}
            </div>
            <button
              onClick={onClose}
              className={clsx(
                "p-1 rounded-full hover:bg-opacity-10",
                type === "success" ? "hover:bg-green-800" : "hover:bg-red-800"
              )}
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
