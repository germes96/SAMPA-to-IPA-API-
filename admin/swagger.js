const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const config  = require("config")
module.exports = {
    startSwagger: function(app){
      const swaggerOptions = {
        swaggerDefinition: {
          info: {
            version: "1.0.0",
            title: "XSAMPA | IPA Converted",
            description: "api documentation",
            contact: {
              name: "Bengono OBiang UY1 | LIA",
              email:"bengobiag@gmail.com"
            },
             servers:  config.get("swagger.url")
          },
          securityShemes:{
            "BasicAuth":{
              "type": "http",
              "scheme": "basic"
            }
          },
          host: config.get("swagger.url"),
          schemes: [config.get("swagger.method")],
          tags: [
            {name: "XSAMPA", description: "Everything about XSAMPA"},
          ]
        },
        apis: [
          "./core/docs/xsampa.js",
        ]
      };

      var options = {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: "IPA | SAMPA",
        customfavIcon: "/assets/favicon.ico"
      };


      const swaggerDocs = swaggerJsDoc(swaggerOptions);
      app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));
    }
}