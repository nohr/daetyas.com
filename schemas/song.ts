/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "song",
  title: "Song",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "audioFile",
      title: "Audio File",
      type: "file",
      validation: (Rule) => Rule.required(),
      options: {
        accept: "audio/*",
      },
    },
  ],
};
