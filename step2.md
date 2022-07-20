# Step 2 - Learning about repeaters

In this step we'll build the same page as before but this time with code instead of data binding. It's important to know both methods as sometimes you will need to write your own custom logic that will be hard to achieve using data binding alone.

1. Duplicate the "members dashboard page"
2. Delete all datasets and make sure the connected components are unconnected
3. On page load aka (`$w.onReady`) write a query that fetches the user's services and populate it onto the repeater.
   * To do that you will need to use the `wixData` API. Documentation can be found [here](https://www.wix.com/velo/reference/wix-data)
   * You will also need to know about the `repeaters` API. Documentation can be found [here](https://www.wix.com/velo/reference/$w/repeater)


**Note** - You can use the lightbox you've created in the previous page. No need to rewrite this part as well.

Is everything working like the original "member dashboard" page? Great then it's time to move on to [Step 3 - validity checks using wix data hooks](step3.md)


## Having Troubles?

You can look at [this solution](https://gist.github.com/ofirdagan/e73384716382d668b82538a2b5cc28bb) for help.