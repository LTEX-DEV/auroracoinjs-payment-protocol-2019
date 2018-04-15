'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on digibytejs-payment-protocol Module: {0}'
};

module.exports = require('digibyte').errors.extend(spec);
