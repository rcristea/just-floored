import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hurricane-harvey-floor-repair',
  templateUrl: './hurricane-harvey-floor-repair.component.html',
  styleUrls: ['./hurricane-harvey-floor-repair.component.css']
})
export class HurricaneHarveyFloorRepairComponent implements OnInit {

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
