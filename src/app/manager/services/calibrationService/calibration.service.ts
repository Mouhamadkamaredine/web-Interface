import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {GetCalibrations} from "../../models/GetCalibrations";

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {

  constructor(private http: HttpClient) { }

  getCalibrationsList(params?: { [key: string]: string | number }): Observable<GetCalibrations> {

    let queryParams = new HttpParams();
    if (params) {
      for (let key in params) {
        if(params[key] !== "" || params[key] !== null || params[key] !== undefined)
          queryParams = queryParams.set(key, params[key]);
      }
    }

    return this.http.get<GetCalibrations>(`${environment.calibrationUrl}GetCalibrations`, { params: queryParams });
  }

  getUserCalibrationsList(page?: number, pageSize?: number): Observable<GetCalibrations> {
    let queryParams = new HttpParams();

    if (page) {
      queryParams = queryParams.set('PageNumber', page.toString());
    }
    if (pageSize) {
      queryParams = queryParams.set('PageSize', pageSize.toString());
    }

    return this.http.get<GetCalibrations>(`${environment.calibrationUrl}UserCalibrations`, { params: queryParams });
  }

  getModuleCalibrationsList(moduleSn?: string, page?: number, pageSize?: number): Observable<GetCalibrations> {

    let queryParams = new HttpParams();

    if (page) {
      queryParams = queryParams.set('page', page.toString());
    }
    if (pageSize) {
      queryParams = queryParams.set('pageSize', pageSize.toString());
    }

    return this.http.get<GetCalibrations>(`${environment.calibrationUrl}ModuleCalibrations/${moduleSn}`, { params: queryParams });
  }

  downloadFiles(moduleSn: string) : Observable<Blob> {

    const headers = new HttpHeaders({
      'Accept': 'application/zip'
    });

    return this.http.get(`${environment.filesUrl}DownloadFiles/${moduleSn}`, {
      headers: headers,
      responseType: 'blob'
    });
  }

}
