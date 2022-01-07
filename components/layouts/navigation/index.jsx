import { NavLink } from "@/components/common/routing/nav-link";
import { navigationItems } from "@/constants/navigation";
import { SHARED_IMAGES_PATH } from "@/constants/paths";
import { useState } from "react";
import classes from "classnames";

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu((isOpenMenu) => !isOpenMenu);
  }

  return (
    <>
      <button className="p-2 z-20 lg:hidden" onClick={toggleMenu}>
        <img
          src={`${SHARED_IMAGES_PATH}/${
            isOpenMenu ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt="Navigation toggler icon"
        />
      </button>
      <div
        className={classes(
          "bg-white bg-opacity-5 backdrop-blur-xl h-screen lg:h-auto w-[254px] lg:w-auto transition-transform duration-500 fixed top-0 lg:top-auto right-0 z-10 lg:translate-x-0 lg:pl-20 xl:pl-32 lg:pr-28 xl:pr-40",
          !isOpenMenu && "translate-x-full"
        )}
      >
        <nav
          className="mt-28 lg:mt-0 lg:flex space-y-4 lg:space-y-0 lg:space-x-12"
          id="main-navigation"
        >
          {navigationItems.map((item, index) => (
            <NavLink
              exact={item.exact}
              key={item.id}
              to={item.to}
              className="uppercase font-subheading tracking-[2.7px] block pl-8 lg:pl-0 py-1 lg:py-7 xl:py-9 border-r-4 lg:border-r-0 lg:border-b-4 border-transparent hover:border-white hover:border-opacity-50 transition-colors"
              activeClassName="border-white hover:border-opacity-100"
            >
              <span className="font-bold">0{index}</span> {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* To simulate Navigation height to align properly with other items in the flex container. */}
      <div className="hidden lg:block lg:h-[5.25rem] xl:h-[6.25rem]" />
    </>
  );
}

export { Navigation };
