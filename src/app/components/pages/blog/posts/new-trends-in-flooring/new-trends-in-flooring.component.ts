import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-trends-in-flooring',
  templateUrl: './new-trends-in-flooring.component.html',
  styleUrls: ['./new-trends-in-flooring.component.css']
})
export class NewTrendsInFlooringComponent implements OnInit {

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
