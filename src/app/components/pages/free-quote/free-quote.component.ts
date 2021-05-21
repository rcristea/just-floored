import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-quote',
  templateUrl: './free-quote.component.html',
  styleUrls: ['./free-quote.component.css']
})
export class FreeQuoteComponent implements OnInit {

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
