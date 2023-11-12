//import Layout from "@layout/Layout.astro";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: 'fc0a39db-0ed1-49a1-bdc4-37ede874a74c', // Get this from tina.io
  token: '16d4156249606e57716617ae2833a330fa18e946', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/pages/blog",
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout: ../../layout/MarkdownLayout.astro",
            //placeholder: '../../layout/MarkdownLayout.astro',
            
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },          
          {
          type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date Posted",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
