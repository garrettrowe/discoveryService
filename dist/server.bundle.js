require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/src/api/index.ts":
/*!*********************************!*\
  !*** ./server/src/api/index.ts ***!
  \*********************************/
/*! exports provided: ApiRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRouter", function() { return ApiRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers */ "./server/src/controllers/index.ts");
/* harmony import */ var _controllers_discovery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/discovery */ "./server/src/controllers/discovery.ts");
/* harmony import */ var _controllers_dbpedia_crawler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/dbpedia_crawler */ "./server/src/controllers/dbpedia_crawler.ts");




var ApiRouter = function () {
    var router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
    // app setup api
    router.post('/message', _controllers__WEBPACK_IMPORTED_MODULE_1__["onPostMessage"]);
    // exposed methods for WDS
    router.post('/wdsInfo', _controllers_discovery__WEBPACK_IMPORTED_MODULE_2__["wdsInfo"]);
    router.post('/wdsQuery', _controllers_discovery__WEBPACK_IMPORTED_MODULE_2__["wdsQuery"]);
    router.post('/wdsAC', _controllers_discovery__WEBPACK_IMPORTED_MODULE_2__["wdsAC"]);
    router.post('/wdsFeedback', _controllers_discovery__WEBPACK_IMPORTED_MODULE_2__["wdsFeedback"]);
    router.post('/concept', _controllers_dbpedia_crawler__WEBPACK_IMPORTED_MODULE_3__["crawlDbpedia"]);
    return router;
};


/***/ }),

/***/ "./server/src/config/index.ts":
/*!************************************!*\
  !*** ./server/src/config/index.ts ***!
  \************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
if (true) {
    //only load the .env file if we're not in prod
    __webpack_require__(/*! dotenv */ "dotenv").config();
}
var Config = {
    port: process.env.PORT || 3000,
    app: process.env.CF_APP_NAME || 'app',
    appLabel: process.env.CF_APP_LABEL || '',
    hostname: process.env.CF_HOSTNAME || 'http://localhost:7000',
    environment: process.env.CF_ENVIRONMENT || 'local',
    STATIC_FILE_PATH: process.env.STATIC_FILE_PATH || '/home/vcap/app/dist/',
    REACT_APP_URL_PATH: process.env.REACT_APP_URL_PATH || '',
    appGateway: process.env.GATEWAY_SERVER_URL,
    configCookieName: process.env.CONFIG_COOKIE_NAME || 'dte-watson-discovery-expert-assist',
    assetDetails: {
        ibmDemosUrl: process.env.IBM_DEMOS_ASSET_URL,
        ibmEmbeddedUrl: process.env.IBM_EMBEDDED_ASSET_URL
    },
    commonLogin: {
        authServerUrl: process.env.GATEWAY_SERVER_URL || 'http://localhost:7700',
        bypassIbmDemosAuth: process.env.BYPASS_IBM_DEMOS_AUTH || 'true',
        secret: process.env.AUTH_SECRET_KEY
    },
    discovery: {
        DISCOVERY_API_KEY: process.env.DISCOVERY_API_KEY,
        DISCOVERY_ENV: process.env.DISCOVERY_ENV,
        DISCOVERY_ENG_COLLECTION: process.env.DISCOVERY_ENG_COLLECTION,
        DISCOVERY_AUTO_COLLECTION: process.env.DISCOVERY_AUTO_COLLECTION,
        DISCOVERY_CUSTOM_API_KEY: process.env.DISCOVERY_CUSTOM_API_KEY,
        DISCOVERY_CUSTOM_ENV: process.env.DISCOVERY_CUSTOM_ENV,
        DISCOVERY_CUSTOM_COLLECTION: process.env.DISCOVERY_CUSTOM_COLLECTION
    },
    //should get this from the client.  should be removed...
    cos: {
        COS_ENDPOINT: process.env.COS_ENDPOINT,
        COS_API_KEY: process.env.COS_API_KEY,
        COS_IBM_AUTH_ENDPOINT: process.env.COS_IBM_AUTH_ENDPOINT,
        COS_SERVICE_INSTANCE_ID: process.env.COS_SERVICE_INSTANCE_ID,
        COS_BUCKET: process.env.COS_BUCKET
    }
};


/***/ }),

/***/ "./server/src/controllers/dbpedia_crawler.ts":
/*!***************************************************!*\
  !*** ./server/src/controllers/dbpedia_crawler.ts ***!
  \***************************************************/
/*! exports provided: crawlDbpedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crawlDbpedia", function() { return crawlDbpedia; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var os = __webpack_require__(/*! os */ "os");
var cheerio = __webpack_require__(/*! cheerio */ "cheerio");
var requestPromise = __webpack_require__(/*! request-promise-native */ "request-promise-native");
var Crawler = __webpack_require__(/*! crawler */ "crawler");
var crawlDbpedia = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var concept_req, dbpediaResponse, $, abstract, image;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body.concept);
                concept_req = req.body.concept;
                dbpediaResponse = {};
                return [4 /*yield*/, requestPromise(req.body.concept.dbpedia, {
                        transform: function (body) { return cheerio.load(body); },
                    })];
            case 1:
                $ = _a.sent();
                abstract = $('.lead').text();
                image = $('a[rel="dbo:thumbnail"]').attr('href');
                console.log(image);
                dbpediaResponse.dbpedia_abstract = abstract;
                dbpediaResponse.dbpedia_image = image;
                // dbpediaResponse.dbpedia_abstract = response
                res.send({
                    status: 'success',
                    message: 'ok',
                    dbpediaObject: dbpediaResponse
                });
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./server/src/controllers/discovery.ts":
/*!*********************************************!*\
  !*** ./server/src/controllers/discovery.ts ***!
  \*********************************************/
/*! exports provided: wdsInfo, wdsFeedback, wdsQuery, wdsAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wdsInfo", function() { return wdsInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wdsFeedback", function() { return wdsFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wdsQuery", function() { return wdsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wdsAC", function() { return wdsAC; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./server/src/config/index.ts");

var _a = _config__WEBPACK_IMPORTED_MODULE_0__["Config"].discovery, DISCOVERY_API_KEY = _a.DISCOVERY_API_KEY, DISCOVERY_ENV = _a.DISCOVERY_ENV, DISCOVERY_ENG_COLLECTION = _a.DISCOVERY_ENG_COLLECTION, DISCOVERY_AUTO_COLLECTION = _a.DISCOVERY_AUTO_COLLECTION, DISCOVERY_CUSTOM_API_KEY = _a.DISCOVERY_CUSTOM_API_KEY, DISCOVERY_CUSTOM_COLLECTION = _a.DISCOVERY_CUSTOM_COLLECTION, DISCOVERY_CUSTOM_ENV = _a.DISCOVERY_CUSTOM_ENV;
var DiscoveryV1 = __webpack_require__(/*! watson-developer-cloud/discovery/v1 */ "watson-developer-cloud/discovery/v1");
var discoveryDefault = new DiscoveryV1({
    version: '2019-04-02',
    iam_apikey: DISCOVERY_API_KEY,
    url: 'https://gateway.watsonplatform.net/discovery/api'
});
// exposing WDS collection info, likely use for default collection stats before query
var wdsInfo = function (req, res) {
    discoveryDefault.listCollections({ environment_id: DISCOVERY_ENV }, function (error, data) {
        console.log(JSON.stringify(data, null, 2));
        res.send({
            status: 'success',
            message: 'ok',
            output: data
        });
    });
};
var wdsFeedback = function (req, res) {
    console.log("Received training feedback");
    console.log(req.body.segment_title + " submitted as " + req.body.feedback);
    console.log("for the query: " + req.body.query);
    res.send({
        status: 'success',
        message: 'ok',
    });
};
// exposing WDS query
var wdsQuery = function (req, res) {
    var query = req.body.nlq.query;
    var collection = DISCOVERY_ENG_COLLECTION;
    var environment = DISCOVERY_ENV;
    var apiKey = DISCOVERY_API_KEY;
    var queryParams = {
        environment_id: environment,
        collection_id: collection,
        filter: req.body.filter ? req.body.filter : null,
        natural_language_query: req.body.nlq,
        passages: true,
        passages_characters: 150,
        passages_count: 35,
        deduplicate: true,
        deduplicate_field: "text",
        highlight: true,
        aggregation: "[\n      nested(enriched_text.concepts).filter(enriched_text.concepts.relevance>0.92).term(enriched_text.concepts.text,count:5).top_hits(1),\n      nested(enriched_text.keywords).filter(enriched_text.keywords.relevance>0.8).term(enriched_text.keywords.text,count:10),\n      term(extracted_metadata.filename,count:10).top_hits(1)\n    ]"
    };
    discoveryDefault.query(queryParams, function (error, data) {
        if (error) {
            console.log('error', error);
            res.send({
                status: 'NONONO',
                message: 'BAD',
                output: error,
                collection_id: collection
            });
        }
        else {
            var answerItems = [];
            var filterItems = [];
            var queryAggregation = {};
            var labelList = [];
            var passagesRetrieved = false;
            if (data.passages) {
                if (data.passages.length > 0) {
                    passagesRetrieved = true;
                }
            }
            data.results = data.results.sort(rankDocs);
            for (var item in data.results) {
                if (item) {
                    var newItem = {};
                    if (passagesRetrieved) {
                        var passageOutput = passageReconciler(data.results[item], data.passages);
                        newItem.text = passageOutput.text;
                        newItem.leading_text = passageOutput.leading_text;
                        newItem.trailing_text = passageOutput.trailing_text;
                        newItem.location = passageOutput.location;
                    }
                    else {
                        textSlicer(data.results[item].text);
                    }
                    newItem.title = data.results[item].title;
                    newItem.confidence = data.results[item].result_metadata.confidence;
                    newItem.file_title = data.results[item].source_link;
                    newItem.file_name = data.results[item].extracted_metadata.filename;
                    newItem.file_type = data.results[item].extracted_metadata.filename.match(/\.[0-9a-z]+$/i)[0];
                    newItem.file_segment_count = data.results[item].segment_metadata ? data.results[item].segment_metadata.total_segments : null;
                    if (data.results[item].metadata) {
                        if (data.results[item].metadata.page_number) {
                            newItem.page_num = data.results[item].metadata.page_number;
                        }
                        else {
                            if (data.results[item].page_number) {
                                newItem.page_num = removeAbnormalities(data.results[item].page_number);
                            }
                        }
                        if (data.results[item].metadata.author) {
                            newItem.file_author = data.results[item].metadata.author;
                        }
                        if (data.results[item].metadata.publish_date) {
                            newItem.pub_date = data.results[item].metadata.publish_date;
                        }
                    }
                    if (data.results[item].page_number && !newItem.page_num) {
                        newItem.page_num = data.results[item].page_number;
                    }
                    newItem.raw = data.results[item];
                    answerItems.push(newItem);
                    if (data.results[item].enriched_text !== undefined) {
                        var filterItem = {};
                        if (data.results[item].enriched_text.categories[0] !== undefined) {
                            var label = data.results[item].enriched_text.categories[0].label.split("/")[1];
                            if (labelList.indexOf(label) == -1) {
                                filterItem.id = labelList.length + 1;
                                filterItem.text = label;
                                filterItems.push(filterItem);
                                labelList.push(label);
                            }
                        }
                    }
                }
            }
            queryAggregation.original_query = query;
            var conceptAggregations = [];
            var rawConceptAggregations = [];
            if (data.aggregations.length > 0) {
                if (data.aggregations[0].aggregations.length > 0) {
                    if (data.aggregations[0].aggregations[0].aggregations.length > 0) {
                        rawConceptAggregations = data.aggregations[0].aggregations[0].aggregations[0].results;
                    }
                }
            }
            var file_names = [];
            try {
                for (var item in rawConceptAggregations) {
                    if (rawConceptAggregations[item].matching_results > 3) {
                        var conceptItem = {};
                        var key = rawConceptAggregations[item].key;
                        console.log(rawConceptAggregations[item]);
                        var topHitConcept = rawConceptAggregations[item].aggregations[0].hits.hits[0];
                        conceptItem.text = topHitConcept.text;
                        conceptItem.dbpedia = topHitConcept.dbpedia_resource;
                        conceptItem.relevance = topHitConcept.relevance;
                        conceptAggregations.push(conceptItem);
                    }
                }
                queryAggregation.concepts = conceptAggregations.sort(rankConcepts);
                if (data.aggregations[1].aggregations[0].aggregations != null) {
                    queryAggregation.mentions = data.aggregations[1].aggregations[0].aggregations[0].results;
                }
                if (data.aggregations[1].aggregations[0].aggregations != null) {
                    for (var i in data.aggregations[1].aggregations[0].aggregations[0].results) {
                        var newDocItem = {};
                        newDocItem.name = data.aggregations[1].aggregations[0].aggregations[0].results[i].key;
                        newDocItem.matching_results = data.aggregations[1].aggregations[0].aggregations[0].results[i].matching_results;
                        file_names.push(newDocItem);
                    }
                }
            }
            catch (fail) { }
            queryAggregation.file_names = file_names;
            queryAggregation.original_query = req.body.nlq;
            res.send({
                status: 'success',
                message: 'ok',
                answerItems: answerItems,
                filterItems: filterItems,
                queryAggregation: queryAggregation,
                document: req.body.document ? req.body.document : null,
                raw_output: data
            });
        }
    });
};
var wdsAC = function (req, res) {
    var query = req.body.nlq.query;
    var collection = DISCOVERY_ENG_COLLECTION;
    var environment = DISCOVERY_ENV;
    var apiKey = DISCOVERY_API_KEY;
    var outitems = [];
    var queryParams = {
        environment_id: environment,
        collection_id: collection,
        natural_language_query: req.body.nlq,
        passages: true,
        deduplicate: true,
        deduplicate_field: "passage_text",
        count: 0,
        passages_characters: 50,
        passages_count: 5
    };
    discoveryDefault.query(queryParams, function (error, data) {
        console.log(data);
        if (error) {
            console.log('error', error);
            res.send({
                status: 'NONONO',
                message: 'BAD',
                output: error,
                collection_id: collection
            });
        }
        else {
            console.log(queryParams.natural_language_query);
            var answerItems = [];
            for (var item in data.passages) {
                if (item) {
                    var oi = data.passages[item].passage_text.trim().replace(/^\./, "").trim().replace(/$\./, "").trim();
                    if (!outitems.includes(hashCode(oi))) {
                        var newItem = {};
                        outitems.push(hashCode(oi));
                        newItem.text = oi;
                        newItem.title = queryParams.natural_language_query;
                        answerItems.push(newItem);
                    }
                }
            }
            console.log("ai: " + JSON.stringify(answerItems));
            res.send({
                status: 'success',
                message: 'ok',
                answerItems: answerItems
            });
        }
    });
};
function rankConcepts(a, b) {
    if (a.relevance > b.relevance) {
        return -1;
    }
    else {
        return 1;
    }
}
function rankDocs(a, b) {
    if (a.result_metadata.confidence > b.result_metadata.confidence) {
        return -1;
    }
    else {
        return 1;
    }
}
//Change character from 102$_{ }$ to 102 or 47$_{ }P to 47.
function removeAbnormalities(num) {
    return num[0].replace(/[`~!@#$%^&*()_|+\-=?;: a-zA-Z'",.<>\{\}\[\]\\\/]/gi, '');
}
function passageReconciler(wds_doc, wds_passages) {
    var targetDoc = wds_doc.id;
    var resultObject = {
        text: "",
        leading_text: "",
        trailing_text: "",
        location: [0, 0]
    };
    for (var i in wds_passages) {
        if (wds_passages[i].document_id === targetDoc) {
            resultObject.text = wds_passages[i].passage_text;
            resultObject.location[0] = wds_passages[i].start_offset;
            resultObject.location[1] = wds_passages[i].end_offset;
            if (wds_passages[i].start_offset === 0) {
                resultObject.leading_text = '"';
                resultObject.text = resultObject.text;
                if (wds_doc.text.length > wds_passages[i].end_offset + 160) {
                    resultObject.trailing_text = wds_doc.text.slice(wds_passages[i].end_offset, wds_passages[i].end_offset + 160) + ' ..."';
                }
                else {
                    resultObject.trailing_text = wds_doc.text.slice(wds_passages[i].end_offset, wds_doc.text.length) + '"';
                }
            }
            else if (wds_passages[i].end_offset === wds_doc.text.length) {
                resultObject.text = resultObject.text;
                resultObject.trailing_text = '"';
                if (wds_passages[i].start_offset - 160 > 0) {
                    resultObject.leading_text = '"...' + wds_doc.text.slice(wds_passages[i].start_offset - 160, wds_passages[i].start_offset);
                }
                else {
                    resultObject.leading_text = '"' + wds_doc.text.slice(0, wds_passages[i].start_offset);
                }
            }
            else {
                resultObject.leading_text = '"... ' + wds_doc.text.slice(wds_passages[i].start_offset - 105, wds_passages[i].start_offset);
                resultObject.text = resultObject.text;
                resultObject.trailing_text = wds_doc.text.slice(wds_passages[i].end_offset, wds_passages[i].end_offset + 105) + ' ..."';
            }
            break;
        }
        if (Number(i) === (wds_passages.length - 1)) {
            // last one, just slice the text
            resultObject = textSlicer(wds_doc.text);
        }
    }
    return resultObject;
}
function hashCode(str) {
    var hash = 0, i, chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}
function textSlicer(text) {
    var resultObject = {
        text: "",
        location: [0, 0],
        leading_text: "",
        trailing_text: ""
    };
    resultObject.leading_text = '"' + text.slice(0, 290);
    resultObject.text = "";
    resultObject.trailing_text = '..."';
    resultObject.location[0] = 0;
    resultObject.location[1] = 250;
    return resultObject;
}


/***/ }),

/***/ "./server/src/controllers/index.ts":
/*!*****************************************!*\
  !*** ./server/src/controllers/index.ts ***!
  \*****************************************/
/*! exports provided: onPostMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPostMessage", function() { return onPostMessage; });
// test call, exposed during dev for quick test that server is a-ok
var onPostMessage = function (req, res) {
    res.send({
        status: 'success',
        message: 'ok'
    });
};


/***/ }),

/***/ "./server/src/server.ts":
/*!******************************!*\
  !*** ./server/src/server.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./server/src/api/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./server/src/config/index.ts");





var port = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].port, STATIC_FILE_PATH = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].STATIC_FILE_PATH, REACT_APP_URL_PATH = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].REACT_APP_URL_PATH;
var path = __webpack_require__(/*! path */ "path");
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
//server config 
app.use(compression__WEBPACK_IMPORTED_MODULE_1___default()({ level: 9 }));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({ extended: true }));
app.use(REACT_APP_URL_PATH + "/api", Object(_api__WEBPACK_IMPORTED_MODULE_3__["ApiRouter"])()); //<JPH> other projectshave SecuredApiRouter here..
if (false) {}
app.listen(port, function () {
    console.log("front-end server listening on port:" + port);
});


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "crawler":
/*!**************************!*\
  !*** external "crawler" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crawler");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "request-promise-native":
/*!*****************************************!*\
  !*** external "request-promise-native" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request-promise-native");

/***/ }),

/***/ "watson-developer-cloud/discovery/v1":
/*!******************************************************!*\
  !*** external "watson-developer-cloud/discovery/v1" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("watson-developer-cloud/discovery/v1");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYnBlZGlhX2NyYXdsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kaXNjb3ZlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoZWVyaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyYXdsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1ZXN0LXByb21pc2UtbmF0aXZlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2F0c29uLWRldmVsb3Blci1jbG91ZC9kaXNjb3ZlcnkvdjFcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFPLEVBQUU7QUFFckIsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0RBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0RBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLGtEQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBSSxrQkFBa0IsU0FBTSxFQUFFLHNEQUFTLEVBQUUsQ0FBQyxFQUFFLGtEQUFrRDtBQUVyRyxJQUFHLEtBQXFDLEVBQUMsRUFTeEM7QUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXNDLElBQU0sQ0FBQztBQUMzRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2pDRix3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnRSIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvc3JjL3NlcnZlci50c1wiKTtcbiIsIlxuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgeyBvblBvc3RNZXNzYWdlIH0gZnJvbSAnLi4vY29udHJvbGxlcnMnXG5cbmltcG9ydCB7IFNlY3VyZWRSb3V0ZXIsIFVuc2VjdXJlZFJvdXRlciB9IGZyb20gJy4vcm91dGVycydcblxuaW1wb3J0IHsgd2RzSW5mbywgd2RzUXVlcnksIHdkc0FDLCB3ZHNGZWVkYmFjayB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2Rpc2NvdmVyeSdcbmltcG9ydCB7IGNyYXdsRGJwZWRpYSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2RicGVkaWFfY3Jhd2xlcidcblxuZXhwb3J0IGNvbnN0IEFwaVJvdXRlciA9ICgpOiBSb3V0ZXIgPT4ge1xuICBjb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxuICAvLyBhcHAgc2V0dXAgYXBpXG4gIHJvdXRlci5wb3N0KCcvbWVzc2FnZScsIG9uUG9zdE1lc3NhZ2UpXG5cbiAgLy8gZXhwb3NlZCBtZXRob2RzIGZvciBXRFNcbiAgcm91dGVyLnBvc3QoJy93ZHNJbmZvJywgd2RzSW5mbylcbiAgcm91dGVyLnBvc3QoJy93ZHNRdWVyeScsIHdkc1F1ZXJ5KVxuICByb3V0ZXIucG9zdCgnL3dkc0FDJywgd2RzQUMpXG4gIHJvdXRlci5wb3N0KCcvd2RzRmVlZGJhY2snLCB3ZHNGZWVkYmFjaylcbiAgcm91dGVyLnBvc3QoJy9jb25jZXB0JywgY3Jhd2xEYnBlZGlhKVxuXG5cbiAgcmV0dXJuIHJvdXRlclxufVxuXG4iLCJcblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvL29ubHkgbG9hZCB0aGUgLmVudiBmaWxlIGlmIHdlJ3JlIG5vdCBpbiBwcm9kXG4gIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG59XG5cbmV4cG9ydCBjb25zdCBDb25maWcgPSB7XG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcbiAgYXBwOiBwcm9jZXNzLmVudi5DRl9BUFBfTkFNRSB8fCAnYXBwJyxcbiAgYXBwTGFiZWw6IHByb2Nlc3MuZW52LkNGX0FQUF9MQUJFTCB8fCAnJyxcbiAgaG9zdG5hbWU6IHByb2Nlc3MuZW52LkNGX0hPU1ROQU1FIHx8ICdodHRwOi8vbG9jYWxob3N0OjcwMDAnLFxuICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuQ0ZfRU5WSVJPTk1FTlQgfHwgJ2xvY2FsJyxcbiAgU1RBVElDX0ZJTEVfUEFUSDogcHJvY2Vzcy5lbnYuU1RBVElDX0ZJTEVfUEFUSCB8fCAnL2hvbWUvdmNhcC9hcHAvZGlzdC8nLFxuICBSRUFDVF9BUFBfVVJMX1BBVEg6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9VUkxfUEFUSCB8fCAnJyxcbiAgYXBwR2F0ZXdheTogcHJvY2Vzcy5lbnYuR0FURVdBWV9TRVJWRVJfVVJMLFxuICBjb25maWdDb29raWVOYW1lOiBwcm9jZXNzLmVudi5DT05GSUdfQ09PS0lFX05BTUUgfHwgJ2R0ZS13YXRzb24tZGlzY292ZXJ5LWV4cGVydC1hc3Npc3QnLFxuXG4gIGFzc2V0RGV0YWlsczoge1xuICAgIGlibURlbW9zVXJsOiBwcm9jZXNzLmVudi5JQk1fREVNT1NfQVNTRVRfVVJMLFxuICAgIGlibUVtYmVkZGVkVXJsOiBwcm9jZXNzLmVudi5JQk1fRU1CRURERURfQVNTRVRfVVJMXG4gIH0sXG5cblxuIFxuICBjb21tb25Mb2dpbjoge1xuICAgIGF1dGhTZXJ2ZXJVcmw6IHByb2Nlc3MuZW52LkdBVEVXQVlfU0VSVkVSX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo3NzAwJyxcbiAgICBieXBhc3NJYm1EZW1vc0F1dGg6IHByb2Nlc3MuZW52LkJZUEFTU19JQk1fREVNT1NfQVVUSCB8fCAndHJ1ZScsXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVF9LRVlcbiAgfSxcblxuICBkaXNjb3Zlcnk6IHtcbiAgICBESVNDT1ZFUllfQVBJX0tFWTogcHJvY2Vzcy5lbnYuRElTQ09WRVJZX0FQSV9LRVksXG4gICAgRElTQ09WRVJZX0VOVjogcHJvY2Vzcy5lbnYuRElTQ09WRVJZX0VOVixcbiAgICBESVNDT1ZFUllfRU5HX0NPTExFQ1RJT046IHByb2Nlc3MuZW52LkRJU0NPVkVSWV9FTkdfQ09MTEVDVElPTixcbiAgICBESVNDT1ZFUllfQVVUT19DT0xMRUNUSU9OOiBwcm9jZXNzLmVudi5ESVNDT1ZFUllfQVVUT19DT0xMRUNUSU9OLFxuICAgIERJU0NPVkVSWV9DVVNUT01fQVBJX0tFWTogcHJvY2Vzcy5lbnYuRElTQ09WRVJZX0NVU1RPTV9BUElfS0VZLFxuICAgIERJU0NPVkVSWV9DVVNUT01fRU5WOiBwcm9jZXNzLmVudi5ESVNDT1ZFUllfQ1VTVE9NX0VOVixcbiAgICBESVNDT1ZFUllfQ1VTVE9NX0NPTExFQ1RJT046IHByb2Nlc3MuZW52LkRJU0NPVkVSWV9DVVNUT01fQ09MTEVDVElPTlxuICB9LFxuICAvL3Nob3VsZCBnZXQgdGhpcyBmcm9tIHRoZSBjbGllbnQuICBzaG91bGQgYmUgcmVtb3ZlZC4uLlxuICBjb3M6IHtcbiAgICBDT1NfRU5EUE9JTlQgOiBwcm9jZXNzLmVudi5DT1NfRU5EUE9JTlQsXG4gICAgQ09TX0FQSV9LRVkgOiBwcm9jZXNzLmVudi5DT1NfQVBJX0tFWSxcbiAgICBDT1NfSUJNX0FVVEhfRU5EUE9JTlQgOiBwcm9jZXNzLmVudi5DT1NfSUJNX0FVVEhfRU5EUE9JTlQsXG4gICAgQ09TX1NFUlZJQ0VfSU5TVEFOQ0VfSUQgOiBwcm9jZXNzLmVudi5DT1NfU0VSVklDRV9JTlNUQU5DRV9JRCxcbiAgICBDT1NfQlVDS0VUIDogcHJvY2Vzcy5lbnYuQ09TX0JVQ0tFVFxuICB9XG5cbn1cblxuIiwiXG5cbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IERCcGVkaWFJdGVtLCBDb25jZXB0SXRlbSB9IGZyb20gJy4uLy4uLy4uL3NyYy90eXBlcy9jb21tb24vdHlwZXMnXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgb3MgPSByZXF1aXJlKCdvcycpXG5cbnZhciBjaGVlcmlvID0gcmVxdWlyZSgnY2hlZXJpbycpXG52YXIgcmVxdWVzdFByb21pc2UgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UtbmF0aXZlJylcbnZhciBDcmF3bGVyID0gcmVxdWlyZShcImNyYXdsZXJcIik7XG5cbmV4cG9ydCBjb25zdCBjcmF3bERicGVkaWEgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LmNvbmNlcHQpXG4gIGxldCBjb25jZXB0X3JlcT0gcmVxLmJvZHkuY29uY2VwdFxuICBsZXQgZGJwZWRpYVJlc3BvbnNlID0ge30gYXMgREJwZWRpYUl0ZW1cbiAgXG4gIGNvbnN0ICQgPSBhd2FpdCByZXF1ZXN0UHJvbWlzZShyZXEuYm9keS5jb25jZXB0LmRicGVkaWEsIHtcbiAgICB0cmFuc2Zvcm06IGJvZHkgPT4gY2hlZXJpby5sb2FkKGJvZHkpLFxuICB9KTtcblxuICBjb25zdCBhYnN0cmFjdCA9ICQoJy5sZWFkJykudGV4dCgpXG4gIGNvbnN0IGltYWdlID0gJCgnYVtyZWw9XCJkYm86dGh1bWJuYWlsXCJdJykuYXR0cignaHJlZicpXG5cbiAgY29uc29sZS5sb2coaW1hZ2UpXG4gIGRicGVkaWFSZXNwb25zZS5kYnBlZGlhX2Fic3RyYWN0ID0gYWJzdHJhY3RcbiAgZGJwZWRpYVJlc3BvbnNlLmRicGVkaWFfaW1hZ2UgPSBpbWFnZVxuICAvLyBkYnBlZGlhUmVzcG9uc2UuZGJwZWRpYV9hYnN0cmFjdCA9IHJlc3BvbnNlXG4gIHJlcy5zZW5kKHtcbiAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICBtZXNzYWdlOiAnb2snLFxuICAgIGRicGVkaWFPYmplY3Q6IGRicGVkaWFSZXNwb25zZVxuICB9KVxuXG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBBbnN3ZXJJdGVtLCBGaWx0ZXJJdGVtLCBRdWVyeUFnZ3JlZ2F0aW9uLCBDb25jZXB0SXRlbSwgU3RvcnksIERvY3VtZW50SXRlbSB9IGZyb20gJy4uLy4uLy4uL3NyYy90eXBlcy9jb21tb24vdHlwZXMnXG5cbmNvbnN0IHsgRElTQ09WRVJZX0FQSV9LRVksIERJU0NPVkVSWV9FTlYsIERJU0NPVkVSWV9FTkdfQ09MTEVDVElPTiwgRElTQ09WRVJZX0FVVE9fQ09MTEVDVElPTiwgRElTQ09WRVJZX0NVU1RPTV9BUElfS0VZLCBESVNDT1ZFUllfQ1VTVE9NX0NPTExFQ1RJT04sIERJU0NPVkVSWV9DVVNUT01fRU5WIH0gPSBDb25maWcuZGlzY292ZXJ5XG5cbmNvbnN0IERpc2NvdmVyeVYxID0gcmVxdWlyZSgnd2F0c29uLWRldmVsb3Blci1jbG91ZC9kaXNjb3ZlcnkvdjEnKTtcblxuY29uc3QgZGlzY292ZXJ5RGVmYXVsdCA9IG5ldyBEaXNjb3ZlcnlWMSh7XG4gIHZlcnNpb246ICcyMDE5LTA0LTAyJyxcbiAgaWFtX2FwaWtleTogRElTQ09WRVJZX0FQSV9LRVksXG4gIHVybDogJ2h0dHBzOi8vZ2F0ZXdheS53YXRzb25wbGF0Zm9ybS5uZXQvZGlzY292ZXJ5L2FwaSdcbn0pO1xuXG4vLyBleHBvc2luZyBXRFMgY29sbGVjdGlvbiBpbmZvLCBsaWtlbHkgdXNlIGZvciBkZWZhdWx0IGNvbGxlY3Rpb24gc3RhdHMgYmVmb3JlIHF1ZXJ5XG5leHBvcnQgY29uc3Qgd2RzSW5mbyA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICBkaXNjb3ZlcnlEZWZhdWx0Lmxpc3RDb2xsZWN0aW9ucyh7IGVudmlyb25tZW50X2lkOiBESVNDT1ZFUllfRU5WIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogJ29rJyxcbiAgICAgICAgICBvdXRwdXQ6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCB3ZHNGZWVkYmFjayA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblxuICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIHRyYWluaW5nIGZlZWRiYWNrXCIpXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LnNlZ21lbnRfdGl0bGUgKyBcIiBzdWJtaXR0ZWQgYXMgXCIgKyByZXEuYm9keS5mZWVkYmFjaylcbiAgY29uc29sZS5sb2coXCJmb3IgdGhlIHF1ZXJ5OiBcIiArIHJlcS5ib2R5LnF1ZXJ5KVxuICByZXMuc2VuZCh7XG4gICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgbWVzc2FnZTogJ29rJyxcbiAgfSlcbn1cblxuLy8gZXhwb3NpbmcgV0RTIHF1ZXJ5XG5leHBvcnQgY29uc3Qgd2RzUXVlcnkgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cbiAgbGV0IHF1ZXJ5ID0gcmVxLmJvZHkubmxxLnF1ZXJ5XG4gIGxldCBjb2xsZWN0aW9uID0gRElTQ09WRVJZX0VOR19DT0xMRUNUSU9OXG4gIGxldCBlbnZpcm9ubWVudCA9IERJU0NPVkVSWV9FTlZcbiAgbGV0IGFwaUtleSA9IERJU0NPVkVSWV9BUElfS0VZXG5cbiAgbGV0IHF1ZXJ5UGFyYW1zID0ge1xuICAgIGVudmlyb25tZW50X2lkOiBlbnZpcm9ubWVudCxcbiAgICBjb2xsZWN0aW9uX2lkOiBjb2xsZWN0aW9uLFxuICAgIGZpbHRlcjogcmVxLmJvZHkuZmlsdGVyID8gcmVxLmJvZHkuZmlsdGVyIDogbnVsbCxcbiAgICBuYXR1cmFsX2xhbmd1YWdlX3F1ZXJ5OiByZXEuYm9keS5ubHEsXG4gICAgcGFzc2FnZXM6IHRydWUsXG4gICAgcGFzc2FnZXNfY2hhcmFjdGVyczoxNTAsXG4gICAgcGFzc2FnZXNfY291bnQ6IDM1LFxuICAgIGRlZHVwbGljYXRlOiB0cnVlLFxuICAgIGRlZHVwbGljYXRlX2ZpZWxkOiBcInRleHRcIixcbiAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgYWdncmVnYXRpb246IGBbXG4gICAgICBuZXN0ZWQoZW5yaWNoZWRfdGV4dC5jb25jZXB0cykuZmlsdGVyKGVucmljaGVkX3RleHQuY29uY2VwdHMucmVsZXZhbmNlPjAuOTIpLnRlcm0oZW5yaWNoZWRfdGV4dC5jb25jZXB0cy50ZXh0LGNvdW50OjUpLnRvcF9oaXRzKDEpLFxuICAgICAgbmVzdGVkKGVucmljaGVkX3RleHQua2V5d29yZHMpLmZpbHRlcihlbnJpY2hlZF90ZXh0LmtleXdvcmRzLnJlbGV2YW5jZT4wLjgpLnRlcm0oZW5yaWNoZWRfdGV4dC5rZXl3b3Jkcy50ZXh0LGNvdW50OjEwKSxcbiAgICAgIHRlcm0oZXh0cmFjdGVkX21ldGFkYXRhLmZpbGVuYW1lLGNvdW50OjEwKS50b3BfaGl0cygxKVxuICAgIF1gXG4gIH1cblxuICBkaXNjb3ZlcnlEZWZhdWx0LnF1ZXJ5KHF1ZXJ5UGFyYW1zLFxuICAgIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKVxuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzOiAnTk9OT05PJyxcbiAgICAgICAgICBtZXNzYWdlOiAnQkFEJyxcbiAgICAgICAgICBvdXRwdXQ6IGVycm9yLFxuICAgICAgICAgIGNvbGxlY3Rpb25faWQ6IGNvbGxlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgbGV0IGFuc3dlckl0ZW1zOiBBbnN3ZXJJdGVtW10gPSBbXVxuICAgICAgICBsZXQgZmlsdGVySXRlbXM6IEZpbHRlckl0ZW1bXSA9IFtdXG4gICAgICAgIGxldCBxdWVyeUFnZ3JlZ2F0aW9uID0ge30gYXMgUXVlcnlBZ2dyZWdhdGlvblxuICAgICAgICBsZXQgbGFiZWxMaXN0OiBTdHJpbmdbXSA9IFtdXG5cbiAgICAgICAgbGV0IHBhc3NhZ2VzUmV0cmlldmVkID0gZmFsc2VcblxuICAgICAgICBpZiAoZGF0YS5wYXNzYWdlcykge1xuICAgICAgICAgIGlmIChkYXRhLnBhc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhc3NhZ2VzUmV0cmlldmVkID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEucmVzdWx0cyA9IGRhdGEucmVzdWx0cy5zb3J0KHJhbmtEb2NzKVxuXG4gICAgICAgIGZvciAobGV0IGl0ZW0gaW4gZGF0YS5yZXN1bHRzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBuZXdJdGVtID0ge30gYXMgQW5zd2VySXRlbVxuXG4gICAgICAgICAgICBpZiAocGFzc2FnZXNSZXRyaWV2ZWQpIHtcbiAgICAgICAgICAgICAgbGV0IHBhc3NhZ2VPdXRwdXQgPSBwYXNzYWdlUmVjb25jaWxlcihkYXRhLnJlc3VsdHNbaXRlbV0sIGRhdGEucGFzc2FnZXMpXG4gICAgICAgICAgICAgIG5ld0l0ZW0udGV4dCA9IHBhc3NhZ2VPdXRwdXQudGV4dFxuICAgICAgICAgICAgICBuZXdJdGVtLmxlYWRpbmdfdGV4dCA9IHBhc3NhZ2VPdXRwdXQubGVhZGluZ190ZXh0XG4gICAgICAgICAgICAgIG5ld0l0ZW0udHJhaWxpbmdfdGV4dCA9IHBhc3NhZ2VPdXRwdXQudHJhaWxpbmdfdGV4dFxuICAgICAgICAgICAgICBuZXdJdGVtLmxvY2F0aW9uID0gcGFzc2FnZU91dHB1dC5sb2NhdGlvblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGV4dFNsaWNlcihkYXRhLnJlc3VsdHNbaXRlbV0udGV4dClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3SXRlbS50aXRsZSA9IGRhdGEucmVzdWx0c1tpdGVtXS50aXRsZVxuXG4gICAgICAgICAgICBuZXdJdGVtLmNvbmZpZGVuY2UgPSBkYXRhLnJlc3VsdHNbaXRlbV0ucmVzdWx0X21ldGFkYXRhLmNvbmZpZGVuY2VcbiAgICAgICAgICAgIG5ld0l0ZW0uZmlsZV90aXRsZSA9IGRhdGEucmVzdWx0c1tpdGVtXS5zb3VyY2VfbGlua1xuICAgICAgICAgICAgbmV3SXRlbS5maWxlX25hbWUgPSBkYXRhLnJlc3VsdHNbaXRlbV0uZXh0cmFjdGVkX21ldGFkYXRhLmZpbGVuYW1lXG5cbiAgICAgICAgICAgIG5ld0l0ZW0uZmlsZV90eXBlID0gZGF0YS5yZXN1bHRzW2l0ZW1dLmV4dHJhY3RlZF9tZXRhZGF0YS5maWxlbmFtZS5tYXRjaCgvXFwuWzAtOWEtel0rJC9pKVswXVxuXG4gICAgICAgICAgICBuZXdJdGVtLmZpbGVfc2VnbWVudF9jb3VudCA9IGRhdGEucmVzdWx0c1tpdGVtXS5zZWdtZW50X21ldGFkYXRhID8gZGF0YS5yZXN1bHRzW2l0ZW1dLnNlZ21lbnRfbWV0YWRhdGEudG90YWxfc2VnbWVudHMgOiBudWxsXG5cbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHNbaXRlbV0ubWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0c1tpdGVtXS5tZXRhZGF0YS5wYWdlX251bWJlcikge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0ucGFnZV9udW0gPSBkYXRhLnJlc3VsdHNbaXRlbV0ubWV0YWRhdGEucGFnZV9udW1iZXJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzW2l0ZW1dLnBhZ2VfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICBuZXdJdGVtLnBhZ2VfbnVtID0gcmVtb3ZlQWJub3JtYWxpdGllcyhkYXRhLnJlc3VsdHNbaXRlbV0ucGFnZV9udW1iZXIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzW2l0ZW1dLm1ldGFkYXRhLmF1dGhvcikge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uZmlsZV9hdXRob3IgPSBkYXRhLnJlc3VsdHNbaXRlbV0ubWV0YWRhdGEuYXV0aG9yXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzW2l0ZW1dLm1ldGFkYXRhLnB1Ymxpc2hfZGF0ZSkge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0ucHViX2RhdGUgPSBkYXRhLnJlc3VsdHNbaXRlbV0ubWV0YWRhdGEucHVibGlzaF9kYXRlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0c1tpdGVtXS5wYWdlX251bWJlciAmJiAhbmV3SXRlbS5wYWdlX251bSkge1xuICAgICAgICAgICAgICBuZXdJdGVtLnBhZ2VfbnVtID0gZGF0YS5yZXN1bHRzW2l0ZW1dLnBhZ2VfbnVtYmVyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0l0ZW0ucmF3ID0gZGF0YS5yZXN1bHRzW2l0ZW1dXG5cbiAgICAgICAgICAgIGFuc3dlckl0ZW1zLnB1c2gobmV3SXRlbSlcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHNbaXRlbV0uZW5yaWNoZWRfdGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJJdGVtID0ge30gYXMgRmlsdGVySXRlbVxuICAgICAgICAgICAgICBpZihkYXRhLnJlc3VsdHNbaXRlbV0uZW5yaWNoZWRfdGV4dC5jYXRlZ29yaWVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBkYXRhLnJlc3VsdHNbaXRlbV0uZW5yaWNoZWRfdGV4dC5jYXRlZ29yaWVzWzBdLmxhYmVsLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICAgICAgICAgIGlmIChsYWJlbExpc3QuaW5kZXhPZihsYWJlbCkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGZpbHRlckl0ZW0uaWQgPSBsYWJlbExpc3QubGVuZ3RoICsgMVxuICAgICAgICAgICAgICAgICAgZmlsdGVySXRlbS50ZXh0ID0gbGFiZWxcbiAgICAgICAgICAgICAgICAgIGZpbHRlckl0ZW1zLnB1c2goZmlsdGVySXRlbSlcbiAgICAgICAgICAgICAgICAgIGxhYmVsTGlzdC5wdXNoKGxhYmVsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBxdWVyeUFnZ3JlZ2F0aW9uLm9yaWdpbmFsX3F1ZXJ5ID0gcXVlcnkgXG4gICAgICAgIGxldCBjb25jZXB0QWdncmVnYXRpb25zOiBDb25jZXB0SXRlbVtdID0gW10gXG4gICAgICAgIGxldCByYXdDb25jZXB0QWdncmVnYXRpb25zID0gW11cbiAgICAgICAgaWYoZGF0YS5hZ2dyZWdhdGlvbnMubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgIGlmKGRhdGEuYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9ucy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlmKGRhdGEuYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgIHJhd0NvbmNlcHRBZ2dyZWdhdGlvbnMgPSBkYXRhLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnNbMF0uYWdncmVnYXRpb25zWzBdLnJlc3VsdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsZV9uYW1lczogRG9jdW1lbnRJdGVtW10gPSBbXVxuXG4gICAgICAgIHRyeXtcbiAgICAgICAgICBmb3IgKGxldCBpdGVtIGluIHJhd0NvbmNlcHRBZ2dyZWdhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChyYXdDb25jZXB0QWdncmVnYXRpb25zW2l0ZW1dLm1hdGNoaW5nX3Jlc3VsdHMgPiAzKSB7XG4gICAgICAgICAgICAgIGxldCBjb25jZXB0SXRlbSA9IHt9IGFzIENvbmNlcHRJdGVtXG4gICAgICAgICAgICAgIGxldCBrZXkgPSByYXdDb25jZXB0QWdncmVnYXRpb25zW2l0ZW1dLmtleVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyYXdDb25jZXB0QWdncmVnYXRpb25zW2l0ZW1dKVxuICAgICAgICAgICAgICBsZXQgdG9wSGl0Q29uY2VwdCA9IHJhd0NvbmNlcHRBZ2dyZWdhdGlvbnNbaXRlbV0uYWdncmVnYXRpb25zWzBdLmhpdHMuaGl0c1swXVxuICAgICAgICAgICAgICBjb25jZXB0SXRlbS50ZXh0ID0gdG9wSGl0Q29uY2VwdC50ZXh0XG4gICAgICAgICAgICAgIGNvbmNlcHRJdGVtLmRicGVkaWEgPSB0b3BIaXRDb25jZXB0LmRicGVkaWFfcmVzb3VyY2VcbiAgICAgICAgICAgICAgY29uY2VwdEl0ZW0ucmVsZXZhbmNlID0gdG9wSGl0Q29uY2VwdC5yZWxldmFuY2VcbiAgICAgICAgICAgICAgY29uY2VwdEFnZ3JlZ2F0aW9ucy5wdXNoKGNvbmNlcHRJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHF1ZXJ5QWdncmVnYXRpb24uY29uY2VwdHMgPSBjb25jZXB0QWdncmVnYXRpb25zLnNvcnQocmFua0NvbmNlcHRzKVxuXG4gICAgICAgICAgaWYoZGF0YS5hZ2dyZWdhdGlvbnNbMV0uYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICBxdWVyeUFnZ3JlZ2F0aW9uLm1lbnRpb25zID0gZGF0YS5hZ2dyZWdhdGlvbnNbMV0uYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9uc1swXS5yZXN1bHRzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYoZGF0YS5hZ2dyZWdhdGlvbnNbMV0uYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluICBkYXRhLmFnZ3JlZ2F0aW9uc1sxXS5hZ2dyZWdhdGlvbnNbMF0uYWdncmVnYXRpb25zWzBdLnJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld0RvY0l0ZW0gPSB7fSBhcyBEb2N1bWVudEl0ZW1cbiAgICAgICAgICAgICAgbmV3RG9jSXRlbS5uYW1lID0gZGF0YS5hZ2dyZWdhdGlvbnNbMV0uYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9uc1swXS5yZXN1bHRzW2ldLmtleVxuICAgICAgICAgICAgICBuZXdEb2NJdGVtLm1hdGNoaW5nX3Jlc3VsdHMgPSBkYXRhLmFnZ3JlZ2F0aW9uc1sxXS5hZ2dyZWdhdGlvbnNbMF0uYWdncmVnYXRpb25zWzBdLnJlc3VsdHNbaV0ubWF0Y2hpbmdfcmVzdWx0c1xuICAgICAgICAgICAgICBmaWxlX25hbWVzLnB1c2gobmV3RG9jSXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuICAgICAgICB9Y2F0Y2goZmFpbCl7fVxuXG4gICAgICAgIHF1ZXJ5QWdncmVnYXRpb24uZmlsZV9uYW1lcyA9IGZpbGVfbmFtZXNcbiAgICAgICAgcXVlcnlBZ2dyZWdhdGlvbi5vcmlnaW5hbF9xdWVyeSA9IHJlcS5ib2R5Lm5scVxuXG4gICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiAnb2snLFxuICAgICAgICAgIGFuc3dlckl0ZW1zLFxuICAgICAgICAgIGZpbHRlckl0ZW1zLFxuICAgICAgICAgIHF1ZXJ5QWdncmVnYXRpb24sXG4gICAgICAgICAgZG9jdW1lbnQ6IHJlcS5ib2R5LmRvY3VtZW50ID8gcmVxLmJvZHkuZG9jdW1lbnQgOiBudWxsLFxuICAgICAgICAgIHJhd19vdXRwdXQ6IGRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCB3ZHNBQyA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblxuICBsZXQgcXVlcnkgPSByZXEuYm9keS5ubHEucXVlcnlcbiAgbGV0IGNvbGxlY3Rpb24gPSBESVNDT1ZFUllfRU5HX0NPTExFQ1RJT05cbiAgbGV0IGVudmlyb25tZW50ID0gRElTQ09WRVJZX0VOVlxuICBsZXQgYXBpS2V5ID0gRElTQ09WRVJZX0FQSV9LRVlcbiAgbGV0IG91dGl0ZW1zID0gW11cblxuICBsZXQgcXVlcnlQYXJhbXMgPSB7XG4gICAgZW52aXJvbm1lbnRfaWQ6IGVudmlyb25tZW50LFxuICAgIGNvbGxlY3Rpb25faWQ6IGNvbGxlY3Rpb24sXG4gICAgbmF0dXJhbF9sYW5ndWFnZV9xdWVyeTogcmVxLmJvZHkubmxxLFxuICAgIHBhc3NhZ2VzOiB0cnVlLFxuICAgIGRlZHVwbGljYXRlOiB0cnVlLFxuICAgIGRlZHVwbGljYXRlX2ZpZWxkOiBcInBhc3NhZ2VfdGV4dFwiLFxuICAgIGNvdW50OjAsXG4gICAgcGFzc2FnZXNfY2hhcmFjdGVyczo1MCxcbiAgICBwYXNzYWdlc19jb3VudDogNVxuICB9XG5cbiAgZGlzY292ZXJ5RGVmYXVsdC5xdWVyeShxdWVyeVBhcmFtcyxcbiAgICBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKVxuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzOiAnTk9OT05PJyxcbiAgICAgICAgICBtZXNzYWdlOiAnQkFEJyxcbiAgICAgICAgICBvdXRwdXQ6IGVycm9yLFxuICAgICAgICAgIGNvbGxlY3Rpb25faWQ6IGNvbGxlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5UGFyYW1zLm5hdHVyYWxfbGFuZ3VhZ2VfcXVlcnkpXG5cbiAgICAgICAgbGV0IGFuc3dlckl0ZW1zOiBBbnN3ZXJJdGVtW10gPSBbXVxuICAgICAgICBmb3IgKGxldCBpdGVtIGluIGRhdGEucGFzc2FnZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgbGV0IG9pID0gZGF0YS5wYXNzYWdlc1tpdGVtXS5wYXNzYWdlX3RleHQudHJpbSgpLnJlcGxhY2UoL15cXC4vLCBcIlwiKS50cmltKCkucmVwbGFjZSgvJFxcLi8sIFwiXCIpLnRyaW0oKVxuICAgICAgICAgICAgaWYgKCFvdXRpdGVtcy5pbmNsdWRlcyhoYXNoQ29kZShvaSkpKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdJdGVtID0ge30gYXMgQW5zd2VySXRlbVxuICAgICAgICAgICAgICBvdXRpdGVtcy5wdXNoKGhhc2hDb2RlKG9pKSlcbiAgICAgICAgICAgICAgbmV3SXRlbS50ZXh0ID0gb2lcbiAgICAgICAgICAgICAgbmV3SXRlbS50aXRsZSA9IHF1ZXJ5UGFyYW1zLm5hdHVyYWxfbGFuZ3VhZ2VfcXVlcnlcbiAgICAgICAgICAgICAgYW5zd2VySXRlbXMucHVzaChuZXdJdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuY29uc29sZS5sb2coXCJhaTogXCIgKyBKU09OLnN0cmluZ2lmeShhbnN3ZXJJdGVtcykpXG4gICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiAnb2snLFxuICAgICAgICAgIGFuc3dlckl0ZW1zXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiByYW5rQ29uY2VwdHMgKGEsIGIpIHtcbiAgaWYgKGEucmVsZXZhbmNlID4gYi5yZWxldmFuY2UpIHtcbiAgICByZXR1cm4gLTFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMVxuICB9XG59XG5cbmZ1bmN0aW9uIHJhbmtEb2NzIChhLCBiKSB7XG4gIGlmIChhLnJlc3VsdF9tZXRhZGF0YS5jb25maWRlbmNlID4gYi5yZXN1bHRfbWV0YWRhdGEuY29uZmlkZW5jZSkge1xuICAgIHJldHVybiAtMVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAxXG4gIH1cbn1cblxuXG4vL0NoYW5nZSBjaGFyYWN0ZXIgZnJvbSAxMDIkX3sgfSQgdG8gMTAyIG9yIDQ3JF97IH1QIHRvIDQ3LlxuZnVuY3Rpb24gcmVtb3ZlQWJub3JtYWxpdGllcyAobnVtKSB7XG4gIHJldHVybiBudW1bMF0ucmVwbGFjZSgvW2B+IUAjJCVeJiooKV98K1xcLT0/OzogYS16QS1aJ1wiLC48Plxce1xcfVxcW1xcXVxcXFxcXC9dL2dpLCAnJylcbn1cblxuZnVuY3Rpb24gcGFzc2FnZVJlY29uY2lsZXIod2RzX2RvYywgd2RzX3Bhc3NhZ2VzKSB7XG4gIGxldCB0YXJnZXREb2MgPSB3ZHNfZG9jLmlkXG4gIGxldCByZXN1bHRPYmplY3QgPSB7XG4gICAgdGV4dDogXCJcIixcbiAgICBsZWFkaW5nX3RleHQ6IFwiXCIsXG4gICAgdHJhaWxpbmdfdGV4dDogXCJcIixcbiAgICBsb2NhdGlvbjogWzAsMF1cbiAgfVxuXG4gIGZvciAobGV0IGkgaW4gd2RzX3Bhc3NhZ2VzKSB7XG4gICAgaWYgKHdkc19wYXNzYWdlc1tpXS5kb2N1bWVudF9pZCA9PT0gdGFyZ2V0RG9jKSB7XG4gICAgICByZXN1bHRPYmplY3QudGV4dCA9IHdkc19wYXNzYWdlc1tpXS5wYXNzYWdlX3RleHRcbiAgICAgIHJlc3VsdE9iamVjdC5sb2NhdGlvblswXSA9IHdkc19wYXNzYWdlc1tpXS5zdGFydF9vZmZzZXRcbiAgICAgIHJlc3VsdE9iamVjdC5sb2NhdGlvblsxXSA9IHdkc19wYXNzYWdlc1tpXS5lbmRfb2Zmc2V0XG4gICAgICBpZiAod2RzX3Bhc3NhZ2VzW2ldLnN0YXJ0X29mZnNldCA9PT0gMCkge1xuICAgICAgICByZXN1bHRPYmplY3QubGVhZGluZ190ZXh0ID0gJ1wiJ1xuICAgICAgICByZXN1bHRPYmplY3QudGV4dCA9IHJlc3VsdE9iamVjdC50ZXh0XG4gICAgICAgIGlmICh3ZHNfZG9jLnRleHQubGVuZ3RoID4gd2RzX3Bhc3NhZ2VzW2ldLmVuZF9vZmZzZXQgKyAxNjApIHtcbiAgICAgICAgICByZXN1bHRPYmplY3QudHJhaWxpbmdfdGV4dCA9IHdkc19kb2MudGV4dC5zbGljZSh3ZHNfcGFzc2FnZXNbaV0uZW5kX29mZnNldCwgd2RzX3Bhc3NhZ2VzW2ldLmVuZF9vZmZzZXQgKyAxNjApICsgJyAuLi5cIidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRPYmplY3QudHJhaWxpbmdfdGV4dCA9IHdkc19kb2MudGV4dC5zbGljZSh3ZHNfcGFzc2FnZXNbaV0uZW5kX29mZnNldCwgd2RzX2RvYy50ZXh0Lmxlbmd0aCkgKydcIidcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh3ZHNfcGFzc2FnZXNbaV0uZW5kX29mZnNldCA9PT0gd2RzX2RvYy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICByZXN1bHRPYmplY3QudGV4dCA9IHJlc3VsdE9iamVjdC50ZXh0XG4gICAgICAgIHJlc3VsdE9iamVjdC50cmFpbGluZ190ZXh0ID0gJ1wiJ1xuICAgICAgICBpZiAod2RzX3Bhc3NhZ2VzW2ldLnN0YXJ0X29mZnNldCAtIDE2MCA+IDApIHtcbiAgICAgICAgICByZXN1bHRPYmplY3QubGVhZGluZ190ZXh0ID0gJ1wiLi4uJyArIHdkc19kb2MudGV4dC5zbGljZSh3ZHNfcGFzc2FnZXNbaV0uc3RhcnRfb2Zmc2V0IC0gMTYwLCB3ZHNfcGFzc2FnZXNbaV0uc3RhcnRfb2Zmc2V0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdE9iamVjdC5sZWFkaW5nX3RleHQgPSAnXCInICsgd2RzX2RvYy50ZXh0LnNsaWNlKDAsIHdkc19wYXNzYWdlc1tpXS5zdGFydF9vZmZzZXQpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0T2JqZWN0LmxlYWRpbmdfdGV4dCA9ICdcIi4uLiAnICsgd2RzX2RvYy50ZXh0LnNsaWNlKHdkc19wYXNzYWdlc1tpXS5zdGFydF9vZmZzZXQgLSAxMDUsIHdkc19wYXNzYWdlc1tpXS5zdGFydF9vZmZzZXQpXG4gICAgICAgIHJlc3VsdE9iamVjdC50ZXh0ID0gcmVzdWx0T2JqZWN0LnRleHRcbiAgICAgICAgcmVzdWx0T2JqZWN0LnRyYWlsaW5nX3RleHQgPSB3ZHNfZG9jLnRleHQuc2xpY2Uod2RzX3Bhc3NhZ2VzW2ldLmVuZF9vZmZzZXQsIHdkc19wYXNzYWdlc1tpXS5lbmRfb2Zmc2V0ICsgMTA1KSArICcgLi4uXCInXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoTnVtYmVyKGkpID09PSAod2RzX3Bhc3NhZ2VzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAvLyBsYXN0IG9uZSwganVzdCBzbGljZSB0aGUgdGV4dFxuICAgICAgcmVzdWx0T2JqZWN0ID0gdGV4dFNsaWNlcih3ZHNfZG9jLnRleHQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdE9iamVjdFxufVxuXG5mdW5jdGlvbiBoYXNoQ29kZShzdHIpIHtcbiAgICB2YXIgaGFzaCA9IDAsXG4gICAgICAgIGksIGNocjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG59XG5cbmZ1bmN0aW9uIHRleHRTbGljZXIodGV4dCkge1xuICBsZXQgcmVzdWx0T2JqZWN0ID0ge1xuICAgIHRleHQ6IFwiXCIsXG4gICAgbG9jYXRpb246IFswLDBdLFxuICAgIGxlYWRpbmdfdGV4dDogXCJcIixcbiAgICB0cmFpbGluZ190ZXh0OiBcIlwiXG4gIH1cblxuICByZXN1bHRPYmplY3QubGVhZGluZ190ZXh0ID0gJ1wiJyArIHRleHQuc2xpY2UoMCwyOTApXG4gIHJlc3VsdE9iamVjdC50ZXh0ID0gXCJcIlxuICByZXN1bHRPYmplY3QudHJhaWxpbmdfdGV4dCA9ICcuLi5cIidcbiAgcmVzdWx0T2JqZWN0LmxvY2F0aW9uWzBdID0gMFxuICByZXN1bHRPYmplY3QubG9jYXRpb25bMV0gPSAyNTBcblxuICByZXR1cm4gcmVzdWx0T2JqZWN0XG59IiwiXG5cbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnXG5pbXBvcnQgcnAgZnJvbSAncmVxdWVzdC1wcm9taXNlLW5hdGl2ZSdcblxuaW1wb3J0IHsgZ2V0UmVkaXJlY3RVcmwgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXV0aWxzJ1xuXG5cbi8vIHRlc3QgY2FsbCwgZXhwb3NlZCBkdXJpbmcgZGV2IGZvciBxdWljayB0ZXN0IHRoYXQgc2VydmVyIGlzIGEtb2tcbmV4cG9ydCBjb25zdCBvblBvc3RNZXNzYWdlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXMuc2VuZCh7XG4gICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgbWVzc2FnZTogJ29rJ1xuICB9KVxufSIsIlxuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJ1xuaW1wb3J0IHBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcblxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgQXBpUm91dGVyIH0gZnJvbSAnLi9hcGknXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2NvbmZpZydcblxuY29uc3QgeyBwb3J0LCBTVEFUSUNfRklMRV9QQVRILCBSRUFDVF9BUFBfVVJMX1BBVEggfSA9IENvbmZpZ1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vc2VydmVyIGNvbmZpZyBcbmFwcC51c2UoY29tcHJlc3Npb24oeyBsZXZlbDogOSB9KSlcbmFwcC51c2UocGFyc2VyLmpzb24oKSlcbmFwcC51c2UocGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcbmFwcC51c2UoYCR7UkVBQ1RfQVBQX1VSTF9QQVRIfS9hcGlgLCBBcGlSb3V0ZXIoKSkgIC8vPEpQSD4gb3RoZXIgcHJvamVjdHNoYXZlIFNlY3VyZWRBcGlSb3V0ZXIgaGVyZS4uXG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xuICAvL3NlcnZlIHN0YXRpYyBmaWxlcyBmcm9tIGRpc3RcbiAgYXBwLnVzZShSRUFDVF9BUFBfVVJMX1BBVEgsZXhwcmVzcy5zdGF0aWMoJ2Rpc3QnKSlcbiAgXG4gIC8vZm9yIGV2ZXJ5IHJvdXRlIHJlcXVlc3QsIHNlbmQgYmFjayBpbmRleC5odG1sIHdoaWNoXG4gIC8vcmVmZXJlbmNlcyB0aGUgYnVuZGxlLmpzIGZpbGUgdGhhdCBoYW5kbGVzIHRoZSBjbGllbnQtc2lkZSByb3V0aW5nXG4gIGFwcC5nZXQoJyonLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShTVEFUSUNfRklMRV9QQVRILCAnaW5kZXguaHRtbCcpKVxuICB9KVxufVxuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYGZyb250LWVuZCBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQ6JHtwb3J0fWApXG59KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoZWVyaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3Jhd2xlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlcXVlc3QtcHJvbWlzZS1uYXRpdmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2F0c29uLWRldmVsb3Blci1jbG91ZC9kaXNjb3ZlcnkvdjFcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==