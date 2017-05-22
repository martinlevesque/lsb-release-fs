'use strict'

const fs = require("fs");

module.exports = function () {
  const result = {};

  try {
    const relContent = fs.readFileSync("/etc/lsb-release").toString();

    if ( ! relContent) {
      return undefined;
    }

    const lines = relContent.split(/\r?\n/);

    for (let l of lines) {
      let row = l.split("=");

      if (row.length == 2) {
        result[row[0]] = row[1];
      }
    }
  }
  catch (error) {
    //console.log(error);
    return {};
  }

  return result;
}
