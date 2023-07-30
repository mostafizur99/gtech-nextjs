import { TfiUser } from "react-icons/tfi";
import { TbCategory2 } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  data: any;
};

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div
      className={`relative h-full grid content-between p-4 border-gray bg-white border border-solid transition-all rounded-md group hover:border-themePrimary`}
    >
      {data.category && (
        <span className="absolute right-3 top-3 flex flex-wrap gap-2">
          <span className="bg-themeSecondary/5 py-1 px-2.5 rounded-sm text-xs font-normal text-themeSecondary">
            {data.category.title}
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
              priority
              sizes="(max-width: 768px) 72vw, (max-width: 1200px) 30vw, 25vw"
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
          <Link href={data?._id ? `/product/${data?._id}` : "#"}>
            <p className="leading-4 text-themeDarker text-sm text-white bg-themePrimary group-hover:text-themeSecondary text-center py-3 px-6 rounded-md transition-all ">
              View Details
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
