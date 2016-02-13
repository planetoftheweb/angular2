import {Component} from 'angular2/core';

interface Artist {
    name: string;
    shortname: string;
    reknown: string;
    bio: string;
}

@Component({
  selector: 'artist-details',
  templateUrl: 'partials/artistdetails.html',
  inputs: ['artist']
})

export class ArtistDetailsComponent{}
