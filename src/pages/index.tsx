import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";
import ProductCard from "@/components/ui/cards/ProductCard";
import ProductData from "@/data/produtsData.json";

const HomePage = () => {
  return (
    <div>
      {/* featured-products section  */}
      <div className="container mx-auto pt-14 pb-20 px-5 md:px-0">
        <div className="text-center mb-14">
          <h2 className="text-xl font-bold text-themePrimary">
            Featured Products
          </h2>
        </div>
        {ProductData && ProductData?.length > 0 && (
          <div className="grid gap-6 xl:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {ProductData.map((item, index: number) => (
              <div key={index}>
                <ProductCard data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
