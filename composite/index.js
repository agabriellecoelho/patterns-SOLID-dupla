// Componente base
class FileSystemItem {
  showDetails() {
    throw new Error("Método abstrato!");
  }
}

// Folha
class File extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
  }

  showDetails(indent = "") {
    console.log(`${indent} * ${this.name}`);
  }
}

// Composite
class Folder extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  showDetails(indent = "") {
    console.log(`${indent} * ${this.name}`);
    this.items.forEach((item) => item.showDetails(indent + "   "));
  }
}

// Cliente
const file1 = new File("foto.png");
const file2 = new File("musica.mp3");
const file3 = new File("documento.txt");

const subFolder = new Folder("Downloads");
subFolder.add(file3);

const root = new Folder("Meus Arquivos");
root.add(file1);
root.add(file2);
root.add(subFolder);

root.showDetails();
