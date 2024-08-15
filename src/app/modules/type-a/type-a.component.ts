import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-a',
  standalone: true,
  imports: [],
  templateUrl: './type-a.component.html',
  styleUrl: './type-a.component.css'
})
export class TypeAComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params
      .pipe(
        filter((params) => params['id']),
      )
      .subscribe((params) => {
        console.log(params['id']);
      });
  }
}
