import { IsNotEmpty } from "class-validator";

export class ArticleDto {
    @IsNotEmpty()
    authorId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;
    
    published: boolean;
}