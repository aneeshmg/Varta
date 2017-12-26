module.exports = [{
        type: "input",
        name: "api_key",
        message: "Enter your newsapi key (You can get one at https://newsapi.org/)"
    },
    {
        type: "list",
        name: "language",
        message: "Language?",
        choices: ["Arabic", "Chinese", "Dutch", "English", "French",
            "German", "Hebrew", "Italian", "Norwegian", "Portuguese",
            "Russian", "Spanish", "Swedish", "Urdu"
        ],
        default: "English"
    },
    {
        type: "list",
        name: "country",
        message: "Country?",
        choices: ["Argentina", "Australia", "Brazil", "Canada", "China", "France",
            "Germany", "Hong Kong", "India", "Ireland", "Israel", "Italy",
            "Netherlands", "Norway", "Pakistan", "Russia", "Saudi Arabia",
            "South Africa", "Spain", "Sweden", "UK", "USA"
        ],
        default: "India"
    }
]