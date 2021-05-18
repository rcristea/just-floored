import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handscraped-hardwood-flooring',
  templateUrl: './handscraped-hardwood-flooring.component.html',
  styleUrls: ['./handscraped-hardwood-flooring.component.css']
})
export class HandscrapedHardwoodFlooringComponent implements OnInit {

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
