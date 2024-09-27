// eslint-disable-next-line
import { TCurrencyVariant, DEFAULT_CURRENCY } from '@/entities/Currency';

export const getFormattedPrice = (
  price: Record<TCurrencyVariant, number> | number,
  currency?: TCurrencyVariant,
) => {
  const formattedPrice =
    typeof price === 'number' || typeof price === 'string'
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
