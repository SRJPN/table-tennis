# Table Tennis

The engineer love playing table tennis and there is only one table available. 										
Given the engineer's availability to play table tennis, we would like to determine the number of hours where they will be playing singles / doubles.																		
## Condition:											

* The working hours are 9am to 6pm.									
* There is only one table.										
* When there are two to three people, they can only play singles.					
* When there are  over four people, they can play doubles.																	

**Input:**
The first line of the input gives the number of players T, T players available time follow.	
Each consists of one line with Integer S E. S represents start time, and E represents end time.													

Ex:										
``` shell
2
9 10
9 12
```

It means 2 players can play ping pong. The 1st player can play from 9am  to 10am and the 2nd player can play ping pong from 9am to 12pm.

**Output:**
The output would be a one liner containing x y. where x is singles hours count and y is double hours.										
The above input means player 1 can play ping pong from 9am to 10am, and player 2 can play ping pong from 9am to 12pm.

The output of above example would be							

``` shell
1 0
```

Test Input 1
``` shell
2
9 10
9 12
```

Output	
``` shell
1 0
```

Test Input 2
``` shell
4
9 10
9 12
13 15
10 18
```

Output	
``` shell
5 0
```

Test Input 3
``` shell 
7
9 11
12 14
13 15
11 18
14 18
10 14
15 18
```

Output	
``` shell 
7 1
```