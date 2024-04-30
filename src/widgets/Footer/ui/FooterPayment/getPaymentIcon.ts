import icon__applepay from '@public/icons/icon__applepay.svg';
import icon__discover from '@public/icons/icon__discover.svg';
import icon__mastercard from '@public/icons/icon__mastercard.svg';
import icon__secure from '@public/icons/icon__secure.svg';
import icon__visa from '@public/icons/icon__visa.svg';

const icons = {
    icon__applepay: icon__applepay,
    icon__visa: icon__visa,
    icon__discover: icon__discover,
    icon__mastercard: icon__mastercard,
    icon__secure: icon__secure,
};

export const getPaymentIcon = (iconName: keyof typeof icons) => {
    return icons[iconName];
};
