import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { USERS } from '../mocks/users.mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.userSubject.next(JSON.parse(savedUser));
    }
  }

  login(email: string, password: string): Observable<boolean> {
    const user = USERS.find((u) => u.email === email);
    if (user && password === user.password) {
      this.userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return of(true);
    }
    return of(false);
  }

  register(name: string, email: string, password: string): Observable<boolean> {
    const exists = USERS.find((u) => u.email === email);
    if (exists) {
      return of(false);
    }

    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      password,
      role: 'user',
    };

    USERS.push(newUser);
    this.userSubject.next(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return of(true);
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }
}
