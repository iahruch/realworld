import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  errors: string | null;
  data: ArticleInterface | null;
}
