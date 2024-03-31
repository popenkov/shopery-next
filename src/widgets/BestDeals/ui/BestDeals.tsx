import { AppLink } from '@/shared';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import ArrowIcon from '@public/icons/icon__arrow.svg';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  path: string;
}

export const BestDeals: FC<Props> = ({ path }) => {
  return (
    <div className="section--green">
      <div className="bestDeals">
        <div className=".container">
          <p className=".subtitle">Best Deals</p>
          <h2 className=".title">Our Special Products Deal of the Month</h2>

          <AppLink href={path}>
            <span className="icon-button__text">Shop now</span>
            <ArrowIcon />
          </AppLink>
          <a className="button  button--fill button--large icon-button .button"></a>
        </div>
      </div>
    </div>
  );
};
