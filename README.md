# BEAR-WATCHER aka PEAK-A-POOH

This app is designed to allow a user to add bears of their choosing to the page; users can add as many bears as they would like. Bears are written as cards to the DOM using Javascript.

# Motivation

The challenge of this project was to break up the Javascript into separate, functioning modules. This also experiments with using jQuery to write to the DOM. 

# Code

PEAK-A-POOH was created with a combination of: HTML5, E6 Javascript modules, jQuery, and CSS. 

# Framework

Javascript

# Features

Add bears to the page by filling out a customer form; enter bear name, color, species, and image URL and submit to add a bear card containing all the bear's info to the page. User can add multiple bears. 

# Code Sample

```
const makeBears = (array) => {
  $("#bears").html("");
  array.forEach((userBears) => {
    $("#bears").append(`<div class="card" style="width: 18rem;">
        <img src="${userBears.bearImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4>${userBears.bearName}</h4>
          <p>${userBears.bearColor}</p>
          <p><i>${userBears.bearSpecies}</i></p>
        </div>
      </div>`);
  });
};

export { makeBears };
```
