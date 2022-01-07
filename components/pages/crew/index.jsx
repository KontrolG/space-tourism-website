import { CrewTabs } from "@/components/crew/crew-tabs";
import { PageLayout } from "@/components/layouts/page-layout";
import { PageTitle } from "../../common/widget/page-title";

function CrewPageLayout() {
  return (
    <div className="bg-crew-sm md:bg-crew-md min-h-screen bg-cover md:flex md:flex-col">
      <PageLayout>
        <main className="container flex flex-col justify-between md:justify-start py-6 md:py-16 md:pb-0 md:flex-1">
          <header className="text-center md:text-left">
            <PageTitle number="02" title="Meet your crew" />
          </header>
          <CrewTabs className="text-center mt-8 md:flex-1" />
        </main>
      </PageLayout>
    </div>
  );
}

export { CrewPageLayout };
