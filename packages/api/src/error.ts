import { initErrorHandle as coreInitErrorHandle } from '@fe-free/core';
import { message } from 'antd';

function initErrorHandle() {
  return coreInitErrorHandle((event) => {
    if (event.error && event.error.data && event.error.data.code !== 1) {
      const errorMessage = event.error.data?.msg || '请求出错';
      message.error(errorMessage);
      return;
    }
  });
}

export { initErrorHandle };
