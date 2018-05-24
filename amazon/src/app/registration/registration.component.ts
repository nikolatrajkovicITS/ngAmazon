import { environment } from './../../environments/environment.prod';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  password1 = '';
  isSeller = false;

  btnDisabled = false;

  registerApi: 'http://localhost:3030/api/accounts/signup';

  constructor(private router: Router,
              private data: DataService,
              private restApiService: RestApiService) { }

  ngOnInit() {
  }

  validate() {
        if (this.name) {
            if (this.email) {
                if (this.password) {
                    if (this.password1) {
                        if (this.password === this.password1) {
                            return true;

                    } else {
                         this.data.error('Password do not match.');
                    }
                     } else {
                         this.data.error('Confirmation password is not entered.');
                     }
                } else {
                    this.data.error('Password is not entered.');
                }
            } else {
               this.data.error('Email is not entered.');
            }
        } else {
            this.data.error('Name is not entered');
        }
   }

   async register() {
       this.btnDisabled = true;
       try {
           if (this.validate()) {
              const data = await this.restApiService.post(
                this.registerApi,
                    {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        isSeller: this.isSeller
                    }
              );
              if (data['success']) {
                 localStorage.setItem('token', data['token']);
                 this.data.success('Registration Successful!');
           } else {
             this.data.error(data['message']);
           }
       }
   } catch (error) {
     this.data.error(error['message']);
   }
   this.btnDisabled = false;
}
