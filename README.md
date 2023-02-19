# Page

An online application intended for freelances to save time when handling paperwork.

1. Invoices
2. Receipts
3. Cover pages for file sections

Links are shareable to other users to reveal the exact same content. This is acheivable by encoding all `states` into the URL itself, a design choice to mitigate the need for any backend. By doing this, we are able to acheive persistance of states.

1. States are persisted through refresh.
2. States are directly shareable by sharing the URL.

## Important note

This project was under development during the month of December in 2021 when I was doing freelance photography. It has since been depreceiated for a few reasons.

1. Challenges with the stratergy used to populate fields when drafting invoices/receipts/covers/etc -- this is believed to cause problems in deployed instances hosted on Vercel.
2. Outdated and inefficient code base. I do intend to redevelop this project using updated versions of Next.js with TypeScript in the future.
3. Shift in priority. As I no longer do freelance work,my priorities have shifted to focus on more pertinent projects.

## Description

### Design Choices and Methodology

![Home page](https://imgur.com/dCe2VN5.png)

This website is built using Next.js 11 (at the time of this development), and styled using TailwindCSS 3.0.

Some of the key features built relied heavily on states. This gave rise to the problem of state management as I was not aware of `Redux` during the development of this project.

![Invoice page](https://i.imgur.com/7WbkONN.png)

Fields on the right were all optional, and every field directly updated the URL. Content that is displayed on the left "subscribed" to changes in the URL to update the texts displayed using `useEffect` hooks. In hind sight, this was incredibly inefficent and resource intensive as the URL has to be parsed multiple times for each change in user input.

A better way to go around this problem would be to use a global state management tool such as `Redux` and `Redux-persist` to store unencoded user inputs. A parent wrapper could have been used to then encode the user inputs and add it to the URL. This parent wrapper can also be used to parse values from the URL on the first load to populate the `Redux` store.

![Problem with adding products](https://imgur.com/SGsmJjX.png)

A significant problem I faced in development was maintaining a list of products that a user could input into the "product" fields. This issue revolved around encoding and storing information in the URL that could facilitate the deletion and rearrangement of the order shown.
