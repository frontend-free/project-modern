import { localStorageKey } from '@/config';
import { aiServiceApi } from '@lib/api';
import { create } from 'zustand';

interface GlobalState {
  init: boolean;
  user?: any;
  doInit: () => Promise<void>;
  fetchLogin: (params: any) => Promise<void>;
  fetchLogout: () => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  init: false,
  user: undefined,

  doInit: async () => {
    const res = await aiServiceApi.auth.info();
    set({ user: res.data.data, init: true });
  },

  fetchLogin: async (params: any) => {
    const res = await aiServiceApi.auth.login(params);
    const data = res.data.data as any;

    set({ user: data });

    // @ts-ignore 后端类型没做好
    if (data.authorization) {
      // @ts-ignore 后端类型没做好
      localStorage.setItem(localStorageKey.token, data.authorization);
    }
  },
  fetchLogout: () => {
    localStorage.removeItem(localStorageKey.token);
    set({ user: undefined });
  },
}));

export { useGlobalStore };
