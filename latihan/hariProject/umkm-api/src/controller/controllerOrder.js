const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cart = [
  {
    productId: 2,
    quantity: 1,
    price: 5000,
  },
  {
    productId: 3,
    quantity: 1,
    price: 7000,
  },
  {
    productId: 4,
    quantity: 2,
    price: 20000,
  },
];

const totalHarga = cart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);


const handlerCheckout = async (req, res) => {
  const { productId, quantity, price } = req.body;

  const queryOrderId = await prisma.order.create({
    data: {
      customerName: "Mr. Arif",
      totalPrice: 0,
    },
  });
  console.log("ini adalah id:" + queryOrderId.id);

  try {
    const queryOrderItem = await prisma.orderItem.create({
      data: {
        orderId: queryOrderId.id,
        productId,
        quantity,
        price,
      },
    });
    res.json({ created: queryOrderItem });
  } catch (err) {
    res.json({
      info: err,
    });
  }

  const queryOrder = await prisma.order.update({
    where: {
      id: queryOrderId.id,
    },
    data: {
      totalPrice: price,
    },
  });
};

module.exports = { handlerCheckout };
