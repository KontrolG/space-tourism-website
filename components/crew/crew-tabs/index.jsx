import { Link } from "@/components/common/routing/link";
import { crew } from "@/constants/crew";
import { getCrewPath } from "@/constants/paths";
import classes from "classnames";
import { useRouter } from "next/router";

function CrewTabs({ className }) {
  const router = useRouter();
  const selectedMemberId = router.query.member_id;
  const selectedMemberData =
    crew.find(({ id }) => id === selectedMemberId) || crew[0];

  return (
    <div className={className}>
      <figure className="relative h-[223px] mx-auto">
        {crew.map(({ id, images, name }) => (
          <img
            key={id}
            className={classes(
              "absolute transition-opacity inset-0 h-[222px] mx-auto",
              selectedMemberData.id === id ? "opacity-full" : "opacity-0"
            )}
            src={images.webp}
            alt={name}
          />
        ))}
      </figure>
      <hr className="border-t-[#383B4B]" />
      <nav id="destination-navigation" className="mt-[26px] space-x-4">
        {crew.map(({ id, name }) => (
          <Link
            scroll={false}
            key={id}
            href={getCrewPath(id)}
            className={classes(
              "text-light font-subheading uppercase bg-white opacity-50 transition-opacity w-[10px] h-[10px] rounded-full inline-block",
              selectedMemberData.id === id && "opacity-100"
            )}
          >
            <span className="sr-only">{name}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-5 relative">
        {crew.map(({ id, name, role, bio }) => (
          <div
            key={id}
            className={classes(
              "absolute transition-opacity inset-0",
              selectedMemberData.id === id ? "opacity-full" : "opacity-0"
            )}
          >
            <div className="pb-8">
              <h2 className="font-serif uppercase opacity-50">{role}</h2>
              <h3 className="font-serif uppercase text-2xl mt-2">{name}</h3>
              <p className="text-[15px] leading-[1.5625] text-light mt-4">
                {bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CrewTabs };
