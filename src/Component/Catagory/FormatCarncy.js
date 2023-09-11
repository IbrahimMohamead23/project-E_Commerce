const CARNCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency:'USD',
    style:'currency'
});

const FormatCurrency = (number) =>{
    return CARNCY_FORMATTER.format(number)
}

export default FormatCurrency