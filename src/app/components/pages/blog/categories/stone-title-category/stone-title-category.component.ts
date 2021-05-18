import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stone-title-category',
  templateUrl: './stone-title-category.component.html',
  styleUrls: ['./stone-title-category.component.css']
})
export class StoneTitleCategoryComponent implements OnInit {

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
