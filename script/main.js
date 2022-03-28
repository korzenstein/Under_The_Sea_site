// Navigation Toggle Button Functionality (from Project 1)
const nav = document.querySelector('.nav');
function navBar() {
    nav.classList.toggle('active');
}

// Assignment 2 Functionality - Add Comments to Blog
// ----------------

// Declare variables for DOM elements
const commentForm = document.getElementById('commentForm');
const commentsContainer = document.querySelector('.commentsContainer')
const image = document.createElement('img');

// Async API call that places random profile image for commenter photo
const fetchPortrait = async () => {
    const data = await fetch(`https://randomuser.me/api/`);
    const portraitData = await data.json();
    image.setAttribute("src", portraitData.results[0].picture.large);
    image.setAttribute("alt", "Portrait of submitter")
    image.classList.add('commenterImg')
    image.style.width="100%";
}
fetchPortrait()

// Comment Form Functionality
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const message = document.getElementById('message').value
    

    // Error handling to check for name, email and comment
    if(!name) {
        alert('This is not a valid name')
        return ""
    }

    if(!email) {
        alert('This is not a valid email')
        return ""
    }

    if(!message) {
        alert('This is not a valid blog entry')
        return ""
    }

    // Creates our date timestamp
    const date = `${new Date().toLocaleString("en-US", { day: "2-digit" })}`;
    const day = `${new Date().toLocaleDateString("en-US", { weekday: 'long' })}`
    const month = `${new Date().toLocaleString("en-US", { month: "long" })}`;
    const year = `${new Date().getFullYear()}`;

    // Creates a new Li Element
    const newComment = document.createElement('li')
    newComment.classList.add('comments')

    // Creates a new Div container for our Img
    const imageDiv = document.createElement('div')
    imageDiv.classList.add('commenterImg')

    // Lets place that image in its container Div
    imageDiv.append(image);
    
    // Creates the Div for the comments
    const commentNotes = document.createElement('div')
    commentNotes.classList.add('commentNotes')

    // Creates the paragraph for it
    const para = document.createElement('p')
    para.innerText = `${day} ${month} ${date}, ${year} by ${name}`

    // Creates the blockquote for comments
    const blockquote = document.createElement('blockquote')
    blockquote.innerText = `${message}`

    // Places p and blockquote into their container
    commentNotes.append(para, blockquote);

    // Places 2 main Divs into Li
    newComment.append(imageDiv, commentNotes)

    // Places Li into Section
    commentsContainer.appendChild(newComment) 

})



