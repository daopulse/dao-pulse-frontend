import { defaultFractionDigits } from '@/app.options/constant';
import { isNotData } from '@/utils/getDataForCell';

export type ConvertedOptions = {
  number: number | null;
  currency?: string;
  fractionDigits?: number;
  style?: 'decimal' | 'currency' | 'percent';
  hasSign?: boolean,
  toSignificantDigit?: boolean
};

export const getConvertedNumber = (options?: ConvertedOptions): string | undefined => {
  try {
    if (!options) return;

    const { number, currency, fractionDigits, style, hasSign, toSignificantDigit } = options;

    if (typeof number !== 'number') return;

    const maxFraction = (toSignificantDigit && number < 1)
      ? 1-Math.floor(Math.log(number)/Math.log(10))
      : (isNotData(fractionDigits) ? defaultFractionDigits : fractionDigits);

    let converted = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: maxFraction,
      style: style || (currency ? 'currency' : 'decimal'),
      currency: currency || undefined
    }).format((style === 'percent') ? (number / 100) : number);

    //remove zero after comma, (style: 'currency') not remove zero
    converted = converted.replace(
      /(\d+\.\d+)(\w)?/,
      (_all, numb: string, postfix: string) => parseFloat(numb).toString() + (postfix || '')
    );

    return hasSign ? `${(number < 0 ? '' : '+')}${converted}` : converted;
  } catch (e) {
    console.error(e);
    return 'PARSING ERROR';
  }
};
