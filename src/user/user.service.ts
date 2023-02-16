import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 6);
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id
      }
    })
  }

  findUserByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email: email
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    // const deletePosts = this.prisma.post.deleteMany({
    //   where: {
    //     userId: id
    //   }
    // })

    const deleteUser = this.prisma.user.delete({
      where: {
        id: id
      }
    })
    return this.prisma.$transaction([deleteUser]);
  }
}
