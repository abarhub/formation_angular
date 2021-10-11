import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'game-create-profil',
  templateUrl: './create-profil.component.html',
  styleUrls: ['./create-profil.component.css']
})
export class CreateProfilComponent implements OnInit {

  public form: FormGroup= new FormGroup({
    typeForce: new FormControl('', Validators.compose([])),
    prenom: new FormControl('', Validators.compose([]))
  });
  listeArmes: string[] = [
     'Sabre laser' ,
     'Blaster' ,
     'Batte de baseball' 
];

  constructor() { 

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      typeForce: new FormControl('', Validators.compose([])),
      prenom: new FormControl('', Validators.compose([])),
      photo: new FormControl('', Validators.compose([])),
      armeSelectionne: new FormControl('', Validators.compose([]))
    });
  }

  submit(): void {

  }

}
