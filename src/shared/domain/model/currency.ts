type UpperCaseLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export type CurrencyCode = `${UpperCaseLetter}${UpperCaseLetter}${UpperCaseLetter}`;

export class Currency {
    private readonly _code: CurrencyCode;

    constructor(code: CurrencyCode) {
        this._code = code;
    }

    get code(): string {
        return this._code;
    }

    public formatAmount = (amount: number, locale: string = 'en-US'): string => {
        return amount.toLocaleString(locale, {
            style: 'currency',
            currency: this._code,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    public toString = (): string => this._code;
}