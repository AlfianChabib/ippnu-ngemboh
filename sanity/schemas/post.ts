export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "date",
      type: "string",
      title: "Date",
    },
    {
      name: "overview",
      type: "string",
      title: "Overview",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: 'title'
      } 
    },
    {
      name: "image",
      type: "image",
      title: "Image"
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image"
        }
      ]
    }
  ]
}