import { defineConfig, type SchemaTypeDefinition } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./studio-the-benderz/schemaTypes";

export default defineConfig({
  name: "default",
  title: "the-benderz",

  projectId: "4r9ag2ef",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items(
            schemaTypes.map((type) => {
              if (type.name === "event") {
                return S.listItem()
                  .title(type.title || type.name)
                  .schemaType(type.name)
                  .child(
                    S.documentTypeList(type.name).defaultOrdering([
                      { field: "date", direction: "desc" },
                    ])
                  );
              }
              return S.documentTypeListItem(type.name);
            })
          ),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
});
