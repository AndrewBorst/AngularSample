import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div>EDI Quarterly</div>
    </div>
    `
})
export class AppComponent {
pageTitle: string = 'Dashboard';
}
