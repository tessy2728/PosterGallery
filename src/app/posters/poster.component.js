"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var poster_service_1 = require("./poster.service");
require("rxjs/add/operator/map");
var PosterListComponent = (function () {
    function PosterListComponent(posterService) {
        this.posterService = posterService;
    }
    PosterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posterService.getPosterList()
            .subscribe(function (posterList) { return _this.posterList = posterList.page.content_items.content; });
    };
    return PosterListComponent;
}());
PosterListComponent = __decorate([
    core_1.Component({
        selector: 'poster-list',
        templateUrl: 'app/posters/poster.component.html',
        providers: [poster_service_1.PosterService]
    }),
    __metadata("design:paramtypes", [poster_service_1.PosterService])
], PosterListComponent);
exports.PosterListComponent = PosterListComponent;
//# sourceMappingURL=poster.component.js.map