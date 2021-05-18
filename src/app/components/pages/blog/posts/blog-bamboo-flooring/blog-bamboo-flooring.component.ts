import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-bamboo-flooring',
  templateUrl: './blog-bamboo-flooring.component.html',
  styleUrls: ['./blog-bamboo-flooring.component.css']
})
export class BlogBambooFlooringComponent implements OnInit {

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
