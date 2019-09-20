import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'la-cantonada-super-mercat';
  @HostListener('window:resize', ['$event'])
  onScrollToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
