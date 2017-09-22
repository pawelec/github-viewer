import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import 'rxjs/add/operator/switchMap';

@Component({
  template: '{{userName}}'
})

export class UsersComponent implements OnInit {
  userName: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.userName = params['name']);
  }
}
