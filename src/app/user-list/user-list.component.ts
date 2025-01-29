import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
users = [
  {name: 'John Doe', role: 'Admin'},
  {name: 'Jane Doe', role: 'User'},
  {name: 'Jim Doe', role: 'SuperAdmin'},
];

isLoggedIn = true;

}
