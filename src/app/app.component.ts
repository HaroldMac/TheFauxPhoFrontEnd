import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FauxPho';

  pastPageYOffsetValue: number = 0;

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); 
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    var topNav = document.querySelector("#topNav-container");
    if (window.pageYOffset > this.pastPageYOffsetValue) {
      topNav.classList.add("hide");
    } else {  
      topNav.classList.remove("hide");
    }
    this.pastPageYOffsetValue = window.pageYOffset;
  };


}
