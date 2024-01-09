import { Component } from '@angular/core';
import { index, results } from './types/properties';

@Component({
  selector: 'app-isai',
  standalone: true,
  imports: [],
  templateUrl: './isai.component.html',
  styleUrl: './isai.component.scss',
})
export class IsaiComponent {
  results: results = [
    {
      regular: 0,
      offer: 0,
      result: 0,
    },
    {
      regular: 0,
      offer: 0,
      quantityOffer: 0,
      result: 0,
    },
    {
      offer: 0,
      quantityOffer: 0,
      regular: 0,
      quantityRegular: 0,
      result: 0,
    },
  ];

  updateResult(i: 0 | 1 | 2) {
    let newResult;

    switch (i) {
      case 0:
        newResult = this.results[i].regular! - this.results[i].offer!;
        break;
      case 1:
        newResult =
          this.results[i].regular * this.results[i].offer -
          this.results[i].quantityOffer;
        break;
      case 2:
        const a = this.results[i].quantityRegular / this.results[i].regular;
        const b = this.results[i].offer * a;

        newResult = b - this.results[i].quantityOffer;

        break;
    }

    this.results[i].result = Number(newResult.toFixed(2));
  }

  handleRegular(e: Event, i: index) {
    const target = e.target as HTMLInputElement;

    this.results[i].regular = Number(target.value);
    this.updateResult(i);
  }

  handleOffer(e: Event, i: index) {
    const target = e.target as HTMLInputElement;
    this.results[i].offer = Number(target.value);
    this.updateResult(i);
  }

  handleOfferQuantity(e: Event, i: 1 | 2) {
    const target = e.target as HTMLInputElement;

    this.results[i].quantityOffer = Number(target.value);
    this.updateResult(i);
  }

  handleRegularQuantity(e: Event, i: 2) {
    const target = e.target as HTMLInputElement;

    this.results[i].quantityRegular = Number(target.value);
    this.updateResult(i);
  }

  copy = (i: index) => {
    navigator.clipboard.writeText(this.results[i].result.toString());
  };
}
