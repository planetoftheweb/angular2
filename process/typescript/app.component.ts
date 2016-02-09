import {Component, OnInit} from 'angular2/core';
import {ArtistService} from './artist.service';
import {Artist} from './artist';
import {ArtistItemComponent} from './artist-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {SearchPipe} from './search-pipe';

@Component({
  selector: 'my-app',
  pipes: [SearchPipe],
  directives: [ArtistItemComponent, ArtistDetailsComponent],
  providers: [ArtistService],
  templateUrl: 'partials/app.html'
})

export class AppComponent implements OnInit {
  public artists: Artist[];
  public currentArtist:Artist;
  public currentIndex:Artist;

  constructor(private _artistService: ArtistService) { }

  getArtists() {
    this._artistService.getArtists().then(artists => this.artists = artists)
  }

  ngOnInit() {
    this.getArtists();
  }

  showArtist(item) {
    this.currentArtist = item;
  }
}
