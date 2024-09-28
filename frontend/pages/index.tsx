import { GetStaticProps } from "next";
import HomePage from "@/components/homepage/HomePage";
import { sanityClient } from "@/lib/sanityClient";
import { HomePageContent } from "@/types";

interface IndexPageProps {
  homePageContent: HomePageContent;
}

export default function Index({ homePageContent }: IndexPageProps) {
  return <HomePage content={homePageContent} />;
}

const processSection = (section: any) => ({
  sectionTitle: section.sectionTitle,
  subtitle: section.subtitle,
  image: section.image.asset.url,
  linkText: section.linkText,
  linkUrl: section.linkUrl,
});

export const getStaticProps: GetStaticProps = async () => {
  const query = `
  *[_type == "homePage"]{
    topSellersSection{
      sectionTitle,
      products[]->{
        name,
        slug,
        price,
        categories,
        image {
          asset->{
            _id,
            url
          }
        }
      }
    },
    newArrivalsSection{
      sectionTitle,
      products[]->{
        name,
        slug,
        price,
        categories,
        image {
          asset->{
            _id,
            url
          }
        }
      }
    },
    womenPerfumeSection{
      sectionTitle,
      subtitle,
      image {
        asset->{
          _id,
          url
        }
      },
      linkText,
      linkUrl
    },
    menPerfumeSection{
      sectionTitle,
      subtitle,
      image {
        asset->{
          _id,
          url
        }
      },
      linkText,
      linkUrl
    },
    neutralPerfumeSection{
      sectionTitle,
      subtitle,
      image {
        asset->{
          _id,
          url
        }
      },
      linkText,
      linkUrl
    },
  }
  `;

  try {
    const data = await sanityClient.fetch(query);
    console.log("Fetched data:", data);

    const homePageContent = data[0];

    return {
      props: {
        homePageContent: {
          topSellers: homePageContent.topSellersSection.products.map(
            (product: any) => ({
              ...product,
              image: product.image.asset.url,
              categories: product.categories,
            })
          ),
          newArrivals: homePageContent.newArrivalsSection.products.map(
            (product: any) => ({
              ...product,
              image: product.image.asset.url,
              categories: product.categories,
            })
          ),
          womenPerfume: processSection(homePageContent.womenPerfumeSection),
          menPerfume: processSection(homePageContent.menPerfumeSection),
          neutralPerfume: processSection(homePageContent.neutralPerfumeSection),
        },
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        homePageContent: {},
      },
    };
  }
};
