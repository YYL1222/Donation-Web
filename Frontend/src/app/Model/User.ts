import { UserRole } from "./UserRole";

export interface User{
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    role?: UserRole;
    password?: string;
}