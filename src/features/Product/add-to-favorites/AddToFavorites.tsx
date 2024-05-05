import { FC } from 'react';

import LikeIcon from '@public/icons/icon__heart-lined.svg';
import { RoundButton } from 'shared/ui/Buttons';

type Props = {
  className?: string;
};

export const AddToFavorites: FC<Props> = ({ className }) => {
  return (
    // <button className="button-round cart-widget__favorite-button">
    //     <svg className="cart-widget__favorite-icon">
    //         <use href="img/svgSprite.svg#icon__heart-lined"></use>
    //     </svg>
    // </button>
    <RoundButton theme="primary" className={className}>
      <LikeIcon />
    </RoundButton>
  );
};
