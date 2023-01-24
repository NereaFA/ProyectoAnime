import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) {}

  getAnimes(){
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=6")
  }

  getAnimes2(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count")
  }

  getAnimes3(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count")
  }

  getAnimes4(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-average_rating")
  }

  getAnimes5(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=6&sort=-user_count")
  } 

  getFilterAnimes(){
    return this.http.get("https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count")
  }
  getFilterAnimes1(text:any){
    return this.http.get(`https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&page%5Boffset%5D=0&page%5Blimit%5D=20${text ? "&filter%5Btext%5D=" + text : ""}&sort=-user_count`)
  }
}
