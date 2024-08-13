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

  const removeQueryParam = (paramName: string) => {
    const currentParams = new URLSearchParams(searchParams?.toString());
    currentParams.delete(paramName);
    router.push(pathname || '', { scroll: false });
  };

  return { getSearchParam, checkParams, setQueryParams, removeQueryParam };
};
