import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { OrganizationProfile } from "../model/organization-profile";

@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<OrganizationProfile>;
  private currentUser: Observable<OrganizationProfile>;

  constructor(private httpClient: HttpClient) {
    /*this.currentUserSubject = new BehaviorSubject<OrganizationProfile>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();*/
  }

  public get currentUserValue(): OrganizationProfile {
    return this.currentUserSubject.value;
  }

  public getUser(): boolean {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  }

  /*login(login: Login) {
    return post<any>(`${environment.hostUrl}/organizationapi/login`).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }
*/
  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
