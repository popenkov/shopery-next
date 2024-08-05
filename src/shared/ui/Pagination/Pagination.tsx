import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { DOTS, usePagination } from '@/shared/lib/hooks';
import { ChevronDownIcon } from '@/shared/ui/icons';

import cls from './Pagination.module.scss';

interface Props<T> extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  allItems: T[];
  onPageChange: any;
  pageSize: number;
  className: string;
  siblingCount?: number;
}

export const Pagination = <T extends unknown>(props: Props<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { allItems, onPageChange, siblingCount = 1, pageSize, className } = props;
  const totalElements = allItems.length;
  const totalPages = allItems.length / pageSize;

  const paginationRange = usePagination({
    totalElements,
    pageSize,
    currentPage,

    siblingCount,
  });

  const handlePaginationClick = (page: any) => {
    const allItemsCopy = JSON.parse(JSON.stringify(allItems));
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentPageItems = allItemsCopy.slice(startIndex, endIndex);
    setCurrentPage(page);
    onPageChange(currentPageItems);
  };

  const handlePrevButtonClick = () => {
    if (currentPage > 1) {
      handlePaginationClick(currentPage - 1);
    }
  };
  const handleNextButtonClick = () => {
    handlePaginationClick(currentPage + 1);
  };

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  return (
    <div className={cn(cls.pagination, className)}>
      <button
        className={cn(cls.page, cls.pagePrev)}
        disabled={currentPage === 1}
        onClick={handlePrevButtonClick}
      >
        <ChevronDownIcon className={cls.icon} />
      </button>
      <ul className={cls.pages}>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className={cls.page} key={`pagination/${pageNumber}/${index}`}>
                <button className={cls.pageButton} disabled>
                  &#8230;
                </button>
              </li>
            );
          }

          return (
            <li
              className={cn(cls.page, {
                [cls.active]: pageNumber === currentPage,
              })}
              onClick={() => handlePaginationClick(pageNumber)}
              key={`pagination/${pageNumber}/${index}`}
            >
              <button className={cls.pageButton}>{pageNumber}</button>
            </li>
          );
        })}
      </ul>
      <button
        className={cn(cls.page, cls.pageNext)}
        disabled={currentPage === totalPages}
        onClick={handleNextButtonClick}
      >
        <ChevronDownIcon className={cls.icon} />
      </button>
    </div>
  );
};
