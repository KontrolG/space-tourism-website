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
    <div className={className}>
      <figure className="relative h-[170px] mx-auto">
        {technology.map(({ id, images, name }) => (
          <img
            key={id}
            className={classes(
              "absolute transition-opacity inset-0 h-[170px] mx-auto",
              selectedTechnologyData.id === id ? "opacity-full" : "opacity-0"
            )}
            src={images.landscape}
            alt={name}
          />
        ))}
      </figure>
      <div className="container">
        <nav id="destination-navigation" className="mt-8 space-x-4">
          {technology.map(({ id, name }, index) => (
            <Link
              scroll={false}
              key={id}
              href={getTechnologyPath(id)}
              className={classes(
                "font-serif uppercase transition-color w-10 h-10 rounded-full inline-flex justify-center items-center border-white border",
                selectedTechnologyData.id === id &&
                  "bg-white text-black border-none"
              )}
            >
              <span className="">{index + 1}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-6">
          <h2 className="font-serif uppercase opacity-50">The Terminology…</h2>
        </div>
        <div className="mt-2 relative">
          {technology.map(({ id, name, description }) => (
            <div
              key={id}
              className={classes(
                "absolute transition-opacity inset-0",
                selectedTechnologyData.id === id ? "opacity-full" : "opacity-0"
              )}
            >
              <div className="pb-8">
                <h3 className="font-serif uppercase text-2xl mt-2">{name}</h3>
                <p className="text-[15px] leading-[1.5625] text-light mt-4">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TechnologyTabs };
