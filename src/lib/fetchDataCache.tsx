//ccn-okta/src/lib/fetchDataCache.tsx
import React, { createContext, useCallback, useState } from "react";

type CacheItem = {
  url: string;
  data: any;
};

export type FetchDataStore = {
  cache: CacheItem[];
  addItem: (url: string, data: any) => void;
  getResultsForUrl: (url: string) => undefined | CacheItem;
};

export const FetchDataCacheContext = createContext<FetchDataStore>({
  cache: [],
  addItem: () => {
    throw new Error("First wrap the app with <FetchDataCacheProvider>");
  },
  getResultsForUrl: () => {
    throw new Error("First wrap the app with <FetchDataCacheProvider>");
  },
});

export function FetchDataCacheProvider(props: { children?: React.ReactNode }) {
  const [cache, setCache] = useState<CacheItem[]>([]);

  const addItem = useCallback(
    (url: string, data: any) => {
      // using the functional update pattern
      //  to be extra safe we don't lose data when adding
      //  many items in between the same two renders
      setCache((currentCache) => {
        const i = currentCache.findIndex((item) => item.url === url);
        if (i >= 0) {
          const updatedCache = currentCache.slice();
          updatedCache.splice(i, 1, { url, data });
          return updatedCache;
        } else {
          return [...currentCache, { url, data }];
        }
      });
    },
    [setCache]
  );

  const getResultsForUrl = (url: string) => {
    return cache.find((item) => item.url === url);
  };

  return (
    <FetchDataCacheContext.Provider
      value={{ cache, addItem, getResultsForUrl }}
    >
      {props.children}
    </FetchDataCacheContext.Provider>
  );
}
