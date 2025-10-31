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
  try {
    const query = await prisma.product.findMany();
    res.json({
      status: "successed",
      data: query,
    });
  } catch (err) {
    res.json({
      info: err.message,
    });
  }
};

const handlerUpdateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, imageUrl, categoryId } = req.body;
  try {
    const query = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        price : Number(price),
        description,
        imageUrl,
        categoryId: Number(categoryId),
      },
    });
    res.json({
      status: "Updated",
      data: query,
    });
  } catch (err) {
    res.json({
      info: err.message,
    });
  }
};

const handlerDeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const query = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({
      status: "Deleted",
    });
  } catch (err) {
    res.json({
      info: err.message,
    });
  }
};

module.exports = {
  handlerPostProduct,
  handlerGetProduct,
  handlerUpdateProduct,
  handlerDeleteProduct,
};
