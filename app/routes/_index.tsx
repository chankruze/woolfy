import type { MetaFunction } from "@remix-run/node";
import { SITE_DESCRIPTION, SITE_TITLE } from "~/consts";

export const meta: MetaFunction = () => {
  return [
    { title: SITE_TITLE },
    {
      property: "og:title",
      content: SITE_TITLE,
    },
    { name: "description", content: SITE_DESCRIPTION },
    {
      property: "og:description",
      content: SITE_DESCRIPTION,
    },
  ];
};

export default function Index() {
  return <div>Hello! from ${SITE_TITLE}!</div>;
}
