import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  logArray = [];
  arrayCurrIndex = -1;

  onBtnClick() {
    this.showDetails = !this.showDetails;
    if (this.showDetails === true) {
      const today = new Date();
      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      this.logArray.push(time);
      this.arrayCurrIndex++;
    }
  }
}
