import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refinish-or-replace-wood-floors',
  templateUrl: './refinish-or-replace-wood-floors.component.html',
  styleUrls: ['./refinish-or-replace-wood-floors.component.css']
})
export class FinishOrReplaceWoodFloorsComponent implements OnInit {

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
