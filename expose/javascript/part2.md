### Part 2. A Little More of a Challenge...

1. 3 will be printed because the array contains 3 values/prices.
2. 150 will be printed becaue this is the last calculated dicounted price. (300 * 0.5 = 150)
3. 150 will be printed. Same reason as in answer 2. Rounding won't change the value in that case.
4. It will return an array with the discounted prices => [50, 100, 150] - but nothing will be printed!
5. Error because the variable `i` is declared with `let` inside the for loop block => does not exist ouside that block (in line 12)
6. Error because the variable `dicountedPrice`is declared with `let` with the for loop block. So same reason as in question 5.
7. It will print the value 150. This time it is also declared with `let` but within the same scope.
8. The function will return an array with the discounted prices: [50, 100, 150]. `let` will not cause any error since the variables are always used in its corresponding scopes.
9. See answer for question 5.
10. It will return 3 beacuse the array conatains 3 values.
11. It will return the discounted prices in an array: [50, 100, 150].

#### Data Types

12. </br>
    A.  student.name </br>
    B.  student['Grad Year'] </br>
    C.  student.greeting() </br>
    D.  student['Favorite Teacher'].name </br>
    E.  student.courseLoad[0]

#### Basic Operators & Type Conversions

13. </br>
    A. 32 => `+` operator converts number to string => concatenates </br>
    B.  1 => `-`operator converts both operands to a number </br>
    C.  3 => `null`is converted to the number 0 </br>
    D.  `3null` => `+`operators converts null to `null`and concatenates </br>
    E.  4 => `true`is converted to the number 1 </br>
    F.  0 => `false`is converted to the number 0 </br>
    G.  `3undefined`=> `+`operator converts undefined to string and concatenates </br>
    H. NaN => undefined is converted to NaN and anything arithmetic with NaN yields NaN
14. </br>
    A. true => because `2`is converted to the number 2 and 2 > 1 </br>
    B. false => both are strings, so they are compared lexicographically: `2`comes after `1` </br>
    C. true => `==` performs type coercion (`2`-> 2) then 2 == 2 </br>
    D. false => `===`requires both value and type to match - here: number is not a string </br>
    E. false => true -> 1, and 1 == 2 is false </br>
    F. true => Boolean(2) is true, so both sides are boolean true
15. `==`checks equality after converting types if needed / `===`checks strict equality without any type conversion

#### Loops

16.  see file [Loops](/expose/javascript/part2-question16.js)
    
#### Functions
- callbacks decouple "how to iterate" from "what to do with each item"

17. The result will be the following array: [2, 4, 6]:
    1. modifyArray makes an empty newArr
    2. It loops over [1,2,3], calling doSomething (callback) on each item
    3. doSomething(n) returns n * 2, so you get 2, 4, 6
    4. Those doubled values are pushed into newArr, which is finally returned. 
 18. see file [Functions](/expose/javascript/part2-question18.js)
 19. Output: 1 4 3 2








