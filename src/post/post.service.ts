import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto
    })
  }

  findAll() {
    return this.prisma.post.findMany()
  }

  findPostByTitle(title: string) {
    return this.prisma.post.findFirst({
      where: {
        title: title
      }
    })
  }

  findPostByUserId(userId: string) {
    return this.prisma.post.findMany({
      where: {
        userId: userId
      }
    })
  }

  findOne(id: string) {
    return this.prisma.post.findUniqueOrThrow({
      where: {
        id: id
      }
    })
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      data: updatePostDto,
      where: {
        id: id
      }
    })
  }

  remove(id: string) {
    return this.prisma.post.delete({
      where: {
        id: id
      }
    })
  }
}
