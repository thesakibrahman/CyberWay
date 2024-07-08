#include <stdio.h>
#include <string.h>

int main(void){
    char buff[64];
    int pass = 0;
    printf("\n Enter the password : \n");
    gets(buff);

    if (strcmp(buff, "yesitishereforyou")){
        printf("\n Wrong Password \n");
    }
    else{
        printf("\n Correct Password \n");
        pass = 1;
    }
    if (pass){
        /* Overflowed*/
        printf(" \n CTF{Sakib_Rahman}");
    }
}