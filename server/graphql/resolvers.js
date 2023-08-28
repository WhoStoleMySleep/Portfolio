const Blog = require('../models/Blog');
const Cakes = require('../models/Cakes');
const CakesNumber = require('../models/CakesNumber');
const OurCakes = require('../models/OurCakes');
const CustomCakes = require('../models/CustomCakes');

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
        text: text,
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
    },

    createCake: async (_, { id, image, title, category, amount, description, mass, content, composition, additionally }) => {
      const newCake = new Cakes({
        id: id,
        image: image,
        title: title,
        category: category,
        amount: amount,
        description: description,
        mass: mass,
        content: content,
        composition: composition,
        additionally: additionally
      });

      const res = await newCake.save();

      return {
        id: res.id,
        ...res._doc,
      }
    },
  
    removeCake: async (_, { id }) => {
      const res = Cakes.find({ id: id })
  
      await Cakes.deleteOne({ id: id })
  
      return `Removed ${id}`
    },

    createCakesNumber: async (_, { id, number }) => {
      const newCakesNumber = new CakesNumber({
        id: id,
        number: number
      });

      const res = await newCakesNumber.save();

      return {
        id: res.id,
        ...res._doc,
      }
    },

    removeCakesNumber: async (_, { id }) => {
      const res = CakesNumber.find({ id: id })
      
      await CakesNumber.deleteOne({ id: id });

      return `Removed ${id}`
    },

    createOurCakes: async (_, { id, cakes, price, name, email, number, sity, street, house, apartment, comment, date, timeInterval, paymentMethod }) => {
      const newOurCakes = new OurCakes({
        id: id,
        cakes: cakes,
        price: price,
        name: name,
        email: email,
        number: number,
        sity: sity,
        street: street,
        house: house,
        apartment: apartment,
        comment: comment,
        date: date,
        timeInterval: timeInterval,
        paymentMethod: paymentMethod
      });

      const res = await newOurCakes.save();

      return {
        id: res.id,
        ...res._doc,
      }
    },

    removeOurCakes: async (_, { id }) => {
      const res = OurCakes.find({ id: id })
      
      await OurCakes.deleteOne({ id: id });

      return `Removed ${id}`
    },

    createCustomCakes: async (_, { id, image, description, name, email, number }) => {
      const newCustomCakes = new CustomCakes({
        id: id,
        image: image,
        description: description,
        name: name,
        email: email,
        number: number,
      });

      const res = await newCustomCakes.save();

      return {
        id: res.id,
        ...res._doc,
      }
    },

    removeCustomCakes: async (_, { id }) => {
      const res = CustomCakes.find({ id: id })
      
      await CustomCakes.deleteOne({ id: id });

      return `Removed ${id}`
    },
  },

  Query: {
    blogs: async () => {
      return Blog.find({});
    },

    blog: async (_, { id }) => {
      return Blog.findOne({ id: id });
    },

    cakes: async () => {
      return Cakes.find({});
    },

    cake: async (_, { id }) => {
      return Cakes.findOne({ id: id });
    },

    cakesNumber: async () => {
      return CakesNumber.find({});
    },

    ourCakes: async () => {
      return OurCakes.find({});
    },

    customCakes: async () => {
      return CustomCakes.find({});
    }
  },
};
