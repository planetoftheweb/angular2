import {Component} from 'angular2/core';
import {Artist} from './artist';

@Component({
  selector: 'artist-item',
  templateUrl: 'partials/artistitem.html',
  inputs: ['artist']
})

export class ArtistItemComponent {}
