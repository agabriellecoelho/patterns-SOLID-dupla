// Muitas combinações duplicadas
class AudioWindows {
  play() {
    console.log("Reproduzindo áudio no Windows");
  }
}

class AudioLinux {
  play() {
    console.log("Reproduzindo áudio no Linux");
  }
}

class VideoWindows {
  play() {
    console.log("Reproduzindo vídeo no Windows");
  }
}

class VideoLinux {
  play() {
    console.log("Reproduzindo vídeo no Linux");
  }
}

// Cliente
const a1 = new AudioWindows();
a1.play();

const v1 = new VideoLinux();
v1.play();
