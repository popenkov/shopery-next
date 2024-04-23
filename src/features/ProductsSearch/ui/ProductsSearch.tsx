'use client';

import {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    useCallback,
    useState,
} from 'react';

import { redirect } from 'next/navigation';

import { getRouteCatalog } from '@/shared/constants/routes';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Buttons';

import cls from './ProductsSearch.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductSearch: FC<Props> = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchButtonClick = useCallback(() => {
        console.log(searchValue);
        redirect(getRouteCatalog());
    }, [searchValue]);

    return (
        <div className={cls.search}>
            <Input
                value={searchValue}
                onChange={setSearchValue}
                type="search"
                placeholder="search"
                className={cls.searchField}
            />
            <Button
                className={cls.searchButton}
                onClick={handleSearchButtonClick}
            >
                Search
            </Button>
        </div>
    );
};
