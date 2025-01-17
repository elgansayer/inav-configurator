'use strict';

var CONFIGURATOR = {
     // all versions are specified and compared using semantic versioning http://semver.org/
    'minfirmwareVersionAccepted': '3.0.0',
    'maxFirmwareVersionAccepted': '5.0.0', // Condition is < (lt) so we accept all in 3.1 branch
    'connectionValid': false,
    'connectionValidCliOnly': false,
    'cliActive': false,
    'cliValid': false
};
