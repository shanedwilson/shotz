const writeLocations = arrayofLocations => {
    let domString = "";
    arrayofLocations.forEach(location => {
        domString += `
                <div class="location card col-md-3 px-0 m-3">
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
    let locations = $(".location")
    locations.each((i, location) => {       
        $(location).not(":icontains("+input+")").hide();
        $(".location:icontains("+input+")").show();
    })
}

const chosenTime = (selectedBtn) => {
    if (selectedBtn === "All") {
        $(".location").show();
        $( ".form-control" ).blur();
        $('.form-control').val("");
    } else {
        let locations = $(".location");
        locations.each((i, location) => {
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

export default {writeLocations, chosenLocations, chosenTime}  