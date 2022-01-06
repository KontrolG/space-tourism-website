import { Header } from "../header";
import Maybe from "@/components/common/helpers/maybe";

function PageLayout({ children, showHeader = true }) {
  return (
    <>
      <Maybe it={showHeader}>
        <Header />
      </Maybe>
      {children}
    </>
  );
}

export { PageLayout };
