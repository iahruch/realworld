import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feeState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
