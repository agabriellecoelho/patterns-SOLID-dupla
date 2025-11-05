class File {
  constructor(name) {
    this.name = name;
  }

  showDetails() {
    console.log(`Arquivo: ${this.name}`);
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  showDetails() {
    console.log(`Pasta: ${this.name}`);
    this.items.forEach((item) => {
      if (item instanceof File) {
        console.log(`* ${item.name}`);
      } else if (item instanceof Folder) {
        console.log(`* ${item.name}`);
      }
    });
  }
}

// Cliente
const file1 = new File("foto.png");
const file2 = new File("musica.mp3");
const folder = new Folder("Meus Arquivos - SATC");

folder.add(file1);
folder.add(file2);

folder.showDetails();
