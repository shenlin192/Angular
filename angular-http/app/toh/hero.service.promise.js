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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var HeroServicePromise = (function () {
    function HeroServicePromise(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes';
    }
    HeroServicePromise.prototype.getHeroes = function () {
        // get(url: string, options?: RequestOptionsArgs): Observable<Response>;
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HeroServicePromise.prototype.addHero = function (name) {
        var headers = new http_2.Headers({ 'Context-type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        //post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
        return this.http.post(this.heroesUrl, { name: name }, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HeroServicePromise.prototype.extractData = function (res) {
        var body = res.json();
        console.log('hi1');
        //type of body.data is Observable<Hero[]>
        return body.data || {};
    };
    HeroServicePromise.prototype.handleError = function (error) {
        console.log('hi2');
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    HeroServicePromise = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroServicePromise);
    return HeroServicePromise;
}());
exports.HeroServicePromise = HeroServicePromise;
//# sourceMappingURL=hero.service.promise.js.map