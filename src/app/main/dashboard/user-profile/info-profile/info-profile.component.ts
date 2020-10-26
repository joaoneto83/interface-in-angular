import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_core/services/token.service';
import { Usuario } from 'src/app/_shered/model/usuario';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss']
})
export class InfoProfileComponent implements OnInit {
  
  dataUser:Usuario;

  constructor(serviceToken:TokenService) {
    serviceToken.getUser().subscribe(r=>{
      this.dataUser = r;
      //console.log(this.dataUser);
    },
    ()=>{
      console.log('Falha ao coletar os dados');
    })
    console.log(this.dataUser);

   }

  ngOnInit(): void {
  }

}
