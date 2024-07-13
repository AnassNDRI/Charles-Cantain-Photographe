import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  id: number;
  email: string;
  password: string; // Important: Dans une application réelle, je passerai par un Backen.
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private users: User[] = [
    { id: 1, email: 'charles@ph.com', password: 'Charles112', role: 'admin' },
    { id: 2, email: 'charles@user.com', password: 'Charles112', role: 'user' },
  ];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(email: string, password: string): Observable<boolean> {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      this.currentUserSubject.next(user);
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return new BehaviorSubject<boolean>(true).asObservable();
    } else {
      return new BehaviorSubject<boolean>(false).asObservable();
    }
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem('currentUser');
    return user !== null;
  }

  logout() {
    this.currentUserSubject.next(null);
    sessionStorage.removeItem('currentUser');
  }
}
