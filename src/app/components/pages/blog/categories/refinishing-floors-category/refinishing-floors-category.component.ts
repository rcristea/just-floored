import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refinishing-floors-category',
  templateUrl: './refinishing-floors-category.component.html',
  styleUrls: ['./refinishing-floors-category.component.css']
})
export class RefinishingFloorsCategoryComponent implements OnInit {

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
