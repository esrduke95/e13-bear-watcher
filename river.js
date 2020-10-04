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
