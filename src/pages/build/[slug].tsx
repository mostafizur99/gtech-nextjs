import React, { ReactElement } from "react";
import Image from "next/image";
import { MdOutlineComment } from "react-icons/md";
import RootLayout from "@/components/layouts/RootLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProduct } from "@/types/product";
import ProductData from "@/data/produtsData.json";
import CategoryData from "@/data/categoryData.json";
import BuildProductCard from "@/components/ui/cards/BuildProductCard";

type ProductDetailsProps = {
  products?: IProduct[];
};

const ProductBuild = ({ products }: ProductDetailsProps) => {
  return (
    <div>
      {/* featured-products section  */}
      <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
        <div className="text-center mb-14">
          <h2 className="text-xl font-bold text-themePrimary">
            Select Your: {products?.[0]?.category?.title}
          </h2>
        </div>
        {products && products?.length > 0 && (
          <div className="grid gap-6 xl:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {products.map((item, index: number) => (
              <div key={index}>
                <BuildProductCard data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ProductBuild.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductBuild;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CategoryData.map((category) => ({
    params: { slug: category.slug.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const products = ProductData.filter(
    (product) => product.category.slug === params.slug
  );
  return { props: { products } };
};
