// ==UserScript==
// @name         Gmail Simple
// @namespace    https://github.com/CrisFeo/gmail-simple
// @@downloadURL https://raw.githubusercontent.com/CrisFeo/gmail-simple/master/dist/gmail-simple.user.js
// @version      1.0.0
// @description  Spruces up the basic HTML version of gmail to make it look nicer and function better with vimium.
// @author       CrisFeo
// @match        https://mail.google.com/mail/u/*/h/*
// @grant        none
// ==/UserScript==

// Bundled styles
(function(){
  var s = document.createElement("style");
  s.type = "text/css";
  s.innerHTML = "#gbar,#guser,.gbh {  display: none; }td[width=\"143\"] {  display: none; }input[name=\"nvp_site_web\"],a[href=\"?&pv=tl&v=as\"],a[href=\"?&pv=tl&v=caf\"] {  display: none; }a[href=\"?&v=cl\"],table.l {  display: none; }input[name=\"nvp_a_sp\"],select[name=\"tact\"],input[name=\"nvp_tbu_go\"] {  display: none; }form[name=\"f\"] table:nth-of-type(3) {  display: none; }.ft {  display: none; }table {  background-color: white; }  table td[width=\"5\"][bgcolor=\"#C3D9FF\"] {    background-color: white; }  table.m td {    padding: 10px 5px; }    table.m td[height=\"5\"] {      display: none; }    table.m td[bgcolor=\"#C3D9FF\"] {      background-color: white; }    table.m td a[href=\"?&s=r\"] img {      display: none; }  table.th tr[bgcolor=\"#E8EEF7\"] {    background-color: white; }  table.th td {    border-style: none;    padding: 10px 5px; }    table.th td:nth-child(1) {      width: 3%; }      table.th td:nth-child(1) img {        display: none; }    table.th td:nth-child(2) {      width: 15%; }      table.th td:nth-child(2) .ar {        display: none; }    table.th td:nth-child(3) {      width: auto; }    table.th td:nth-child(4) {      width: 5%; }";
  (document.head || document.documentElement).appendChild(s);
})();

// Bundled code
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('Gmail Simple loaded');

},{}]},{},[1]);