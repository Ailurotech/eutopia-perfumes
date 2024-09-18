import React from 'react';
import { Text, Link, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { footerTheme } from '../styles/footer-style'; 
import {
  facebookIconStyle,
  instagramIconStyle,
  twitterIconStyle,
  youtubeIconStyle,
} from '../styles/footer-style'; 
import { NavigationRoute } from '../homepage/route';
import { RoutRoute } from '../homepage/route';

const Footer: React.FC = () => {
  const { pathname } = useRouter();
  const isActive = (path: string): boolean => pathname === path;
  return (
    <div className="w-full bg-footer-gray p-4 flex flex-col lg:flex-row justify-between">
      <div className="flex-1 flex justify-center text-center mt-[calc(10%)] order-1 lg:order-none">
        <div className="flex-1 flex flex-col text-center space-y-4">
          <Text as="p" sx={footerTheme.baseStyle?.title}>CATEGORIES</Text>
          <Link
            href={NavigationRoute.All.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.All.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            Shop All
          </Link>
          <Link
            href={NavigationRoute.ForHer.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.ForHer.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            For Her
          </Link>
          <Link
            href={NavigationRoute.ForHim.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.ForHim.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            For Him
          </Link>
          <Link
            href={NavigationRoute.Neutral.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.Neutral.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
            >
            Neutral
          </Link>
        </div>
        <div className="flex-1 flex flex-col text-center space-y-4">
          <Text as="p" sx={footerTheme.baseStyle?.title}>SHOP INFO</Text>
          <Link
          href={RoutRoute.Rout.Path}
          sx={{
            ...footerTheme.baseStyle?.link,
            color: isActive(RoutRoute.Rout.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
          }}
          >
          Home
          </Link>
          <Link
            href={NavigationRoute.AboutUs.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.AboutUs.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            About Us
          </Link>
          <Link
            href={NavigationRoute.StoreLocation.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.StoreLocation.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            Store Locations
          </Link>
          <Link
            href={NavigationRoute.Contact.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.Contact.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="flex-1 flex-col flex items-center justify-center text-center space-y-8 mt-[calc(10%)] mb-[calc(4%)] order-3 lg:order-none">
        <div><Image src="/images/eutopia.png" alt="Eutopia Logo" /></div>
        <div className="flex-1 flex justify-center text-center space-x-1">
          <Link
            href={NavigationRoute.Privacy.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.Privacy.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            Privacy Policy
          </Link>
          <Text sx={footerTheme.baseStyle?.text}>|</Text>
          <Link
            href={NavigationRoute.Privacy.Path}
            sx={{
              ...footerTheme.baseStyle?.link,
              color: isActive(NavigationRoute.Privacy.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
            }}
          >
            Terms of Service
          </Link>
        </div>
        <div><Image src="/images/payment.png" alt="Payment Methods" /></div>
        <div><Text sx={footerTheme.baseStyle?.text}>© Copyright Eutopia Perfumes. All Rights Reserved</Text></div>
      </div>

      <div className="flex-1 flex flex-col justify-center text-center space-y-4 mt-[calc(10%)] order-2 lg:order-none">
        <Text as="p" sx={footerTheme.baseStyle?.title}>SUPPORT</Text>
        <Link
          href={NavigationRoute.FAQ.Path}
          sx={{
            ...footerTheme.baseStyle?.link,
            color: isActive(NavigationRoute.FAQ.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
          }}
        >
         FAQ
        </Link>
        <Link
          href={NavigationRoute.FRR.Path}
          sx={{
            ...footerTheme.baseStyle?.link,
            color: isActive(NavigationRoute.FRR.Path) ? '#B8860B' : footerTheme.baseStyle?.link.color,
          }}
        >
          Shipping, Returns and Refund
        </Link>
        
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


