"use strict";

var LoginWithNebulas = function () {
    LocalContractStorage.defineMapProperty(this, "siteToUserChallenge");
    LocalContractStorage.defineMapProperty(this, "userToChallenge");
};
LoginWithNebulas.prototype = {
    init: function() {
        // nothing
    },
    authenticate: function(challenge, siteId) {
        if (Blockchain.verifyAddress(siteId) == 0) {
          throw new Error("invalid siteId address.");
        }

        var from = Blockchain.transaction.from;

        this.userToChallenge.set(from+":"+siteId,challenge)
    },
    setChallenge: function(challenge, userId) {
        if (Blockchain.verifyAddress(userId) == 0) {
          throw new Error("invalid userId address.");
        }

        var from = Blockchain.transaction.from;

        this.siteToUserChallenge.set(from+":"+userId, challenge)
    },
    validateAuthentication: function(userId) {
        if (Blockchain.verifyAddress(userId) == 0) {
          throw new Error("invalid userId address.");
        }

        var from = Blockchain.transaction.from;
        var siteChallenge = this.siteToUserChallenge.get(from+":"+userId);

        var userChallenge = this.userToChallenge.get(userId+":"+from);

        if (userChallenge == siteChallenge){
          return true;
        } else {
          return false;
        }

    }
};

module.exports = LoginWithNebulas;