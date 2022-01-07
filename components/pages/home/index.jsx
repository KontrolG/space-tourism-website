import { Link } from "@/components/common/routing/link";
import { PageLayout } from "@/components/layouts/page-layout";
import { DESTINATION_ROOT_PATH } from "@/constants/paths";

function HomePageLayout() {
  return (
    <div className="bg-home-sm md:bg-home-md bg-cover min-h-screen flex flex-col">
      <PageLayout>
        <main className="container md:max-w-md flex flex-col justify-between py-12 md:py-24 flex-grow">
          <header className="text-center text-light">
            <h1 className="uppercase font-subheading tracking-[0.1688em] md:text-[1.25rem]">
              So, you want to travel to{" "}
              <span className="block font-serif text-[5rem] md:text-[9.375rem] text-white tracking-normal leading-tight md:leading-none mt-4 md:mt-6">
                Space
              </span>
            </h1>
            <p className="text-[0.9375rem] leading-[1.5625] md:text-[1rem] md:leading-[1.75] mt-4 md:mt-6">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </header>
          <div className="text-center mt-10">
            <Link
              className="rounded-full bg-white md:text-[2rem] w-[7.5em] h-[7.5em] inline-flex justify-center items-center text-black font-serif text-xl uppercase tracking-[1.25px] hover:ring-[2.25em] ring-white ring-opacity-10 transition-shadow"
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
