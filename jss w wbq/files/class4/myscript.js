function writeResults (result){
    //First, find the empty div where we want to put the answers.
    var resultsDiv = document.getElementById('resultsBox');

    //Second, create a new paragraph
    var newParagraph = document.createElement('p');

    //Create a text node, a string of text, to put inside the paragraph.
    var paragraphText = document.createTextNode(result);
        
    //Now, we assemble our results. Put the new text in the new paragraph
    newParagraph.appendChild(paragraphText);

    //Then put it inside the div we found earlier
    resultsDiv.appendChild(newParagraph);
}

// writeResults('Hi there!');
// simpleSubmit.onclick = simpleSubmitFunction;

// function simpleSubmitFunction(event){
//     event.preventDefault();
//     let inputValue = document.getElementById('inputValue');
//     let turtlePic = document.getElementById('turtlePic');
//     turtlePic.src = inputValue.value;
//     turtlePic.style.maxWidth = "100%";
//     // console.log(inputValue.value);
// }

simpleSubmit.addEventListener('click', function(event){
    event.preventDefault();
    let inputValue = document.getElementById('inputValue');
    let turtlePic = document.getElementById('turtlePic');
    turtlePic.src = inputValue.value;
    turtlePic.style.maxWidth = "100%";
    // console.log(inputValue.value);
})