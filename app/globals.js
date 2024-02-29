import { decode, encode } from "base-64";

global.TextEncoder = require("text-encoding").TextEncoder;

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
