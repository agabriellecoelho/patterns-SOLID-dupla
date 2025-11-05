/*problema
class Invoice {
    constructor(items) {
      this.items = items;
    }
  
    total() {
      return this.items.reduce((s, i) => s + i.price, 0);
    }
  
    saveToDatabase() {
      // grava no BD
    }
  
    print() {
      // imprime a nota
    }
  }

  
----- rodar utilizando npm run single -----
*/
class Invoice {
    constructor(items) {
        this.items = items;
      }
    
      total() {
        return this.items.reduce((s, i) => s + i.price, 0);
    }
}
    
class InvoiceRepository {
    save(invoice) {
        throw new Error("Método save() não implementado");
    }
}

// Implementação concreta (pode ter várias)
class DatabaseInvoiceRepository extends InvoiceRepository {
    save(invoice) {
        console.log("💾 Salvando no banco de dados...", invoice.total());
    }
}

// Outra implementação possível (extensão sem alterar código)
class FileInvoiceRepository extends InvoiceRepository {
    save(invoice) {
        console.log("📝 Salvando em arquivo texto... Total:", invoice.total());
    }
}

// -------------------------------
// 3. Impressão da fatura
// -------------------------------
class InvoicePrinter {
    print(invoice) {
        console.log("🖨️ Impressão da fatura:");
        invoice.items.forEach(i => console.log(`- ${i.name}: R$ ${i.price}`));
        console.log("Total: R$", invoice.total());
    }
}

// ---------------------------------------------------------
// Serviço que usa as 3 funções juntos (prático e funcional)
// ---------------------------------------------------------
class InvoiceService {
    constructor(repository, printer) {
        this.repository = repository; // DIP (injeção)
        this.printer = printer;
    }

    process(invoice) {
        this.repository.save(invoice); // salva no BD ou arquivo ou outro
        this.printer.print(invoice);   // imprime
    }
}

// ================================
// ✅ TESTE FUNCIONAL (exemplo real)
// ================================

// itens da compra
const invoice = new Invoice([
    { name: "Mouse", price: 80 },
    { name: "Teclado", price: 120 },
    { name: "Monitor", price: 900 }
]);

// escolha da implementação (OCP)
const repository = new DatabaseInvoiceRepository();
// ou: const repository = new FileInvoiceRepository();

const printer = new InvoicePrinter();

const service = new InvoiceService(repository, printer);
service.process(invoice);
