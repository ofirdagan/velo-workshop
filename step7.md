# Step 7 - Implementing the core business logic using scheduled jobs + triggered emails

Let's have a quick recap. By now your users can create & delete services. Each user has his own unique API key. Duplicate service names are not allowed and you even have a REST endpoint that updates the time of each service's ping. It now time to close all the loose ends and ship this product!

In this step we'll implement the business logic of detecting dead services and sending alerts for both service is down and service is back online.

To compelete this step, do the following:

* Change `monitor` function to be called every 3 min (if you're not familiar with js you can use [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval))
* Add a function in your backend code that will be called every 5 minutes (more on that later) which will detect dead services. This method should query the `pings` database and search for services that weren't "pinged" in more than 3 minutes. In case it finds such services it should flag these services as "dead" and send an alert to the user. In order to send an email to the user you should use [triggered emails](https://support.wix.com/en/article/velo-getting-started-with-triggered-emails). You can get the user's email via the [getMember](https://www.wix.com/velo/reference/wix-members/currentmember/getmember) method.
* Change the REST endpoint your'e using in the `monitor` function to check if this service has been "dead". In case it has send another trigged email of "service is back online"

# All Done?

OMGG Congratulations! You've implemented your own (very light) version of Pingdom!!

# Having Troubles?

Take a look at:
* [http-functions.js](https://gist.github.com/ofirdagan/d700f23799b83acaf56c0de0c102922c)
* [triggered-emails.js](https://gist.github.com/ofirdagan/4badd56983a22adbbbe1be51118a5e1a)
* [services-pings.dao.js](https://gist.github.com/ofirdagan/e77769a88ede5d36440c736cfee4bfb6)
* [monitor.ts](https://gist.github.com/ofirdagan/f9fb9cb95785cbe5077763e0823133b4)
