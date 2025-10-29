const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handlerInsertProduct = async (req, res) => {
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
      status: "successed",
      created: query,
    });
  } catch (err) {
    res.json({
      info: err,
    });
  }
};

const handlerGetProduct = async (req, res) => {
  try {
    const query = await prisma.product.findMany();
    res.json({
      data: query,
    });
  } catch (err) {
    res.json({
      info: err,
    });
  }
};

const handlerGetProductId = async (req, res) => {
  const { id } = req.params;

  try {
    const query = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json({
      status: "successed",
      data: query,
    });
  } catch (err) {
    res.json({
      info: err,
    });
  }
};

const handlerUpdateProduct = async (req, res) => {
  const { name, price, description, imageUrl, categoryId } = req.body;
  const { id } = req.params;

  try {
    const query = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        price,
        description,
        imageUrl,
        categoryId,
      },
    });
    res.json({
      status: "successed",
      info: query,
    });
  } catch (err) {
    res.json({
      info: err,
    });
  }
};

const handlerDeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const query = await prisma.product.delete({
        where:{
            id: Number(id)
        }
    })
    res.json({
        status:"deleted"
    })
  } catch (err) {
    res.json({
        info:err
    })
  }
};

module.exports = {
  handlerInsertProduct,
  handlerGetProduct,
  handlerGetProductId,
  handlerUpdateProduct,
  handlerDeleteProduct
};
