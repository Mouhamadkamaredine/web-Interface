import { Injectable } from '@angular/core';
import {Observable, Subject, takeUntil, tap} from "rxjs";
import {TokenResponse} from "../../../auth/models/TokenResponse";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../../../shared/models/user";
import {UpdateUser} from "../../models/updateUser";
import {ResetUserPassword} from "../../models/resetUserPassword";
import {AddUserRequest} from "../../models/addUserRequest";
import {AddUserResponse} from "../../models/addUserResponse";
import {UpdatePermissionRequest} from "../../models/updatePermissionRequest";
import {UpdatePermissionResponse} from "../../models/updatePermissionResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private unsubscribeAll: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  getUsersList(): Observable<Array<User>> {

    return this.http.get<Array<User>>(`${environment.userUrl}GetAllUsers`)

  }

  updateUserName(updateUser: UpdateUser): Observable<UpdateUser> {

    return this.http.put<UpdateUser>(`${environment.userUrl}UpdateUser`, updateUser)

  }

  deactivateUser(id: number): Observable<HttpResponse<any>> {

    return this.http.put<HttpResponse<any>>(`${environment.userUrl}Deactivate/${id}`, null)

  }

  activateUser(id: number): Observable<HttpResponse<any>> {

    return this.http.put<HttpResponse<any>>(`${environment.userUrl}Activate/${id}`, null)

  }

  resetUserPassword(id: number): Observable<ResetUserPassword> {

    return this.http.put<ResetUserPassword>(`${environment.userUrl}ResetPassword/${id}`, null)

  }

  addUser(addUserRequest: AddUserRequest): Observable<AddUserResponse> {

    return this.http.post<AddUserResponse>(`${environment.userUrl}AddUser`, addUserRequest)

  }

  updateUserPermission(addUserRequest: UpdatePermissionRequest): Observable<UpdatePermissionResponse> {

    return this.http.put<UpdatePermissionResponse>(`${environment.userUrl}UpdateUserPermission`, addUserRequest)

  }

}
