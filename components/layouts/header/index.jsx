import { Link } from "@/components/common/routing/link";
import { HOME_PATH, SHARED_IMAGES_PATH } from "@/constants/paths";
import { Navigation } from "../navigation";

function Header() {
  return (
    <div className="container xl:max-w-7xl pt-6 lg:pt-10 flex justify-between items-center z-10">
      <Link href={HOME_PATH}>
        <img
          src={SHARED_IMAGES_PATH + "/logo.svg"}
          alt="Space Tourism"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </Link>
      <hr className="hidden xl:block absolute border-white ml-28 2xl:ml-48 border-opacity-25 w-[32.8472222vw] z-20" />
      <Navigation />
    </div>
  );
}

export { Header };
