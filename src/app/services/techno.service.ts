import { Injectable } from '@angular/core';
import { Technology } from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
  private technos: Technology[] = [];

  constructor() { }
  
  createTechnos(techno: Technology){
    const newTechno = {id: Date.now(), ...techno}
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos);
  }

  getTechnos(): Technology[] {
    return this.technos;
  }

  deleteTechno(techno: Technology) {
    this.technos = this.technos.filter(t => t.id !== techno.id)
  }
}
