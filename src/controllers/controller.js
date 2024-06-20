import { config } from "dotenv"
import MercadoPagoConfig from "mercadopago"
import { Payment } from "mercadopago"

export const createOrder = (req, res) => {
    

    const client = new MercadoPagoConfig({accessToken: "TEST-7201267274983215-061220-e715c65d8e047127e6dceae8e6e7862f-264061016",
                                         options: { timeout: 5000, idempotencyKey: 'abc'}}) 
    const payment = new Payment(client);


    const body = {
        transaction_amount: req.body.transaction_amount,
        token: req.body.token,
        description: req.body.description,
        installments: req.body.installments,
        payment_method_id: req.body.paymentMethodId,
        issuer_id: req.body.issuer,
            payer: {
            email: req.body.email,
            identification: {
        type: req.body.identificationType,
        number: req.body.number}}
    };
    

    const requestOptions = {
        idempotencyKey: '<IDEMPOTENCY_KEY>',
    };

    payment.create({ body, requestOptions })
    .then((result) => {
      console.log("result")
      console.log(result)
      res.send(result)
    })
    .catch((error) => {
      console.log("ERROR")
      console.log(error)
      res.status(500).json({ error: error.message });
    })
    
    res.send("creatin order...")


}