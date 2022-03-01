function read_display_Quote(){
    //console.log("inside the function")

    //get into the right collection 
    db.collection("quotes").doc("tuesday")
    .onSnapshot(tuesdayDoc => { // the => is an input parameter, tuesdayDoc is a 
        console.log(tuesdayDoc.data());
        document.getElementById("quote-goes-here").innerHTML=tuesdayDoc.data().quote;
    })
}
read_display_Quote();

function insertName(){
    //to check if the user us logged in:
    firebase.auth().onAuthStateChanged( user =>{
        if (user){
            console.log(user.uid); //let me know who is the user that logged in to get the UID
            currentUser = db.collection("users").doc(user.uid); // will go to the firestore and go to the ...
            currentUser.get().then(userDoc =>{
                //get the user name
                var user_Name = userDoc.data().name;
                console.log(user_Name)
                $("#name-goes-here").text(user_Name); //jquery way
                // document.getElementByID("name-goes-here").innerText=user_Name;  //JS way
            })
        }
    })
}

insertName();