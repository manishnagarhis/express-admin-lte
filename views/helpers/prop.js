var hash = {};
module.exports = function() {
    return {
        set: function(key, val) { hash[key] = val },
        get: function(key) { return hash[key] }
    };
};