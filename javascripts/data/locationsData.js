// Load Locations
const loadLocations = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done(data => {
                resolve(data.locations);
            })
            .fail(error => {
               reject(error);
            })
    });

}

// Load Specific Locations For Movies

const loadLocationsForMovie = (movies) => {
    return new Promise ((resolve) => {
        $.get('../db/locations.json')
            .done((data) => {
            const movieLocations = movies.map(movie => {
                const matchedLocations = data.locations.filter(location => movie.locations === location.id)
                return location            
            })
            })
        })    
}

// const loadPinsOnBoards = (boards) => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/pins.json')
//         .done((data) => {
//             const boardsWithPins = boards.map(board => {
//                 const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
//                 board.pins = matchingPins;
//                 return board;
//             })
//             resolve(boardsWithPins);
//         })
//         .fail((error) => {
//             reject('error loadPinsOnBoard', error);
//         })
//     })
// }

export default {loadLocations, loadLocationsForMovie}