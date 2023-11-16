/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "exhibition",
  type: "document",
  title: "Exhibition",
  fields: [
    {
      name: "slug",
      type: "slug",
      title: "URL Slug",
      options: {
        source: (docs:any, context: any) => context.parent.title
      }
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
