import RootLayout from "@/components/layouts/RootLayout";
import { Inter } from "next/font/google";
import { ReactElement } from "react";
const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div>
      <h2>Hello gtech</h2>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
