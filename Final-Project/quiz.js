// Fake API that returns 20 questions for each category
const fakeAPI = {
    fetchQuestions: function (category) {
        const questionPool = {
            html: [
                { question: "What does HTML stand for?", options: ["Hypertext Markdown Language", "Hypertext Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"], correctAnswer: 1 },
                { question: "Which is the correct HTML element for the largest heading?", options: ["<heading>", "<h1>", "<h6>", "<head>"], correctAnswer: 1 },
                { question: "What is the correct HTML element for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<hr>"], correctAnswer: 0 },
                { question: "What does &lt;title&gt; element specify?", options: ["Document header", "Document title", "Document footer", "None of the above"], correctAnswer: 1 },
                { question: "What does the &lt;ul&gt; element represent?", options: ["Unordered list", "Uppercase list", "Underlined list", "Unique list"], correctAnswer: 0 },
                { question: "What does the &lt;a&gt; element represent?", options: ["Anchor", "Audio", "Append", "Array"], correctAnswer: 0 },
                { question: "Which attribute specifies an alternate text for an image?", options: ["src", "alt", "title", "href"], correctAnswer: 1 },
                { question: "Which tag is used to define an interactive field in a form?", options: ["<form>", "<input>", "<field>", "<section>"], correctAnswer: 1 },
                { question: "What is the correct HTML element to define important text?", options: ["<important>", "<strong>", "<b>", "<i>"], correctAnswer: 1 },
                { question: "Which HTML tag is used to display a horizontal line?", options: ["<hr>", "<br>", "<line>", "<border>"], correctAnswer: 0 },
                { question: "What is the &lt;head&gt; element used for?", options: ["Page body", "Metadata", "Display headings", "Footer"], correctAnswer: 1 },
                { question: "Which tag is used for creating a hyperlink?", options: ["<a>", "<link>", "<href>", "<nav>"], correctAnswer: 0 },
                { question: "What is the purpose of the &lt;div&gt; element?", options: ["Block container", "Inline container", "Text wrapper", "None"], correctAnswer: 0 },
                { question: "Which attribute is used for unique identification of an element?", options: ["class", "id", "name", "href"], correctAnswer: 1 },
                { question: "How can you open a link in a new tab?", options: ["target='_blank'", "target='_self'", "target='_newtab'", "target='_top'"], correctAnswer: 0 },
                { question: "Which tag is used for a table row?", options: ["<th>", "<tr>", "<td>", "<table>"], correctAnswer: 1 },
                { question: "What does &lt;meta&gt; tag define?", options: ["Page content", "Metadata", "Page title", "Styles"], correctAnswer: 1 },
                { question: "Which tag is used to define a list item?", options: ["<list>", "<li>", "<ul>", "<item>"], correctAnswer: 1 },
                { question: "What does &lt;em&gt; element represent?", options: ["Strong importance", "Emphasized text", "Bold text", "Italicized text"], correctAnswer: 1 },
                { question: "What is the purpose of the &lt;iframe&gt; element?", options: ["Embed another HTML page", "Inline frame", "Embed CSS", "None"], correctAnswer: 0 }
            ],
            css: [
                { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], correctAnswer: 2 },
                { question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "background"], correctAnswer: 2 },
                { question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "demo()"], correctAnswer: 0 },
                { question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "text-style", "font-style"], correctAnswer: 0 },
                { question: "How do you make a list that lists its items with squares?", options: ["list-style-type: square;", "list: square;", "list-type: square;", "list-type: square;"], correctAnswer: 0 },
                { question: "How do you add a comment in CSS?", options: ["// this is a comment", "<!-- this is a comment -->", "/* this is a comment */", "# this is a comment"], correctAnswer: 2 },
                { question: "Which property is used to change the font of an element?", options: ["font-family", "font-weight", "font-style", "font-size"], correctAnswer: 0 },
                { question: "Which CSS property is used to change the text color of an element?", options: ["text-color", "color", "font-color", "text-style"], correctAnswer: 1 },
                { question: "How do you center a block element?", options: ["margin: auto;", "text-align: center;", "align: center;", "center: block;"], correctAnswer: 0 },
                { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<styles>"], correctAnswer: 0 },
                { question: "Which CSS property is used to control the spacing between words?", options: ["word-spacing", "letter-spacing", "line-spacing", "text-spacing"], correctAnswer: 0 },
                { question: "How do you make a font italic in CSS?", options: ["font: italic;", "font-style: italic;", "text-style: italic;", "font-style: italicized;"], correctAnswer: 1 },
                { question: "Which property is used to set the width of an element?", options: ["width", "size", "element-width", "block-width"], correctAnswer: 0 },
                { question: "How do you specify multiple background images in CSS?", options: ["background: image1, image2;", "background-image: image1, image2;", "background-images: image1, image2;", "background-image: url(image1), url(image2);"], correctAnswer: 1 },
                { question: "How do you change the color of a link when it's hovered over?", options: ["a:hover { color: blue; }", "a:hover { background-color: blue; }", "a:hover { color: hover; }", "a:hover { text-color: blue; }"], correctAnswer: 0 },
                { question: "Which property is used to control the layout of a flex container?", options: ["flex", "display", "flex-direction", "justify-content"], correctAnswer: 2 },
                { question: "How can you add a background image in CSS?", options: ["background-image: url('image.jpg');", "background: 'image.jpg';", "background-image: 'image.jpg';", "background-image: url(image.jpg);"], correctAnswer: 0 },
                { question: "How do you set a fixed height for an element?", options: ["height: 200px;", "fixed-height: 200px;", "set-height: 200px;", "element-height: 200px;"], correctAnswer: 0 },
                { question: "Which CSS property is used to change the cursor type?", options: ["cursor-type", "cursor", "mouse-cursor", "pointer"], correctAnswer: 1 },
            ],
            js: [
                { question: "What does JS stand for?", options: ["JavaScript", "JavaStyle", "JavaServer", "JustScript"], correctAnswer: 0 },
                { question: "Which of the following is a JavaScript data type?", options: ["String", "Boolean", "Number", "All of the above"], correctAnswer: 3 },
                { question: "How do you declare a variable in JavaScript?", options: ["var myVar;", "variable myVar;", "declare myVar;", "myVar := 10;"], correctAnswer: 0 },
                { question: "What is the correct way to write a JavaScript array?", options: ["var colors = (1, 2, 3)", "var colors = [1, 2, 3]", "var colors = {1, 2, 3}", "var colors = 1, 2, 3"], correctAnswer: 1 },
                { question: "Which operator is used to assign a value to a variable?", options: ["=", "==", "===", "==="], correctAnswer: 0 },
                { question: "What is the output of 'typeof null'?", options: ["null", "object", "undefined", "NaN"], correctAnswer: 1 },
                { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "create myFunction()", "function = myFunction()"], correctAnswer: 0 },
                { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction()", "myFunction:()"], correctAnswer: 1 },
                { question: "Which of the following is a JavaScript framework?", options: ["React", "Laravel", "Django", "Ruby on Rails"], correctAnswer: 0 },
                { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "JavaScript Online Notation", "Java Source Object Notation", "Java Standard Object Notation"], correctAnswer: 0 },
                { question: "How can you add a comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "Both 1 and 3"], correctAnswer: 3 },
                { question: "What is the correct syntax for referring to an external script called 'script.js'?", options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script>script.js</script>"], correctAnswer: 0 },
                { question: "Which event occurs when the user clicks on an HTML element?", options: ["onclick", "onchange", "onmouseclick", "onmouseover"], correctAnswer: 0 },
                { question: "Which method is used to convert a JSON string into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"], correctAnswer: 0 },
                { question: "What will the following code output: console.log(2 + '2');?", options: ["'22'", "'4'", "Error", "'22'"], correctAnswer: 0 },
                { question: "Which keyword is used to define a constant in JavaScript?", options: ["const", "var", "let", "define"], correctAnswer: 0 },
                { question: "How can you detect the client's browser name in JavaScript?", options: ["navigator.appName", "browser.name", "navigator.browser", "window.browser"], correctAnswer: 0 },
                { question: "What is the output of the expression '5' + 5?", options: ["55", "10", "TypeError", "5"], correctAnswer: 0 },
                { question: "Which built-in method combines the text of two strings and returns a new string?", options: ["append()", "concat()", "attach()", "join()"], correctAnswer: 1 },
                { question: "How do you write an if statement in JavaScript?", options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if (i = 5)"], correctAnswer: 1 },
            ]
        };

        // Simulate fetching questions based on category
        return new Promise((resolve) => {
            setTimeout(() => {
                const questions = questionPool[category];
                const randomQuestions = getRandomQuestions(questions, 10);
                resolve(randomQuestions);
            }, 500); // Simulate network delay
        });
    }
};

// Function to randomly select 10 questions from the pool
function getRandomQuestions(questionPool, numQuestions) {
    const shuffled = questionPool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

// Function to escape HTML characters
function escapeHTML(html) {
    return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

let quizData = [];
let userAnswers = [];

// Load quiz data dynamically
document.addEventListener('DOMContentLoaded', async function () {

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'html'; // Default to 'html' if no category is specified

    quizData = await fakeAPI.fetchQuestions(category);  // Fetch questions based on the selected category
    const quizContainer = document.getElementById('quizContainer');

    quizData.forEach((q, index) => {
        const questionNumber = index + 1; // Number the questions

        const questionHTML = `
            <div class="question">
            <p><strong>Question ${questionNumber}:</strong> ${q.question}</p>
            <div class="options">
                    ${q.options.map((option, i) => `
                        <label>
                            <input type="radio" name="q${index}" value="${i}">
                            ${escapeHTML(option)} <!-- Escape HTML here -->
                        </label><br>
                    `).join('')}
                </div>
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });
});

function submitQuiz() {
    let score = 0;
    const alertContainer = document.getElementById('alertContainer'); // Ensure you have an empty container for the alerts
    alertContainer.innerHTML = ''; // Clear previous alerts

    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.correctAnswer) {
            selectedOption.parentElement.style.backgroundColor = "#c8e6c9";
            selectedOption.parentElement.style.color = "#388e3c";
            score++;
        } else if (selectedOption) {
            selectedOption.parentElement.style.backgroundColor = "#ffcdd2";
            selectedOption.parentElement.style.color = "#d32f2f";
        }
    });

    let alertHTML = '';
    if (score >= 5) {
        // Success alert HTML
        alertHTML = `
            <div class="alert alert-success">
                <p>Congratulations, you have passed the quiz!</p> <br>
                <p>Your score is: ${score}</p>
                <span class="mdi mdi-close close"><i class="fa-thin fa-x"></i></span>
            </div>
        `;
    } else {
        // Error alert HTML
        alertHTML = `
            <div class="alert alert-error">
                <p>Sorry, you have failed the quiz!</p> 
                <p>Your score is: ${score}</p>
                <span class="mdi mdi-close close"><i class="fa-thin fa-x"></i></span>
            </div>
        `;
    }

    // Inject the alert into the container
    alertContainer.innerHTML = alertHTML;

    // Add click event to close the alert when clicking the close button
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
        alertContainer.innerHTML = ''; // Clear the alertContainer content
    });
}

function goHome() {
    window.location.href = 'index.html';
}
