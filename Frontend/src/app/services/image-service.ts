import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageUrl = 'http://localhost:8080/dono/getImageByUrl/';

  constructor(private http: HttpClient) { }

  getImage(id:Number): Observable<Blob> {
    //Set the response type to 'arraybuffer' to handle binary data
    //const httpOptions = {
      //headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      //responseType: 'arraybuffer' as ResponseType,
    //};
    return this.http.get(this.imageUrl+id,{ responseType: 'blob' });
  }
}
