import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(
    private prisma: PrismaService
  ){}

  create(createMessageDto: CreateMessageDto) {
    return this.prisma.message.create({
      data: createMessageDto
    })
  }

  findAll() {
    return `This action returns all message`;
  }

  findMessageByUserId(userId: string){
    return this.prisma.message.findMany({
      where:{
        userId: userId
      }
    });
    console.log(userId)
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
