![Women Who Code Hacktoberfest 2019 banner image](hacktoberfest_readme_image.png)

# The Tech List
Our Women Who Code DFW 2019 Hacktoberfest Project!

## Let's Recognize
The Tech List is a list of notable historical figures who have shaped the field of technology as it exists today, especially underrepresented or marginalized people.

## Let's Collaborate
Anyone is free to contribute to this project! Be mindful of our [Code of Conduct.](https://www.womenwhocode.com/codeofconduct)
* You do not need to be a current member of Women Who Code DFW to contribute
* If you join our Slack, join #Hacktoberfest for communications in real time with other contributors!
* Make sure you [register for Hacktoberfest](https://hacktoberfest.digitalocean.com/) before getting started.

## Phase 1 - Building the Data Together
From October 1st to October 11th, we'll be accepting PRs into our [data repository.](https://github.com/WWCodeDFW/The-Tech-List/tree/master/People) This will be the data that underlies all Tech List projects.

### How To Contribute Data
* Submit your information in the form of JSON to our repository.
- We want this list to feature under represented people, not just women. That includes people of color, disabled people, and lgbtq+ people.
* Make sure you choose a person who does not have an [*Assigned* label in issues](https://github.com/WWCodeDFW/The-Tech-List/issues)!

## Phase 2 - Competition
From October 11th to October 31st, we'll be breaking out into small groups (or you can fly solo!) to use this data to build independent projects. At the end of Hacktoberfest, qualifying projects will be entered into the WWC contest, and the winners will win a prize!

## Run the local API
We have built a (super) basic node server into the project for ease of use with frontend! To run it:

* Fork and clone the repository
* run `npm i`
* run `npm run start`

Use the following urls to see content locally:
* `localhost:[port]/list` for the Full list
* `localhost:[port]/profile/[name].json` for an individual file
* `localhost:[port]/photo/[name].jpg` for an individual headshot
