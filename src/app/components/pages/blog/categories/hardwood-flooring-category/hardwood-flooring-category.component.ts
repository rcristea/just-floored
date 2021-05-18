import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardwood-flooring-category',
  templateUrl: './hardwood-flooring-category.component.html',
  styleUrls: ['./hardwood-flooring-category.component.css']
})
export class HardwoodFlooringCategoryComponent implements OnInit {

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
