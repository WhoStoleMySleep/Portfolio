const Blog = require('../models/Blog');

module.exports = {
  Mutation: {
    async createBlog(_, { id, headImageLink, name, tags, conciseContent, date, author, text }) {
      const newBlog = new Blog({
        id: id,
        headImageLink: headImageLink,
        name: name,
        tags: tags,
        conciseContent: conciseContent,
        date: date,
        author: author,
        text: text
      });

      const res = await newBlog.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
    updateBlog: async (_, { id, text }) =>  {
      const res = Blog.find({ _id: id })

      await Blog.updateOne(
        { _id: id },
        { $set: { 'text': text } }
      )

      return res
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
