import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxury-vinyl-planks-flooring-installation',
  templateUrl: './luxury-vinyl-planks-flooring-installation.component.html',
  styleUrls: ['./luxury-vinyl-planks-flooring-installation.component.css']
})
export class LuxuryVinylPlanksFlooringInstallationComponent implements OnInit {

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
