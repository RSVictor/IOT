#define BUTTON_ON 0
#define BAR_SENSOR 1
#define WINDOW1_SENSOR 2
#define WINDOW2_SENSOR 3
#define SENSOR_ROOM 4
#define SENSOR_KITCHEN 5
#define SENSOR_GARD 6
#define SENSOR_CORREDOR 7
#define SENSOR_SIRENE 8

bool button_on = 0, bar_sensor = 0, window1_sensor = 0, window2_sensor = 0;
bool window3_sensor = 0 sensor_room = 4, sensor_kitchen, sensor_gard = 0;
bool sensor_corredor = 0, sensor_sirene = 0

void setup()
{
    pinMode(BUTTON_ON,INPUT_PULLUP);
    
}
