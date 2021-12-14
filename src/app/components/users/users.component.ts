import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GitubService } from '../../services/gitub.service';
import { userResponse, User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  saleData = [
    { name: '', value: 0 }
  ]; 

  displayedColumns: string[] = ['position', 'name', 'perfil'];
  dataSource = [];
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
    this.gitService.getUsers(user, 10).subscribe(res=>{
      this.dataSource = res.items
      //grafico
      this.saleData = []
      let array:any[] = res.items 
      array.forEach(element => {
        this.gitService.getUserByLogin(element.login).subscribe(res=>{
          this.saleData.push( {name: res.login, value : res.followers})
          console.log(this.saleData);
        })
      });
    })
  }
  imprimir(ev: any, item:string){
    this.gitService.getUserByLogin(item).subscribe(res=>{
      this.router.navigate([`/user/${item}`])
    })
  }

}
