/**
 * Coderill Javascript Library v1.0.0
 *
 * Author: Coderill
 * URI: http://coderill.com
 * Created at: 2017, February 28
 * Updated at: 2017, February 28
 * Version: 1.0.0
 * License: MIT
 *
 * Description: This is a open source software. Released under the MIT license. Copyright 2015-2016 Coderill.
 */




/**
 * usages: ucwords(string)
 * Returns a string with the first character of each word
 * It takes 1 parameter of string
 *
 */
function ucwords(str) {
    txt = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });

    return txt;
}







/**
 * usages: ucfirst(string)
 * Returns a string with the first character of given string
 * It takes 1 parameter of string
 *
 */
function ucfirst(str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
}







/**
 * usages: ucSentence(string)
 * Returns a string with the first character of each sentence of given string
 * It takes 1 parameter of string
 *
 */
function ucSentence(str) {
    return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}








/**
 * usages: strTrim(string)
 * Strip whitespace from the beginning and end of a string
 * It takes 1 parameter of string
 *
 * NB: if browser not support tream() method
 */
function strTrim(str) {
    return str.replace(/^\s+|\s+$/gm, '');
}







/**
 * usages: strReplace(search, replace, string)
 * Replace all occurrences of the search string with the replacement string
 * It takes 3 parameteres of string
 *
 */
function strReplace(search, replace, str) {
    var txt = str.replace(/^\s+|\s+$/gm, '');
    return txt.split(search).join(replace);
}









/**
 * usages: compare(array, field)
 * It takes 3 parameteres of array of array:object, key:string and by:string
 * This is a sorting system
 *
 * return:
 */
function compare(obj, key, by = "asc") {
	return obj.sort(function(x, y) {
		if(by === "asc") {		// asc
			if (x[key] < y[key])
				return -1;
			if (x[key] > y[key])
				return 1;
		} else {				// desc
			if (x[key] > y[key])
				return -1;
			if (x[key] < y[key])
				return 1;
		}

		return 0;
	});
}









/**
 * find the object index in an array
 * useage: findObjectIndex(container, single)
 * parameters:
 	container: 	Required. Specifies the array.
	single: 	Required. Specifies the object.
 *
 * return: number. if find the object then return the index of the object. Else return -1
 *
 */
function findObjectIndex(container, single) {
	var objectLength 	= Object.keys(single).length,
		result 			= [],
		resultset 		= [];

	[].forEach.call(container, function(row, index) {
		var eachObjectKeys 	= Object.keys(row),
			data 			= [];

		[].forEach.call(eachObjectKeys, function(item, key){
			data[key] = false;

			if (container[index][item] == single[item]) {
				data[key] = true;
			}
		});

		result.push(data);
	});

	[].forEach.call(result, function(item, key) {
		resultset.push(dupCounter(item, true));
	});

	return resultset.indexOf(objectLength);
}










/**
 * count duplicate value in an array
 * useage: dupCounter(container, value = null)
 * parameters:
 	container: Required. Specifies the array.
 	value: Optional. Specifies the value of an array.
 * return: number or, object:
 *
 */
function dupCounter(container, value = null) {
	var counter = (value == null || value == "") ? {} : 0,
		i = j = 0;

	for(i; i < container.length; i++) {
		if(value == null || value == "") {
			counter[container[i]] = 0;

			for(j; j < container.length; j++) {
				if(container[i] == container[j]){ counter[container[i]] += 1; }
			}
		} else {
			if(container[i] == value) { counter += 1; }
		}
	}

	return counter;
}








/**
 * The strPad() function pads a string to a new length
 * useage: strPad(str, length, symbol, direction)
 * parameters:
 	'str'			Required. Specifies the string to pad.
 	'length' 		Required. Specifies the new string length. If this value is less than the original length of the string, nothing will be done.
 	'symbol' 		Required. Specifies the string to use for padding. Default is whitespace
 	'direction'		Optional. Specifies what side to pad the string.
		Possible values:
			'both' - Pad to both sides of the string. If not an even number, the right side gets the extra padding
			'left' - Pad to the left side of the string. (This is default)
			'right' - Pad to the right side of the string.
 * return: string
 *
 */
function strPad(str, len, symbol, direction = "l") {
	// set the default variables
	var symbolArray = [],
		mainString 	= null,
		padString	= null;

	for (var i = 0; i < len-str.length; i++) {
		symbolArray.push(symbol);
	}

	mainString = padString = symbolArray.join("");

	if(direction === "l") {
		mainString = symbolArray.join("") + str;
	} else if(direction === "r") {
		mainString = str + symbolArray.join("");
	} else if(direction === "b") {
		var middle = Math.ceil(padString.length / 2),
			prefix = padString.substr(middle, padString.length),
			suffix = padString.substr(0, middle);

		mainString = prefix + str + suffix;
	} else {
		mainString = null;
	}

	return mainString;
}










 /**
  * check the leap year
  * useage: leapYear(year)
  * parameters:
  		year: Optional. Specifies the year.
  * return: 0 or 1. is leap year return 1 else return 0
  */
function leapYear(year = null) {
	var x = null,
		y = (year == null || y == "") ? new Date().getFullYear() : year;

	x = (y % 100 === 0) ? (y % 400 === 0) : (y % 4 === 0);
	return x;
}










/**
 * reverse the string
 * useage: strReverse(container)
 * parameters:
 	container: Required. Specifies the string.
 * return: string
 */
function strReverse(container) {
	if(typeof container == "string") {
		return container.split("").reverse().join("");
	}

	return "This is not string.";
}









/**
 * email validation
 * useage: isEmail(container)
 * parameters:
 	container: Required. Specifies the string(email).
 * return: boolean
 */
function isEmail(container) {
	var patteran = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return patteran.test(container);
}









/**
 * browser detection
 * useage: getBrowser()
 *
 * return: name of the browser
 */
function getBrowser() {
    var browser = null;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if(isFirefox) { browser = "Firefox"; }
    if(isChrome) { browser = "Chrome"; }
    if(isSafari) { browser = "Safari"; }
    if(isOpera) { browser = "Opera"; }
    if(isIE) { browser = "IE"; }
    if(isEdge) { browser = "Edge"; }
    if(isBlink) { browser = "Blink"; }

    return browser;
}
