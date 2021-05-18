import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bamboo-flooring-category',
  templateUrl: './bamboo-flooring-category.component.html',
  styleUrls: ['./bamboo-flooring-category.component.css']
})
export class BambooFlooringCategoryComponent implements OnInit {

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
