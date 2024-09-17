import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseTextStyle = defineStyle({
  color: "#808274", 
  fontSize: "1rem", 
  fontWeight: "300"
});

const linkStyle = defineStyle({
  color: "#808274", 
  fontSize: "1rem",
  fontWeight: "300",
  _hover: {
    color: "#B8860B", 
  },
});

const titleStyle = defineStyle({
  fontSize: "1.25rem", 
  fontWeight: "bold",
  color: "#66685A", 
});

// 定义整个样式配置
export const footerTheme = defineStyleConfig({
  baseStyle: {
    text: baseTextStyle,
    link: linkStyle,
    title: titleStyle,
  },
});

