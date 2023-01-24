import { AnimesService } from './../../shared/services/animes.service';
import { AnimeInterface } from './../../shared/models/anime.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss']
})

export class AnimePageComponent implements OnInit{
  animes6?: AnimeInterface;

  searchText: string = "";
  animesSearch?: AnimeInterface;

  constructor(private animesService: AnimesService){}
  ngOnInit(): void{

    this.animesService.getFilterAnimes().subscribe((res: any)=>{
      this.animesSearch = res.data;
      this.animes6 = res.data;
      console.log(res.data);
    });
  }
  search(){
    this.animesService.getFilterAnimes1(this.searchText).subscribe((res: any)=>{
      this.animesSearch= res.data;
      console.log(res.data);
    });
}

}
