import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const linkButton = defineStyle({
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  color: "#66685A",
  padding: "0.5rem",
  display: "none",
  borderRadius: "5px",
  " @media (max-width:768px)": {
    display: "block",
  },
  _hover: {
    color: "#ffffff",
    backgroundColor: "rgba(102,104,90,0.9)",
    borderColor: "#66685A",
  },
});

const pageNumberButton = defineStyle({
  width: "2rem",
  height: "2rem",
  fontSize: "1rem",
  lineHeight: "1rem",
  color: "#000000",
  border: "1px solid #C4CDD5",
  borderRadius: "5px",
  padding: "0.5rem",
  _hover: {
    color: "#4200FF",
    borderColor: "#4200FF",
  },
});

const pageArrowButton = defineStyle({
  width: "2rem",
  height: "2rem",
  fontSize: "1rem",
  lineHeight: "1rem",
  color: "#C4CDD5",
  border: "1px solid #C4CDD5",
  borderRadius: "5px",
  padding: "0.5rem",
  _hover: {
    color: "#4200FF",
    borderColor: "#4200FF",
  },
  _disabled: {
    color: "#C4CDD5",
    backgroundColor: "#919EAB",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { linkButton, pageNumberButton, pageArrowButton },
});
