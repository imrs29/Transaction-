import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>('http://localhost:3000/Transaction/', data);
  }
  getTransaction() {
    return this.http.get<any>('http://localhost:3000/Transaction/');
  }
  putTransaction(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/Transaction/'+id, data);
  }

  deleteTransaction(id: number) {
    return this.http.delete<any>('http://localhost:3000/Transaction/'+id);
  }
}
