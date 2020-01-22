import moment from 'moment';

const sixMonthsAgo = moment().subtract(6, 'months');

console.log(sixMonthsAgo.toString());