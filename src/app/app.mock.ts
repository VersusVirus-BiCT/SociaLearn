import { User } from './user/models/user';

export const USERS: User[] = [
  {
    id: 1,
    username: 'Teacher Janic',
    role: 'Teacher',
    achievements: [],
    tasks: [],
    karma: {
      experience: 2500,
      maxExperience: 7000,
      level: 6
    }
  },
  {
    id: 2,
    username: 'Student Lukas',
    role: 'Student',
    achievements: [],
    tasks: [],
    karma: {
      experience: 100,
      maxExperience: 3000,
      level: 2
    }
  },
  {
    id: 3,
    username: 'Student Sandro',
    role: 'Student',
    achievements: [],
    tasks: [],
    karma: {
      experience: 6300,
      maxExperience: 10000,
      level: 9
    }
  },
  {
    id: 4,
    username: 'Student Elisa ',
    role: 'Student',
    achievements: [],
    tasks: [],
    karma: {
      experience: 8500,
      maxExperience: 10000,
      level: 9
    }
  }
]
