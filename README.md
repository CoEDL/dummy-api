# Dummy API

Toy app to test API endpoints with json data


## API endpoints

Follow the naming guide at https://restfulapi.net/resource-naming/


Use beeceptor.com to test endpoints. 
> https://beeceptor.com/console/elpis



See `mock-response-body.json` file for response data.

GET /settings 
    delay 1sec 
    return 200 
    headers {"Content-Type": "application/json"}
    reponse {"settings": {"audioFrequency": 11000,"mfccStuff": 9000,"nGram": 1,"beam": 10}}

POST /settings 
    delay 1sec 
    return 200 
    headers {"Content-Type": "application/json"}
    reponse { "status": "Settings updated"}

GET /audio-files
POST /audio-files

GET /transcription-files
POST /transcription-files

GET /additional-word-files
POST /additional-word-files

GET /pronunciation-dictionary
POST /pronunciation-dictionary

