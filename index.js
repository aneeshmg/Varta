#!/usr/bin/env node

const inquirer = require('inquirer')
const vorpal = require('vorpal')()
const fetch = require('node-fetch')
const fs = require("fs")
const configFile = `${__dirname}/config.json`
const questions = require("./questions")
const print = require("./print")

const baseUrl = "https://newsapi.org/v2"

let config = {}

const initialize = () => {

    if (!fs.existsSync(configFile)) {

        ask().then(answers => {

            config.api_key = answers.api_key
            switch (answers.language) {
                case "Arabic":
                    config.language = "ar"
                    break;
                case "Chinese":
                    config.language = "cn"
                    break;
                case "Dutch":
                    config.language = "nl"
                    break;
                case "English":
                    config.language = "en"
                    break;
                case "French":
                    config.language = "fr"
                    break;
                case "German":
                    config.language = "de"
                    break;
                case "Hebrew":
                    config.language = "he"
                    break;
                case "Italian":
                    config.language = "it"
                    break;
                case "Norwegian":
                    config.language = "no"
                    break;
                case "Portuguese":
                    config.language = "pt"
                    break;
                case "Russian":
                    config.language = "ru"
                    break;
                case "Spanish":
                    config.language = "es"
                    break;
                case "Swedish":
                    config.language = "sv"
                    break;
                case "Urdu":
                    config.language = "ud"
                    break;
            }
            switch (answers.country) {
                case "Argentina":
                    config.country = "ar"
                    break
                case "Australia":
                    config.country = "au"
                    break
                case "Brazil":
                    config.country = "br"
                    break
                case "Canada":
                    config.country = "ca"
                    break
                case "China":
                    config.country = "cn"
                    break
                case "France":
                    config.country = "fr"
                    break
                case "Germany":
                    config.country = "de"
                    break
                case "Hong Kong":
                    config.country = "hk"
                    break
                case "India":
                    config.country = "in"
                    break
                case "Ireland":
                    config.country = "ie"
                    break
                case "Israel":
                    config.country = "is"
                    break
                case "Italy":
                    config.country = "it"
                    break
                case "Netherlands":
                    config.country = "nl"
                    break
                case "Norway":
                    config.country = "no"
                    break
                case "Pakistan":
                    config.country = "pk"
                    break
                case "Russia":
                    config.country = "ru"
                    break
                case "Saudi Arabia":
                    config.country = "sa"
                    break
                case "South Africa":
                    config.country = "za"
                    break
                case "Spain":
                    config.country = "es"
                    break
                case "Sweden":
                    config.country = "sv"
                    break
                case "UK":
                    config.country = "gb"
                    break
                case "USA":
                    config.country = "us"
                    break
            }
            fs.writeFileSync(configFile, JSON.stringify(config))
        })
    } else {

        config = JSON.parse(fs.readFileSync(configFile, {
            encoding: "utf-8"
        }))
    }
}
const ask = () => {
    return inquirer.prompt(questions).then(e => e)
}

initialize()

vorpal
    .command('headlines', "Get latest headlines")
    // TODO: v1+ => take in args for headlines & pick appropriate source before that, collect sources & map topics to source
    .action(async function (args, callback) {
        let d = await get(`${baseUrl}/top-headlines?sources=bbc-sport`)
            .then(l => l.json())
        let news = d.articles.map(e => {
            return {
                title: e.title,
                desc: e.description
            }
        })
        print(this, news)
        callback();
    });
vorpal.show()


// TODO: get the api key from config
const get = url => fetch(url, { method: 'GET', headers: {'X-Api-Key' : '502384ed0eb34053b9e6b3df85f1c6e8'}})


module.exports = {
    questions
}