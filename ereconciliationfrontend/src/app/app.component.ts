import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  /*right plugin*/
  public rightPluginMode: string='fixed-plugin';
  fnPluginShow(){
    this.rightPluginMode = "fixed-plugin ps show";
  }

  fnPluginHide(){
    this.rightPluginMode = "fixed-plugin";
  }

  title = 'ereconciliationfrontend';
}
