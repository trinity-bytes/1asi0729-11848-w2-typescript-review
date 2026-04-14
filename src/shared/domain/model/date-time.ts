/**
 * Value object representing a date and time
 * Ensures that the date is not in the future and is valid
 * @remarks
 * This class is immutable and provides a method to format the date as a string
 */
export class DateTime {
    private readonly _date: Date;

    /**
     * Creates a new DateTime instance
     * @remarks
     * Of no value is provided, the current date and time is used
     * If
     * @param value
     */
    constructor(value?: Date | String) {
        const now = new Date();

        if (value) {
            const parseDate = new Date(value);

            if (isNaN(parseDate.getTime()))
                throw new Error("Invalid date: &{parseDate}");
            if (parseDate > now)
                throw new Error("Date cannot be in the future: &{parseDate}");
        } else this._date = now;
    }

    /**
     * Gets de underlying date object
     * @return Thw
     */
    public get value():Date { return this._date; }

    public format(locale:string = 'en-US'): string {
        return this._date.toLocaleString(locale, {
            year: 'numeric',
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }
}