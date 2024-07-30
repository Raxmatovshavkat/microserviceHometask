export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
    status: 'active'| 'inactive';
}
