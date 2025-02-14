#define ON_BUTTON_PIN 9
#define BAR_SENSOR_PIN 1
#define WINDOW1_SENSOR_PIN 2
#define WINDOW2_SENSOR_PIN 3
#define ROOM_SENSOR_PIN 4
#define KITCHEN_SENSOR_PIN 5
#define GARAGE_SENSOR_PIN 6
#define HALL_SENSOR_PIN 7
#define ALARM_PIN 8

bool onButton = 0, barSensor = 0, window1Sensor = 0;
bool window2Sensor = 0, roomSensor = 0, kitchenSensor = 0;
bool garageSensor = 0, hallSensor = 0, alarm = 0;

void setup()
{
    pinMode(ON_BUTTON_PIN, INPUT_PULLUP);
    pinMode(BAR_SENSOR_PIN, INPUT_PULLUP);
    pinMode(WINDOW1_SENSOR_PIN, INPUT_PULLUP);
    pinMode(WINDOW2_SENSOR_PIN, INPUT_PULLUP);
    pinMode(ROOM_SENSOR_PIN, INPUT_PULLUP);
    pinMode(KITCHEN_SENSOR_PIN, INPUT_PULLUP);
    pinMode(GARAGE_SENSOR_PIN, INPUT_PULLUP);
    pinMode(HALL_SENSOR_PIN, INPUT_PULLUP);
    pinMode(ALARM_PIN, OUTPUT); 
}

void loop()
{
    //I/O's:
    onButton = !digitalRead(ON_BUTTON_PIN);
    barSensor = !digitalRead(BAR_SENSOR_PIN);    
    window1Sensor = !digitalRead(WINDOW1_SENSOR_PIN);
    window2Sensor = !digitalRead(WINDOW2_SENSOR_PIN);
    roomSensor = !digitalRead(ROOM_SENSOR_PIN);
    kitchenSensor = !digitalRead(KITCHEN_SENSOR_PIN);
    garageSensor = !digitalRead(GARAGE_SENSOR_PIN);
    hallSensor = !digitalRead(HALL_SENSOR_PIN);    
    
    digitalWrite(ALARM_PIN, alarm);

    // true = ligado
    // 1 = ligado
    // High = ligado
    // false = desligado
    // 0 = desligado
    // false = desligado
    //Se alarm == 1 (verdadeiro), o alarme será acionado (HIGH).
    //Se alarm == 0 (falso), o alarme será desligado (LOW).

     // Se o botao liga estiver acionado:
    if(onButton == true){
        if (barSensor == false || window1Sensor == false || window2Sensor == false ||
        roomSensor == true || kitchenSensor == true || hallSensor == true || garageSensor == true){

            alarm = 1;
        }
        

    }
    // Se o botao liga não estiver acionado:
    // 0 = desligado
    
    else{
        alarm = 0;
    }
}