

//Get our input field by it's ID of 'usernameInput' and create an event listener for 'keyup'
const usernameInput = document.getElementById("searchInput")

// Capture the event in a 'let' called 'searchQuery' - storing the value
usernameInput.addEventListener('keyup', function(event){
    // use even.target to returns the element that triggered the event which in the case of our input box gives us the value the user typed in!
    let searchQuery = event.target.value.toLowerCase()
    // getElementsByClassName 
    let allNamesDOMCollection = document.getElementsByClassName("name")
    
    for(let counter =0; counter<allNamesDOMCollection.length; counter++){
        const currentNames = allNamesDOMCollection[counter].textContent.toLowerCase()
        
        // Create a conditional that checks if currentName is equal to the user's search query!
        // use the method includes() to verify if the name matches
        if(currentNames.includes(searchQuery)){
            // use display "block" to show the matches
            allNamesDOMCollection[counter].style.display ="block"
        }
        else{
            // use display "none" to hidde unmatches
            allNamesDOMCollection[counter].style.display ="none"
        }
    }
 
})




