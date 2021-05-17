import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hurricane-matthew-floor-repair',
  templateUrl: './hurricane-matthew-floor-repair.component.html',
  styleUrls: ['./hurricane-matthew-floor-repair.component.css']
})
export class HurricaneMatthewFloorRepairComponent implements OnInit {

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
