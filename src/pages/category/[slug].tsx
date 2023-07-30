import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import RootLayout from "@/components/layouts/RootLayout";
import { IProduct } from "@/types/product";
import CategoryData from "@/data/categoryData.json";
import ProductCard from "@/components/ui/cards/ProductCard";

type ProductDetailsProps = {
  products?: IProduct[];
};

const ProductCategory = ({ products }: ProductDetailsProps) => {
  return (
    <>
      <Head>
        <title>gTech | {products?.[0]?.category?.title}</title>
      </Head>
      <div>
        {/* featured-products section  */}
        <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
          <div className="text-center mb-14">
            <h2 className="text-xl font-bold text-themePrimary">
              Category: {products?.[0]?.category?.title}
            </h2>
          </div>
          {products && products?.length > 0 && (
            <div className="grid gap-6 xl:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {products.map((item, index: number) => (
                <div key={index}>
                  <ProductCard data={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ProductCategory.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CategoryData.map((category) => ({
    params: { slug: category.slug.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(`${process.env.SITE_URL}/api/v1/product`);
  const productsData = await res?.json();

  const products = productsData?.data.filter(
    (product: IProduct) => product.category.slug === params.slug
  );
  return { props: { products: products || [] } };
};
