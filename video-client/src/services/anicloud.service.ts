import {ElementRef, Injectable} from '@angular/core';
import {HttpWrapperService} from "./http-wrapper.service";
import {environment} from "../environments/environment";
import {HtmlParser} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class AnicloudService {
  private aniCloudSitePath: string = environment.anicloudPath;
  constructor(private _http: HttpWrapperService) {  }

  public async getAllCarouselAnime() {
    const path = this.aniCloudSitePath;
    try {
      let site = await this._http.Get(path);
      console.log('hallo')
    } catch (e) {
      console.log(e);
    }
  }
}
