
import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})

export class DinamicosComponent {

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }

  guardar(){
    console.log('Formulario posteado');
  }

  
  eliminar( index: number ) {
    this.persona.favoritos.splice(index, 1);
    //posición inicial y número de elementos que quiero borrar
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    //... para asegurarme que no mando ninguna referencia al objeto.
    //solo lectura.
    this.nuevoJuego = '';
  }


}
