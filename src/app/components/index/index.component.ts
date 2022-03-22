import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users!: Observable<any>;

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
   }

  ngOnInit(): void {
  }

}
