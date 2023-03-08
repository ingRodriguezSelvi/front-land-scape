export interface IResponse {
  ok?:     boolean;
  errors?: Errors;
  data?:   IUserPagination|IPermission[]|IAccess[];
}

export interface IUserPagination {
  total?: number;
  users?: User[];
}

export interface User {
  _id?:       string;
  fullName?:  string;
  email?:     string;
  password?:  string;
  deleted?:   boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Errors {
}

export interface IPermission {
  id?: number;
  name: string;
}

export interface IAccess {
  id?: number;
  createdAt: Date;
}
