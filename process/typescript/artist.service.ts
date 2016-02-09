import {Injectable} from 'angular2/core';
import {Artist} from './artist';
import {ARTISTS} from './artist-data';

@Injectable()
  export class ArtistService {
    getArtists() {
      return Promise.resolve(ARTISTS);
    }
}
