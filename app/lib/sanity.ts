import { createClient } from "next-sanity"

const projectId = "gan81zkf";
const dataset = "production";
const apiVersion = "2021-10-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})