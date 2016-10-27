import $ from 'jquery';
import Vue from 'vue';
import RX from 'rx';

console.log('RxJS Running...');
// http://reactivex.io/documentation/operators.html

var search_input = $('#search-input')
var search_results = $('#search-results');
var keyup = Rx.Observable.fromEvent(search_input, 'keyup')
	.map(e => e.target.value)
	.filter(text => text.length > 2); 
    // http://reactivex.io/documentation/operators/from.html 
    // http://reactivex.io/documentation/operators/map.html
	
var throttle = keyup.debounce(1000),
	unique = throttle.distinctUntilChanged(),
	suggestions = unique.flatMapLatest(searchData);
	// http://reactivex.io/documentation/operators/flatmap.html
    // http://reactivex.io/documentation/operators/distinct.html
    // http://reactivex.io/documentation/operators/debounce.html

suggestions.subscribe(data => {
    var results = data.data;
    /* Do something with the data like binding */
    search_results.empty();
    $.each(results, (index, value) => 
        $('<li class="data-io"><a target="_blank" href="https://datausa.io/profile/'+ value[3] +'/'+ value[7] +'">' + value[4] + '</a></li>').appendTo(search_results)  
    );
}, error => {
    /* handle any errors */
    search_results.empty();

    $('<li>Error: ' + error + '</li>').appendTo(search_results);
});
//http://reactivex.io/documentation/operators/subscribe.html


function searchData (term) {
    return $.ajax({
        url: 'https://ostrich-api.datausa.io/attrs/search/',
        type: 'GET',
        data: {
            limit: 100,
            q: term,
            kind: ''
        }
    }).promise();
}