import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { MdOutlineComment } from "react-icons/md";
import RootLayout from "@/components/layouts/RootLayout";
import { IProduct } from "@/types/product";

type ProductDetailsProps = {
  product?: IProduct;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <Head>
        <title>gTech | {product?.title}</title>
      </Head>
      <div>
        <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
          {product && (
            <div>
              <div className="grid gap-6 xl:gap-10 xl:grid-cols-2  md:grid-cols-1 sm:grid-cols-1">
                {/* product thumb  */}
                <div className="h-44 md:h-96 w-full relative">
                  <Image
                    fill
                    className="h-full w-full rounded-lg object-cover border border-themePrimary/5 p-2 md:p-4"
                    src={
                      product?.thumb || "/images/products/placeholder-image.jpg"
                    }
                    alt="img"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold capitalize text-themePrimary leading-5 mb-2">
                    {product?.title}
                  </h3>
                  {/* details  */}
                  <div>
                    <ul className="mb-4">
                      <li className="mb-5">
                        <div className="flex gap-2 items-center text-themeSecondary text-base font-normal">
                          ${product?.price}.00
                        </div>
                      </li>
                      <li className="mb-2">
                        <p className="flex gap-2 items-center text-themePrimary text-sm font-normal">
                          Category: {product?.category.title}
                        </p>
                      </li>
                      <li className="mb-2">
                        <p className="flex gap-2 items-center text-themePrimary text-sm font-normal">
                          Status: {product?.status}
                        </p>
                      </li>
                      <li className="mb-2">
                        <div className="flex gap-2 items-center text-themePrimary text-sm font-normal">
                          Average Rating: {product?.averageRating}
                        </div>
                      </li>
                      <li className="mb-2">
                        <div className="flex gap-2 items-center text-themePrimary text-sm font-normal">
                          Individual Rating: {product?.individualRating}
                        </div>
                      </li>
                      <li className="mb-0">
                        <div className="items-center text-themePrimary text-sm font-normal">
                          Description:{" "}
                          <span className="text-themePrimary/70">
                            {product?.description}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* key-features  */}
                  <div>
                    <p>Key Features</p>
                    <ul className="mb-4">
                      {product.features &&
                        product.features.length > 0 &&
                        product.features.map((feature, index) => (
                          <li className="mb-5" key={index}>
                            <div className="flex gap-2 items-center text-themePrimary text-sm font-normal">
                              •<span>{feature?.title}</span>:
                              <span className="opacity-90">
                                {feature?.value}
                              </span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* product-review */}
              {product.reviews && (
                <div className="mt-10 pt-10 ">
                  <h3 className="text-base font-semibold text-themePrimary text-center">
                    Reviews
                  </h3>
                  <div className="mt-4 border-t">
                    {product.reviews.length < 1 && (
                      <div className="flex items-center justify-center  border-t pt-2">
                        <p className="text-base  text-themePrimary/80">
                          No Review Yet
                        </p>
                      </div>
                    )}
                    {product.reviews.length > 0 &&
                      product?.reviews.map((reviewItem, index) => (
                        <div
                          key={index}
                          className="pt-2 pb-5   flex flex-col items-center justify-center"
                        >
                          <div className="flex items-center justify-center gap-3 text-themePrimary/80 ">
                            <MdOutlineComment />
                            <p className=" text-base ">
                              {reviewItem.comment} ({reviewItem.rating})
                            </p>
                          </div>
                          <div className="pt-2 w-5/12 border-b border-themePrimary/5" />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.SITE_URL}/api/v1/product`);
  const productsData = await res?.json();
  const allProducts = productsData.data || [];
  const paths = allProducts.map((product: IProduct) => ({
    params: { id: product._id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `${process.env.SITE_URL}/api/v1/single-product/${params.id}`
  );
  const productData = await res?.json();

  return { props: { product: productData.data || {} } };
};
