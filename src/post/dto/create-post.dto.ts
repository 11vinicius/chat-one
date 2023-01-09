import { IsNotEmpty, IsString } from "class-validator"

export class CreatePostDto {
    @IsString()
    @IsNotEmpty({ message: "Campo title obrigatorio." })
    title: string

    @IsString()
    @IsNotEmpty({ message: "Campo conteúdo obrigatorio." })
    content: string

    userId: string
}
