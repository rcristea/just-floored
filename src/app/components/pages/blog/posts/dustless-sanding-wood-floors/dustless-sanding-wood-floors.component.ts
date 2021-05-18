import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dustless-sanding-wood-floors',
  templateUrl: './dustless-sanding-wood-floors.component.html',
  styleUrls: ['./dustless-sanding-wood-floors.component.css']
})
export class DustlessSandingWoodFloorsComponent implements OnInit {

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
