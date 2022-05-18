export type MoneyAvailableCurrency = 'BRL' | 'USD' | 'EUR';

const currencyLanguage = {
    BRL: 'pt-BR',
    USD: 'en-US',
    EUR: 'en-US',
}

export const numberToMoney = (value: number, minimize?: boolean, round: number = 2, availableCurrency?: MoneyAvailableCurrency) => {
    if (!Number.isInteger(value)) return value.toLocaleString();

    const currency = availableCurrency || 'BRL';

    const options: Intl.NumberFormatOptions = {
        currency,
        minimumFractionDigits: round,
        maximumFractionDigits: round,
        notation: minimize ? 'compact' : undefined,
        style: 'currency',
    };

    return Intl.NumberFormat(currencyLanguage[currency], options).format(value);
};