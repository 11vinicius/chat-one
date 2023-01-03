import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { IsEmailUnique } from '../validator/isEmail';


export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: "Campo nome obrigatorio." })
    name: string

    @IsString()
    @IsNotEmpty({ message: "Campo nome obrigatorio." })
    password: string

    @IsString()
    @IsEmail()
    @IsEmailUnique({ message: 'Email já em uso.' })
    email: string
}
