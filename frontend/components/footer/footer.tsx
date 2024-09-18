import React from 'react';
import { Text, Link, Image } from '@chakra-ui/react';
import { footerTheme } from '../styles/footer-style'; 
import {
  facebookIconStyle,
  instagramIconStyle,
  twitterIconStyle,
  youtubeIconStyle,
} from '../styles/footer-style'; 

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-footer-gray p-4 flex flex-col lg:flex-row justify-between">
      <div className="flex-1 flex justify-center text-center mt-[calc(10%)] order-1 lg:order-none">
        <div className="flex-1 flex flex-col text-center space-y-4">
          <Text as="p" sx={footerTheme.baseStyle?.title}>CATEGORIES</Text>
          <Link href="/shop-all" sx={footerTheme.baseStyle?.link}>Shop All</Link>
          <Link href="/for-her" sx={footerTheme.baseStyle?.link}>For Her</Link>
          <Link href="/for-him" sx={footerTheme.baseStyle?.link}>For Him</Link>
          <Link href="/neutral" sx={footerTheme.baseStyle?.link}>Neutral</Link>
        </div>
        <div className="flex-1 flex flex-col text-center space-y-4">
          <Text as="p" sx={footerTheme.baseStyle?.title}>SHOP INFO</Text>
          <Link href="/home" sx={footerTheme.baseStyle?.link}>Home</Link>
          <Link href="/about-us" sx={footerTheme.baseStyle?.link}>About Us</Link>
          <Link href="/store-location" sx={footerTheme.baseStyle?.link}>Store Locations</Link>
          <Link href="/contact-us" sx={footerTheme.baseStyle?.link}>Contact Us</Link>
        </div>
      </div>

      <div className="flex-1 flex-col flex items-center justify-center text-center space-y-8 mt-[calc(10%)] mb-[calc(4%)] order-3 lg:order-none">
        <div><Image src="/images/eutopia.png" alt="Eutopia Logo" /></div>
        <div className="flex-1 flex justify-center text-center space-x-1">
          <Link href="/privacy" sx={footerTheme.baseStyle?.link}>Privacy Policy</Link> 
          <Text sx={footerTheme.baseStyle?.text}>|</Text>
          <Link href="/terms" sx={footerTheme.baseStyle?.link}>Terms of Service</Link>
        </div>
        <div><Image src="/images/payment.png" alt="Payment Methods" /></div>
        <div><Text sx={footerTheme.baseStyle?.text}>© Copyright Eutopia Perfumes. All Rights Reserved</Text></div>
      </div>

      <div className="flex-1 flex flex-col justify-center text-center space-y-4 mt-[calc(10%)] order-2 lg:order-none">
          <Text as="p" sx={footerTheme.baseStyle?.title}>SUPPORT</Text>
          <Link href="/terms" sx={footerTheme.baseStyle?.link}>FAQ</Link>
          <Link href="/contact" sx={footerTheme.baseStyle?.link}>Shipping, Returns and Refund</Link>
        
          <div className="flex-1 flex justify-center text-center space-x-4">
            <Link href="#">
              <Image src="/images/facebook.png" alt="Facebook" sx={facebookIconStyle} />
            </Link>
            <Link href="#">
              <Image src="/images/instagram.png" alt="Instagram" sx={instagramIconStyle} />
            </Link>
            <Link href="#">
              <Image src="/images/twitter.png" alt="Twitter" sx={twitterIconStyle} />
            </Link>
            <Link href="#">
              <Image src="/images/youtube.png" alt="Youtube" sx={youtubeIconStyle} />
            </Link>
          </div>

      </div>
    </div>
  );
}

export default Footer;


