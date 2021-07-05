import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  navAddOrg(){

    this.router.navigateByUrl("admin/organizations/post")
  }


}
