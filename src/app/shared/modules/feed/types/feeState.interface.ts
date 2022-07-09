import { GetFeedResposeInterface } from './getFeedResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  errors: string | null;
  data: GetFeedResposeInterface | null;
}
