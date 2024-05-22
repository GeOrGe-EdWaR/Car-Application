import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.css'],
})
export class SingleitemComponent {
  id: number = 0;
  PostData: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private CarsService: CarsService
  ) {
    this.id = _ActivatedRoute.snapshot.params['id'];
    this.getSingleItem();
  }
  getSingleItem() {
    this.CarsService.GetSingleItem(this.id).subscribe({
      next: (res) => {
        this.PostData = res;
        console.log(res);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
