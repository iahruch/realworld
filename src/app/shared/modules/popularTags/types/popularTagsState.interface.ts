import { PopularTagsType } from './popularTagsType';

export interface PopularTagsStateInterface {
  isLoading: boolean;
  data: PopularTagsType | null;
}
