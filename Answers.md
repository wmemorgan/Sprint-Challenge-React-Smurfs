1.  Explain the differences between `client-side routing` and `server-side routing`.
  _Server-side routing is the traditional approach to routing that occurs when the server sends the page based on a user request to view a specific URL (i.e. goes to a website or section of a website). Once the requested page is delivered the browser will refresh to load the new page._

  **Pros**

  - The data being downloaded will only be the requested URL.
  - Optimized for search engines.

  **Cons**

  - The page reloads every time you go to a different location even within the same website.
  - Navigating a website can be a slower experience especially if the site has large content.


  _Client-side routing takes place through the browser and is handled internally by Javascript on the client. A user request to view a specific route within the same website will change the application's state and renders the relevant component instead of sending and awaiting requests from the server._

  **Pros**

  - Routing between views is faster
  - Page reloads are eliminated thus providing a more desktop-client experience.

  **Cons**

  - The entire site is downloaded on browser whether the user requested the resource or not. This leads to wasted data consumption and a slower initial page load depending on the size of the site.
  - Search engine crawling is less optimized.
  - It requires more setup and/or an additional library for frontend development.

2.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

  | CRUD Definition | Relevant HTTP Method |
  | --- | --- |
  | **C**reate | POST |
  | **R**ead | GET |
  | **U**pdate | PUT |
  | **D**elete | Delete |

3.  Mention three tools we can use to make AJAX requests

  - _Javascript method `fetch()`_
  - _3rd party module called `axios`_
  - _XMLHttpRequest Object_

