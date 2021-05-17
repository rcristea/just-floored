import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-p2',
  templateUrl: './blog-p2.component.html',
  styleUrls: ['./blog-p2.component.css']
})
export class BlogP2Component implements OnInit {

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
