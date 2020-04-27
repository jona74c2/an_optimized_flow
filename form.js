"use strict";
import { settingsObject } from "./modules/settings";
window.addEventListener("DOMContentLoaded", start);

let jsonData = [];
const settings = settingsObject();
let HTML = {};

const user = {
  name: "",
  email: "",
  company: "",
  job: "",
  country: "",
  visits: "",
};

function start() {
  HTML.form = document.querySelector("form");
  HTML.form.addEventListener("submit", submitFormData);
  /* getJsonData(); */
}

function submitFormData() {
  event.preventDefault();
  const elements = HTML.form.elements;
  user.name = elements.name.value;
  user.email = elements.email.value;
  user.company = elements.company.value;
  user.job = elements.job.value;
  console.log(user);
  post(user);
}

async function getJsonData() {
  const response = await fetch(settings.endpoint + "?max=100", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
  });
  jsonData = await response.json();
}

async function post(data) {
  const postData = JSON.stringify(data);
  const response = await fetch(settings.endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  });
  console.log(await response.json());
}

async function deleteIt(id) {
  const response = await fetch(settings.endpoint + "/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
  });
  console.log(await response.json());
}

async function put(id, data) {
  let postData = JSON.stringify(data);
  const response = await fetch(settings.endpoint + "/" + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": settings.apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  });
  console.log(await response.json());
}
