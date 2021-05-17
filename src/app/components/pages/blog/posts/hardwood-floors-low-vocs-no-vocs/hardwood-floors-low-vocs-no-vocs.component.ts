import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardwood-floors-low-vocs-no-vocs',
  templateUrl: './hardwood-floors-low-vocs-no-vocs.component.html',
  styleUrls: ['./hardwood-floors-low-vocs-no-vocs.component.css']
})
export class HardwoodFloorsLowVocsNoVocsComponent implements OnInit {

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
