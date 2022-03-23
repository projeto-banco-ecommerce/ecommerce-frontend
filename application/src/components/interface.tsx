import { api } from '../services/api';
export interface IBaseUser {
    name: string;
    email: string;
    
  }
  export interface IUser extends IBaseUser {
    id: number;
  }
  
  const addUser = async (IUser: number) => {       
          const user = await api.get(`IBaseUse${IUser}`)
          const newUser = {
            ...user.data,
          }
  };
  