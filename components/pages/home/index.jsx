import { Link } from "@/components/common/routing/link";
import { PageLayout } from "@/components/layouts/page-layout";
import { DESTINATION_ROOT_PATH } from "@/constants/paths";

function HomePageLayout() {
  return (
    <div className="bg-home-sm bg-cover min-h-screen flex flex-col">
      <PageLayout>
        <main className="container flex flex-col justify-between py-12 flex-grow">
          <header className="text-center text-light">
            <h1 className="uppercase font-subheading tracking-[2.7px]">
              So, you want to travel to{" "}
              <span className="block font-serif text-[5rem] text-white tracking-normal">
                Space
              </span>
            </h1>
            <p className="text-[15px] leading-[1.5625]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </header>
          <div className="text-center mt-10">
            <Link
              className="rounded-full bg-white w-[7.5em] h-[7.5em] inline-flex justify-center items-center text-black font-serif text-xl uppercase tracking-[1.25px] hover:ring-[2.25em] ring-white ring-opacity-10 transition-shadow"
              href={DESTINATION_ROOT_PATH}
            >
              Explore
            </Link>
          </div>
        </main>
      </PageLayout>
    </div>
  );
}

export { HomePageLayout };
