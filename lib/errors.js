'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on auroracoinjs-payment-protocol Module: {0}'
};

module.exports = require('auroracoin').errors.extend(spec);
