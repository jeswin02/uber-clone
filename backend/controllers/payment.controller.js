const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.createPaymentIntent = async (req, res) => {
  const { amount, customerName, customerAddress } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      description: "Payment for ride",
      shipping: {
        name: customerName,
        address: {
          line1: customerAddress.line1,
          line2: customerAddress.line2,
          city: customerAddress.city,
          state: customerAddress.state,
          postal_code: customerAddress.postal_code,
          country: customerAddress.country,
        },
      },
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
