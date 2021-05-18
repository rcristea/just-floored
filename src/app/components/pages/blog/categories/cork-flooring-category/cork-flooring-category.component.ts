import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cork-flooring-category',
  templateUrl: './cork-flooring-category.component.html',
  styleUrls: ['./cork-flooring-category.component.css']
})
export class CorkFlooringCategoryComponent implements OnInit {

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
