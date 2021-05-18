import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spc-vinyl-flooring',
  templateUrl: './spc-vinyl-flooring.component.html',
  styleUrls: ['./spc-vinyl-flooring.component.css']
})
export class SpcVinylFlooringComponent implements OnInit {

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
