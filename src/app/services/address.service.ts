import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../interface/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  api: string = "https://viacep.com.br/ws/"

  constructor(private http:HttpClient) { }

  get(cep: string) : Observable<Address>
  {
    const cepFormatted: string = cep.replace("-", "");
    const url: string = `${this.api}/${cepFormatted}/json/`;
    return this.http.get<Address>(url);
  }
}
