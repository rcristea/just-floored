import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engineered-wood-category',
  templateUrl: './engineered-wood-category.component.html',
  styleUrls: ['./engineered-wood-category.component.css']
})
export class EngineeredWoodCategoryComponent implements OnInit {

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
