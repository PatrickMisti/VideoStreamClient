import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  private myHeaders = new Headers();
  constructor(private _client: HttpClient) {
    this.myHeaders.append("Cookie", "__ddg1_=KDXzsfmvjSX1IoLh4wFn; aniworld_session=2i7erth87ppglvmogv8555rddv");
    this.myHeaders.append('Content-Type', 'application/json;charset=utf-8')
    this.myHeaders.append('Access-Control-Allow-Origin', '*')
  }

  public async Get<T>(path: string) {
    try {
      console.log(`HTTP GET: ${path}`);
      let i = await fetch(path, {
        method: 'GET',
        headers: this.myHeaders,
        redirect: 'follow',
        mode: 'navigate'
      })
      return await i.text();
    }catch (e) {
      console.log(e);
      return null;
    }
  }
}
