/**
 * Value object representing a date and time.
 * Ensures that the date is not in the future and is valid.
 * @remarks
 * This class is immutable and provides a method to format the date for display purposes.
 */
export class DateTime {
    private readonly _date: Date;

    /**
     * Creates a new DateTime instance.
     * @remarks
     * If no value is provided, the current date and time is used.
     * If a valid date string is provided, it is parsed and validated.
     * If a valid Date object is provided, it is used directly.
     * If an invalid date is provided, an error is thrown.
     * If the date is in the future, an error is thrown.
     * @param value - A Date object or a date string to initialize the DateTime instance. Optional.
     * @throws {Error} If the provided value is invalid or in the future.
     */
    constructor(value?: Date | string) {
        const now = new Date();
        if (value) {
            const parsedDate = new Date(value);
            if (isNaN(parsedDate.getTime()))
                throw new Error(`Invalid date: ${parsedDate}`);
            if (parsedDate > now)
                throw new Error(`Date cannot be in the future: ${parsedDate}`);
            this._date = parsedDate;
        } else this._date = now;
    }

    /**
     * Gets the underlying Date object.
     * @returns The Date object representing the current date and time.
     */
    public get value(): Date {
        return this._date;
    }

    /**
     * Formats the date and time for display purposes.
     * @param   locale  - The locale to use for formatting the date. Defaults to 'en-US'.
     * @returns A string representing the date and time in the specified locale.
     */
    public format(locale: string = 'en-US'): string {
        return this._date.toLocaleDateString(locale,
            {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
    }

    /**
     * Converts the DateTime object to a string representation.
     * @returns A string representation of the DateTime object in ISO format.
     */
    public toString(): string {
        return this._date.toISOString();
    }
}