import Vue from 'vue';

export function mashupCalls(query) {
    return fetch(query).then( response => {
        return response.json(); // server returned valid JSON
    }).then( parsed_result => {
        return parsed_result;
    });
}

export var bus = new Vue();
