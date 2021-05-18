import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinyl-plank-category',
  templateUrl: './vinyl-plank-category.component.html',
  styleUrls: ['./vinyl-plank-category.component.css']
})
export class VinylPlankCategoryComponent implements OnInit {

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
