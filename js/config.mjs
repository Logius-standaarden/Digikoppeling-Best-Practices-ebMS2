import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "mailto" : "digikoppeling@logius.nl",
        "name" : "Logius"
      } ],
  editors: [ 
      { 
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://logius.nl/standaarden"
      },
      { 
        "company" : "Logius",
        "name" : "Pieter Hering",
        "url" : "https://logius.nl/standaarden"
      },
      { 
        "company" : "Logius",
        "name" : "Martin van der Plas",
        "url" : "https://logius.nl/standaarden"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Best-Practices-ebMS2",
  previousMaturity: "DEF",
  previousPublishDate: "2022-04-11",
  previousPublishVersion: "3.2.1",
  pubDomain: "dk",
  publishDate: "2023-05-31",
  publishVersion: "3.2.2",
  shortName: "bpebms",
  specStatus: "WV",
  specType: "BP"
});
