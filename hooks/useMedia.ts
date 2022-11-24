/*
 * @FilePath: /iucky.cn/hooks/useMedia.ts
 * @author: Wibus
 * @Date: 2022-11-24 21:54:14
 * @LastEditors: Wibus
 * @LastEditTime: 2022-11-24 21:54:14
 * Coding With IU
 */
import {useState, useEffect} from 'react';

export const useMedia = (media: string) => {
    const mediaQuery = matchMedia(media);
    const [value, setValue] = useState(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => {
        setValue(event.matches);
    };
    useEffect(() => {
        mediaQuery.addEventListener('change', handler);
        return () => {
            mediaQuery.removeEventListener('change', handler);
        };
    }, [value]);
    return value;
};

export const useMobile = () => useMedia('(max-width: 768px)');

export const useDark = () => useMedia('(prefers-color-scheme: dark)');
