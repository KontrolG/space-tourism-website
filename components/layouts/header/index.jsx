import { Link } from "@/components/common/routing/link";
import { HOME_PATH, SHARED_IMAGES_PATH } from "@/constants/paths";
import { Navigation } from "../navigation";

function Header() {
  return (
    <div className="container pt-6 flex justify-between z-10">
      <Link href={HOME_PATH}>
        <img
          src={SHARED_IMAGES_PATH + "/logo.svg"}
          alt="Space Tourism"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </Link>
      <Navigation />
    </div>
  );
}

export { Header };
