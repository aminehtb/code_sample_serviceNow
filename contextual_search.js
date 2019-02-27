/*
*created by amine 27/20/2019
*contextual search of by a text on a context 
*in search context module in main servicenow developer window select a context and make sure what resources it search in
*then copy the sys_id and pass it as the search context.
*/
var searchRequest = new SNC.SearchRequest();
searchRequest.query.freetext = 'cannot access sap';
searchRequest.context = '091fa3d3c37221003d2ae219cdba8f0e';
searchRequest.meta.window.end = 0;
searchRequest.meta.window.end = 100;

var searchResponse = searchRequest.submit();
var obj = new JSON().decode(searchResponse.toJSON());
gs.warn(JSON.stringify(obj));
