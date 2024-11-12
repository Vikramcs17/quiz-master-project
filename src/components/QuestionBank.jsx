const questionBank = {
    Math: [
        {
            id: 1,
            question: "What is the value of π (pi) to two decimal places?",
            options: ["3.14", "3.16", "3.12", "3.18"],
            answer: "3.14"
        },
        {
            id: 2,
            question: "What is the square root of 144?",
            options: ["10", "12", "14", "16"],
            answer: "12"
        },
        {
            id: 3,
            question: "What is the result of 7 × 8?",
            options: ["54", "56", "58", "60"],
            answer: "56"
        },
        {
            id: 4,
            question: "Solve for x: 2x + 5 = 13",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            id: 5,
            question: "What is 25% of 80?",
            options: ["15", "20", "25", "30"],
            answer: "20"
        }
    ],
    JavaScript: [
        {
            id: 1,
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "let", "const", "All of the above"],
            answer: "All of the above"
        },
        {
            id: 2,
            question: "What will console.log(typeof []) output?",
            options: ["array", "object", "undefined", "null"],
            answer: "object"
        },
        {
            id: 3,
            question: "How do you write a single-line comment in JavaScript?",
            options: ["/* comment */", "// comment", "# comment", "<!-- comment -->"],
            answer: "// comment"
        },
        {
            id: 4,
            question: "What method is used to add elements to the end of an array?",
            options: ["push()", "append()", "add()", "insert()"],
            answer: "push()"
        },
        {
            id: 5,
            question: "What is the result of '2' + 2 in JavaScript?",
            options: ["4", "22", "NaN", "Error"],
            answer: "22"
        }
    ],
    HTML: [
        {
            id: 1,
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            id: 2,
            question: "Which tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: "<a>"
        },
        {
            id: 3,
            question: "Which HTML element is used to define an unordered list?",
            options: ["<ol>", "<list>", "<ul>", "<dl>"],
            answer: "<ul>"
        },
        {
            id: 4,
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<break>", "<lb>", "<br>", "<newline>"],
            answer: "<br>"
        },
        {
            id: 5,
            question: "Which HTML attribute specifies an alternate text for an image?",
            options: ["title", "alt", "description", "caption"],
            answer: "alt"
        }
    ],
    CSS: [
        {
            id: 1,
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Creative Style System",
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            id: 2,
            question: "Which property is used to change the background color?",
            options: ["color", "bgcolor", "background-color", "background"],
            answer: "background-color"
        },
        {
            id: 3,
            question: "How do you select an element with id 'demo'?",
            options: [".demo", "#demo", "*demo", "demo"],
            answer: "#demo"
        },
        {
            id: 4,
            question: "Which property is used to change the font of an element?",
            options: ["font-style", "text-style", "font-family", "text-family"],
            answer: "font-family"
        },
        {
            id: 5,
            question: "What is the default value of the position property?",
            options: ["relative", "fixed", "absolute", "static"],
            answer: "static"
        }
    ]
};

export default questionBank;