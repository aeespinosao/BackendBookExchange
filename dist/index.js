var server_1 = require('./server/server');
var router_1 = require('./router/router');
var server = server_1.default.init(4200);
server.app.use(router_1.default);
server.start(function () { return console.log("Server Listen port 4200"); });
//# sourceMappingURL=index.js.map