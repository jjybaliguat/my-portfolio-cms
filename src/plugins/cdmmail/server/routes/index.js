module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/find',
    handler: 'mail.find',
    config: {
      policies: [],
      auth: false
    },
  }
];
