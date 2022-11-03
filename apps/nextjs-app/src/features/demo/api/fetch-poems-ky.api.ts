import type { JsonApiResponse } from '@we-make-websites/core-lib/api/json-api';
import { isJsonApiSuccessResponse } from '@we-make-websites/core-lib/api/json-api';
import type { SearchPoems } from '@/backend/features/poem/SearchPoems';
import { ky } from '@/config/ky';

export const fetchPoemsWithKy = async (): Promise<SearchPoems> => {
  return ky
    .get('/api/rest/poem')
    .json<JsonApiResponse<SearchPoems>>()
    .then((resp) => {
      if (!isJsonApiSuccessResponse(resp)) {
        throw new Error(`Error fetching poems: ${resp.errors}`);
      }
      return resp.data;
    });
};
