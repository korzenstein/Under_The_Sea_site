let nav = document.querySelector('.nav');

// Toggle Button Functionality
function navBar() {
    nav.classList.toggle('active');
}

// Assignment 2 Functionality


// Declare variables for DOM elements
let commentForm = document.getElementById('commentForm');
let commentsContainer = document.querySelector('.commentsContainer')

// Comment Form Functionality
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let submit = document.querySelector('.submit')
    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let message = document.getElementById('message').value


    // Creates our date timestamp
    const date = `${new Date().toLocaleString("en-US", { day: "2-digit" })}`;
    const day = `${new Date().toLocaleDateString("en-US", { weekday: 'long' })}`
    const month = `${new Date().toLocaleString("en-US", { month: "long" })}`;
    const year = `${new Date().getFullYear()}`;

    // Creates a new Li Element
    let newComment = document.createElement('li')
    newComment.classList.add('comments')

    // Creates a new Div container for our Img
    let imageDiv = document.createElement('div')
    imageDiv.classList.add('commenterImg')

    // Creates a new Img and sets attributes
    let image = document.createElement('img');
    image.setAttribute("src", "../assets/comment1.jpg");
    image.setAttribute("alt", "Portrait of submitter")
    image.classList.add('commenterImg')
    image.style.width="100%";

    // Lets place that image in its container Div
    imageDiv.append(image);
    
    // Creates the Div for the comments
    let commentNotes = document.createElement('div')
    commentNotes.classList.add('commentNotes')

    // Creates the paragraph for it
    let para = document.createElement('p')
    para.innerText = `${day} ${month} ${date}, ${year} by ${name}`

    // Creates the blockquote for comments
    let blockquote = document.createElement('blockquote')
    blockquote.innerText = `${message}`

    // Places p and blockq into their container
    commentNotes.append(para, blockquote);

    // Places 2 main Divs into Li
    newComment.append(imageDiv, commentNotes)

    // Places Li into Section
    commentsContainer.appendChild(newComment)    
})

console.log(commentsContainer)