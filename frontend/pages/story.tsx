import { sanityClient } from "@/lib/sanityClient";
import { GetStaticProps } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Playfair_Display, Poppins } from "next/font/google";
import clsx from "clsx";
import { urlForImage } from "../lib/sanity.image";

const playFair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  heroImage?: any;
  imagePosition: "left" | "right";
}

const HeroSection = ({
  title,
  subtitle,
  heroImage,
  imagePosition,
}: HeroSectionProps) => {
  const imageOnLeft = imagePosition === "left";

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div
        className={clsx(
          "flex flex-col gap-8",
          "lg:flex-row lg:items-center lg:gap-16",
          !imageOnLeft && "lg:flex-row-reverse"
        )}
      >
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1
            className={clsx(
              playFair.className,
              "text-4xl md:text-5xl lg:text-6xl"
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={clsx(
                poppins.className,
                "text-lg md:text-xl text-gray-600"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2">
          <div className="relative aspect-[4/3] w-full">
            {heroImage && (
              <Image
                src={urlForImage(heroImage).url()}
                alt={title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContentSectionProps {
  heading?: string;
  layout: "imageLeft" | "imageRight" | "fullWidth";
  image?: any;
  content: any[];
}

const ContentSection = ({
  heading,
  layout,
  image,
  content,
}: ContentSectionProps) => {
  const isFullWidth = layout === "fullWidth";
  const imageOnLeft = layout === "imageLeft";

  if (isFullWidth) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        {heading && (
          <h2 className={clsx(playFair.className, "text-3xl md:text-4xl mb-8")}>
            {heading}
          </h2>
        )}
        <div className={clsx(poppins.className, "prose max-w-none")}>
          <PortableText value={content} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div
        className={clsx(
          "flex flex-col gap-8",
          "lg:flex-row lg:items-center lg:gap-16",
          !imageOnLeft && "lg:flex-row-reverse"
        )}
      >
        {/* Image */}
        <div className="lg:w-1/2">
          <div className="relative aspect-[4/3] w-full">
            {image && (
              <Image
                src={urlForImage(image).url()}
                alt={heading || "Section image"}
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2">
          {heading && (
            <h2
              className={clsx(playFair.className, "text-3xl md:text-4xl mb-8")}
            >
              {heading}
            </h2>
          )}
          <div className={clsx(poppins.className, "prose max-w-none")}>
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutUs({ aboutData }) {
  if (!aboutData) return null;

  return (
    <div className="min-h-screen">
      <HeroSection
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subtitle}
        heroImage={aboutData.hero.heroImage}
        imagePosition={aboutData.hero.imagePosition}
      />

      {aboutData.sections?.map((section, index) => (
        <ContentSection
          key={index}
          heading={section.heading}
          layout={section.layout}
          image={section.image}
          content={section.content}
        />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    *[_type == "aboutUs"][0] {
      hero {
        title,
        subtitle,
        heroImage,
        imagePosition
      },
      sections[] {
        heading,
        layout,
        image,
        content
      }
    }
  `;

  const aboutData = await sanityClient.fetch(query);

  return {
    props: {
      aboutData,
    },
  };
};
