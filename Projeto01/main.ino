// I/O's Inputs (Entradas)
// Outputs (Saídas)

#define BUTTON_PIN 0
#define LED_PIN 1

//Configurações
void setup()
{
    pinMode(BUTTON_PIN,INPUT);
    pinMode(LED_PIN,OUTPUT)
}

//Lógica
void loop()
{
    if( digitalRead(BUTTON_PIN) == HIGH ){
        digitalWirite(LED_PIN, HIGH);
    }
}