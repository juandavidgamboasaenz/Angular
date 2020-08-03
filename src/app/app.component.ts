import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* CREACIÓN E INICIALIZACIÓN DE VARIABLES PARA IMPRESION DESDE app.component.html*/

  //Los usuarios que tengo actualmente
  users: string[] = ['carlos', 'victor', 'nicolas', 'gaona', 'mejia', 'gamboa', 'nagachis'];
  
/* METODO QUE NOS PERMITE AGREGAR USUARIOS SIN QUE SE REINICIE LA PAG */
  addUser(newUser){
    console.log(newUser); 
    return false;
  }

  
  activated: boolean = false;
  


  //Se le asigna el tipo de variable a cada dato
  name: string = 'Ryan Ray';
  age: number;
  //creo un objeto llamado adress como un objeto con estas propiedades

  address: {
    country: string;
    city: string;
    street: string;
    
  }

  //Creo un datto hobbies con un arreglo de strings
  hobbies: string[];

  constructor(){
    this.age = 28;
    this.address = {
      street: 'Cl 7A#69C-72',
      city: 'Bogotá D.C',
      country: 'Colombia'
    }

    this.hobbies = ['swimming', 'read', 'write'];
  }

  sayHello(){
    alert('Hello!');
  }

  deleteUser(user) {
    for(let i = 0; i < this.users.length; i++){
      if(user == this.users[i]){
        //splice elimina (i la posición) 1 cuantos valores se necesitan borrar
        this.users.splice(i , 1);
      }

    }
    
  }

}
