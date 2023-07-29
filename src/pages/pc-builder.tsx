import RootLayout from "@/components/layouts/RootLayout";
import React, { ReactElement } from "react";
import CategoryData from "@/data/categoryData.json";
import Link from "next/link";

const PcBuilderPage = () => {
  return (
    <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
      <div className="text-center mb-14">
        <h2 className="text-xl font-bold text-themePrimary">Build Your PC</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        {CategoryData && CategoryData?.length > 0 && (
          <div className="grid gap-6 xl:gap-8 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {CategoryData.map((item, index: number) => (
              <div
                key={index}
                className="min-h-[100px] py-5 px-5 flex justify-between items-center bg-themeSecondary/5 hover:bg-themeSecondary/10 ase-in duration-300 "
              >
                <h4 className="text-themeSecondary font-semibold ">
                  {item.title}
                </h4>
                <div className="">
                  <Link href={`/build/${item.slug}`} key={index}>
                    <div className="py-2 px-5 text-white font-semibold bg-themeSecondary  hover:bg-themePrimary rounded  ase-in duration-300">
                      Select
                    </div>
                  </Link>
                </div>
              </div>
            ))}
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
