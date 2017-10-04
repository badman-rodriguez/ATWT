import test from "ava";
import apiService from "../../../apiService.js";

test('ApiTest:GetProducts', async t => {
  t.plan(4);
  let apiResponse;
  let apiCall = await apiService.getProducts().then(response => {
    apiResponse = response;
  });

  t.is(apiResponse.status, 200);
  t.is(typeof apiResponse.data, 'object' );
  t.is(typeof apiResponse.data[0]._id, 'string');
  t.not(typeof apiResponse.data[0].product, 'string');

})


test('ApiTest:Search', async t => {
  t.plan(4);
  let apiResponse;
  let apiCall = await apiService.searchProducts('search').then(response => {
    apiResponse = response;
  });

  t.is(apiResponse.status, 200);
  t.is(typeof apiResponse.data, 'object' );
  t.is(typeof apiResponse.data[0]._id, 'string');
  t.not(typeof apiResponse.data[0].product, 'string');

})