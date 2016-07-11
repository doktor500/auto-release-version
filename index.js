const _ = require("lodash");
const VerbalExpressions = require('verbal-expressions');

const findVersion = (message) => {
  const versionNumberRegex = VerbalExpressions()
    .find(
      VerbalExpressions()
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

exports.handler = (event, context, callback) => {
  const version = findVersion(event.message);
  _.isUndefined(version) ? context.fail("Invalid version") : context.succeed(version);
};

// module.exports = findVersion;
