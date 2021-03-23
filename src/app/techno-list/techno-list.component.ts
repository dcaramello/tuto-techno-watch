import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css']
})
export class TechnoListComponent implements OnInit {

  constructor(private technoService: TechnoService) { }

  allTechnos = [];

  ngOnInit(): void {
    this.getTechnos();
  }

  getTechnos(){
    this.allTechnos = this.technoService.getTechnos();
  }

  deleteTechno(techno: Technology) {
    this.technoService.deleteTechno(techno);
    this.allTechnos = this.technoService.getTechnos();
  }

}
