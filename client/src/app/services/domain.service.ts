import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDomainResult } from '../types/domainResult.interface';
import { IQuery } from '../types/domainQuery.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DomainService {
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public queryDomain(query: IQuery): Observable<IDomainResult> {
    const response = this.http
      .get(this.BASE_URL, {
        params: { sld: query.sld, tld: query.tld },
        responseType: 'json',
      })
      .pipe(
        map(data => {
          return data;
        })
      );

    return response;
  }
}
