import accounting from 'accounting';

accounting.settings = {
    currency: {
        symbol: '₽',
        format: '%v %s',
        decimal: ',',
        thousand: ' ',
        precision: 2
    },
    number: {
        precision: 2,
        thousand: ' ',
        decimal: ','
    }
};

export default {
    methods: {
        formatNumber: accounting.formatNumber,
        formatMoney: accounting.formatMoney,
        fluentFormatNumber(number) {
            let precision = (Math.round(number * 100) / 100) === Math.round(number) ? 0 : 2;
            return accounting.formatNumber(number, precision);
        }
    }
};