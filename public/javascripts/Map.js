let placeSearch, autocomplete;
const autocompleteInput = document.getElementById('autocomplete');

function initAutocomplete() {
    console.log('eo')
    autocomplete = new google.maps.places.Autocomplete(
        (autocompleteInput),
        {types: ['geocode']}
    );   
    
    autocomplete.addListener('place_changed', () => {
        console.log('new locat', autocomplete.getPlace())
    })
}


