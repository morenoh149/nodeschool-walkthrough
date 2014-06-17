// problem 10 partial application with bind

module.exports = function(namespace) {
  return console.log.bind(undefined, namespace);
};

//solution was easy actually
