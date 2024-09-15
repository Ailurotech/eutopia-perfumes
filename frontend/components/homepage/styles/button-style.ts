import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const buttonLink = defineStyle({
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  color: "#66685A",
  padding: "0.5rem",
  display: "none",
  " @media (max-width:768px)": {
    display: "block",
  },
  _hover: {
    color: "#ffffff",
    backgroundColor: "rgba(102,104,90,0.9)",
    borderColor: "#66685A",
    borderRadius: "5px",
    padding: "0.5rem",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { buttonLink },
});
