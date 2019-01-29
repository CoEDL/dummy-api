# Dummy API

Toy app to test API endpoints with json data


## API endpoints

Follow the naming guide at https://restfulapi.net/resource-naming/


Use beeceptor.com to test endpoints. 
> https://beeceptor.com/console/elpis




GET
    delay 1sec 
    return 200 
    headers {"Content-Type": "application/json"}

POST
    headers {
              "content-type": "application/json",
              "access-control-allow-origin": "*",
              "vary": "Accept-Encoding"
            }


GET /audio-files
    See `mock-response-body.json` file for response data.
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
    reponse {"settings": {"audioFrequency": 11000,"mfccStuff": 9000,"nGram": 1,"beam": 10}}

POST /settings 
    reponse { "status": "Settings updated"}
