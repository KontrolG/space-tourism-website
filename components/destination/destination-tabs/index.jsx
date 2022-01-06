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
    <div className={className}>
      <figure className="relative w-[170px] h-[170px] mx-auto">
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
      <nav id="destination-navigation" className="mt-[26px] space-x-[26px]">
        {destinations.map(({ id, name }) => (
          <Link
            scroll={false}
            key={id}
            href={getDestinationPath(id)}
            className={classes(
              "text-light font-subheading uppercase pb-2 border-b-[3px] border-transparent transition-colors",
              selectedDestinationData.id === id && "border-white"
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
      <div className="mt-5 relative">
        {destinations.map(({ id, name, description, distance, travel }) => (
          <div
            key={id}
            className={classes(
              "absolute transition-opacity inset-0 ",
              selectedDestinationData.id === id ? "opacity-full" : "opacity-0"
            )}
          >
            <div>
              <h2 className="font-serif uppercase text-[3.5rem]">{name}</h2>
              <p className="text-[15px] leading-[1.5625] text-light">
                {description}
              </p>
            </div>
            <hr className="my-8 border-t-[#383B4B]" />
            <div className="pb-8 space-y-8">
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
  );
}

export { DestinationTabs };
