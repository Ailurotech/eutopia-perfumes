import { GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanityClient";
import DynamicJoinForm from "@/components/join/DynamicJoinForm";
import { joinFormQuery } from "@/query";

interface JoinPageProps {
  formData: {
    title: string;
    description: string;
    fields: Array<{
      fieldType: string;
      fieldLabel: string;
      placeholder?: string;
      required: boolean;
      options?: string[];
    }>;
  };
}

export default function JoinPage({ formData }: JoinPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <DynamicJoinForm {...formData} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const formData = await sanityClient.fetch(joinFormQuery());

  return {
    props: {
      formData,
    },
    revalidate: 60, // Revalidate every minute
  };
};
