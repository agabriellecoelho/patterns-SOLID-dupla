class TV {
  turnOn() {
    console.log("TV ligada.");
  }
  turnOff() {
    console.log("TV desligada.");
  }
}

class RemoteControl {
  constructor() {
    this.tv = new TV();
  }

  pressPowerButton(on) {
    if (on) this.tv.turnOn();
    else this.tv.turnOff();
  }
}

const remote = new RemoteControl();
remote.pressPowerButton(true);
remote.pressPowerButton(false);
