import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import RootLayout from "@/components/layouts/RootLayout";
import { BsGithub } from "react-icons/bs";

const LoginPage = () => {
  const { data: loginSession } = useSession();
  const router = useRouter();

  if (loginSession) {
    router.push("/");
  }

  return (
    <div className="container mx-auto">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-sm mx-auto bg-gray-200 shadow-md rounded-md py-6 px-10">
          <h2 className="text-xl font-semibold mb-5 text-center">Login</h2>
          <button
            className="py-2 px-4 flex items-center justify-between gap-4 bg-themeSecondary/95 text-themePrimary font-semibold rounded-md  hover:bg-themeSecondary focus:outline-none focus:ring-opacity-50"
            onClick={() =>
              signIn("github", {
                callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}`,
              })
            }
          >
            Github Login <BsGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default LoginPage;
