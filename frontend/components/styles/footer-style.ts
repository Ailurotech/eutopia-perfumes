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

export const footerTheme = defineStyleConfig({
  baseStyle: {
    text: baseTextStyle,
    link: linkStyle,
    title: titleStyle,
  },
});
// 通用图标样式
const iconStyle = defineStyle({
    transition: "all 0.3s ease-in-out",
    width: "40px",
    height: "40px",
  });
  
  // 各个社交图标的悬停样式
  export const facebookIconStyle = defineStyle({
    ...iconStyle,
    _hover: {
      content: 'url("/images/facebook-hover.png")', // 悬停时的 Facebook 图标
    },
  });
  
  export const instagramIconStyle = defineStyle({
    ...iconStyle,
    _hover: {
      content: 'url("/images/instagram-hover.png")', // 悬停时的 Instagram 图标
    },
  });
  
  export const twitterIconStyle = defineStyle({
    ...iconStyle,
    _hover: {
      content: 'url("/images/twitter-hover.png")', // 悬停时的 Twitter 图标
    },
  });
  
  export const youtubeIconStyle = defineStyle({
    ...iconStyle,
    _hover: {
      content: 'url("/images/youtube-hover.png")', // 悬停时的 YouTube 图标
    },
  });
  