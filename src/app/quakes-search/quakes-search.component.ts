import { Component, OnInit } from '@angular/core';
import { UsgsService } from '../usgs.service';
import { Quake } from '../quake';

@Component({
  selector: 'app-quakes-search',
  templateUrl: './quakes-search.component.html',
  styleUrls: ['./quakes-search.component.css']
})
export class QuakesSearchComponent implements OnInit {
  latitude = '37.773972';
  longitude = '-122.431297';

  quakes: Quake[] = [];

  constructor(private usgsService: UsgsService) { }

  ngOnInit(): void {
    console.log('Quake component initialized!')
  }

  /**
   * Called when the user hits the "Search button"
   */
  onSearch(): void {
    console.log(`Search location: ${this.latitude},${this.longitude}`);
    const lat = parseFloat(this.latitude);
    const lng = parseFloat(this.longitude);

    this.usgsService.fetchQuakes(lat, lng)
                    .subscribe(quakes => this.quakes = quakes)
  }

  timeToString(millis: number): string {
    return new Date(millis).toLocaleString();
  }


}
