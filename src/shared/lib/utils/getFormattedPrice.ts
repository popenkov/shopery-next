import { TCurrencyVariant } from '@/entities/Currency';
import { DEFAULT_CURRENCY } from '@/features/CurrencySwitcher/ui/constants';

export const getFormattedPrice = (
  price: Record<TCurrencyVariant, number> | number,
  currency?: TCurrencyVariant,
) => {
  const formattedPrice =
    typeof price === 'number'
      ? (price as number).toLocaleString('en-US', {
          style: 'currency',
          currency: currency,
        })
      : (price as Record<TCurrencyVariant, number>)[currency || DEFAULT_CURRENCY].toLocaleString(
          'en-US',
          {
            style: 'currency',
            currency: currency,
          },
        );
  return formattedPrice;
};
