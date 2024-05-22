import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css'],
})
export class AllcarsComponent {
  constructor(private _CarsService: CarsService) {
    this.GetAllData();
  }
  items: any[] = [];
  GetAllData() {
    this._CarsService.GetAllData().subscribe({
      next: (res) => {
        this.items = res;
        console.log(this.items);
      },
      error: (err) => {
        // this.posts = err;
      },
      complete: () => {},
    });
  }
}
