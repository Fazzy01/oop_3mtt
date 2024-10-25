
class PaymentGateway {
    processPayment(amount) {

      // Internal implementation details hidden
      console.log(`Processing payment of $${amount}`);
    }


}

const interswitch  = new PaymentGateway();
interswitch.processPayment(100);