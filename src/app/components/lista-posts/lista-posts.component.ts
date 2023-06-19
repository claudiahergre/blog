import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  /* post: Post | undefined */
  posts: Post[];

  postsService = inject(PostsService);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.posts = []
  }

  ngOnInit() {
    this.posts = this.postsService.getAll()
  }

  filtrarPorColor($event: string) {
    this.posts = this.postsService.getByCategoria($event)
  }

  getAllPosts() {
    this.posts = this.postsService.getAll()
    console.log(this.posts)
  }

  /* eliminarPost(id: number) {
    this.postsService.borrarPost(id)
  } */

}
