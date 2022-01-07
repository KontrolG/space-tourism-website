import { DestinationTabs } from "@/components/destination/destination-tabs";
import { PageLayout } from "@/components/layouts/page-layout";
import { PageTitle } from "../../common/widget/page-title";

function DestinationPageLayout() {
  return (
    <div className="bg-destination-sm md:bg-destination-md lg:bg-destination-lg min-h-screen bg-cover">
      <PageLayout>
        <main className="container flex flex-col justify-between py-6 md:py-16">
          <header className="text-center md:text-left">
            <PageTitle number="01" title="Pick your destination" />
          </header>
          <DestinationTabs className="text-center lg:text-left mt-8 md:mt-14 lg:mt-16 md:max-w-xl lg:max-w-full md:w-full md:mx-auto" />
        </main>
      </PageLayout>
    </div>
  );
}

export { DestinationPageLayout };
