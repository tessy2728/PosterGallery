import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
})
export class BasicComponent  { name = 'Hello world'; }
