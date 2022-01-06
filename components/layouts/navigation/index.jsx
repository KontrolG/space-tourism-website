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
      <button className="p-2 z-20" onClick={toggleMenu}>
        <img
          src={`${SHARED_IMAGES_PATH}/${
            isOpenMenu ? "icon-close.svg" : "icon-hamburger.svg"
          }`}
          alt="Navigation toggler icon"
        />
      </button>
      <div
        className={classes(
          "bg-white bg-opacity-5 backdrop-blur-xl h-screen w-[254px] transition-transform duration-500 fixed top-0 right-0 z-10",
          !isOpenMenu && "translate-x-full"
        )}
      >
        <nav className="mt-28 space-y-4" id="main-navigation">
          {navigationItems.map((item, index) => (
            <NavLink
              exact={item.exact}
              key={item.id}
              to={item.to}
              className="uppercase font-subheading tracking-[2.7px] block pl-8 py-1  border-r-4 border-transparent hover:border-white hover:border-opacity-50 transition-colors"
              activeClassName="border-r-4 border-white hover:border-opacity-100"
            >
              <span className="font-bold">0{index}</span> {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export { Navigation };
