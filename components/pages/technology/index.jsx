import { PageLayout } from "@/components/layouts/page-layout";
import { TechnologyTabs } from "@/components/technology/technology-tabs";
import { PageTitle } from "../../common/widget/page-title";

function TechnologyPageLayout() {
  return (
    <div className="bg-technology-sm md:bg-technology-md lg:bg-technology-lg min-h-screen bg-cover">
      <PageLayout>
        <main className="py-6 md:py-16">
          <header className="text-center md:text-left md:container">
            <PageTitle number="03" title="Space Launch 101" />
          </header>
          <TechnologyTabs className="text-center lg:text-left mt-8 md:mt-14 lg:mt-7" />
        </main>
      </PageLayout>
    </div>
  );
}

export { TechnologyPageLayout };
