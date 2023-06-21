import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup


  postsService = inject(PostsService);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      imagen: new FormControl(),
      autor: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
      texto: new FormControl(),
    })


  }

  envioFormulario() {
    //console.log(this.formulario.value)
    this.postsService.createPost(this.formulario.value)

    Swal.fire({
      icon: 'success',
      title: 'Un post suculento',
      showConfirmButton: false,
      timer: 2500,
      width: 500,
      padding: '3em',
      color: '#716add',
      background: '#000000'
    })

    this.formulario.reset()
  }

}
