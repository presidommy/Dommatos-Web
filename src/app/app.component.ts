import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dommatos SAS';
  downloadSpeed: string;

  constructor() {
    this.downloadSpeed = '0 Mbps';
  }

  downloadSpeedTest() {

    const xhr = new XMLHttpRequest();
    const startTime = performance.now();
    xhr.addEventListener('progress', event => {
      const endTime = performance.now();
      const duration = (endTime - startTime) / 1000;
      const downloadSpeed = event.loaded / (event.timeStamp / 1000) / 40240 ; // Descarga en Mbps
      this.downloadSpeed = downloadSpeed.toFixed(2) + ' Mbps';

    });
    xhr.open('GET', 'http://speedtest-nyc1.digitalocean.com/100mb.test'); // Cambia la URL a un archivo de prueba que sea adecuado para tus necesidades
    xhr.send();
    return false;
  }
}
