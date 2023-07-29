import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { TfiUser } from "react-icons/tfi";
import { TbCategory2 } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { IProduct } from "@/types/product";
import { useDispatch } from "react-redux";
import { addToBuild } from "@/redux/features/builderSlice";

type BuildProductCardProps = {
  data: any;
};

const BuildProductCard = ({ data }: BuildProductCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelect = (product: IProduct) => {
    dispatch(addToBuild(product));
    router.push("/pc-builder");
  };
  return (
    <div
      className={`relative h-full grid content-between p-4 border-gray bg-white border border-solid transition-all rounded-md group hover:border-themePrimary`}
    >
      {data.category && (
        <span className="absolute right-3 top-3 flex flex-wrap gap-2">
          <span className="bg-themeSecondary/5 py-1 px-2.5 rounded-sm text-xs font-normal text-themeSecondary">
            {data?.category?.title}
          </span>
        </span>
      )}
      <div className="text-center pt-8 pb-6">
        <div className="flex justify-center mb-4">
          <div className="h-44 md:h-80 w-full relative">
            <Image
              fill
              className="h-full w-full rounded-lg object-cover border border-themePrimary/5 p-1 md:p-2"
              src={data?.thumb || "/images/products/placeholder-image.jpg"}
              alt="img"
            />
          </div>
        </div>
        <h3 className="text-base font-normal capitalize text-themePrimary leading-5 mb-2">
          {data?.title}
        </h3>
      </div>
      <div className="px-2">
        <ul className="mb-4">
          <li className="mb-2">
            <div className="flex gap-2 items-center text-themeSecondary text-base font-normal">
              ${data?.price}.00
            </div>
          </li>
          <li className="mb-2">
            <p className="flex gap-2 items-center text-themePrimary text-sm font-normal">
              <TbCategory2 /> {data?.status}
            </p>
          </li>

          <li className="mb-0">
            <div className="flex gap-2 items-center text-themePrimary text-sm font-normal">
              <AiFillStar /> {data?.averageRating}
            </div>
          </li>
        </ul>
        <div>
          <button
            onClick={() => {
              handleSelect(data);
            }}
            className="w-full py-3 px-6 text-white leading-4 text-themeDarker text-sm bg-themeSecondary hover:bg-themePrimary  text-center rounded-md transition-all "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildProductCard;
