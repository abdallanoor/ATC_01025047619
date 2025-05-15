import { User } from '../interfaces/user.interface';

export const USERS: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@areebgroup.com',
    password: '12345678',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Regular User',
    email: 'user@areebgroup.com',
    password: '12345678',
    role: 'user',
  },
];
