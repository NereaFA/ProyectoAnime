import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  animes: any;
  animes2: any; //creo otra variable
  animes3: any;
  animes4: any;
  animes5: any;

  constructor(private animesService:AnimesService)
  {}

  ngOnInit(){
    console.log('Me creo');

    this.animesService.getAnimes().subscribe((res: any)=>{
        this.animes = res.data;
        console.log(res.data);
      });

    this.animesService.getAnimes2().subscribe((res: any)=>{
        this.animes2 = res.data;
        console.log(res.data);
      });

      this.animesService.getAnimes3().subscribe((res: any)=>{
        this.animes3 = res.data;
        console.log(res.data);
      });

      this.animesService.getAnimes4().subscribe((res: any)=>{
        this.animes4 = res.data;
        console.log(res.data);
      });

      this.animesService.getAnimes5().subscribe((res: any)=>{
        this.animes5 = res.data;
        console.log(res.data);
      });
  }
}
