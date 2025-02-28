import { defineConfig, type SchemaTypeDefinition } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./studio-the-benderz/schemaTypes";

export default defineConfig({
  name: "default",
  title: "the-benderz",

  projectId: "4r9ag2ef",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
});
