import { Component } from '@angular/core';

@Component({
  selector: 'app-isai',
  standalone: true,
  imports: [],
  templateUrl: './isai.component.html',
  styleUrl: './isai.component.scss',
})
export class IsaiComponent {
  regular = 0;

  result = 0;
  offer = 0;

  updateResult() {
    const newResult = this.regular - this.offer;
    this.result = Number(newResult.toFixed(2));
  }

  handleRegular(e: Event) {
    const target = e.target as HTMLInputElement;
    this.regular = Number(target.value);
    this.updateResult();
  }
  handleOffer(e: Event) {
    const target = e.target as HTMLInputElement;
    this.offer = Number(target.value);
    this.updateResult();
  }

  copyOne = () => {
    navigator.clipboard.writeText(this.result.toString());
  };
}
