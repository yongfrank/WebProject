/*
 * @Author: Frank Chu
 * @Date: 2022-10-28 13:31:10
 * @LastEditors: Frank Chu
 * @LastEditTime: 2022-10-28 13:34:35
 * @FilePath: /WebProject/month-calendar/ctest.cpp
 * @Description: 
 * 
 * Copyright (c) 2022 by Frank Chu, All Rights Reserved. 
 */
#include <stdio.h>
int main( )
{ int k, n1, n3[10];
  char c;
  n1=0;
  for(k=0; k<10; k++)
     n3[k]=0;
  while((c=getchar( ))!='\n'){
     switch(c){
     case'0':case '1': case '2':
case '3': case '4':case'5':
case '6': case '7': case '8':
case '9':
               n3[c-'0']++;
         break;
     default:
               n1++;
               break;
     }
 }
 if(n1) printf("%d ", n1);
 for(k=0; k<10; k++)
   if(n3[k]) printf("%d ", n3[k]);
}