/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "URL Slug",
      options: {
        source: (docs: any, context: any) => context.parent.title,
      },
    },
    {
      name: "year",
      type: "string",
      title: "Year",
    },
    {
      name: "image",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
