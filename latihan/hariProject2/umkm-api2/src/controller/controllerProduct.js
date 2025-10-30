const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handlerPostProduct = async (req, res) => {
  const { name, price, description, imageUrl, categoryId } = req.body;
  try {
    const query = await prisma.product.create({
      data: {
        name,
        price,
        description,
        imageUrl,
        categoryId,
      },
    });
    res.json({
      status: "Successed",
      created: query,
    });
  } catch (err) {
    res.json({
      info: err.message,
    });
  }
};


const handlerGetProduct = async (req, res) => {
  try{
    const query = await prisma.product.findMany()
    res.json({
      status:"successed",
      data:query
    })
  }
  catch(err){
    res.json({
      info:err.message
    })
  }
}


module.exports = { handlerPostProduct, handlerGetProduct }
