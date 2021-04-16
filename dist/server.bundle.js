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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kYnBlZGlhX2NyYXdsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9kaXNjb3ZlcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoZWVyaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyYXdsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXF1ZXN0LXByb21pc2UtbmF0aXZlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2F0c29uLWRldmVsb3Blci1jbG91ZC9kaXNjb3ZlcnkvdjFcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFXO0FBQzdELElBQU0sSUFBSSxHQUFHLG1CQUFPLENBQUMsa0JBQU0sQ0FBQztBQUM1QixJQUFNLEdBQUcsR0FBRyw4Q0FBTyxFQUFFO0FBRXJCLGdCQUFnQjtBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLGtEQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtEQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrREFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUksa0JBQWtCLFNBQU0sRUFBRSxzREFBUyxFQUFFLENBQUMsRUFBRSxrREFBa0Q7QUFFckcsSUFBRyxLQUFxQyxFQUFDLEVBU3hDO0FBRUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUFzQyxJQUFNLENBQUM7QUFDM0QsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNqQ0Ysd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0UiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2VydmVyL3NyYy9zZXJ2ZXIudHNcIik7XG4iLCIvLyBDb3B5cmlnaHQgSUJNIENvcnBvcmF0aW9uIDIwMTlcblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHsgb25Qb3N0TWVzc2FnZSB9IGZyb20gJy4uL2NvbnRyb2xsZXJzJ1xuXG5pbXBvcnQgeyBTZWN1cmVkUm91dGVyLCBVbnNlY3VyZWRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcnMnXG5cbmltcG9ydCB7IHdkc0luZm8sIHdkc1F1ZXJ5LCB3ZHNBQywgd2RzRmVlZGJhY2sgfSBmcm9tICcuLi9jb250cm9sbGVycy9kaXNjb3ZlcnknXG5pbXBvcnQgeyBjcmF3bERicGVkaWEgfSBmcm9tICcuLi9jb250cm9sbGVycy9kYnBlZGlhX2NyYXdsZXInXG5cbmV4cG9ydCBjb25zdCBBcGlSb3V0ZXIgPSAoKTogUm91dGVyID0+IHtcbiAgY29uc3Qgcm91dGVyID0gUm91dGVyKClcbiAgLy8gYXBwIHNldHVwIGFwaVxuICByb3V0ZXIucG9zdCgnL21lc3NhZ2UnLCBvblBvc3RNZXNzYWdlKVxuXG4gIC8vIGV4cG9zZWQgbWV0aG9kcyBmb3IgV0RTXG4gIHJvdXRlci5wb3N0KCcvd2RzSW5mbycsIHdkc0luZm8pXG4gIHJvdXRlci5wb3N0KCcvd2RzUXVlcnknLCB3ZHNRdWVyeSlcbiAgcm91dGVyLnBvc3QoJy93ZHNBQycsIHdkc0FDKVxuICByb3V0ZXIucG9zdCgnL3dkc0ZlZWRiYWNrJywgd2RzRmVlZGJhY2spXG4gIHJvdXRlci5wb3N0KCcvY29uY2VwdCcsIGNyYXdsRGJwZWRpYSlcblxuXG4gIHJldHVybiByb3V0ZXJcbn1cblxuIiwiLy8gQ29weXJpZ2h0IElCTSBDb3Jwb3JhdGlvbiAyMDE5XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy9vbmx5IGxvYWQgdGhlIC5lbnYgZmlsZSBpZiB3ZSdyZSBub3QgaW4gcHJvZFxuICByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxufVxuXG5leHBvcnQgY29uc3QgQ29uZmlnID0ge1xuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDAsXG4gIGFwcDogcHJvY2Vzcy5lbnYuQ0ZfQVBQX05BTUUgfHwgJ2FwcCcsXG4gIGFwcExhYmVsOiBwcm9jZXNzLmVudi5DRl9BUFBfTEFCRUwgfHwgJycsXG4gIGhvc3RuYW1lOiBwcm9jZXNzLmVudi5DRl9IT1NUTkFNRSB8fCAnaHR0cDovL2xvY2FsaG9zdDo3MDAwJyxcbiAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52LkNGX0VOVklST05NRU5UIHx8ICdsb2NhbCcsXG4gIFNUQVRJQ19GSUxFX1BBVEg6IHByb2Nlc3MuZW52LlNUQVRJQ19GSUxFX1BBVEggfHwgJy9ob21lL3ZjYXAvYXBwL2Rpc3QvJyxcbiAgUkVBQ1RfQVBQX1VSTF9QQVRIOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfVVJMX1BBVEggfHwgJycsXG4gIGFwcEdhdGV3YXk6IHByb2Nlc3MuZW52LkdBVEVXQVlfU0VSVkVSX1VSTCxcbiAgY29uZmlnQ29va2llTmFtZTogcHJvY2Vzcy5lbnYuQ09ORklHX0NPT0tJRV9OQU1FIHx8ICdkdGUtd2F0c29uLWRpc2NvdmVyeS1leHBlcnQtYXNzaXN0JyxcblxuICBhc3NldERldGFpbHM6IHtcbiAgICBpYm1EZW1vc1VybDogcHJvY2Vzcy5lbnYuSUJNX0RFTU9TX0FTU0VUX1VSTCxcbiAgICBpYm1FbWJlZGRlZFVybDogcHJvY2Vzcy5lbnYuSUJNX0VNQkVEREVEX0FTU0VUX1VSTFxuICB9LFxuXG5cbiBcbiAgY29tbW9uTG9naW46IHtcbiAgICBhdXRoU2VydmVyVXJsOiBwcm9jZXNzLmVudi5HQVRFV0FZX1NFUlZFUl9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NzcwMCcsXG4gICAgYnlwYXNzSWJtRGVtb3NBdXRoOiBwcm9jZXNzLmVudi5CWVBBU1NfSUJNX0RFTU9TX0FVVEggfHwgJ3RydWUnLFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVRfS0VZXG4gIH0sXG5cbiAgZGlzY292ZXJ5OiB7XG4gICAgRElTQ09WRVJZX0FQSV9LRVk6IHByb2Nlc3MuZW52LkRJU0NPVkVSWV9BUElfS0VZLFxuICAgIERJU0NPVkVSWV9FTlY6IHByb2Nlc3MuZW52LkRJU0NPVkVSWV9FTlYsXG4gICAgRElTQ09WRVJZX0VOR19DT0xMRUNUSU9OOiBwcm9jZXNzLmVudi5ESVNDT1ZFUllfRU5HX0NPTExFQ1RJT04sXG4gICAgRElTQ09WRVJZX0FVVE9fQ09MTEVDVElPTjogcHJvY2Vzcy5lbnYuRElTQ09WRVJZX0FVVE9fQ09MTEVDVElPTixcbiAgICBESVNDT1ZFUllfQ1VTVE9NX0FQSV9LRVk6IHByb2Nlc3MuZW52LkRJU0NPVkVSWV9DVVNUT01fQVBJX0tFWSxcbiAgICBESVNDT1ZFUllfQ1VTVE9NX0VOVjogcHJvY2Vzcy5lbnYuRElTQ09WRVJZX0NVU1RPTV9FTlYsXG4gICAgRElTQ09WRVJZX0NVU1RPTV9DT0xMRUNUSU9OOiBwcm9jZXNzLmVudi5ESVNDT1ZFUllfQ1VTVE9NX0NPTExFQ1RJT05cbiAgfSxcbiAgLy9zaG91bGQgZ2V0IHRoaXMgZnJvbSB0aGUgY2xpZW50LiAgc2hvdWxkIGJlIHJlbW92ZWQuLi5cbiAgY29zOiB7XG4gICAgQ09TX0VORFBPSU5UIDogcHJvY2Vzcy5lbnYuQ09TX0VORFBPSU5ULFxuICAgIENPU19BUElfS0VZIDogcHJvY2Vzcy5lbnYuQ09TX0FQSV9LRVksXG4gICAgQ09TX0lCTV9BVVRIX0VORFBPSU5UIDogcHJvY2Vzcy5lbnYuQ09TX0lCTV9BVVRIX0VORFBPSU5ULFxuICAgIENPU19TRVJWSUNFX0lOU1RBTkNFX0lEIDogcHJvY2Vzcy5lbnYuQ09TX1NFUlZJQ0VfSU5TVEFOQ0VfSUQsXG4gICAgQ09TX0JVQ0tFVCA6IHByb2Nlc3MuZW52LkNPU19CVUNLRVRcbiAgfVxuXG59XG5cbiIsIi8vIENvcHlyaWdodCBJQk0gQ29ycG9yYXRpb24gMjAxOVxuXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBEQnBlZGlhSXRlbSwgQ29uY2VwdEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9zcmMvdHlwZXMvY29tbW9uL3R5cGVzJ1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIG9zID0gcmVxdWlyZSgnb3MnKVxuXG52YXIgY2hlZXJpbyA9IHJlcXVpcmUoJ2NoZWVyaW8nKVxudmFyIHJlcXVlc3RQcm9taXNlID0gcmVxdWlyZSgncmVxdWVzdC1wcm9taXNlLW5hdGl2ZScpXG52YXIgQ3Jhd2xlciA9IHJlcXVpcmUoXCJjcmF3bGVyXCIpO1xuXG5leHBvcnQgY29uc3QgY3Jhd2xEYnBlZGlhID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keS5jb25jZXB0KVxuICBsZXQgY29uY2VwdF9yZXE9IHJlcS5ib2R5LmNvbmNlcHRcbiAgbGV0IGRicGVkaWFSZXNwb25zZSA9IHt9IGFzIERCcGVkaWFJdGVtXG4gIFxuICBjb25zdCAkID0gYXdhaXQgcmVxdWVzdFByb21pc2UocmVxLmJvZHkuY29uY2VwdC5kYnBlZGlhLCB7XG4gICAgdHJhbnNmb3JtOiBib2R5ID0+IGNoZWVyaW8ubG9hZChib2R5KSxcbiAgfSk7XG5cbiAgY29uc3QgYWJzdHJhY3QgPSAkKCcubGVhZCcpLnRleHQoKVxuICBjb25zdCBpbWFnZSA9ICQoJ2FbcmVsPVwiZGJvOnRodW1ibmFpbFwiXScpLmF0dHIoJ2hyZWYnKVxuXG4gIGNvbnNvbGUubG9nKGltYWdlKVxuICBkYnBlZGlhUmVzcG9uc2UuZGJwZWRpYV9hYnN0cmFjdCA9IGFic3RyYWN0XG4gIGRicGVkaWFSZXNwb25zZS5kYnBlZGlhX2ltYWdlID0gaW1hZ2VcbiAgLy8gZGJwZWRpYVJlc3BvbnNlLmRicGVkaWFfYWJzdHJhY3QgPSByZXNwb25zZVxuICByZXMuc2VuZCh7XG4gICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgbWVzc2FnZTogJ29rJyxcbiAgICBkYnBlZGlhT2JqZWN0OiBkYnBlZGlhUmVzcG9uc2VcbiAgfSlcblxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgQW5zd2VySXRlbSwgRmlsdGVySXRlbSwgUXVlcnlBZ2dyZWdhdGlvbiwgQ29uY2VwdEl0ZW0sIFN0b3J5LCBEb2N1bWVudEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9zcmMvdHlwZXMvY29tbW9uL3R5cGVzJ1xuXG5jb25zdCB7IERJU0NPVkVSWV9BUElfS0VZLCBESVNDT1ZFUllfRU5WLCBESVNDT1ZFUllfRU5HX0NPTExFQ1RJT04sIERJU0NPVkVSWV9BVVRPX0NPTExFQ1RJT04sIERJU0NPVkVSWV9DVVNUT01fQVBJX0tFWSwgRElTQ09WRVJZX0NVU1RPTV9DT0xMRUNUSU9OLCBESVNDT1ZFUllfQ1VTVE9NX0VOViB9ID0gQ29uZmlnLmRpc2NvdmVyeVxuXG5jb25zdCBEaXNjb3ZlcnlWMSA9IHJlcXVpcmUoJ3dhdHNvbi1kZXZlbG9wZXItY2xvdWQvZGlzY292ZXJ5L3YxJyk7XG5cbmNvbnN0IGRpc2NvdmVyeURlZmF1bHQgPSBuZXcgRGlzY292ZXJ5VjEoe1xuICB2ZXJzaW9uOiAnMjAxOS0wNC0wMicsXG4gIGlhbV9hcGlrZXk6IERJU0NPVkVSWV9BUElfS0VZLFxuICB1cmw6ICdodHRwczovL2dhdGV3YXkud2F0c29ucGxhdGZvcm0ubmV0L2Rpc2NvdmVyeS9hcGknXG59KTtcblxuLy8gZXhwb3NpbmcgV0RTIGNvbGxlY3Rpb24gaW5mbywgbGlrZWx5IHVzZSBmb3IgZGVmYXVsdCBjb2xsZWN0aW9uIHN0YXRzIGJlZm9yZSBxdWVyeVxuZXhwb3J0IGNvbnN0IHdkc0luZm8gPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgZGlzY292ZXJ5RGVmYXVsdC5saXN0Q29sbGVjdGlvbnMoeyBlbnZpcm9ubWVudF9pZDogRElTQ09WRVJZX0VOViB9LFxuICAgICAgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcbiAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6ICdvaycsXG4gICAgICAgICAgb3V0cHV0OiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgd2RzRmVlZGJhY2sgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cbiAgY29uc29sZS5sb2coXCJSZWNlaXZlZCB0cmFpbmluZyBmZWVkYmFja1wiKVxuICBjb25zb2xlLmxvZyhyZXEuYm9keS5zZWdtZW50X3RpdGxlICsgXCIgc3VibWl0dGVkIGFzIFwiICsgcmVxLmJvZHkuZmVlZGJhY2spXG4gIGNvbnNvbGUubG9nKFwiZm9yIHRoZSBxdWVyeTogXCIgKyByZXEuYm9keS5xdWVyeSlcbiAgcmVzLnNlbmQoe1xuICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgIG1lc3NhZ2U6ICdvaycsXG4gIH0pXG59XG5cbi8vIGV4cG9zaW5nIFdEUyBxdWVyeVxuZXhwb3J0IGNvbnN0IHdkc1F1ZXJ5ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXG4gIGxldCBxdWVyeSA9IHJlcS5ib2R5Lm5scS5xdWVyeVxuICBsZXQgY29sbGVjdGlvbiA9IERJU0NPVkVSWV9FTkdfQ09MTEVDVElPTlxuICBsZXQgZW52aXJvbm1lbnQgPSBESVNDT1ZFUllfRU5WXG4gIGxldCBhcGlLZXkgPSBESVNDT1ZFUllfQVBJX0tFWVxuXG4gIGxldCBxdWVyeVBhcmFtcyA9IHtcbiAgICBlbnZpcm9ubWVudF9pZDogZW52aXJvbm1lbnQsXG4gICAgY29sbGVjdGlvbl9pZDogY29sbGVjdGlvbixcbiAgICBmaWx0ZXI6IHJlcS5ib2R5LmZpbHRlciA/IHJlcS5ib2R5LmZpbHRlciA6IG51bGwsXG4gICAgbmF0dXJhbF9sYW5ndWFnZV9xdWVyeTogcmVxLmJvZHkubmxxLFxuICAgIHBhc3NhZ2VzOiB0cnVlLFxuICAgIHBhc3NhZ2VzX2NoYXJhY3RlcnM6MTUwLFxuICAgIHBhc3NhZ2VzX2NvdW50OiAzNSxcbiAgICBkZWR1cGxpY2F0ZTogdHJ1ZSxcbiAgICBkZWR1cGxpY2F0ZV9maWVsZDogXCJ0ZXh0XCIsXG4gICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgIGFnZ3JlZ2F0aW9uOiBgW1xuICAgICAgbmVzdGVkKGVucmljaGVkX3RleHQuY29uY2VwdHMpLmZpbHRlcihlbnJpY2hlZF90ZXh0LmNvbmNlcHRzLnJlbGV2YW5jZT4wLjkyKS50ZXJtKGVucmljaGVkX3RleHQuY29uY2VwdHMudGV4dCxjb3VudDo1KS50b3BfaGl0cygxKSxcbiAgICAgIG5lc3RlZChlbnJpY2hlZF90ZXh0LmtleXdvcmRzKS5maWx0ZXIoZW5yaWNoZWRfdGV4dC5rZXl3b3Jkcy5yZWxldmFuY2U+MC44KS50ZXJtKGVucmljaGVkX3RleHQua2V5d29yZHMudGV4dCxjb3VudDoxMCksXG4gICAgICB0ZXJtKGV4dHJhY3RlZF9tZXRhZGF0YS5maWxlbmFtZSxjb3VudDoxMCkudG9wX2hpdHMoMSlcbiAgICBdYFxuICB9XG5cbiAgZGlzY292ZXJ5RGVmYXVsdC5xdWVyeShxdWVyeVBhcmFtcyxcbiAgICBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcilcbiAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgIHN0YXR1czogJ05PTk9OTycsXG4gICAgICAgICAgbWVzc2FnZTogJ0JBRCcsXG4gICAgICAgICAgb3V0cHV0OiBlcnJvcixcbiAgICAgICAgICBjb2xsZWN0aW9uX2lkOiBjb2xsZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxldCBhbnN3ZXJJdGVtczogQW5zd2VySXRlbVtdID0gW11cbiAgICAgICAgbGV0IGZpbHRlckl0ZW1zOiBGaWx0ZXJJdGVtW10gPSBbXVxuICAgICAgICBsZXQgcXVlcnlBZ2dyZWdhdGlvbiA9IHt9IGFzIFF1ZXJ5QWdncmVnYXRpb25cbiAgICAgICAgbGV0IGxhYmVsTGlzdDogU3RyaW5nW10gPSBbXVxuXG4gICAgICAgIGxldCBwYXNzYWdlc1JldHJpZXZlZCA9IGZhbHNlXG5cbiAgICAgICAgaWYgKGRhdGEucGFzc2FnZXMpIHtcbiAgICAgICAgICBpZiAoZGF0YS5wYXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXNzYWdlc1JldHJpZXZlZCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLnJlc3VsdHMgPSBkYXRhLnJlc3VsdHMuc29ydChyYW5rRG9jcylcblxuICAgICAgICBmb3IgKGxldCBpdGVtIGluIGRhdGEucmVzdWx0cykge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBsZXQgbmV3SXRlbSA9IHt9IGFzIEFuc3dlckl0ZW1cblxuICAgICAgICAgICAgaWYgKHBhc3NhZ2VzUmV0cmlldmVkKSB7XG4gICAgICAgICAgICAgIGxldCBwYXNzYWdlT3V0cHV0ID0gcGFzc2FnZVJlY29uY2lsZXIoZGF0YS5yZXN1bHRzW2l0ZW1dLCBkYXRhLnBhc3NhZ2VzKVxuICAgICAgICAgICAgICBuZXdJdGVtLnRleHQgPSBwYXNzYWdlT3V0cHV0LnRleHRcbiAgICAgICAgICAgICAgbmV3SXRlbS5sZWFkaW5nX3RleHQgPSBwYXNzYWdlT3V0cHV0LmxlYWRpbmdfdGV4dFxuICAgICAgICAgICAgICBuZXdJdGVtLnRyYWlsaW5nX3RleHQgPSBwYXNzYWdlT3V0cHV0LnRyYWlsaW5nX3RleHRcbiAgICAgICAgICAgICAgbmV3SXRlbS5sb2NhdGlvbiA9IHBhc3NhZ2VPdXRwdXQubG9jYXRpb25cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRTbGljZXIoZGF0YS5yZXN1bHRzW2l0ZW1dLnRleHQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0l0ZW0udGl0bGUgPSBkYXRhLnJlc3VsdHNbaXRlbV0udGl0bGVcblxuICAgICAgICAgICAgbmV3SXRlbS5jb25maWRlbmNlID0gZGF0YS5yZXN1bHRzW2l0ZW1dLnJlc3VsdF9tZXRhZGF0YS5jb25maWRlbmNlXG4gICAgICAgICAgICBuZXdJdGVtLmZpbGVfdGl0bGUgPSBkYXRhLnJlc3VsdHNbaXRlbV0uc291cmNlX2xpbmtcbiAgICAgICAgICAgIG5ld0l0ZW0uZmlsZV9uYW1lID0gZGF0YS5yZXN1bHRzW2l0ZW1dLmV4dHJhY3RlZF9tZXRhZGF0YS5maWxlbmFtZVxuXG4gICAgICAgICAgICBuZXdJdGVtLmZpbGVfdHlwZSA9IGRhdGEucmVzdWx0c1tpdGVtXS5leHRyYWN0ZWRfbWV0YWRhdGEuZmlsZW5hbWUubWF0Y2goL1xcLlswLTlhLXpdKyQvaSlbMF1cblxuICAgICAgICAgICAgbmV3SXRlbS5maWxlX3NlZ21lbnRfY291bnQgPSBkYXRhLnJlc3VsdHNbaXRlbV0uc2VnbWVudF9tZXRhZGF0YSA/IGRhdGEucmVzdWx0c1tpdGVtXS5zZWdtZW50X21ldGFkYXRhLnRvdGFsX3NlZ21lbnRzIDogbnVsbFxuXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzW2l0ZW1dLm1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHNbaXRlbV0ubWV0YWRhdGEucGFnZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBuZXdJdGVtLnBhZ2VfbnVtID0gZGF0YS5yZXN1bHRzW2l0ZW1dLm1ldGFkYXRhLnBhZ2VfbnVtYmVyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0c1tpdGVtXS5wYWdlX251bWJlcikge1xuICAgICAgICAgICAgICAgICAgbmV3SXRlbS5wYWdlX251bSA9IHJlbW92ZUFibm9ybWFsaXRpZXMoZGF0YS5yZXN1bHRzW2l0ZW1dLnBhZ2VfbnVtYmVyKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0c1tpdGVtXS5tZXRhZGF0YS5hdXRob3IpIHtcbiAgICAgICAgICAgICAgICBuZXdJdGVtLmZpbGVfYXV0aG9yID0gZGF0YS5yZXN1bHRzW2l0ZW1dLm1ldGFkYXRhLmF1dGhvclxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0c1tpdGVtXS5tZXRhZGF0YS5wdWJsaXNoX2RhdGUpIHtcbiAgICAgICAgICAgICAgICBuZXdJdGVtLnB1Yl9kYXRlID0gZGF0YS5yZXN1bHRzW2l0ZW1dLm1ldGFkYXRhLnB1Ymxpc2hfZGF0ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHNbaXRlbV0ucGFnZV9udW1iZXIgJiYgIW5ld0l0ZW0ucGFnZV9udW0pIHtcbiAgICAgICAgICAgICAgbmV3SXRlbS5wYWdlX251bSA9IGRhdGEucmVzdWx0c1tpdGVtXS5wYWdlX251bWJlclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdJdGVtLnJhdyA9IGRhdGEucmVzdWx0c1tpdGVtXVxuXG4gICAgICAgICAgICBhbnN3ZXJJdGVtcy5wdXNoKG5ld0l0ZW0pXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRzW2l0ZW1dLmVucmljaGVkX3RleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBsZXQgZmlsdGVySXRlbSA9IHt9IGFzIEZpbHRlckl0ZW1cbiAgICAgICAgICAgICAgaWYoZGF0YS5yZXN1bHRzW2l0ZW1dLmVucmljaGVkX3RleHQuY2F0ZWdvcmllc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZGF0YS5yZXN1bHRzW2l0ZW1dLmVucmljaGVkX3RleHQuY2F0ZWdvcmllc1swXS5sYWJlbC5zcGxpdChcIi9cIilbMV1cbiAgICAgICAgICAgICAgICBpZiAobGFiZWxMaXN0LmluZGV4T2YobGFiZWwpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJJdGVtLmlkID0gbGFiZWxMaXN0Lmxlbmd0aCArIDFcbiAgICAgICAgICAgICAgICAgIGZpbHRlckl0ZW0udGV4dCA9IGxhYmVsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJJdGVtcy5wdXNoKGZpbHRlckl0ZW0pXG4gICAgICAgICAgICAgICAgICBsYWJlbExpc3QucHVzaChsYWJlbClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgcXVlcnlBZ2dyZWdhdGlvbi5vcmlnaW5hbF9xdWVyeSA9IHF1ZXJ5IFxuICAgICAgICBsZXQgY29uY2VwdEFnZ3JlZ2F0aW9uczogQ29uY2VwdEl0ZW1bXSA9IFtdIFxuICAgICAgICBsZXQgcmF3Q29uY2VwdEFnZ3JlZ2F0aW9ucyA9IFtdXG4gICAgICAgIGlmKGRhdGEuYWdncmVnYXRpb25zLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICBpZihkYXRhLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBpZihkYXRhLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnNbMF0uYWdncmVnYXRpb25zLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICByYXdDb25jZXB0QWdncmVnYXRpb25zID0gZGF0YS5hZ2dyZWdhdGlvbnNbMF0uYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9uc1swXS5yZXN1bHRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbGVfbmFtZXM6IERvY3VtZW50SXRlbVtdID0gW11cblxuICAgICAgICB0cnl7XG4gICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiByYXdDb25jZXB0QWdncmVnYXRpb25zKSB7XG4gICAgICAgICAgICBpZiAocmF3Q29uY2VwdEFnZ3JlZ2F0aW9uc1tpdGVtXS5tYXRjaGluZ19yZXN1bHRzID4gMykge1xuICAgICAgICAgICAgICBsZXQgY29uY2VwdEl0ZW0gPSB7fSBhcyBDb25jZXB0SXRlbVxuICAgICAgICAgICAgICBsZXQga2V5ID0gcmF3Q29uY2VwdEFnZ3JlZ2F0aW9uc1tpdGVtXS5rZXlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmF3Q29uY2VwdEFnZ3JlZ2F0aW9uc1tpdGVtXSlcbiAgICAgICAgICAgICAgbGV0IHRvcEhpdENvbmNlcHQgPSByYXdDb25jZXB0QWdncmVnYXRpb25zW2l0ZW1dLmFnZ3JlZ2F0aW9uc1swXS5oaXRzLmhpdHNbMF1cbiAgICAgICAgICAgICAgY29uY2VwdEl0ZW0udGV4dCA9IHRvcEhpdENvbmNlcHQudGV4dFxuICAgICAgICAgICAgICBjb25jZXB0SXRlbS5kYnBlZGlhID0gdG9wSGl0Q29uY2VwdC5kYnBlZGlhX3Jlc291cmNlXG4gICAgICAgICAgICAgIGNvbmNlcHRJdGVtLnJlbGV2YW5jZSA9IHRvcEhpdENvbmNlcHQucmVsZXZhbmNlXG4gICAgICAgICAgICAgIGNvbmNlcHRBZ2dyZWdhdGlvbnMucHVzaChjb25jZXB0SXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBxdWVyeUFnZ3JlZ2F0aW9uLmNvbmNlcHRzID0gY29uY2VwdEFnZ3JlZ2F0aW9ucy5zb3J0KHJhbmtDb25jZXB0cylcblxuICAgICAgICAgIGlmKGRhdGEuYWdncmVnYXRpb25zWzFdLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnlBZ2dyZWdhdGlvbi5tZW50aW9ucyA9IGRhdGEuYWdncmVnYXRpb25zWzFdLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnNbMF0ucmVzdWx0c1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKGRhdGEuYWdncmVnYXRpb25zWzFdLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiAgZGF0YS5hZ2dyZWdhdGlvbnNbMV0uYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9uc1swXS5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdEb2NJdGVtID0ge30gYXMgRG9jdW1lbnRJdGVtXG4gICAgICAgICAgICAgIG5ld0RvY0l0ZW0ubmFtZSA9IGRhdGEuYWdncmVnYXRpb25zWzFdLmFnZ3JlZ2F0aW9uc1swXS5hZ2dyZWdhdGlvbnNbMF0ucmVzdWx0c1tpXS5rZXlcbiAgICAgICAgICAgICAgbmV3RG9jSXRlbS5tYXRjaGluZ19yZXN1bHRzID0gZGF0YS5hZ2dyZWdhdGlvbnNbMV0uYWdncmVnYXRpb25zWzBdLmFnZ3JlZ2F0aW9uc1swXS5yZXN1bHRzW2ldLm1hdGNoaW5nX3Jlc3VsdHNcbiAgICAgICAgICAgICAgZmlsZV9uYW1lcy5wdXNoKG5ld0RvY0l0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcbiAgICAgICAgfWNhdGNoKGZhaWwpe31cblxuICAgICAgICBxdWVyeUFnZ3JlZ2F0aW9uLmZpbGVfbmFtZXMgPSBmaWxlX25hbWVzXG4gICAgICAgIHF1ZXJ5QWdncmVnYXRpb24ub3JpZ2luYWxfcXVlcnkgPSByZXEuYm9keS5ubHFcblxuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogJ29rJyxcbiAgICAgICAgICBhbnN3ZXJJdGVtcyxcbiAgICAgICAgICBmaWx0ZXJJdGVtcyxcbiAgICAgICAgICBxdWVyeUFnZ3JlZ2F0aW9uLFxuICAgICAgICAgIGRvY3VtZW50OiByZXEuYm9keS5kb2N1bWVudCA/IHJlcS5ib2R5LmRvY3VtZW50IDogbnVsbCxcbiAgICAgICAgICByYXdfb3V0cHV0OiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgd2RzQUMgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG5cbiAgbGV0IHF1ZXJ5ID0gcmVxLmJvZHkubmxxLnF1ZXJ5XG4gIGxldCBjb2xsZWN0aW9uID0gRElTQ09WRVJZX0VOR19DT0xMRUNUSU9OXG4gIGxldCBlbnZpcm9ubWVudCA9IERJU0NPVkVSWV9FTlZcbiAgbGV0IGFwaUtleSA9IERJU0NPVkVSWV9BUElfS0VZXG4gIGxldCBvdXRpdGVtcyA9IFtdXG5cbiAgbGV0IHF1ZXJ5UGFyYW1zID0ge1xuICAgIGVudmlyb25tZW50X2lkOiBlbnZpcm9ubWVudCxcbiAgICBjb2xsZWN0aW9uX2lkOiBjb2xsZWN0aW9uLFxuICAgIG5hdHVyYWxfbGFuZ3VhZ2VfcXVlcnk6IHJlcS5ib2R5Lm5scSxcbiAgICBwYXNzYWdlczogdHJ1ZSxcbiAgICBkZWR1cGxpY2F0ZTogdHJ1ZSxcbiAgICBkZWR1cGxpY2F0ZV9maWVsZDogXCJwYXNzYWdlX3RleHRcIixcbiAgICBjb3VudDowLFxuICAgIHBhc3NhZ2VzX2NoYXJhY3RlcnM6NTAsXG4gICAgcGFzc2FnZXNfY291bnQ6IDVcbiAgfVxuXG4gIGRpc2NvdmVyeURlZmF1bHQucXVlcnkocXVlcnlQYXJhbXMsXG4gICAgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcilcbiAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgIHN0YXR1czogJ05PTk9OTycsXG4gICAgICAgICAgbWVzc2FnZTogJ0JBRCcsXG4gICAgICAgICAgb3V0cHV0OiBlcnJvcixcbiAgICAgICAgICBjb2xsZWN0aW9uX2lkOiBjb2xsZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zb2xlLmxvZyhxdWVyeVBhcmFtcy5uYXR1cmFsX2xhbmd1YWdlX3F1ZXJ5KVxuXG4gICAgICAgIGxldCBhbnN3ZXJJdGVtczogQW5zd2VySXRlbVtdID0gW11cbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBkYXRhLnBhc3NhZ2VzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGxldCBvaSA9IGRhdGEucGFzc2FnZXNbaXRlbV0ucGFzc2FnZV90ZXh0LnRyaW0oKS5yZXBsYWNlKC9eXFwuLywgXCJcIikudHJpbSgpLnJlcGxhY2UoLyRcXC4vLCBcIlwiKS50cmltKClcbiAgICAgICAgICAgIGlmICghb3V0aXRlbXMuaW5jbHVkZXMoaGFzaENvZGUob2kpKSkge1xuICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IHt9IGFzIEFuc3dlckl0ZW1cbiAgICAgICAgICAgICAgb3V0aXRlbXMucHVzaChoYXNoQ29kZShvaSkpXG4gICAgICAgICAgICAgIG5ld0l0ZW0udGV4dCA9IG9pXG4gICAgICAgICAgICAgIG5ld0l0ZW0udGl0bGUgPSBxdWVyeVBhcmFtcy5uYXR1cmFsX2xhbmd1YWdlX3F1ZXJ5XG4gICAgICAgICAgICAgIGFuc3dlckl0ZW1zLnB1c2gobmV3SXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbmNvbnNvbGUubG9nKFwiYWk6IFwiICsgSlNPTi5zdHJpbmdpZnkoYW5zd2VySXRlbXMpKVxuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogJ29rJyxcbiAgICAgICAgICBhbnN3ZXJJdGVtc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gcmFua0NvbmNlcHRzIChhLCBiKSB7XG4gIGlmIChhLnJlbGV2YW5jZSA+IGIucmVsZXZhbmNlKSB7XG4gICAgcmV0dXJuIC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDFcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5rRG9jcyAoYSwgYikge1xuICBpZiAoYS5yZXN1bHRfbWV0YWRhdGEuY29uZmlkZW5jZSA+IGIucmVzdWx0X21ldGFkYXRhLmNvbmZpZGVuY2UpIHtcbiAgICByZXR1cm4gLTFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMVxuICB9XG59XG5cblxuLy9DaGFuZ2UgY2hhcmFjdGVyIGZyb20gMTAyJF97IH0kIHRvIDEwMiBvciA0NyRfeyB9UCB0byA0Ny5cbmZ1bmN0aW9uIHJlbW92ZUFibm9ybWFsaXRpZXMgKG51bSkge1xuICByZXR1cm4gbnVtWzBdLnJlcGxhY2UoL1tgfiFAIyQlXiYqKClffCtcXC09Pzs6IGEtekEtWidcIiwuPD5cXHtcXH1cXFtcXF1cXFxcXFwvXS9naSwgJycpXG59XG5cbmZ1bmN0aW9uIHBhc3NhZ2VSZWNvbmNpbGVyKHdkc19kb2MsIHdkc19wYXNzYWdlcykge1xuICBsZXQgdGFyZ2V0RG9jID0gd2RzX2RvYy5pZFxuICBsZXQgcmVzdWx0T2JqZWN0ID0ge1xuICAgIHRleHQ6IFwiXCIsXG4gICAgbGVhZGluZ190ZXh0OiBcIlwiLFxuICAgIHRyYWlsaW5nX3RleHQ6IFwiXCIsXG4gICAgbG9jYXRpb246IFswLDBdXG4gIH1cblxuICBmb3IgKGxldCBpIGluIHdkc19wYXNzYWdlcykge1xuICAgIGlmICh3ZHNfcGFzc2FnZXNbaV0uZG9jdW1lbnRfaWQgPT09IHRhcmdldERvYykge1xuICAgICAgcmVzdWx0T2JqZWN0LnRleHQgPSB3ZHNfcGFzc2FnZXNbaV0ucGFzc2FnZV90ZXh0XG4gICAgICByZXN1bHRPYmplY3QubG9jYXRpb25bMF0gPSB3ZHNfcGFzc2FnZXNbaV0uc3RhcnRfb2Zmc2V0XG4gICAgICByZXN1bHRPYmplY3QubG9jYXRpb25bMV0gPSB3ZHNfcGFzc2FnZXNbaV0uZW5kX29mZnNldFxuICAgICAgaWYgKHdkc19wYXNzYWdlc1tpXS5zdGFydF9vZmZzZXQgPT09IDApIHtcbiAgICAgICAgcmVzdWx0T2JqZWN0LmxlYWRpbmdfdGV4dCA9ICdcIidcbiAgICAgICAgcmVzdWx0T2JqZWN0LnRleHQgPSByZXN1bHRPYmplY3QudGV4dFxuICAgICAgICBpZiAod2RzX2RvYy50ZXh0Lmxlbmd0aCA+IHdkc19wYXNzYWdlc1tpXS5lbmRfb2Zmc2V0ICsgMTYwKSB7XG4gICAgICAgICAgcmVzdWx0T2JqZWN0LnRyYWlsaW5nX3RleHQgPSB3ZHNfZG9jLnRleHQuc2xpY2Uod2RzX3Bhc3NhZ2VzW2ldLmVuZF9vZmZzZXQsIHdkc19wYXNzYWdlc1tpXS5lbmRfb2Zmc2V0ICsgMTYwKSArICcgLi4uXCInXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0T2JqZWN0LnRyYWlsaW5nX3RleHQgPSB3ZHNfZG9jLnRleHQuc2xpY2Uod2RzX3Bhc3NhZ2VzW2ldLmVuZF9vZmZzZXQsIHdkc19kb2MudGV4dC5sZW5ndGgpICsnXCInXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAod2RzX3Bhc3NhZ2VzW2ldLmVuZF9vZmZzZXQgPT09IHdkc19kb2MudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0T2JqZWN0LnRleHQgPSByZXN1bHRPYmplY3QudGV4dFxuICAgICAgICByZXN1bHRPYmplY3QudHJhaWxpbmdfdGV4dCA9ICdcIidcbiAgICAgICAgaWYgKHdkc19wYXNzYWdlc1tpXS5zdGFydF9vZmZzZXQgLSAxNjAgPiAwKSB7XG4gICAgICAgICAgcmVzdWx0T2JqZWN0LmxlYWRpbmdfdGV4dCA9ICdcIi4uLicgKyB3ZHNfZG9jLnRleHQuc2xpY2Uod2RzX3Bhc3NhZ2VzW2ldLnN0YXJ0X29mZnNldCAtIDE2MCwgd2RzX3Bhc3NhZ2VzW2ldLnN0YXJ0X29mZnNldClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRPYmplY3QubGVhZGluZ190ZXh0ID0gJ1wiJyArIHdkc19kb2MudGV4dC5zbGljZSgwLCB3ZHNfcGFzc2FnZXNbaV0uc3RhcnRfb2Zmc2V0KVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdE9iamVjdC5sZWFkaW5nX3RleHQgPSAnXCIuLi4gJyArIHdkc19kb2MudGV4dC5zbGljZSh3ZHNfcGFzc2FnZXNbaV0uc3RhcnRfb2Zmc2V0IC0gMTA1LCB3ZHNfcGFzc2FnZXNbaV0uc3RhcnRfb2Zmc2V0KVxuICAgICAgICByZXN1bHRPYmplY3QudGV4dCA9IHJlc3VsdE9iamVjdC50ZXh0XG4gICAgICAgIHJlc3VsdE9iamVjdC50cmFpbGluZ190ZXh0ID0gd2RzX2RvYy50ZXh0LnNsaWNlKHdkc19wYXNzYWdlc1tpXS5lbmRfb2Zmc2V0LCB3ZHNfcGFzc2FnZXNbaV0uZW5kX29mZnNldCArIDEwNSkgKyAnIC4uLlwiJ1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKE51bWJlcihpKSA9PT0gKHdkc19wYXNzYWdlcy5sZW5ndGggLSAxKSkge1xuICAgICAgLy8gbGFzdCBvbmUsIGp1c3Qgc2xpY2UgdGhlIHRleHRcbiAgICAgIHJlc3VsdE9iamVjdCA9IHRleHRTbGljZXIod2RzX2RvYy50ZXh0KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRPYmplY3Rcbn1cblxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgdmFyIGhhc2ggPSAwLFxuICAgICAgICBpLCBjaHI7XG4gICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaHIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xufVxuXG5mdW5jdGlvbiB0ZXh0U2xpY2VyKHRleHQpIHtcbiAgbGV0IHJlc3VsdE9iamVjdCA9IHtcbiAgICB0ZXh0OiBcIlwiLFxuICAgIGxvY2F0aW9uOiBbMCwwXSxcbiAgICBsZWFkaW5nX3RleHQ6IFwiXCIsXG4gICAgdHJhaWxpbmdfdGV4dDogXCJcIlxuICB9XG5cbiAgcmVzdWx0T2JqZWN0LmxlYWRpbmdfdGV4dCA9ICdcIicgKyB0ZXh0LnNsaWNlKDAsMjkwKVxuICByZXN1bHRPYmplY3QudGV4dCA9IFwiXCJcbiAgcmVzdWx0T2JqZWN0LnRyYWlsaW5nX3RleHQgPSAnLi4uXCInXG4gIHJlc3VsdE9iamVjdC5sb2NhdGlvblswXSA9IDBcbiAgcmVzdWx0T2JqZWN0LmxvY2F0aW9uWzFdID0gMjUwXG5cbiAgcmV0dXJuIHJlc3VsdE9iamVjdFxufSIsIi8vIENvcHlyaWdodCBJQk0gQ29ycG9yYXRpb24gMjAxOVxuXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJ1xuaW1wb3J0IHJwIGZyb20gJ3JlcXVlc3QtcHJvbWlzZS1uYXRpdmUnXG5cbmltcG9ydCB7IGdldFJlZGlyZWN0VXJsIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy11dGlscydcblxuXG4vLyB0ZXN0IGNhbGwsIGV4cG9zZWQgZHVyaW5nIGRldiBmb3IgcXVpY2sgdGVzdCB0aGF0IHNlcnZlciBpcyBhLW9rXG5leHBvcnQgY29uc3Qgb25Qb3N0TWVzc2FnZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnNlbmQoe1xuICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgIG1lc3NhZ2U6ICdvaydcbiAgfSlcbn0iLCIvLyBDb3B5cmlnaHQgSUJNIENvcnBvcmF0aW9uIDIwMTlcblxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbidcbmltcG9ydCBwYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5cbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IEFwaVJvdXRlciB9IGZyb20gJy4vYXBpJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnXG5cbmNvbnN0IHsgcG9ydCwgU1RBVElDX0ZJTEVfUEFUSCwgUkVBQ1RfQVBQX1VSTF9QQVRIIH0gPSBDb25maWdcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG4vL3NlcnZlciBjb25maWcgXG5hcHAudXNlKGNvbXByZXNzaW9uKHsgbGV2ZWw6IDkgfSkpXG5hcHAudXNlKHBhcnNlci5qc29uKCkpXG5hcHAudXNlKHBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG5hcHAudXNlKGAke1JFQUNUX0FQUF9VUkxfUEFUSH0vYXBpYCwgQXBpUm91dGVyKCkpICAvLzxKUEg+IG90aGVyIHByb2plY3RzaGF2ZSBTZWN1cmVkQXBpUm91dGVyIGhlcmUuLlxuXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcbiAgLy9zZXJ2ZSBzdGF0aWMgZmlsZXMgZnJvbSBkaXN0XG4gIGFwcC51c2UoUkVBQ1RfQVBQX1VSTF9QQVRILGV4cHJlc3Muc3RhdGljKCdkaXN0JykpXG4gIFxuICAvL2ZvciBldmVyeSByb3V0ZSByZXF1ZXN0LCBzZW5kIGJhY2sgaW5kZXguaHRtbCB3aGljaFxuICAvL3JlZmVyZW5jZXMgdGhlIGJ1bmRsZS5qcyBmaWxlIHRoYXQgaGFuZGxlcyB0aGUgY2xpZW50LXNpZGUgcm91dGluZ1xuICBhcHAuZ2V0KCcqJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoU1RBVElDX0ZJTEVfUEFUSCwgJ2luZGV4Lmh0bWwnKSlcbiAgfSlcbn1cblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBmcm9udC1lbmQgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0OiR7cG9ydH1gKVxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGVlcmlvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyYXdsZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXF1ZXN0LXByb21pc2UtbmF0aXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndhdHNvbi1kZXZlbG9wZXItY2xvdWQvZGlzY292ZXJ5L3YxXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=