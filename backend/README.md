# JunctionX Budapest project

To start the project run the following command from the `/backend` folder: `./mvnw spring-boot:run`  
If you want to use the email service too you have to provide the following environment variables:

##### Email sender (support [Gmail](useful/gmail-app-pw-generation.md))

- EMAIL_USERNAME `Gmail email address`
- EMAIL_PASSWORD `Application password of the email address`

Otherwise use the following command `./mvnw spring-boot:run -Dspring-boot.run.profiles=dev` to start the application without the email functionality.  

[Local Swagger](http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config)
