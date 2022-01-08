import React from "react";
import Head from "next/head";
import { SHARED_IMAGES_PATH } from "@/constants/paths";

function CustomHead({
  title = "Space Tourism",
  description = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
  image = `${SHARED_IMAGES_PATH}/og-image.jpg`,
  children
}) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Head>
  );
}

export default CustomHead;
