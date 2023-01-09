import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePostDto {
    @IsString()
    @IsNotEmpty({ message: "Campo title obrigatorio." })
    title: string

    @IsString()
    @IsNotEmpty({ message: "Campo conteúdo obrigatorio." })
    content: string
}
