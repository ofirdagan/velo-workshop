# Step 7 - Implementing the core business logic using scheduled jobs + triggered emails

Let's have a quick recap. By now your users can create & delete services. Each user has his own unique API key. Duplicate service names are not allowed and you even have a REST endpoint that updates the time of each service's last ping. It's now time to close all the loose ends and ship this product!

In this step we'll implement the business logic of detecting dead services and sending alerts for both "service is down" and "service is back online" cases.

To complete this step, do the following:

* Change `monitor` function to be called every 3 min (if you're not familiar with js you should use [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval))
* Add a function in your backend code that will be called every 5 minutes ([see running recurring jobs below](#running-recurring-jobs)). The function's logic should detect dead services. This method should query the `pings` database and search for services that weren't "pinged" in more than 3 minutes. In case it finds such services it should flag these services as "dead" and send an alert to the user. In order to send an email to the user you should use [triggered emails](https://support.wix.com/en/article/velo-getting-started-with-triggered-emails). You can get the user's email via the [getMember](https://www.wix.com/velo/reference/wix-members/currentmember/getmember) method.
* Change the REST endpoint your'e using in `monitor` function to check if this service has been "dead". In case it has, send another trigger email of "service is back online"

## Running Recurring Jobs

With Velo you can set [scheduled tasks](https://support.wix.com/en/article/velo-scheduling-recurring-jobs) using a [cron](https://en.wikipedia.org/wiki/Cron) like syntax. This way, you can run a specific backend logic that you want at any given time. The minimum time that's supported for a repeated task is one hour. However, you can set up to 20 tasks so if you add 12 tasks that each has the same repeating task you can achieve a repeating task that will run every five minutes. You can take a look at my `jobs.config` file down [below](#having-troubles)


## All Done?

OMG Congratulations! You've implemented your own (very light) version of Pingdom!!

## Want to learn more?

[Clean code practices, uncovered material and further reading](further-reading.md)
]

## Having Troubles?

Take a look at:
* [http-functions.js](https://gist.github.com/ofirdagan/d700f23799b83acaf56c0de0c102922c)
* [triggered-emails.js](https://gist.github.com/ofirdagan/4badd56983a22adbbbe1be51118a5e1a)
* [services-pings.dao.js](https://gist.github.com/ofirdagan/e77769a88ede5d36440c736cfee4bfb6)
* [services-registry.dao.js](https://gist.github.com/ofirdagan/a0b0abefa74bcbd33fb54a3c59098299)
* [monitor.ts](https://gist.github.com/ofirdagan/f9fb9cb95785cbe5077763e0823133b4)
* [jobs.config](https://gist.github.com/ofirdagan/f4670a008829e4986c7db7623d784cbc)
