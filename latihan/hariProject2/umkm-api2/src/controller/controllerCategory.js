const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()


const handlerPostCategory = async (req,res)=>{
    const {name} = req.body

    try{
        const query = await prisma.category.create({
            data:{
                name
            }
        })
        res.json({
            status: "successed",
            created:query
        })
    }
    catch(err){
        res.json({
            info:err.message
        })
    }
}

module.exports = { handlerPostCategory }