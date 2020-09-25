$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/wikipediaArama.feature");
formatter.feature({
  "name": "Wikipedia Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wikipediaArama"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TestCase08 kullanici wikipediada arama yapar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici wikipedia \"https://www.wikipedia.org\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici wikipedia dropdownda dil \"\u003csearchLanguage\u003e\" secer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici farkli dillerde \"\u003cat\u003e\" arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici sayfa basligini yazdirir",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici wikipedia sayfasini kapatir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Farkli dillerde at",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchLanguage",
        "at"
      ]
    },
    {
      "cells": [
        "English",
        "horse"
      ]
    },
    {
      "cells": [
        "Cymraeg",
        "ceffyl"
      ]
    },
    {
      "cells": [
        "Deutsch",
        "pferde"
      ]
    },
    {
      "cells": [
        "Italiano",
        "cavallo"
      ]
    },
    {
      "cells": [
        "Hrvatski",
        "konj"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TestCase08 kullanici wikipediada arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wikipediaArama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia \"https://www.wikipedia.org\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia dropdownda dil \"English\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_dropdownda_dil_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici farkli dillerde \"horse\" arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_farkli_dillerde_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sayfa basligini yazdirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_sayfa_basligini_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia sayfasini kapatir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasini_kapatir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TestCase08 kullanici wikipediada arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wikipediaArama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia \"https://www.wikipedia.org\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia dropdownda dil \"Cymraeg\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_dropdownda_dil_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici farkli dillerde \"ceffyl\" arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_farkli_dillerde_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sayfa basligini yazdirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_sayfa_basligini_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia sayfasini kapatir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasini_kapatir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TestCase08 kullanici wikipediada arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wikipediaArama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia \"https://www.wikipedia.org\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia dropdownda dil \"Deutsch\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_dropdownda_dil_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici farkli dillerde \"pferde\" arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_farkli_dillerde_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sayfa basligini yazdirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_sayfa_basligini_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia sayfasini kapatir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasini_kapatir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TestCase08 kullanici wikipediada arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wikipediaArama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia \"https://www.wikipedia.org\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia dropdownda dil \"Italiano\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_dropdownda_dil_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici farkli dillerde \"cavallo\" arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_farkli_dillerde_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sayfa basligini yazdirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_sayfa_basligini_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia sayfasini kapatir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasini_kapatir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TestCase08 kullanici wikipediada arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wikipediaArama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia \"https://www.wikipedia.org\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia dropdownda dil \"Hrvatski\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_dropdownda_dil_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici farkli dillerde \"konj\" arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_farkli_dillerde_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sayfa basligini yazdirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_sayfa_basligini_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici wikipedia sayfasini kapatir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WikipediaStepDefinitions.kullanici_wikipedia_sayfasini_kapatir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});