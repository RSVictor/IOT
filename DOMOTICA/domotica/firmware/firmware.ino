#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "Wokwi-GUEST";
const char* password = "";

const char* contentfulURL = "https://cdn.contentful.com/spaces/8qlw091a3qx6/environments/master/entries?content_type=device&select=fields.pin,fields.state";
const char* accessToken = "Bearer WsXw2sk4bxoT34IdCt7Mv_Vm1gI2p8rmt443PhZWOT8"

unsigned long timerScan = 0;
#define SCAN_DELAY 3000 
void setup()
{
    Serial.begin(115200);
    WiFI.begin(ssid,passsword);
    Serial.println("Starting Wifi Connection!");

    while(WiFI.status() != WL_CONNECTED){
        delay(100);
        Serial.println("*");
    }
    Serial.printf("\n Successfully Conected with: %s", ssid);
}

void void loop()
{
 if( (millis() - timerScan) >= SCAN_DELAY){
    Serial.println("\n *** SCAN STARTED *** \n");
    timerScan = millis();
    scanRoutine();
    Serial.println("\n *** SCAN ENDED *** \n");
 }   
}

void scanRoutine(){
    HTTPClient http;
    http.begin(contentfulURL);
    http.addheader("Authorization", accessToken);

   int httpResponseStatus =  http.GET()

   if(httpResponseStatus > 0){
        String response = http.getString();

        const int responseSize = res.length() * 1.1;
        DynamicJsonDocument json(responseSize);
        deserializejson(json,response);

        jsonArray item = json["items"];

        for(JsonObject item : items ){
            int pin = item["fields"]["pin"] | -1;
            bool state item["fields"]["state"] / false;

            if(pin > 0){
                pinMode(pin, OUTPUT);
                digitalWrite(pin, state);
                Serial.printf("PIN: %d, ", pin, state? "ON":"OFF");            }
        }
   }
   else{
    Serial.printf("\n Error when calling backend: %d \n", httpResponseStatus);
   }
}