import { useEffect } from 'react';
import { siteConfig } from '../config/site';

/** Sets the browser tab title: useDocumentTitle('About') shows "About · Abstract app". */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? title + ' · ' + siteConfig.name : siteConfig.name;
  }, [title]);
}
