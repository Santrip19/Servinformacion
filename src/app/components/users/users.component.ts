import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GitubService } from '../../services/gitub.service';
import { userResponse, User } from '../../models/user.model';
import { Router } from '@angular/router';
import { concatMap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  saleData = [
    { name: '', followers: 0 }
  ]; 

  displayedColumns: string[] = ['position', 'name', 'perfil'];
  dataSource = [];
  data: readonly any[]=[];
  constructor(
    private gitService : GitubService, 
    private fb : FormBuilder,
    private router : Router) {
    
   }
  formUser= this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]]
  });
  ngOnInit(): void {
  }
   onSearch(){
    const user = this.formUser.value.username;
    this.gitService.getUsers(user, 10 ).pipe(
      concatMap((res)=>{
        this.dataSource = res.items;
        return forkJoin(...res.items.map((element: { login: string | null; })=>{
          return this.gitService.getUserByLogin(element.login);
        }));
      })
    ).subscribe((arrayGr)=>{
      this.data = arrayGr 
      for (let obj of this.data) {
        obj['value'] = obj['followers'];
        delete obj['followers'];
    }
    })
   
    
  }




  imprimir(ev: any, item:string){
   
    this.gitService.getUserByLogin(item).subscribe(res=>{
      this.router.navigate([`/user/${item}`])
    })
  }

}
