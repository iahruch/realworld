import { PopularTagType } from 'src/app/shared/types/popularTagType';

export interface PopularTagsStateInterface {
  isLoading: boolean;
  data: PopularTagType | null;
}
