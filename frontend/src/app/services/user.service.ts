import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../components/shared/models/User';
import { IUserLogin } from '../components/shared/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../components/shared/constants/urls';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user); // Set user to local storage upon successful login
          this.userSubject.next(user);
          this.setUserToLocalStorage(user); // Set user to local storage upon successful login
          alert('Login successful!'); // Show a success alert
        },
        error: (errorResponse) => {
          alert('Login failed: ' + errorResponse.error.message); // Show an error alert
        }
      })
    );
  }
  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      return JSON.parse(userJson) as User;
    }
    return new User(); // Return an empty user object if no user is found in local storage
  }
}
