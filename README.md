# PHX-BOT
Discord bot for PHX alliance management

## HOW TO USE
You should have installed [NodeJS](https://nodejs.org/en/) to be able to build the dependencies using
```
$ npm i
```
Then you can run the bot locally using
```
$ npm start
```

## LIST OF COMMANDS
 - /utc -> shows current UTC time

### R4 COMMANDS
 - /portal description date time-> alert showing info of schedualed portal event.
   - it has a UTC time converter to EST option
   - it has an export to google calendar option
   - it shows the number of people who are going to attend thanks to the badge reaction system
 - /tower -> alert showing a new tower has been placed
 - /resource -> poll about which rss should be placed next
   - it uses a badge reaction system to count votes
