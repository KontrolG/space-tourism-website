import { Link } from "@/components/common/routing/link";
import { destinations } from "@/constants/destinations";
import { getDestinationPath } from "@/constants/paths";
import classes from "classnames";
import { useRouter } from "next/router";

function DestinationTabs({ className }) {
  const router = useRouter();
  const selectedDestinationId = router.query.destination_id;
  const selectedDestinationData =
    destinations.find(({ id }) => id === selectedDestinationId) ||
    destinations[0];

  return (
    <div className={classes("lg:flex items-center", className)}>
      <figure className="relative w-[10.625rem] md:w-[18.75rem] lg:w-[20.1875rem] xl:w-[27.8125rem] h-[10.625rem] md:h-[18.75rem] lg:h-[20.1875rem] xl:h-[27.8125rem] mx-auto lg:ml-16">
        {destinations.map(({ id, images, name }) => (
          <img
            key={id}
            className={classes(
              "absolute transition-opacity inset-0",
              selectedDestinationData.id === id ? "opacity-full" : "opacity-0"
            )}
            src={images.webp}
            alt={name}
          />
        ))}
      </figure>
      <div className="mt-[1.625rem] md:mt-14 lg:mt-0 lg:ml-16 lg:max-w-[27.8125rem]">
        <nav
          id="destination-navigation"
          className="space-x-[1.625rem] md:space-x-[2.25rem] flex justify-center lg:justify-start"
        >
          {destinations.map(({ id, name }) => (
            <Link
              scroll={false}
              key={id}
              href={getDestinationPath(id)}
              className={classes(
                "text-light font-subheading uppercase pb-2 md:pb-3 border-b-[3px] border-transparent transition-colors hover:border-white hover:border-opacity-50",
                selectedDestinationData.id === id && "border-white"
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="mt-5 md:mt-8 relative lg:overlapping-children">
          {destinations.map(({ id, name, description, distance, travel }) => (
            <div
              key={id}
              className={classes(
                "absolute lg:relative transition-opacity inset-0",
                selectedDestinationData.id === id ? "opacity-full" : "opacity-0"
              )}
            >
              <div>
                <h2 className="font-serif uppercase text-[3.5rem] md:text-[5rem] xl:text-[6.25] leading-[1.15]">
                  {name}
                </h2>
                <p className="text-[0.9375rem] md:text-[1rem] xl:text-[1.125rem] leading-[1.5625] md:leading-[1.75] lg:leading-[2] text-light mt-1 md:mt-2 lg:mt-4">
                  {description}
                </p>
              </div>
              <hr className="my-8 md:mt-12 xl:mt-14 md:mb-8 xl:mb-12 border-t-[#383B4B]" />
              <div className="pb-8 space-y-8 lg:space-x-20 md:flex md:space-y-0 md:justify-around lg:justify-start">
                <div>
                  <h3 className="font-subheading text-[0.875rem] leading-[0.1475] uppercase text-light">
                    Avg. Distance
                  </h3>
                  <p className="font-serif text-[1.75rem] uppercase mt-3">
                    {distance}
                  </p>
                </div>
                <div>
                  <h3 className="font-subheading text-[0.875rem] leading-[0.1475] uppercase text-light">
                    Est. travel time
                  </h3>
                  <p className="font-serif text-[1.75rem] uppercase mt-3">
                    {travel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { DestinationTabs };
