# lsb-release-fs

[![Build status](https://travis-ci.org/martinlevesque/websocket-stats.svg?branch=master)](https://travis-ci.org/martinlevesque/lsb-release-fs)

Parse and get the /etc/lsb-release to JSON in a convenient manner. Useful to get your Linux distribution version (Ubuntu, Debian, etc.).

## Installation

```
npm install lsb-release-fs --save
```

## Examples usage

Retrieve the lsb-release to json:

```javascript
const lsbReleaseFs = require('lsb-release-fs');
const version = lsbReleaseFs();
console.log(version);
```

## License

ISC
