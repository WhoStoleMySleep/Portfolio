const Blog = require('../models/Blog');

module.exports = {
  Mutation: {
    async createBlog(_, { id, headImageLink, name, tags, conciseContent, date, author, text, textRu }) {
      const newBlog = new Blog({
        id: id,
        headImageLink: headImageLink,
        name: name,
        tags: tags,
        conciseContent: conciseContent,
        date: date,
        author: author,
        text: text,
        textRu: textRu
      });

      const res = await newBlog.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
    removeBlog: async (_, { id }) => {
      const res = Blog.find({ id: id })

      await Blog.deleteOne({ id: id })

      return `Removed ${id}`
    }
  },
  Query: {
    blogs: async () => {
      return Blog.find({});
    },
    blog: async (_, { id }) => {
      return Blog.findOne({ id: id });
    }
  },
};
