import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitubService } from '../../services/gitub.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any ={};

  constructor(private _route : ActivatedRoute,
    private gitService : GitubService) {
   }

  ngOnInit(): void {
    const login = this._route.snapshot.paramMap.get('login');
    this.gitService.getUserByLogin(login).subscribe(res =>{
      this.user = res;
    
      
    })
  }

}
