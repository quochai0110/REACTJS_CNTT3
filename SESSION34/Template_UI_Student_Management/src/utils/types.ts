export interface Student {
  id: string;
  name: string;
  age: number;
  gender: 'Nam' | 'Nữ';
  birthday?: string;
  hometown?: string;
  address?: string;
}
export type Action = {
    type:string,
    payload?:any // optional chanel
}
export type Data={
  users:Student[]
}