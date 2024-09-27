export type TCurrencyVariant = 'USD' | 'EUR';

export const defaultCurrency: TCurrencyVariant = 'USD';

export type CurrencySchema = {
  currency: TCurrencyVariant;
};
