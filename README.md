# Dummy API

Toy app to test API endpoints with json data


## API endpoints

Follow the naming guide at https://restfulapi.net/resource-naming/


Use beeceptor.com to test endpoints. 
> https://beeceptor.com/console/elpis


I've mocked up some endpoints with dummy response data. For GET requests, the endpoints return headers and some JSON data (See the `/mock-response-body.json` file for the details of what the mockups return). For POST updates, the mockups return headers and a status message. 

May be good to use a status code as well as the response code? 



```
GET
    headers {"Content-Type": "application/json"}

POST
    headers {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
              "vary": "Accept-Encoding"
            }

GET /audio-files
POST /audio-files
    reponse { "status": "Audio files updated"}

GET /transcription-files
POST /transcription-files
    reponse { "status": "Transcription files updated"}

GET /additional-word-files
POST /additional-word-files
    reponse { "status": "Word files updated"}

GET /pronunciation-dictionary
POST /pronunciation-dictionary
    reponse { "status": "Pronunciation dictionary updated"}

GET /settings
POST /settings 
    reponse { "status": "Settings updated"}

```