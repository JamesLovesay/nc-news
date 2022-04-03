## NewsBytes README

This is a link to the deployed version of this app https://newsbytes.netlify.app/.
This is a link to the back end repo https://github.com/JamesLovesay/nc-news-be-project and the following is the hosted back end for the app <https://nc-news-back-end-project.herokuapp.com/>

### Functions in the app

The app is a news feed that allows the user to filter and sort the articles that are being requested from the api. The user can filter by topic, sort the results by multiple variables and can specify whether the results should be in ascending or descending order. There are also separate topic specific pages with their own filter functionality.

A user of the app can view individual articles by clicking on the title. The comments section for each article is accessible via the button on the article page. 

### Login

There is a login facility with several preset users for exploration of the app. 

### User functions

Once logged in as a preset user, a user of the app will be able to post a comment to an article. There must be a comment entered in order to post. A user can also delete comments that have been made by the logged in preset user. They cannot delete comments made by another user. 

### Node

The minimum version of node required to run this app locally is v17.3.0.

### Installing and running the app locally

1 - You will need to fork and clone the repo with the command `git clone https://github.com/JamesLovesay/nc-news`. 

2 - Navigate in to the folder containing the repo using `cd..` and open the repo using the command `code .`.

3 - Run `npm install` to install the required dependencies for the project.

4 - Finally, the app can be run using the command `npm start`. You can view the app in your browser by opening 
[http://localhost:3000](http://localhost:3000). The page will reload if you make changes and you may see any lint errors in the console. 


