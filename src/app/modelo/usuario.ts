export interface Usuario {
  firstName: string;
  lastName: string;
  age: number;
  userName: string;
  password: string;
  birthDate: number;
  gender: 'Male' | 'Female'
}

export interface UsuarioConID extends Usuario {
  id: number;
}

