import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tache } from '../models/Tache';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  title = 'employeemanagerapp';
  constructor(private service :TacheService ){}

  public taches!: Tache[];
  public editTache!: Tache |null ;
  public deleteTache!: Tache | null;


  ngOnInit(): void {
      this.getTaches();
  }

  public getTaches(): void {
    this.service.getTaches().subscribe(
      (      Response: Tache[])=>{
        this.taches=Response;
      }, 
      (error : HttpErrorResponse)=>{
        alert(error.message)
      }
    );
  }

  public searchTaches(key:string){
    const res : Tache[]=[];
    let tache1: Tache;
    for (tache1 of this.taches){
      if(tache1.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
      tache1.description.toLowerCase().indexOf(key.toLowerCase())!== -1 ){
        res.push(tache1);
      }
    }
      this.taches=res;
      if (res?.length==0 || !key){
        this.getTaches();
      }
  }

  public onOpenModal(tache: Tache | null , mode: string): void {
    const container = document.getElementById('main-container') ;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTacheModal');
    }
    if (mode === 'edit') {
      this.editTache=tache;
      button.setAttribute('data-target', '#updateTacheModal');
    }
    if (mode === 'delete') {
      this.deleteTache=tache;
      button.setAttribute('data-target', '#deleteTacheModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
  public onAddTache(form: NgForm){
     document.getElementById("add-tache-form")?.click();
     this.service.addTache(form.value).subscribe(
       (      Response: any) =>{
         this.getTaches();
         console.log(Response);
         form.reset();
        },
         (error : HttpErrorResponse) => {alert(error.message) ;
           form.reset(); }
    )
  }

  public onUpdateTache(tache: Tache){
    this.service.updateTache(tache).subscribe(
      (Response: any) =>{
      console.log(Response);
       this.editTache=tache;
        this.getTaches();
       },
       (error : HttpErrorResponse) => {alert(error.message)}
   )
 }

 public onDeleteTache( tacheId: any){
  this.service.deleteTache(tacheId).subscribe(
    (Response: any) =>{
    console.log(Response);
    this.getTaches();
   },
     (error : HttpErrorResponse) => {alert(error.message)}
 )
}

}
