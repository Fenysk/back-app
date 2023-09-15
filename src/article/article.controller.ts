import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto';

@Controller('article') // POST /article
export class ArticleController {
    constructor(private articleService: ArticleService) { }

    @Get()
    getAllArticles() {
        console.log('GET /article');
        return this.articleService.getAllArticles();
    }

    @Get('latest')
    getLatestArticles() {
        console.log('GET /article/latest');
        return this.articleService.getLatestArticles();
    }

    @Get(':id')
    getArticleById(@Param('id') id: string) {
        console.log(`GET /article/${id}`);
        return this.articleService.getArticleById(parseInt(id));
    }

    @Post('create')
    createArticle(@Body() data: ArticleDto) {
        console.log('POST /article');
        return this.articleService.createArticle(data);
    }

    @Post('create/test')
    createTestArticle() {
        console.log('POST /article');
        return this.articleService.createTestArticle();
    }

    @Put(':id')
    updateArticle(@Param('id') id: string, @Body() data: ArticleDto) {
        console.log(`PUT /article/${id}`);
        return this.articleService.updateArticle(parseInt(id), data);
    }

    @Patch(':id/published')
    updateArticlePublished(@Param('id') id: string, @Query('published') published: string) {
        console.log(`PATCH /article/${id}/published`);
        return this.articleService.updateArticlePublished(parseInt(id), published);
    }

    @Delete(':id')
    deleteArticle(@Param('id') id: string) {
        console.log(`DELETE /article/${id}`);
        return this.articleService.deleteArticle(parseInt(id));
    }

}