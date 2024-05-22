import { Component } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-rentaldeals',
  templateUrl: './rentaldeals.component.html',
  styleUrls: ['./rentaldeals.component.css'],
})
export class RentaldealsComponent {
  items: any[] = [];
  constructor(private _CarsService: CarsService) {
    this.GetAllData();
  }
  GetAllData() {
    this._CarsService.GetData().subscribe({
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
