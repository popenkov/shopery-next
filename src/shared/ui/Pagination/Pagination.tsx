import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import ChevronIcon from '@public/icons/icon__chevron-down.svg';
import { DOTS, usePagination } from 'shared/lib/hooks/usePagination/usePagination';

import cls from './Pagination.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onPageChange: any;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  className: string;
  siblingCount?: number;
}

export const Pagination: FC<Props> = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const handlePaginationClick = (page: any) => {
    onPageChange(page);
  };

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  return (
    <div className={cn(cls.pagination, className)}>
      <button className={cn(cls.page, cls.pagePrev)} disabled>
        <ChevronIcon className={cls.icon} />
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
      <button className={cn(cls.page, cls.pageNext)}>
        <ChevronIcon className={cls.icon} />
      </button>
    </div>
  );
};
