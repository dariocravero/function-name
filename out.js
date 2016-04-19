"use strict";

function run() {
  function a() {}
  function a() {}
  var o1, o2;
  return Promise.resolve().then(function () {
    o1 = {
      a: a };
    o2 = {
      a: a };
  });
}

