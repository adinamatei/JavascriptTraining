# JavaScript

```javascript
for(var a = 10, b = 5; b < a; a++, b++){
    b += --a % 3;
    a -= a % 2;
    
    alert(--b);
}

alert(++a);
```
The output of this code will be 4, 6, 8, 10.

Explanation:     
first loop: ```a = 10```, ```b = 5```   
```5 += 9 % 3``` => ```b = 5```       
```9 -= 9 % 2``` => ```a = 8```     
```alert(--b)``` => b = 4 

second loop: increase ```a``` and ```b``` by 1 ```a = 9```, ```b = 5```;     
```5 += 8 % 3``` => ```b = 7```     
```8 -= 8 % 2``` => ```a = 8```      
```alert(--b)``` => b = 6      

third loop: increase ```a``` and ```b``` by 1 ```a = 9```, ```b = 7```;     
```7 += 8 % 3``` => ```b = 9```    
```8 -= 8 % 2``` => ```a = 8```    
```alert(--b)``` => b = 8    

fourth loop: ```a``` and ```b``` by 1 ```a = 9```, ```b = 9```;    
check the condition ```b < a``` is false    
    
```alert(++a)``` => a = 10    


