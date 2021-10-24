# JunctionX Budapest project

To start the project use IntelliJ or use `gradlew bootrun` command. 
If you want to use the email service too you have to provide environment variables:

##### Email sender (support [Gmail](useful/gmail-app-pw-generation.md))

- EMAIL_USERNAME `Gmail email address`
- EMAIL_PASSWORD `Application password of the email address`

Else use `--spring.profiles.active=dev` commandline argument to turn off email service.

[Local Swagger](http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config)