// Set or edit cookie value
// Cookies.set('Test', 'Value')

// Get cookie value
// Cookies.get('Test')

// Remove cookie
// Cookies.remove('Test')

$(document).ready(function(){

    let cookieValue = Cookies.get('Modal')

    // Automatically open modal on load if cookie is not set
    if(cookieValue == null)
        $('#modalButton').click()


    // If modal close button is clicked, set cookie value
    $('.closeModal').click(function(){
        Cookies.set('Modal', 'Opened')
    })


    // Unset cookie value if unset button is clicked
    $('#btnUnsetCookie').click(function(){
        Cookies.remove('Modal')
    })

});