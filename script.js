function get_value(){ 

    
    var name = document.getElementById('pet_name'); 
    var pet_name = name.value; 

    var type = document.getElementById('pet_type'); 
    type.addEventListener('change', function() {
        var pet_type = type.value;  
    });

    var age = document.getElementById('pet_age'); 
    var pet_age = age.value; 

    var happiness = document.getElementById('pet_happy'); 
    var pet_happy = happiness.value; 

    var hunger = document.getElementById('pet_hungry'); 
    var pet_hungry = hunger.value; 

    if((pet_name.trim === "") || (pet_type === "-") || (pet_age=== "0") ||(pet_happy=== "0") ||(pet_hungry=== "0") )
    {
        alert("Plz Fill all fields")
    }
    else{ 

        var line = document.getElementById('line'); 

        function feed(){ 
            pet_hungry = Math.max(pet_hungry - 20, 0);
            
            line.textContent= (`${pet_name} has been fed! Hunger level is now ${pet_hungry}.`);
        }
    
        function play(){ 
            pet_happy = Math.min(pet_happy + 20, 100);
            line.textContent=(`${pet_name} had fun playing! Happiness level is now ${pet_happy}.`);
    
        }
    
        function agePet(){ 
            pet_age++; 
            pet_happy = Math.max(pet_happy - 5, 0);
            pet_hungry = Math.min(pet_hungry + 10, 100);
            line.textContent=(`${pet_name} is now ${pet_age} years old. Happiness is ${pet_happy} and hunger is ${pet_hungry}.`);
        }
    
        var div_content =document.getElementById("left")
        div_content.innerHTML = "";
    
        if(pet_type = "Cat"){ 
            document.getElementById("image").src = "icons8-cat-100.png"
        }
        else if (pet_type ="Dog"){
            document.getElementById("image").src = "icons8-dog-100.png"
        }
        else if (pet_type ="Rabbit"){
            document.getElementById("image").src = "icons8-rabbit-100.png"
        }
        else{ 
            document.getElementById("image").src = "icons8-pet-100.png"
        }
    
        
        var feedButton = document.createElement("button");
        feedButton.textContent = "Feed";
        // Assign the feed function to the onclick event of the button
        feedButton.onclick = function() {
            feed(); // Call the feed function when the button is clicked
        };
    
        // Create the second button (Play)
        var playButton = document.createElement("button");
        playButton.textContent = "Play";
        // Assign the play function to the onclick event of the button
        playButton.onclick = function() {
            play(); // Call the play function when the button is clicked
        };
    
        // Create the third button (Age Pet)
        var agePetButton = document.createElement("button");
        agePetButton.textContent = "Age Pet";
        // Assign the agePet function to the onclick event of the button
        agePetButton.onclick = function() {
            agePet(); // Call the agePet function when the button is clicked
        };
    
        div_content.style.display = "flex"; 
        div_content.style.flexDirection = "row"
        div_content.style.gap = "20px"
        div_content.style.width = "40%"
    
        // Append the buttons to the div
        div_content.appendChild(feedButton);
        div_content.appendChild(playButton);
        div_content.appendChild(agePetButton);

    }


}






 