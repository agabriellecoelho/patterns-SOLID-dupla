// Classe base (abstração)
class Desconto {
    calcular(cliente) {
      return cliente.valor;
    }
  }
  
  // Extensões — cada tipo implementa seu próprio cálculo
  class DescontoRegular extends Desconto {
    calcular(cliente) {
      return cliente.valor * 0.9;
    }
  }
  
  class DescontoVIP extends Desconto {
    calcular(cliente) {
      return cliente.valor * 0.8;
    }
  }
  
  class DescontoEstudante extends Desconto {
    calcular(cliente) {
      return cliente.valor * 0.85;
    }
  }
  
  // Classe que usa o princípio
  class CalculadoraDeDesconto {
    constructor(estrategiaDeDesconto) {
      this.estrategia = estrategiaDeDesconto;
    }
  
    calcular(cliente) {
      return this.estrategia.calcular(cliente);
    }
  }
  
  // Uso
  const cliente = { valor: 100 };
  const regular = new CalculadoraDeDesconto(new DescontoRegular());
  const vip = new CalculadoraDeDesconto(new DescontoVIP());
  const estudante = new CalculadoraDeDesconto(new DescontoEstudante());
  
  console.log("Regular:", regular.calcular(cliente));   // 90
  console.log("VIP:", vip.calcular(cliente));           // 80
  console.log("Estudante:", estudante.calcular(cliente)); // 85