import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html'
})

export class AppComponent {
  name: string;
  artists: any;

  constructor() {
    this.name =  'Ray';
    this.artists = [
      {
          name: 'Barot Bellingham',
          school: 'Penn State'
      },{
          name: 'Hillary Post',
          school: 'University of Illinois'
      }
    ];
  }
}
