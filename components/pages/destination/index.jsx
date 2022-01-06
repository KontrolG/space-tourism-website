import { DestinationTabs } from "@/components/destination/destination-tabs";
import { PageLayout } from "@/components/layouts/page-layout";
import { PageTitle } from "../../common/widget/page-title";

function DestinationPageLayout() {
  return (
    <div className="bg-destination-sm min-h-screen bg-cover">
      <PageLayout>
        <main className="container flex flex-col justify-between py-6">
          <header className="text-center">
            <PageTitle number="01" title="Pick your destination" />
          </header>
          <DestinationTabs className="text-center mt-8" />
        </main>
      </PageLayout>
    </div>
  );
}

export { DestinationPageLayout };
