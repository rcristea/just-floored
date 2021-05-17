import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-thicker-engineered-flooring',
  templateUrl: './new-thicker-engineered-flooring.component.html',
  styleUrls: ['./new-thicker-engineered-flooring.component.css']
})
export class NewThickerEngineeredFlooringComponent implements OnInit {

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
