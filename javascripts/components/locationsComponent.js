import locationsData from '../data/locationsData.js'

const writeLocations = arrayofLocations => {
    let domString = "";
    arrayofLocations.forEach(location => {
        domString += `
                <div id="${location.id}"class="location card col-md-3 px-0 m-3">
                    <div class="card-body d-flex flex-column">
                        <div class="thumbnail">
                            <img src="${location.locationImg}" 
                            alt="" width="100%">
                        </div>
                        <div class="caption">
                            <h3 id="thumbnail-label" class="text-center">${location.name}</h3>
                            <p class='text-center'>
                                <span class="address">${location.address}</span>
                            </p>
                        </div>
                        <div class="text-center mt-auto">Used in movies</div>
                        <div class="caption card-footer mt-auto">
                            <p class="time text-center">${location.time}</p>
                        </div>    
                    </div>
                </div>
        `;
  });
  //write to dom
  $("#locations-div").append(domString);
  timeColor();
};

const chosenLocations = (input) => {
    $(".location").each((i, location) => {       
        $(location).not(":icontains("+input+")").hide();
    })
}

const chosenTime = (selectedBtn) => {
    if (selectedBtn === "All") {
        $(".location").show();
        $( ".form-control" ).blur();
        $('.form-control').val("");
    } else {
        $(".location").each((i, location) => {
            // $(location).show();
            $(location).not(":contains("+selectedBtn+")").hide();
        })
    }    
}

const timeColor = () => {
    let times = $(".time");
    times.each((i, time) => {
        if ($(time).html() === "Morning") {
            $(time).addClass("bg-warning")
        } else if ($(time).html()=== "Afternoon"){
            $(time).addClass("bg-primary")
        } else if ($(time).html()=== "Evening"){
            $(time).addClass("bg-success")
        } else if ($(time).html()=== "After Dark"){
            $(time).addClass("bg-secondary")
        }
    })
}

$.expr[':'].icontains = $.expr.createPseudo(function(text) {
    return function(e) {
        return $(e).text().toUpperCase().indexOf(text.toUpperCase()) >= 0;
    };
});

const initialLocationsView = () => {
    locationsData.loadLocations()
    .then((locations) => {
        writeLocations(locations);
    })
    .catch((error) => {
        console.error(error);
    })
}

const hideLocations = (movieLocations) => {
    $(".location").each((i, location) => {   
        for (let i = 0; i < movieLocations.length; i++) {
            if( $.inArray(location.id, movieLocations) == -1 ) {
            $(location).hide();
            }
        }
    })
};
   
export default {initialLocationsView, chosenLocations, chosenTime, hideLocations}  