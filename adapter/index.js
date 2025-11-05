// Sistema interno espera isso:
class PaymentProcessor {
  processPayment(amount) {
    console.log(`Pagamento de R$${amount} processado.`);
  }
}

// Serviço externo de pagamento (incompatível)
class ExternalPaymentService {
  makeTransaction(value) {
    console.log(
      `Transação realizada no valor de R$${value} com serviço externo.`
    );
  }
}

// Adapter que "traduz" ExternalPaymentService para o formato esperado
class ExternalPaymentAdapter extends PaymentProcessor {
  constructor(externalService) {
    super();
    this.externalService = externalService;
  }

  processPayment(amount) {
    // Adaptando o método
    this.externalService.makeTransaction(amount);
  }
}

// Cliente
function payOrder(processor, amount) {
  processor.processPayment(amount);
}

// Testando com o sistema interno
const processor = new PaymentProcessor();
payOrder(processor, 100);

// Testando com o serviço externo adaptado
const externalService = new ExternalPaymentService();
const adaptedService = new ExternalPaymentAdapter(externalService);
payOrder(adaptedService, 200);
