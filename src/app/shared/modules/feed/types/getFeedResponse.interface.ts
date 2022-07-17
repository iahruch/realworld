import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface GetFeedResposeInterface {
  articles: Array<ArticleInterface>;
  articlesCount?: number;
}
