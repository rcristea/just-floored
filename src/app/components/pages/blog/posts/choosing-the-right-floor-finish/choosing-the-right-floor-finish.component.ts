import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosing-the-right-floor-finish',
  templateUrl: './choosing-the-right-floor-finish.component.html',
  styleUrls: ['./choosing-the-right-floor-finish.component.css']
})
export class ChoosingTheRightFloorFinishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.getItem('blog_view_1')) {
      localStorage.setItem('blog_view_1', 'reload')
      location.reload();
    }
  }
  
  ngOnDestroy(): void {
    localStorage.removeItem('blog_view_1')
  }
}
