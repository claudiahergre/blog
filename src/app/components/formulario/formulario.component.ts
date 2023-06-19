import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from 'src/app/services/posts.service';

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
      titulo: new FormControl('', [Validators.required]),
      imagen: new FormControl(''),
      autor: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
    })


  }

  /*  ngOnInit():void */


  envioFormulario() {
    //console.log(this.formulario.value)
    this.postsService.createPost(this.formulario.value)
  }


  checkError(field: string, error: string): boolean | undefined {
    return this.formulario.get(field)?.hasError(error) && this.formulario.get(field)?.touched
  }


}
