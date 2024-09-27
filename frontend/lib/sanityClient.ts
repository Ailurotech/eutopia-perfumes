import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "djpnf221",
  dataset: "uat",
  useCdn: false,
  apiVersion: "2022-03-07",
});
