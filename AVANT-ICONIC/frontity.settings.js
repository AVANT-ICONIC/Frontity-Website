const settings = {
  "name": "avant-iconic",
  "state": {
    "frontity": {
      "url": "https://backend.avant-iconic.com",
      "title": "AVANT-ICONIC",
      "description": "Multimedia Agency"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/home"
            ],
            [
              "Leistungen",
              "/leistungen"
            ],
            [
              "Blog",
              "/blog"
            ],
            [
              "Kontakt",
              "/kontakt"
            ],
            [
              "Warenkorb",
              "/warenkorb"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://backend.avant-iconic.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
