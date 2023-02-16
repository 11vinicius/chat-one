import { IsNotEmpty, IsString } from "class-validator";

export class CreateMessageDto {
    @IsString()
    @IsNotEmpty({ message: "Campo nome obrigatorio." })
    content: string

    userId: string
}
