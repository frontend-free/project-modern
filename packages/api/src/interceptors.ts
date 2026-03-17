import { downloadInterceptor, RequestError } from '@fe-free/core';
import type { AxiosInstance } from 'axios';

// @ts-ignore
import { globalConfig } from '@/config';

function getAuthorization() {
  return localStorage.getItem('AUTHORIZATION');
}

export function injectInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config) {
      const authorization = getAuthorization();

      if (authorization) {
        config.headers.Authorization = `${authorization}`;
      } else {
        config.headers.Authorization = ``;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  downloadInterceptor(instance);

  instance.interceptors.response.use(
    async function (response) {
      const { config, data, request, status } = response;

      if (config.url?.includes('/stream/')) {
        return response;
      }

      if (response.headers['content-disposition']) {
        return response;
      }

      // 正常
      if (data.state === 1) {
        return response;
      }

      // 未登录
      if (data.state === 44000) {
        window.location.href = `${globalConfig.root === '/' ? '' : globalConfig.root}/login`;
      }

      throw new RequestError(response.data.msg || '服务器异常', {
        config,
        status,
        request,
        response,
      });
    },
    function (error) {
      const { config, status, request, response, message } = error;

      throw new RequestError(message || '服务器异常', {
        config,
        status,
        request,
        response,
      });
    },
  );
}
