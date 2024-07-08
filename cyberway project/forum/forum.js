// Function to handle posting a question with validation
function postQuestion() {
    var title = document.getElementById('question-title').value;
    var content = document.getElementById('question-content').value;

    // Validate input fields
    if (title.trim() === '' || content.trim() === '') {
        alert('Please fill out all fields.');
        return; // Prevent form submission if fields are empty
    }

    // Create a new question element
    var questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="likes-comment">
            <button class="like-btn" onclick="likeQuestion(this)">Vote (0)</button>
            <button class="comment-btn" onclick="toggleCommentInput(this)">Answer</button>
            <div class="comment-input" style="display: none;">
                <input type="text" placeholder="Write your Answer">
                <button onclick="postComment(this)">Post Answer</button>
            </div>
        </div>
    `;

    // Append the new question to the questions section
    var questionsSection = document.getElementById('questions-section');
    questionsSection.appendChild(questionElement);

    // Clear the input fields after posting the question
    document.getElementById('question-title').value = '';
    document.getElementById('question-content').value = '';
}

// Function to handle liking a question
function likeQuestion(button) {
    var likeCount = parseInt(button.textContent.match(/\d+/)[0]);
    likeCount++;
    button.textContent = `Like (${likeCount})`;
}

// Function to toggle the comment input field visibility
function toggleCommentInput(button) {
    var commentInput = button.nextElementSibling;
    if (commentInput.style.display === 'none') {
        commentInput.style.display = 'block';
    } else {
        commentInput.style.display = 'none';
    }
}

// Function to handle posting a comment
function postComment(button) {
    var commentInput = button.previousElementSibling;
    var commentContent = commentInput.value;
    if (commentContent.trim() !== '') {
        var commentSection = document.createElement('div');
        commentSection.className = 'comment-section';
        commentSection.textContent = commentContent;

        // Append the new comment to the comment section
        button.parentElement.parentElement.appendChild(commentSection);

        // Clear the comment input field after posting the comment
        commentInput.value = '';

        // Hide the comment input field
        toggleCommentInput(button.parentElement.previousElementSibling);
    } else {
        alert('Please enter a valid comment.');
    }
}

// Add event listener to the post question button
document.getElementById('post-question-btn').addEventListener('click', postQuestion);
