import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List with Angular'; 
  list:any[]=[]; 
  addtask(item:string) 
  { 
    this.list.push({id:this.list.length,name:item}) 
    console.warn(this.list); 
  } 
  removeTask(id:number) 
  { 
    console.warn(id) 
    this.list=this.list.filter(item=>item.id!==id); 
  } 
}

