// format currency a whole dollar amount, whole dollar with cents, only cents
// i.e. ($19, $9.95, 6¢)
export default function formatCurrency(curr) {
    let amount;
    let cents;
    let dollar;
    let currency = curr;
    // if not a number
    if (typeof currency !== 'number') {
        return currency;
    }
    // only support positive numbers
    if (currency < 0) {
        return currency;
    }
    // makes sure currency only has 2 decimal places to avoid weird float issues
    currency = parseFloat(currency.toFixed(2));
    // multiply by 100
    cents = currency * 100;
    // if more than $1 convert to dollars
    if (cents >= 100) {
        // make it a string
        dollar = `${currency}`;
        // split at the period to add trailing zero if needed
        dollar = dollar.split('.');
        // if there are cents
        if (dollar.length === 2) {
            // if there is only one character
            if (dollar[1].length === 1) {
                // add a zero
                dollar[1] = `${dollar[1]}0`;
            }
        }
        // join the two parts back together
        amount = dollar.join('.');
        // return dollar and cents amount
        return `$${amount}`;
    // if no cents
    } else if (cents === 0) {
        // return full dollar amount
        return `$${cents}`;
    }
    // convert to string
    cents = `${cents}`;
    // if there is a period in the cents number (for floating point issue)
    if (cents.indexOf('.') > -1) {
        // split at period
        cents.split('.');
        // return only first part, cutting off floating point problem
        return `${cents[0]}¢`;
    }
    // otherwise return as normal
    return `${cents}¢`;
}
