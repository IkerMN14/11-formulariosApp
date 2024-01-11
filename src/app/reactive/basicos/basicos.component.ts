import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  constructor(private fb: FormBuilder) { }
  miFormulario: FormGroup = this.fb.group({
    nombre:['RTX4080ti',[Validators.required, Validators.minLength(3)]],
    precio:[1500,[Validators.required,Validators.min(0)]],
    existencias:[5,[Validators.required,Validators.min(0)]]
  })
  

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5)  
  // })
  campoNoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); //marca todos los campos como tocados
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset(); // borro todos los campos del formulario
  }

  
}
