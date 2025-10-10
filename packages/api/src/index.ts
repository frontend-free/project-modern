import { Api as AiServiceApi } from './api/ai-service';
import { injectInterceptors } from './interceptors';

const aiServiceApi = new AiServiceApi({
  baseURL: '/api/ai-service/v1/',
});

injectInterceptors(aiServiceApi.instance);

export * from './code/enums';
export * from './error';
export { aiServiceApi };
