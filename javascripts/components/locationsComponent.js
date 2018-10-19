import events from "../helpers/events.js"

const writeLocations = arrayofLocations => {
    let domString = "";
    arrayofLocations.forEach(location => {
        domString += `
            <div class="
                    location card col-md-3">
                    <div class="thumbnail">
                        <img src="${location.locationImg}" 
                        alt="" width="90%">
                        <div class="caption">
                            <h3 id="thumbnail-label" class="text-center">${location.name}</h3>
                            <p>
                                <span class="address">${location.address}</span>
                            </p>
                        </div>
                        <div class="caption card-footer">
                            <p class="time text-center">${location.time}</p>
                        </div>
                    </div>
                </div>
            `;
  });
  //write to dom
  $("#locations-div").append(domString);
  events.eventHandler();
};

const chosenLocations = (input) => {
    console.log(input);
}

export default {writeLocations, chosenLocations}  