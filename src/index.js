const _ = require("lodash");
const VerbalExpressions = require('verbal-expressions');

const findVersion = (message) => {
  const versionNumberRegex = VerbalExpressions()
    .find(
      VerbalExpressions()
      .then('v')
      .range('0', '9')
      .oneOrMore()
      .then('.')
      .range('0', '9')
      .oneOrMore()
      .then('.')
      .range('0', '9')
      .oneOrMore()
    );

  return _.first(versionNumberRegex.exec(message));
};

const sanitize = (version) => _.replace(version, 'v', '');
const getVersion = (message) => sanitize(findVersion(message));

module.exports = getVersion;
