import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import RootLayout from "@/components/layouts/RootLayout";
import ProductCard from "@/components/ui/cards/ProductCard";
import CategoryData from "@/data/categoryData.json";
import { IProduct } from "@/types/product";

type HomePageProps = {
  products?: IProduct[];
};

const HomePage = ({ products }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>gTech | Home</title>
      </Head>
      <div>
        {/* featured-products section  */}
        <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
          <div className="text-center mb-14">
            <h2 className="text-xl font-bold text-themePrimary">
              Featured Products
            </h2>
          </div>
          {products && products?.length > 0 && (
            <div className="grid gap-6 xl:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {products.slice(0, 6).map((item, index: number) => (
                <div key={index}>
                  <ProductCard data={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* featured-products section  */}
        <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
          <div className="text-center mb-14">
            <h2 className="text-xl font-bold text-themePrimary">
              Featured Categories
            </h2>
          </div>
          {CategoryData && CategoryData?.length > 0 && (
            <div className="grid gap-6 xl:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {CategoryData.slice(0, 6).map((item, index: number) => (
                <Link href={`/category/${item.slug}`} key={index}>
                  <div className="bg-themeSecondary/5 py-5 px-5 text-themeSecondary font-semibold flex justify-center items-center hover:bg-themeSecondary/10  ase-in duration-300">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.SITE_URL}/api/v1/product`);
  const productsData = await res?.json();

  return {
    props: {
      products: productsData.data || [],
    },
  };
};
