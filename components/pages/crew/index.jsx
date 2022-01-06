import { CrewTabs } from "@/components/crew/crew-tabs";
import { PageLayout } from "@/components/layouts/page-layout";
import { PageTitle } from "../../common/widget/page-title";

function CrewPageLayout() {
  return (
    <div className="bg-crew-sm min-h-screen bg-cover">
      <PageLayout>
        <main className="container flex flex-col justify-between py-6">
          <header className="text-center">
            <PageTitle number="02" title="Meet your crew" />
          </header>
          <CrewTabs className="text-center mt-8" />
        </main>
      </PageLayout>
    </div>
  );
}

export { CrewPageLayout };
