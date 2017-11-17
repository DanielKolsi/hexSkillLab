import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from '../../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
 
  currentUser: User;
  users: User[] = [];
  series: any;
  debugger;

  constructor(private serieService: SerieService, private router: Router, public oktaAuth: OktaAuthService, private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.getSerieList();
    debugger;
    this.loadAllUsers();
  }

  deleteUser(_id: string) {
       this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }
 
  private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
  }

  getSerieList() {
    this.serieService.getAllSeries().then((res) => {
      this.series = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteSerie(id) {
  this.serieService.deleteSerie(id).then((result) => {
    this.router.navigate(['/series']);
  }, (err) => {
    console.log(err);
  });
}

}
