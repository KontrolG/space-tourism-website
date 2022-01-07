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
    <div
      className={classes(
        "md:flex md:flex-col-reverse md:max-w-xl md:mx-auto",
        className
      )}
    >
      <figure className="relative md:overlapping-children h-[223px] md:h-[572px] mx-auto md:mt-10 md:overflow-hidden">
        {crew.map(({ id, images, name }) => (
          <img
            key={id}
            className={classes(
              "absolute md:relative transition-opacity inset-0 h-[222px] md:h-full mx-auto object-cover",
              selectedMemberData.id === id ? "opacity-full" : "opacity-0"
            )}
            src={images.webp}
            alt={name}
          />
        ))}
      </figure>
      <hr className="border-t-[#383B4B] md:hidden" />
      <nav
        id="destination-navigation"
        className="mt-[26px] md:mt-10 md:mb-auto space-x-4"
      >
        {crew.map(({ id, name }) => (
          <Link
            scroll={false}
            key={id}
            href={getCrewPath(id)}
            className={classes(
              "text-light font-subheading uppercase bg-white transition-opacity hover:opacity-50 w-[10px] h-[10px] rounded-full inline-block",
              selectedMemberData.id === id ? "opacity-100" : "opacity-25"
            )}
          >
            <span className="sr-only">{name}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-5 md:mt-auto relative md:overlapping-children">
        {crew.map(({ id, name, role, bio }) => (
          <div
            key={id}
            className={classes(
              "absolute md:relative transition-opacity inset-0",
              selectedMemberData.id === id ? "opacity-full" : "opacity-0"
            )}
          >
            <div className="pb-8 md:pb-0">
              <h2 className="font-serif uppercase opacity-50 md:text-2xl">
                {role}
              </h2>
              <h3 className="font-serif uppercase text-2xl md:text-[2.5rem] mt-2">
                {name}
              </h3>
              <p className="text-[15px] md:text-[1rem] leading-[1.5625] md:leading-[1.75] text-light mt-4">
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
