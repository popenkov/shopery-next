import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useChangeSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams || '');
    params.set(name, value);

    return params.toString();
  };

  const setQueryParams = (queryName: string, value: string) => {
    router.push(`${pathname}?${createQueryString(queryName, value)}`, { scroll: false });
  };

  const getSearchParam = (paramName: string) => {
    return searchParams?.get(paramName);
  };

  const checkParams = (paramName: string) => {
    return Boolean(searchParams?.has(paramName));
  };

  // todo проверить метод

  // const removeQueryParam = (paramName: string) => {
  //   const currentParams = new URLSearchParams(searchParams?.toString());
  //   currentParams.delete(paramName);
  //   router.push(pathname || '', { scroll: false });
  // };

  const removeQueryParam = (key: string) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString());
    newSearchParams.delete(key);
    const newUrl = `${pathname}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ''}`;
    router.push(newUrl, { scroll: false });
  };

  return { getSearchParam, checkParams, setQueryParams, removeQueryParam };
};
