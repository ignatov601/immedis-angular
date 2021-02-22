import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllData<T>(): Observable<any> {
    const result = this.http.get<Array<ProductModel>>('../../../assets/serverData.json');

    return result.pipe(map(data => data.map((item: any) => {
      return item;
    })));
  }
}
