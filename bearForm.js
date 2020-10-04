import { makeBears } from './river.js';

let userBears = [];

const addBearForm = () => {
  $("#bearForm").html(`<div id="formWrapper">
    <div id="formContainer">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName">Name</label>
            <input type="text" class="form-control" id="inputName" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputColor">Color</label>
            <input type="text" class="form-control" id="inputColor" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputSpecies">Species</label>
            <input type="text" class="form-control" id="inputSpecies" placeholder="Example: Polar Bear"/>
          </div>
          <div class="form-group col-md-6">
            <label for="imgUrl">Image URL</label>
            <input
              type="text"
              class="form-control"
              id="imgUrl"
              placeholder="Paste IMG URL here"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary" id="submitBearBtn">Submit</button>
      </form>
    </div>
  </div>`);
};



const submitBtn = () => {
    $('#submitBearBtn').on('click', (e) => {
        e.preventDefault();
        const bearName = $('#inputName').val();
        const bearColor = $('#inputColor').val();
        const bearSpecies = $('#inputSpecies').val();
        const bearImg = $('#imgUrl').val();

        console.log('click');

        userBears.push({
            bearName: bearName,
            bearColor: bearColor,
            bearSpecies: bearSpecies,
            bearImg: bearImg
        });
        makeBears(userBears);
    })
    console.log(userBears);
}

export { addBearForm, submitBtn };
