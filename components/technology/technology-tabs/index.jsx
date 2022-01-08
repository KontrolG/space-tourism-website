import { Link } from "@/components/common/routing/link";
import { technology } from "@/constants/technology";
import { getTechnologyPath } from "@/constants/paths";
import classes from "classnames";
import { useRouter } from "next/router";

function TechnologyTabs({ className }) {
  const router = useRouter();
  const selectedTechnologyId = router.query.technology_id;
  const selectedTechnologyData =
    technology.find(({ id }) => id === selectedTechnologyId) || technology[0];

  return (
    <div
      className={classes(
        "lg:flex flex-row-reverse items-center lg:container",
        className
      )}
    >
      <figure className="relative lg:absolute lg:right-0 h-[170px] md:h-[310px] lg:h-[394px] lg:w-[385px] xl:h-[527px] xl:w-[515px] mx-auto">
        {technology.map(({ id, images, name }) => (
          <>
            <img
              key={id}
              className={classes(
                "absolute transition-opacity inset-0 h-[170px] md:h-[310px] w-full object-cover mx-auto lg:hidden",
                selectedTechnologyData.id === id ? "opacity-full" : "opacity-0"
              )}
              src={images.landscape}
              alt={name}
            />
            <img
              key={id}
              className={classes(
                "absolute transition-opacity inset-0 object-cover hidden lg:inline",
                selectedTechnologyData.id === id ? "opacity-full" : "opacity-0"
              )}
              src={images.portrait}
              alt={name}
            />
          </>
        ))}
      </figure>
      <div className="lg:h-[458.5px] lg:w-[448px] xl:h-[527px] xl:w-[515px] lg:mr-0 lg:ml-16" />
      <div className="container md:max-w-md lg:max-w-lg xl:max-w-[630px] lg:ml-0 lg:mr-auto lg:flex">
        <div className="mt-8 md:mt-14 lg:mt-0">
          <nav
            id="destination-navigation"
            className="space-x-4 lg:space-x-0 lg:space-y-8"
          >
            {technology.map(({ id, name }, index) => (
              <Link
                scroll={false}
                key={id}
                href={getTechnologyPath(id)}
                className={classes(
                  "font-serif uppercase transition-color transition-opacity w-[2.5em] h-[2.5em] md:text-2xl xl:text-[2rem] rounded-full inline-flex lg:flex justify-center items-center border-white border border-opacity-25 hover:border-opacity-100",
                  selectedTechnologyData.id === id &&
                    "bg-white text-black border-none"
                )}
              >
                <span>{index + 1}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 md:mt-11 lg:mt-0 lg:ml-12 xl:ml-20">
          <h2 className="font-serif uppercase opacity-50 text-[0.875rem] md:text-[1rem] tracking-[0.16875em]">
            The Terminology…
          </h2>
          <div className="mt-2 md:mt-4 lg:mt-3 relative lg:overlapping-children">
            {technology.map(({ id, name, description }) => (
              <div
                key={id}
                className={classes(
                  "absolute lg:relative transition-opacity inset-0",
                  selectedTechnologyData.id === id
                    ? "opacity-full"
                    : "opacity-0"
                )}
              >
                <div className="pb-8 lg:pb-0">
                  <h3 className="font-serif uppercase text-2xl md:text-4xl xl:text-[3.5rem] mt-2">
                    {name}
                  </h3>
                  <p className="text-[15px] md:text-[1rem] xl:text-[1.125rem] leading-[1.5625] md:leading-[1.75] xl:leading-[2] text-light mt-4">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { TechnologyTabs };
