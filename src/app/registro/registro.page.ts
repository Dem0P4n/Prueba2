import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public formulario: FormGroup
  constructor(
    private formB: FormBuilder
  ) {
    this.formulario = this.formB.group({
      firstName: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(15)]],
      lastName: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      age: [18, [Validators.required,Validators.min(18),Validators.max(98)]],
      username: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
      birthDate: [1991, [Validators.required,Validators.min(1991),Validators.max(2022)]],
      gender: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

}




