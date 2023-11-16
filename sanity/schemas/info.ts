/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "info",
  title: "Info",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
