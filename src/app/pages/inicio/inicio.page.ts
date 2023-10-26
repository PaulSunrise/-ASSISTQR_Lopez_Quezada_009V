import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menucontroller: MenuController,
              private router: Router,
              private toastcontroller: ToastController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.showToast('Sesion Cerrada');
    this.router.navigateByUrl("/home");
  }

  async showToast(msg:any){
    const toast= await this.toastcontroller.create({
      message: msg,
      duration: 3000
    })
    toast.present()
  }


}
