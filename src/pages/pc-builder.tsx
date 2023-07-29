import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";
import CategoryData from "@/data/categoryData.json";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

const PcBuilderPage = () => {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
      <div className="text-center mb-14">
        <h2 className="text-xl font-bold text-themePrimary">Build Your PC</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        {CategoryData && CategoryData?.length > 0 && (
          <div className="grid gap-6 xl:gap-8 grid-cols-1">
            {CategoryData.map((item, index: number) => {
              const selectedProduct = products.find(
                (singleProduct) => singleProduct.category.slug === item.slug
              );
              return (
                <div
                  key={index}
                  className="min-h-[100px] p-2 md:p-5 flex justify-between items-center gap-2 bg-themePrimary/5 hover:bg-themePrimary/10 border-b ase-in duration-300 "
                >
                  <h4 className="text-themeSecondary font-semibold ">
                    {item.title}
                  </h4>
                  <div>
                    {selectedProduct ? (
                      <div className="flex items-center gap-1 md:gap-3">
                        <div>
                          <div className="h-14 w-14 relative">
                            <Image
                              fill
                              className="h-full w-full rounded-lg object-cover border border-themePrimary/5 p-0.5"
                              src={
                                selectedProduct?.thumb ||
                                "/images/products/placeholder-image.jpg"
                              }
                              alt="img"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold capitalize text-themePrimary">
                            {selectedProduct?.title}
                          </h3>
                          <div className="text-sm  items-center text-themeSecondary  font-normal">
                            ${selectedProduct?.price}.00
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link href={`/build/${item.slug}`} key={index}>
                        <div className="py-2 px-5 text-white font-semibold bg-themeSecondary  hover:bg-themePrimary rounded  ase-in duration-300">
                          Select
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
