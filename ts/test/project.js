"use strict";
var Project = (function () {
    function Project(t) {
        this.title = t;
    }
    Project.prototype.length = function () {
        return this.title.length;
    };
    return Project;
}());
exports.__esModule = true;
exports["default"] = Project;
