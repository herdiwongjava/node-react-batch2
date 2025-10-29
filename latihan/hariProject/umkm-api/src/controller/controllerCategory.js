const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handlerInsertCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const query = await prisma.category.create({
      data: {
        name,
      },
    });
    res.json({
      info: "successed",
      created: query,
    });
  } catch (err) {
    res.json({
      info: err,
    });
  }
};

const handlerGetCategory = async (req, res) => {
  try{
    const query = await prisma.category.findMany()
    res.json({
      status: "successed",
      data:query
    })
  }
  catch(err){
    res.json({
      info:err
    })
  }
}

const handlerUpdateCategory = async (req,res) => {
  const {name} = req.body
  const {id} = req.params
  try{
    const query = await prisma.category.update({
      where:{
        id:id
      },
      data:{
        name
      }
    })
    res.json({
      status: "successed",
      updated: query
    })
   }
  catch(err){
    res.json({
      info:err
    })
  }
}


const handlerDeleteCategory = async (req, res) => {
  const {id} = req.params
  try{
    const query = await prisma.category.delete({
      where:{
        id: Number(id)
      }
    })
  }
  catch(err){
    res.json({
      info:err
    })
  }
}



module.exports = { handlerInsertCategory, handlerDeleteCategory, handlerGetCategory, handlerUpdateCategory };
