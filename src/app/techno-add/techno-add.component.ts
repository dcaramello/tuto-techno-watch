import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css']
})
export class TechnoAddComponent implements OnInit {

  constructor(private technoService: TechnoService) { }

  ngOnInit(): void {
  }

  addTechno(form){
    console.log(form.value);
    this.technoService.createTechnos(form.value);
    form.reset();
  }
}
