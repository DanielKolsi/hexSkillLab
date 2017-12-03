import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../user.service';
 
@Component({
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.css']
})
 
export class RegisterComponent implements OnInit {
    
    user = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
    }
    
    register() {
        console.log('tipousuario:' + this.user)
        this.userService.register(this.user).then((result) => {
        let id = result['_id'];
        console.log(id)
        this.router.navigate(['/login', id]);
        }, (err) => {
          console.log(err);
        });
    }
}



