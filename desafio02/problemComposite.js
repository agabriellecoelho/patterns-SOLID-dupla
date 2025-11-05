class Task {
  constructor(name) {
    this.name = name;
  }

  showDetails() {
    console.log(`Tarefa: ${this.name}`);
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  showDetails() {
    console.log(`Projeto: ${this.name}`);
    this.tasks.forEach((task) => console.log(`  - ${task.name}`));
  }
}

// Cliente
const t1 = new Task("Escrever documentação");
const t2 = new Task("Fazer testes");
const p = new Project("Lançamento v1.0");
p.add(t1);
p.add(t2);

p.showDetails();
