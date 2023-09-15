import { ArticleModule } from './article/article.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ArticleModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
  ],
})
export class AppModule {}