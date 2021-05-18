import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laminate-flooring-category',
  templateUrl: './laminate-flooring-category.component.html',
  styleUrls: ['./laminate-flooring-category.component.css']
})
export class LaminateFlooringCategoryComponent implements OnInit {

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
