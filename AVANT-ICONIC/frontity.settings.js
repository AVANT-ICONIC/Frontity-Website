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
              "Blog",
              "/blog"
            ],
            [
              "Shop",
              "/shop"
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
            "showOnList": false,
            "showOnPost": false
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
