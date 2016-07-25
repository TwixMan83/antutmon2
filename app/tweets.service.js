System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return ["Tweet1 ", {
                            author: "blubb",
                            twitterhandle: "blah",
                            tweet: "testtext",
                        },
                        "Tweet2",
                        "Tweet3"
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map