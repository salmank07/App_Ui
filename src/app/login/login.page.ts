import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private modalcontroller: ModalController
  ) { 
    console.log(this.isModalCanDismiss, "jhjhjhjhj")
  }

  isModalCanDismiss: boolean;
  isopen: boolean = true;

  ngOnInit() { }

  logIn() {
    this.isModalCanDismiss = true;
    console.log(this.isModalCanDismiss, "kjhhhkhj");
    this.modalcontroller.dismiss();
    this.router.navigate(['/tabs/tab1']);
  }
  ondismiss() {
    this.isModalCanDismiss = !this.isModalCanDismiss;
    this.isopen = !this.isopen;
  }
  present() {
    this.isopen = !this.isopen

  }

  
}

