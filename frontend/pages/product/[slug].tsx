import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import client from '../../../studio/sanityClient';  
import { ProductCardProps } from '../../types';  

const ProductPage: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  const router = useRouter();

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-auto mb-4 rounded"
      />
      <p className="text-lg mb-2">{product.tag}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <p className="text-gray-700">{product.description}</p>
      <button 
        onClick={() => console.log(`Added ${product.name} to cart`)} 
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
      <button 
        onClick={() => router.back()} 
        className="mt-4 p-2 bg-gray-300 rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  const product = await client.fetch(`
    *[_type == "perfume" && slug.current == $slug][0]{
      name,
      "slug": slug.current,
      price,
      description,
      "image": image.asset->url,
      tag
    }
  `, { slug });

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
