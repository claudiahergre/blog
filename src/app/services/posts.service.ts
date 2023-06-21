import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[]

  constructor() {
    this.arrPosts = [
      {
        titulo: "Suculenta A",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur? Ab ipsa reiciendis facere reprehenderit quibusdam at porro, repudiandae aliquid et quas tenetur eveniet, eos nulla? Libero harum dolor maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sint obcaecati quas ad quasi ratione nemo, fuga natus nisi totam aut, accusantium mollitia id tenetur repellat magnam, ipsa praesentium! Unde.Ipsum doloremque exercitationem incidunt assumenda ullam quae autem quisquam corporis, vel tenetur libero animi iure itaque ut pariatur accusantium! Veritatis vitae eveniet sapiente molestias officia. Ad asperiores ipsa alias neque.Eum quasi magnam sequi voluptate ullam tenetur earum, voluptas, doloremque atque corrupti consequuntur aut recusandae accusamus rerum odio, iusto dolor voluptatum dolorem beatae exercitationem animi perspiciatis. Libero quia maxime quos.",
        autor: "Claudia",
        imagen: "https://verdecora.es/blog/wp-content/uploads/2016/01/plantas-suculentas-cuidados.jpg.webp",
        fecha: "2023-06-17",
        categoria: "verde"
      },
      {
        titulo: "Suculenta B",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur? Ab ipsa reiciendis facere reprehenderit quibusdam at porro, repudiandae aliquid et quas tenetur eveniet, eos nulla? Libero harum dolor maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sint obcaecati quas ad quasi ratione nemo, fuga natus nisi totam aut, accusantium mollitia id tenetur repellat magnam, ipsa praesentium! Unde.Ipsum doloremque exercitationem incidunt assumenda ullam quae autem quisquam corporis, vel tenetur libero animi iure itaque ut pariatur accusantium! Veritatis vitae eveniet sapiente molestias officia. Ad asperiores ipsa alias neque.Eum quasi magnam sequi voluptate ullam tenetur earum, voluptas, doloremque atque corrupti consequuntur aut recusandae accusamus rerum odio, iusto dolor voluptatum dolorem beatae exercitationem animi perspiciatis. Libero quia maxime quos.",
        autor: "Claudia",
        imagen: "https://eadn-wc01-3142310.nxedge.io/wp-content/uploads/2020/10/Las-mejores-suculentas-rojas.jpg",
        fecha: "2023-06-17",
        categoria: "roja"
      },
      {
        titulo: "Suculenta C",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur? Ab ipsa reiciendis facere reprehenderit quibusdam at porro, repudiandae aliquid et quas tenetur eveniet, eos nulla? Libero harum dolor maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sint obcaecati quas ad quasi ratione nemo, fuga natus nisi totam aut, accusantium mollitia id tenetur repellat magnam, ipsa praesentium! Unde.Ipsum doloremque exercitationem incidunt assumenda ullam quae autem quisquam corporis, vel tenetur libero animi iure itaque ut pariatur accusantium! Veritatis vitae eveniet sapiente molestias officia. Ad asperiores ipsa alias neque.Eum quasi magnam sequi voluptate ullam tenetur earum, voluptas, doloremque atque corrupti consequuntur aut recusandae accusamus rerum odio, iusto dolor voluptatum dolorem beatae exercitationem animi perspiciatis. Libero quia maxime quos.",
        autor: "Claudia",
        imagen: "https://www.mendozapost.com/files/image/303/303798/6097e6d74186e.jpg",
        fecha: "2023-06-17",
        categoria: "azul"
      },
      {
        titulo: "Suculenta D",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur? Ab ipsa reiciendis facere reprehenderit quibusdam at porro, repudiandae aliquid et quas tenetur eveniet, eos nulla? Libero harum dolor maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sint obcaecati quas ad quasi ratione nemo, fuga natus nisi totam aut, accusantium mollitia id tenetur repellat magnam, ipsa praesentium! Unde.Ipsum doloremque exercitationem incidunt assumenda ullam quae autem quisquam corporis, vel tenetur libero animi iure itaque ut pariatur accusantium! Veritatis vitae eveniet sapiente molestias officia. Ad asperiores ipsa alias neque.Eum quasi magnam sequi voluptate ullam tenetur earum, voluptas, doloremque atque corrupti consequuntur aut recusandae accusamus rerum odio, iusto dolor voluptatum dolorem beatae exercitationem animi perspiciatis. Libero quia maxime quos.",
        autor: "Claudia",
        imagen: "https://i.pinimg.com/736x/ab/68/5b/ab685b3d08a885e2c71553b873193fb9.jpg",
        fecha: "2023-06-17",
        categoria: "morada"
      },
      {
        titulo: "Suculenta E",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur? Ab ipsa reiciendis facere reprehenderit quibusdam at porro, repudiandae aliquid et quas tenetur eveniet, eos nulla? Libero harum dolor maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sint obcaecati quas ad quasi ratione nemo, fuga natus nisi totam aut, accusantium mollitia id tenetur repellat magnam, ipsa praesentium! Unde.Ipsum doloremque exercitationem incidunt assumenda ullam quae autem quisquam corporis, vel tenetur libero animi iure itaque ut pariatur accusantium! Veritatis vitae eveniet sapiente molestias officia. Ad asperiores ipsa alias neque.Eum quasi magnam sequi voluptate ullam tenetur earum, voluptas, doloremque atque corrupti consequuntur aut recusandae accusamus rerum odio, iusto dolor voluptatum dolorem beatae exercitationem animi perspiciatis. Libero quia maxime quos.",
        autor: "Claudia",
        imagen: "https://eadn-wc01-3142310.nxedge.io/wp-content/uploads/2020/01/Crassula-perforata-cadena-de-botones-2.jpg",
        fecha: "2023-06-17",
        categoria: "verde"
      },
      {
        titulo: "Suculenta F",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consectetur? Ab ipsa reiciendis facere reprehenderit quibusdam at porro, repudiandae aliquid et quas tenetur eveniet, eos nulla? Libero harum dolor maxime?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sint obcaecati quas ad quasi ratione nemo, fuga natus nisi totam aut, accusantium mollitia id tenetur repellat magnam, ipsa praesentium! Unde.Ipsum doloremque exercitationem incidunt assumenda ullam quae autem quisquam corporis, vel tenetur libero animi iure itaque ut pariatur accusantium! Veritatis vitae eveniet sapiente molestias officia. Ad asperiores ipsa alias neque.Eum quasi magnam sequi voluptate ullam tenetur earum, voluptas, doloremque atque corrupti consequuntur aut recusandae accusamus rerum odio, iusto dolor voluptatum dolorem beatae exercitationem animi perspiciatis. Libero quia maxime quos.",
        autor: "Claudia",
        imagen: "https://www.guiadejardineria.com/wp-content/uploads/2018/09/Echeveria-runyonii.jpg",
        fecha: "2023-06-17",
        categoria: "verde"
      }
    ]
  }

  getAll(): Post[] {
    return this.arrPosts;
  }


  getByCategoria(categoria: string): Post[] {
    const arrCat: Post[] = [];
    for (let post of this.arrPosts) {
      if (post.categoria === categoria) {
        arrCat.push(post)
      }
    }
    return arrCat
  }


  createPost(nuevoPost: Post) {
    this.arrPosts.unshift(nuevoPost)
    //console.log(nuevoPost)
    console.log(this.arrPosts)
  }


  /*  borrarPost(id: number): void {
     this.arrPosts.splice(id, 1)
   } */

}
