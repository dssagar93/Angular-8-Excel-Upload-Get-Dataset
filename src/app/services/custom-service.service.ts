import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  public apiUrl:String="https://localhost:44327/api";
  constructor(private http:HttpClient) { 
  }

  uploadToUrl(formData){
    return this.http.post(this.apiUrl+"/UploadExcelFile",formData);
  }

  GetBrandChannel(query){
    var data =JSON.stringify(query.sql);
    let httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache'); 

    let options = {
      headers: httpHeaders
    }; 
    return this.http.post(this.apiUrl+"/BrandChannel", data,options);
  }

}
