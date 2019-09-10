# Cypress

### Getting Started

This is to automate the line up for haidilao malaysia.
When line up success, you will still need to manually extract the myUuId from the success response body.
Sameple response body:
{ 
   "customerName":"chee hove",
   "numberOfGuests":2,
   "languageCode":"en",
   "storeId":"4929",
   "storeName":"Haidilao Hot Pot",
   "storeLogoUrl":"/attachment/store/?type=image&id=4932_LOGO_1",
   "storeImageUrl":"/attachment/store/?type=image&id=4932_MAIN_1",
   "allowCancel":true,
   "status":"WAITING",
   "myLineupCode":"A54",
   "myPosition":43,
   "myEstimatedWaitingTime":0,
   "lineupTime":1568083023204,
   "myUuId":"f44f42f0-c3c8-4f81-bed6-2124438bbd4a",
   "myCategory":"s"
}
replace the myUuId in the code below to get your queue.
https://lineup.ap.gosnappy.io/lineup/success?storeId=4929&code=9dcec99e-063b-40fe-b9d5-7aa5c19ebd05&lang=en


```
> git clone https://github.com/cheehove/Reacts.git


```
> yarn cypress
```
