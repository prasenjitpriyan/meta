<h1>Meta Front-End Developer Professional Certificate</h1>

<h3 style="text-decoration: underline;">Rendering</h3>

<p style="text-align: justify;">Page rendering is the process of converting HTML, CSS, and JavaScript code into interactive web pages that users see when they click on a link. The web server is a special type of computer that allows other computers to make requests for data. The web server responds by sending a webpage back to the browser. Once the browser receives all the response information, the search engine webpage is made visible. The webpage is a coded document that is rendered by the browser and then presented visualy to the end-user.</p>

<h3 style="text-decoration: underline;">Web Hosting</h3>

<p style="text-align: justify;">Developers can launch websites to the Internet using something known as web hosting. Web hosting is a service where you place your website and files on the hosting companies web server. These can include shared hosting, virtual private hosting, dedicated hosting, and Cloud hosting. </p>

<h3 style="text-decoration: underline;">Introduction to Internet Protocols</h3>

<p style="text-align: justify;">Email is a common communication method that we all know about. But before existed the alternative was to send mail to one another through the postal system. There is a surprising parallel between the postal system and how the computer sends and receives data across the internet every day. Let's compare how they both work. Data sent across the internet is quite an important part of our everyday lives and it wouldn't be possible without Internet Protocol addresses or IP addresses. A useful way to think of IP addresses is that they function much like addresses in a postal system that make it possible for packets of information to be delivered to you. And like with the postal system things can go wrong. But let's first go over how things work. Before we think about how they can go wrong in this video you will learn what IP addresses are and explore how computers send data across the internet. You probably learned how computers connect to each other to form networks and how these networks connect to each other to form the internet. When you send data between computers across the internet, a common way of understanding that data is needed by the computers and networks that the data travels across. What makes that possible is the Internet Protocol. Version four and version six are currently the two most widely used standards of internet protocol. Think of the old fashioned postal system again when you send a letter to a friend you need their address otherwise they won't receive your letter. Computers work in a similar way. Every computer on a network is assigned an IP address. In protocol version four an IP address contains four octet. It's separated by periods or dots. For example 192.0.2.235. In protocol version six. An IP address contains eight groups of hexadecimal digits separated by a colon. For example 4527:0a00:1567:0200:ff00:0042:8329.

When you send data across a network, you send the data as a series of messages called IP packets. Also known as data grams at a high level IP packets contain a header and a payload or the data. Think of that old fashioned postal system again, when you send a letter. You not only include the recipient's address but also your own address in case a return location is needed. IP packets are the same. They include the destination IP address and source IP address. These addresses are in the header along with some additional information to help deliver the packet. And the payload contains the data of the packet and some of the other protocols which will cover in a moment. Earlier I mentioned that things can go wrong with the postal system. When sending multiple letters to a friend it's possible they may arrive out of order. It's possible that a package will get damaged or if you're really unlucky a letter could get lost. These issues can happen to IP packets too they can arrive out of order, become damaged or corrupted to in transit or be dropped or lost during transit. To solve these problems, the payload part of the packets contains other protocols too. You can think of them as another message inside the payload of the IP packet. The two most common protocols are the Transmission Control Protocol referred to as TCP and the User Datagram Protocol, also known as UDP. TCP can solve all three of the previously mentioned issues but at the cost of a small delay when sending the data. This protocol is used for sending the data that must arrive correctly and in order such as a text or image files. UDP solves the corrupt packet issue but packets can still arrive out of order or not arrive at all. This protocol is used for sending data that can tolerate some data loss such as voice calls or live video streaming. Both of these protocols contain payloads that contain further protocols inside of them and there you have it. The internet uses internet protocols much like an old fashioned postal system. These protocols can help to make sure that data arrives in order does not become corrupted or lost or dropped during transit. Now you're able to explain how IP addresses work and how computers send data across the internet.</p>

<h3 style="text-decoration: underline;">Introduction to HTTP</h3>

<p style="text-align: justify;">
Have you ever noticed the lock icon beside the URL in your web browser? This means that HTTPS, the secure version of HTTP is being used. HTTP is a core operational protocol of the world wide web. It is what enables your web browser to communicate with a web server that hosts a website. HTTP is the communication protocol you use whenever you browse the web. HTTP stands for Hypertext Transfer Protocol. It is a protocol used for transferring web resources such as HTML documents, images, styles, and other files. HTTP is a request response based protocol. A web browser or client sends an HTTP request to a server and the web server sends the HTTP response back to the browser. Next, let's start exploring the makeup of an HTTP request. An HTTP requests consists of a method, path, version and headers. The HTTP method describes the type of action that the client must performed. The primary or the most commonly used HTTP methods are, GET, POST, PUT, and DELETE. The GET method is used to retrieve information from the given server. The POST request is used to send data to the server. The PUT method updates whatever currently exists on the web server with something else. The DELETE method removes the resource. The path is the representation of where the resource is stored on the web server, for example if you wanted to request an image from a page in a website, then the URL in the address bar would need to contain the full path to that particular file on the web server, such as example dot com, forward slash images, forward slash image dot jpg. There are multiple versions of the HTTP protocol. I won't explore these right now, but I want you to be aware that Versions 1.1 and 2.0 are the most used. Finally, there are the headers. Headers contain additional information about the request and the client that is making the request. For certain requests methods, the request will also contain a body of content that the client is sending. Now, let's cover some details about the makeup of an HTTP response. HTTP responses follow a format similar to the request format. Following the header, the response will optionally contain a message body consisting of the response contents such as the HTML document, the image file and so forth. HTTP status codes contained within the header indicate if the HTTP request successfully completed. The code values are in the range of 100-599 and are grouped by purpose. The status message is a text representation of the status code. During your web browsing, have you ever encountered pages that display 404 error not found or 500 errors? Server is not responding. These are HTTP status codes. I want to briefly explain to you about the status codes and their grouping. There are five groups of status codes. They are grouped by the first digit of the error number. Informational is grouped 100-199. Successful responses are grouped from 200-299. Redirection message are 300-399. Client error responses range from 400-499, and server error responses are 500-599. Information responses are provisional responses sent by the server. These responses are interim before the actual response. The most common information response is 100 continue, which indicates that the web client should continue to request or ignore the response if the request is already finished. Successful responses indicate that the request was successfully processed by the web server, with the most common success response being 200 OK. You're receiving these responses every day when you receive content successfully from a website. The meaning of OK, depends on the HTTP method. If the method is GET, it means that the resource is found and is included in the body of the HTTP response. If it's POST, it means that the resource was successfully transmitted to the web server and if it's PUT, the resource was successfully transmitted to the web server. Finally, if the method is DELETE, it means the resource was deleted. Redirection responses indicate to the web client that the requested resource has been moved to a different path. The most common response codes used are 301 moved permanently and 302 found. The difference between the redirection messages 301 and 302 is that 302 indicates a temporary redirection.The resource has been temporarily moved. When web browsers receive these responses, they will automatically submit the request for the resource at the new path. Client error responses indicate that the requests contained bad syntax or content and cannot be processed by the web server. The most common codes used are 400 is used when the web browser or client submitted bad data to the web server, 401 is used to indicate that the user must log into an account before the request can be processed, 403 is used to indicate the request was valid, but that the web server is refusing to process it. This is often used to indicate that a user does not have sufficient permissions to execute an action in a web application, 404 is used to indicate that the request resource was not found on the web server. Server error responses indicate that a failure occurred on the web server while trying to process the request. The most common code used is 500 internal server error, which is a generic error status indicating that the server failed to process the request. Now, have you ever bought something online and needed to enter your credit card information? You wouldn't want someone else to get this information from the HTTP request. This is where HTTPS is involved. HTTPS is the secure version of HTTP. It is used for secure communication between two computers so that nobody else can see the information being sent and received. It does this by using something called encryption. We won't cover encryption right now. Like in HTTP, the requests and responses still behave in the same way and have the same content. The big difference is that before the content is sent, it is turned into a secret code. Only the other computer can turn the secret code back into its original content. If someone else was to look at the code, it wouldn't be understandable.You use HTTPS every day. This is the lock icon you see beside the URL in your web browser. Before I finish, I want to leave you with a brief summary of HTTP. Firstly, it is a protocol used by web clients and web servers. It works to transfer web resources such as HTML files, and is the foundation of any data exchanges on the web. Also, remember that by using HTTPS, we send the information securely. Requests are sent by the client, usually a web browser, and the server replies with responses which may be the return of an image or an HTML page. HTTPS requests have a syntax that includes method, path, versions and headers. HTTP responses follow a similar format to the request. HTTP status codes indicate whether the HTTP requests successfully completed. The status code is a three-digit number that corresponds with groups representing different types of results. Well, now you know how the HTTP protocol request and response cycle works. You know about its methods and the elements that make up an HTTP request. Good job.
</p>

<h3 style="text-decoration: underline;">HTTP examples</h3>

This reading explores the contents of HTTP requests and responses in more depth.

Request Line: Every HTTP request begins with the request line. This consists of the HTTP method, the requested resource and the HTTP protocol version.

```
GET /home.html HTTP/1.1
```

In this example, GET is the HTTP method, /home.html is the resource requested and HTTP 1.1 is the protocol used.

#### HTTP methods indicate the action that the client wishes to perform on the web server resource.

Common HTTP methods are:

| HTTP Method | Description                                                |
| ----------- | ---------------------------------------------------------- |
| GET         | The client requests a resource on the web server.          |
| POST        | The client submits data to a resource on the web server.   |
| PUT         | The client replaces a resource on the web server.          |
| DELETE      | The client replaces a resource on the web server.          |
| PATCH       | The client partially updates a resource on the web server. |

#### HTTP Request Headers

After the request line, the HTTP headers are followed by a line break. There are various possibilities when including an HTTP header in the HTTP request. A header is a case-insensitive name followed by a: and then followed by a value.

Common headers are:

```
Host: example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en
Content-type: text/json
```

- The Host header specifies the host of the server and indicates where the resource is requested from.

- The User-Agent header informs the web server of the application that is making the request. It often includes the operating system (Windows, Mac, Linux), version and application vendor.

- The Accept header informs the web server what type of content the client will accept as the response.

- The Accept-Language header indicates the language and optionally the locale that the client prefers.

- The Content-type header indicates the type of content being transmitted in the request body.

#### HTTP Request Body

HTTP requests can optionally include a request body. A request body is often included when using the HTTP POST and PUT methods to transmit data.

```
POST /users HTTP/1.1
Host: example.com

{
 "key1":"value1",
 "key2":"value2",
 "array1":["value3","value4"]
}
```

#### HTTP Responses

When the web server is finished processing the HTTP request, it will send back an HTTP response. The first line of the response is the status line. This line shows the client if the request was successful or if an error occurred.

```
HTTP/1.1 200 OK
```

The line begins with the HTTP protocol version, followed by the status code and a reason phrase. The reason phrase is a textual representation of the status code.

#### HTTP Status Codes

The first digit of an HTTP status code indicates the category of the response: Information, Successful, Redirection, Client Error or Server Error. The common status codes you'll encounter for each category are:

```
1XX Informational
```

| Status Code | Reason Phrase       | Description                                                                                 |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------- |
| 100         | Continue            | The server received the request headers and should continue to send the request body.       |
| 101         | Switching Protocols | The client has requested the server to switch protocols and the server has agreed to do so. |

```
2XX Successful
```

| Status Code | Reason Phrase | Description                                                                                   |
| ----------- | ------------- | --------------------------------------------------------------------------------------------- |
| 200         | Ok            | Standard response returned by the server to indicate it successfully processed the request.   |
| 201         | Created       | The server successfully processed the request and a resource was created.                     |
| 202         | Accepted      | The server accepted the request for processing but the processing has not yet been completed. |
| 204         | No Content    | The server successfully processed the request but is not returning any content.               |

```
3XX Redirection
```

| Status Code | Reason Phrase     | Description                                                                   |
| ----------- | ----------------- | ----------------------------------------------------------------------------- |
| 301         | Moved Permanently | This request and all future requests should be sent to the returned location. |
| 302         | Found             | This request should be sent to the returned location.                         |

```
4XX Redirection
```

| Status Code | Reason Phrase      | Description                                                                                                                                                                                                                                |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 400         | Bad Request        | The server cannot process the request due to a client error, e.g., invalid request or transmitted data is too large.                                                                                                                       |
| 401         | Unauthorized       | The client making the request is unauthorized and should authenticate.                                                                                                                                                                     |
| 403         | Forbidden          | The request was valid but the server is refusing to process it. This is usually returned due to the client having insufficient permissions for the website, e.g., requesting an administrator action but the user is not an administrator. |
| 404         | Not Found          | The server did not find the requested resource.                                                                                                                                                                                            |
| 405         | Method Not Allowed | The web server does not support the HTTP method used.                                                                                                                                                                                      |

```
5XX Redirection
```

| Status Code | Reason Phrase         | Description                                                                                                    |
| ----------- | --------------------- | -------------------------------------------------------------------------------------------------------------- |
| 500         | Internal Server Error | A generic error status code given when an unexpected error or condition occurred while processing the request. |
| 502         | Bad Gateway           | The web server received an invalid response from the Application Server.                                       |
| 503         | Service Unavailable   | The web server cannot process the request.                                                                     |

#### HTTP Response Headers

Following the status line, there are optional HTTP response headers followed by a line break. Similar to the request headers, there are many possible HTTP headers that can be included in the HTTP response.

Common response headers are:

```
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```

- The Date header specifies the date and time the HTTP response was generated.

- The Server header describes the web server software used to generate the response.

- The Content-Length header describes the length of the response.

- The Content-Type header describes the media type of the resource returned (e.g. HTML document, image, video).

#### HTTP Response Body

Following the HTTP response headers is the HTTP response body. This is the main content of the HTTP response. This can contain images, video, HTML documents and other media types.

```html
HTTP/1.1 200 OK Date: Fri, 11 Feb 2022 15:00:00 GMT+2 Server: Apache/2.2.14
(Linux) Content-Length: 84 Content-Type: text/html

<html>
	<head>
		<title>Test</title>
	</head>
	<body>
		Test HTML page.
	</body>
</html>
```

<h3 style="text-decoration: underline;">Other Internet Protocols</h3>

Hypertext Transfer Protocols (HTTP) are used on top of Transmission Control Protocol (TCP) to transfer webpages and other content from websites.
This reading explores other protocols commonly used on the Internet.

#### Dynamic Host Configuration Protocol (DHCP)

You've learned that computers need IP addresses to communicate with each other. When your computer connects to a network, the Dynamic Host Configuration Protocol or DHCP as it is commonly known, is used to assign your computer an IP address.
Your computer communicates over User Datagram Protocol (UDP) using the protocol with a type of server called a DHCP server. The server keeps track of computers on the network and their IP addresses. It will assign your computer an IP address and respond over the protocol to let it know which IP address to use. Once your computer has an IP address, it can communicate with other computers on the network.

#### Domain Name System Protocol (DNS)

Your computer needs a way to know with which IP address to communicate when you visit a website in your web browser, for example, meta.com. The Domain Name System Protocol, commonly known as DNS, provides this function. Your computer then checks with the DNS server associated with the domain name and then returns the correct IP address.

#### Internet Message Access Protocol (IMAP)

Do you check your emails on your mobile or tablet device? Or maybe you use an email application on your computer?
Your device needs a way to download emails and manage your mailbox on the server storing your emails. This is the purpose of the Internet Message Access Protocol or IMAP.

#### Simple Mail Transfer Protocol (SMTP)

Now that your emails are on your device, you need a way to send emails. The Simple Mail Transfer Protocol, or SMTP, is used. It allows email clients to submit emails for sending via an SMTP server. You can also use it to receive emails from an email client, but IMAP is more commonly used.

#### Post Office Protocol (POP)

The Post Office Protocol (POP) is an older protocol used to download emails to an email client. The main difference in using POP instead of IMAP is that POP will delete the emails on the server once they have been downloaded to your local device. Although it is no longer commonly used in email clients, developers often use it to implement email automation as it is a more straightforward protocol than IMAP.

#### File Transfer Protocol (FTP)

When running your websites and web applications on the Internet, you'll need a way to transfer the files from your local computer to the server they'll run on. The standard protocol used for this is the File Transfer Protocol or FTP. FTP allows you to list, send, receive and delete files on a server. Your server must run an FTP Server and you will need an FTP Client on your local machine. You'll learn more about these in a later course.

#### Secure Shell Protocol (SSH)

When you start working with servers, you'll also need a way to log in and interact with the computer remotely. The most common method of doing this is using the Secure Shell Protocol, commonly referred to as SSH. Using an SSH client allows you to connect to an SSH server running on a server to perform commands on the remote computer.

All data sent over SSH is encrypted. This means that third parties cannot understand the data transmitted. Only the sending and receiving computers can understand the data.

#### SSH File Transfer Protocol (SFTP)

The data is transmitted insecurely when using the File Transfer Protocol. This means that third parties may understand the data that you are sending. This is not right if you transmit company files such as software and databases. To solve this, the SSH File Transfer Protocol, alternatively called the Secure File Transfer Protocol, can be used to transfer files over the SSH protocol. This ensures that the data is transmitted securely. Most FTP clients also support the SFTP protocol.

<h3 style="text-decoration: underline;">Webpages, Websites and Web Apps</h3>

When you do something online, you are likely to encounter web pages, websites, and web applications. But how do they differ? As a developer, how do you decide which one to create? Let's explore the main features of each one. A typical web page is one single page that consists of HTML, CSS, and JavaScript. It displays images, text, videos, and other content in the web browser. If a web page is one single page then a website is a collection of web pages that link together under one domain name. You've likely visited many websites this week. You know, when you visit your favorite encyclopedia website and the homepage has a lot of links to different articles, clicking on one of those links brings you to an article on a new web page, and that article links to more articles, and other web pages. Well, since all of these web pages exist under the same domain name, they are a website. The technical term for a link, you click on a hyperlink. This is because they link to hypertext content. Remember that HTML is Hypertext Markup Language. However, links themselves, don't have to link to the same website. They can also link to other websites. For example when you go to your favorite search engine and search for a phrase, the search results are a list of links to other websites. You'll explore more about hyperlinks later. By now, you should probably know the difference between a web page and the websites, but what about a web application? This is where the definitions gets a little more blurred. The terms website and web application are often used interchangeably. The key difference between a website, and web application is the level of interactivity, and dynamic content. <b>The easy way to remember this is that a website is more informative and a web application is more interactive. </b>Think of ordering food online. Let's say you would like to order some food and you go to your favorite site, the browser then displays a web page, you select some food from the menu and submit your order. Compare this to for example, a company website that displays information about themselves and the services they provide. In the food ordering example, the content displayed is specific to your user account and location, the web application displays content based on the user's input and interaction. Whereas with the company website, the user simply views the content and this content is the same for everyone who visits the website. You should now be able to distinguish between web pages, websites, and web applications. You know that web pages at a particular domain make up a website, and that the key difference between websites, and web applications is the level of interactivity, and dynamic content.

<h3 style="text-decoration: underline;">Developer tools</h3>

Most web browsers come equipped with a set of developer tools that allow developers to inspect their HTML, CSS and Javascript code. Also, to trace http request to the web server, investigate performance issues and review web page security. Let's find out more by exploring the homepage of the Little Lemon Cafe. To begin, I've just opened the Little Lemon Cafes web page on my chrome browser. On the homepage, I can view their menu. But I want to explore the HTML structure of this menu. To do that, I need to open the developer tools. To open the developer tools in chrome, press the F12 key on your keyboard for PC or command option J on Mac. Alternatively, you can right click on the web page and select inspect. There are various tabs on the top row of developer tools that provide different functionality. In this video, I'll give you a high level explanation of some of the most used tools. 1st, let's open the console tab. This tab outputs, javascript logs and errors from your web application. The sources tab shows all content resolved for the current page. It includes HTML, CSS, Javascript, images and videos. With the network tab, you can inspect the timeline and details of http requests and responses for the web page. The performance tab shows what the web browser is doing over time. It is useful if your web application is running slow because you can pinpoint the functions that are taking the most time. The memory tab displays the parts of your code that are consuming the most resources. Finally, let's check the most used tab the elements tab. You can use this tab to inspect the documents, HTML elements and their properties. For example, when I hover over an element in the elements tab, it highlights that element in the browser pane. On the right side of the panel, there are tabs for inspecting the details of the elements further. This panel shows us what CSS is applied to an element and the result of the element displayed in the browser. We will explore these details in a later lesson. For now, you just need to know that if you click on an HTML element, then the information for that element will appear in the tab. Now, I'm going to demonstrate a fun trick. If you double click the HTML, you can edit it in the web browser. For example, if I select the Our Menu body element, then I can change the first item in the menu from chicken Burger, to Turkey Burger.

<h3 style="text-decoration: underline;">Frameworks and libraries</h3>

You are developing solutions but you need to save some time and build faster. What if some of your build problems have already been solved for you? Well it's true someone has already figured out many key development processes and they're contained in frameworks and libraries that are used every day in software development, so what exactly are frameworks and libraries? Let's say you are not a developer, but instead you work as a carpenter. You make chairs and sell them online. As a carpenter you don't design a new hammer for every chair you make. It makes much more sense to use an existing hammer, but of course you are a developer. As such it's important for you to know that to speed up development, developers use already developed frameworks and libraries in their application development. These might be open source, meaning that the source code is freely-available for anyone to modify and build from. There are thousands of open source libraries and frameworks available or there might be proprietary, ones that are licensed or developed internally. Many developers use the terms framework and library interchangeably, so what's the difference between them? Libraries are reusable pieces of code that can be used by your application. They are purpose-built to provide a specific functionality. To give a more technical example, you're building a small e-commerce website. When a user wants to register they need to provide their email address. Email addresses while easy to read can be complicated to validate. In fact email addresses are defined across several technical specifications. That's a lot of reading just to validate an email. Even if you do read through all the specification, there's no point in spending hours or even days implementing their standards because you have access to so many readily-available libraries to validate email addresses. It is for specific functionality like validating an email address that libraries are useful. A developers simply uses the library to access the functionality they require, as a result they can have more time to continue focusing on the development of their application. Frameworks on the other hand provide a structure for developers to build with. Consider this in the context of our carpenter analogy. As a carpenter you create a lot of different chairs, therefore there would be a blueprint for each chair to speed up building them. You can decide the type of wood to use, but the dimensions and style of the chair are always the same. Frameworks act as a structure where the developer provides their own code that the framework interacts with. For example, there are many frameworks for developing web applications. These frameworks handle functionality that is common to all web applications such as receiving HTTP requests and sending HTTP responses. The developer then adds their own code that implements the functionality of the web application. For instance with the e-commerce website example, a framework would handle receiving HTTP requests. The developer would implement code that processes the request and returns a response from which the framework would send a response over HTTP. Now let's compare how the frameworks relate to libraries. Most frameworks use many libraries. The libraries that the framework uses can be used for your application. If you wish, your application can also use other libraries. You also need to consider when to use a framework and when to use a library. Frameworks are considered opinionated and libraries are considered unopinionated. This is defined as the degree of freedom available to the developer to choose how to code a feature. The opinionatedness will vary between frameworks, but by definition they will always be more opinionated than a library. The benefit of this is that they can replace libraries as needed. For example when new technologies become available frameworks to find the libraries flow and control of an application, whereas with the libraries those are left to the developer to decide. As with everything there are advantages and disadvantages to both. Frameworks are a great way to reduce development time and to enforce a structure on how code is written. They have many best practices already in place and contain most of what is needed to develop an application, however, sometimes you may find that the way you need to code something doesn't fit into the structure of the framework. Other times you may find that some of the libraries the framework uses may conflict with a library that you are required to use and cause compatibility issues. If an application is built without a framework, the developer will need to decide on the set of libraries they wish to use to achieve the functionality they must deliver. They will also need to take care that the selected libraries can work together. The upside to this is that they can replace libraries as needed. For example, if a new better library is released, the developer can replace the usage of the old library. This is much easier than replacing a framework. Frameworks and libraries give you the opportunity to reuse existing web app functions. This can result in faster development, fewer errors, and more time for you to spend on the essential features of your application. Instead of reinventing the wheel, you can use frameworks and libraries that are designed specifically to help your web app development processes.

<h3 style="text-decoration: underline;">APIs and services</h3>

Every day you access information on your phone, like reading the news, purchasing goods and services or communicating with friends over social media. But how is all this information transferred behind the scenes? Your favorite websites and apps. Probably use API's and as a web developer, you'll discover that API's developer friendly, easily accessible and a very valuable and useful development tool. A PI is the acronym for application programming interface. An API is a set of functions and procedures for creating applications that access the features or data of an operating system, application or other service. If this still sounds a bit vague, just remember that the term API, is intentionally open too many applications and use cases. As a web developer, a lot of the day to day job involves working with API's. Some common API's that web developers work with include Browser, API REST API and Sensor-Based API. Over the next few minutes, you'll explore each of these API types and review a few specific examples. To begin with, here's a brief outline of how a piecewise functions. In Software development, API's are often the bridge between different components or systems. This earns them names like gateway or middleware. The term is used widely to represent many different tools and systems. Let's consider some examples of different API use cases. One common type of API, is Browser or Web APIs, which are built into the browser itself. They extend the functionality of the browser by adding new services and are designed to simplify complex functions and provide easy syntax for building advanced features. A good example, is the DOM API. The DOM API turns the html document into a tree of nodes that are represented as JavaScript objects. Another example, is the geolocation API that returns coordinates of where the browser is located. There are also other API's available for fetching data known as Fetch API drawing, graphics or Canvas API keeping history or history API. And client side storage also known as Web Storage API. Another critical type of API for web development is the RESTful or REST API. This kind of API provides data for popular web and mobile apps. These are also called web servers. Let's explore REST in a bit more detail. REST or representational state transfer, is a set of principles that help build highly efficient API's. One of the main responsibilities of these kinds of API's is sending and receiving data to and from a centralized database. We can query our own REST API or third party ones. One last type of API, that you might encounter as a web developer is a Sensor-Based API. This is what the internet of things also known as IOT is based on. These are actual physical senses that are interconnected with each other. The sensors can communicate through API and track and respond to physical data. Some examples are Philips hue, smart lights and node bots. That's a lot of API to think about. Fortunately, for web developers the most common data API is a RESTtful API which as you've learned is a web server that provides responses to requests. These API web servers are designed to provide the data backbone for a web client like a web page or mobile app. This means that these API's must be able to accomplish things like getting data or get, creating data. Also referred to as post updating data or put and deleting data or delete. API issues, REST principles and good design practices to create discoverable interfaces. This helps us get the exact response expected. But exactly how do they work? Here's a closer description of their activity. These API's use endpoints to specify how different resources can be accessed. The endpoint is built into the URL when accessing the API. Once the endpoint is hit, the API performs whatever service side processing is needed to build the response. Two common forms of response are, full web pages and data form based on JavaScript called Jason. In this video, you explored some API's and as a web developer, you will frequently work with many different types of API's. You will often use API's to extend the abilities of systems or to act as a bridge between different components.

<h3 style="text-decoration: underline;">What is a an IDE?</h3>

Think of a group of construction workers, every worker has a toolbox that helps them get their job done. As a developer, you'll also use many tools. One of the main tools in your toolbox is the integrated development environment or IDE. By the end of this video you'll be able to identify an IDE and explain the benefits of using an IDE during development. An integrated development environment or IDE is software for building applications. An IDE is just like a text editor except instead of writing documents you're writing code. There are many IDEs available, some are specific to one programming language while others support many languages in one IDE. Let's explore some common IDE features. Here I am working within an IDE. First let's cover syntax highlighting. To improve readability for developers, IEDs have syntax highlighting. What this means, is that special keywords of the programming language are highlighted in different colors so that the developer can quickly differentiate these keywords from other texts. For example, if you're writing JavaScript code without syntax highlighting, it could be harder to identify keywords from other texts. With syntax highlighting, that gets much easier because the JavaScript keywords and variables are colored differently. Now, let's explore error highlighting. Just like checking spelling in a text document, IDEs can highlight mistakes you make in your programming code. For example, if I delete the equal symbol where it's needed, my IDE will highlight the error. Another feature of IDEs is also complete. When you're typing a message on your phone, it suggests words as you type. An IDE's autocomplete is a similar feature. Since programming languages have special keywords, IDEs can offer suggestions to autocomplete words as you start typing them. Additionally, another feature called IntelliSense can make IEDs very smart and even able to understand your code. They can detect variables and functions and offer them as suggestions during autocomplete. For example, if I have a JavaScript function named myFunction defined at the top of the JavaScript file, then as soon as I start typing the letter m my IDE suggest this function as an autocompletion. Then there is refactoring. Since IEDs understand your code, they can help you if you need to change it. To demonstrate how refactoring works, let's continue with the myFunction function that I defined a moment ago. In the code, the function is then called multiple times. It can also be called in the code of other files too. But what if you need to rename this function? You would need to rename it in every file that uses the function ensuring that you update those files to use the new name. This process is known as refactoring, changing the structure of the code without changing the functionality. Doing this manually is very time consuming and prone to error. If you mistyped the new function name in one place, the application will break. Since the IDE understand your code, it can assist with refactoring and automatically update the function name across all files. That saves a lot of time. Let's rename our function now. I just right click on the function and select rename symbol. Then I change it from myFunction to ourFunction. The IED then updates all references of that function name. IDEs come with a lot of other features to help investigate bugs and collaborate with other developers. Many even allow you to extend their functionality using plugins and extensions, but that's beyond the scope of this lesson. We have explored some features of IDEs in this video. You now know how IDEs operate as part of the developers toolbox to write code more effectively. Well done.

<h3 style="text-decoration: underline;">Introduction to the DOM</h3>

Let me put it differently, an HTML document must be represented in a certain way, so that JavaScript code can query and update it, to do this we use the document object model. In this video, I will unpack what the DOM is, how it is created and how JavaScript interacts with the DOM to make sites dynamic. When your web browser receives an HTML page, it constructs a DOM to represent it. DOM stands for Document Object Model and it is simply a tree, structure or model of the objects in your HTML file. To understand the DOM, I want you to think of a simple HTML page, remember that an HTML document has opening and closing tags for the document and the head. And inside the head tags you have title tags, then you have the body and inside the body there might be elements such as div tags. Okay, now, let me guide you through how a DOM would be generated, the DOM has a series of objects each representing a single HTML element. At the root of the DOM is the html object and it contains the head and body object. From there, the head object houses the title object and the title object contains its text object. The body object contains the two div objects, the first div houses, the h1 object which again houses its text object. The second div object contains the paragraph object which contains its text object. In summary, all the elements in the HTML file are represented as objects in the document object model. I just took you through a very simple webpage, webpages typically have hundreds of elements. Can you imagine how complex the DOM of a highly interactive modern web page is? You as a developer can use JavaScript to access and modify the DOM to make your webpages dynamic. In fact, in a later course you will learn how to access and modify the structure of the DOM and its elements in different ways. Now that you know what the DOM is and how it is referenced, let me briefly explain common DOOM and JavaScript uses. For each element, you can access the HTML attributes and content, this means you can update the existing content that is displayed in the web browser. For instance, you could write some JavaScript to update the seconds, minutes and hours of a digital clock on a website. Or if you develop a movie streaming website, you can write code that responds to user actions such as clicking mouse over scrolling and so on. In this way you can allow a preview of the movie to play when the user hovers the mouse over the movie's poster. Or you can think of a log in page, when users click the Login button, you can disable the button so that it cannot be clicked again. The web application would bring them to a new web page or would re-enable the button, if a log in error occurred. You can even add DOM objects to dynamically add new HTML content to a live web page. For instance, you can add an error message to a form if the user inserts invalid data, DOM objects can also be deleted which will remove the corresponding HTML displayed in the browser. Think of a to-do list on a website, you can remove an item from the list when the user clicks on it. Another major use of JavaScript and the DOM is to animate the HTML elements. This can be quite complex depending on the animation but there are many libraries available that aim to simplify this. For example, when a page first loads, you can fade in the page contents or when a user receives an instant message, a notification can pop up in the web browser. Many JavaScript libraries and frameworks rely on the DOM, one of these libraries is the react library. By now, you know what the DOM is, how it is constructed and the wonderful things web developers can do with it to create modern interactive websites.
​

<h3 style="text-decoration: underline;">Static and dynamic content</h3>

I'm sure you've noticed that when you shop online, websites will often provide you with personalized recommendations. But when your friends login to those same websites, the recommendations will differ. But did you ever wonder how websites adapt to different user profiles? In this video, you'll learn the difference between static and dynamic content. You will also be able to differentiate between the role of a web server and an application server. By now, you know that when you open a website, a web server sends the website's content to your browser. The content can be static or dynamic. Static content is files that the server transfers just as they are stored on the web server, such as videos or images. Dynamic content, on the other hand, is generated when the HTTP request is made. For example, the content may be generated based on input from a user, or when you visit a news website, it would be based on the current date. What actually happens, is that the web server communicates with another kind of server, called an application server or a back-end. The application server generates the dynamic content that the web server sends back to the user's browser. Now you know the difference. Let's look at examples of how websites update static and dynamic content. Say for instance, you want to watch a video on a website, you click on the Play button and a request is sent to the web server. The web server responds by sending the file to your browser. Now, how does this compare to dynamic content? Because dynamic content is generated while you use a website, it typically takes longer to generate than it takes to send back static content. For example, when you log into this course, the web server communicates with an application server to check that you are in fact enrolled. The application server confirms your enrollment and specifies what content should show for your profile specifically. Application servers perform more complex processing than web servers. For instance, they have to run the application logic, communicate with the database, and check permissions. To improve performance, different application servers have specific purposes. There are application servers for every type of content out there, from music streaming to creating your own blog. You can even create your own application servers, such as building a back-end for a web application. But hang on, If dynamic content is slower to generate, isn't that a problem for big websites? Yes, it is. Application servers typically have a limited capacity on how many requests they can process per second. But fortunately, this is where the web server can help out. Web servers use a process called caching instead of generating content dynamically for every request. Caching means the web server keeps a copy of dynamic content. If the content is requested again, the web server can immediately send this cached version instead of passing the request again to the application server. On the first request for dynamic content, the web server checks if the content exists in the cache. If it does not exist, the content is requested from the application server and stored in the cache. The web server then sends back the dynamic content to the browser. On subsequent requests, the web server immediately sends back the content stored in the cache. This reduces the amount of dynamic content that the application server has to generate. Then, after a period of time or with the next user interaction, the web server updates the cache with the latest content. Now you know the difference between static and dynamic content, as well as the difference between web and application servers. With this new information, try to identify with the content on the websites you visit is static or dynamic.

## The Virtual DOM

React builds a representation of the browser Document Object Model or DOM in memory called the virtual DOM. As components are updated, React checks to see if the component’s HTML code in the virtual DOM matches the browser DOM. If a change is required, the browser DOM is updated. If nothing has changed, then no update is performed.

As you know, this is called the reconciliation process and can be broken down into the following steps:

Step 1: The virtual DOM is updated.

Step 2: The virtual DOM is compared to the previous version of the virtual DOM and checks which elements have changed.

Step 3: The changed elements are updated in the browser DOM.

Step 4: The displayed webpage updates to match the browser DOM.

As updating the browser DOM can be a slow operation, this process helps to reduce the number of updates to the browser DOM by only updating when it is necessary.

But even with this process, if a lot of elements are updated by an event, pushing the update to the browser DOM can still be expensive and cause slow performance in the web application.

The React team invested many years of research into solving this problem. The outcome of that research is what’s known as the React Fiber Architecture.

The Fiber Architecture allows React to incrementally render the web page. What this means is that instead of immediately updating the browser DOM with all virtual DOM changes, React can spread the update over time. But what does "over time" mean?

Imagine a really long web page in the web browser. If the user scrolls to the bottom, the top of the web page is no longer visible. The user then clicks a button on the bottom of the web page that updates some text on the top of the web page.

But the top of the page isn’t visible. Therefore, why update it immediately?

Perhaps there is text currently displayed on the bottom of the page that also updates when the button is clicked. Wouldn’t that be a higher priority to update than the non-visible text?

This is the principle of the React Fiber Architecture. React can optimize when and where updates occur to the browser DOM to significantly improve application performance and responsiveness to user input. Think of it as a priority system. The highest priority changes, the elements visible to the user, are updated first. While lower priority changes, the elements not currently displayed, are updated later.

While you’re unlikely to interact with the virtual DOM and Fiber Architecture yourself, it’s good to know what’s going on if issues occur during the development of your web application.

There are many tools available to help you investigate how React is processing your webpage. The official React Developer Tools web browser plugin developed by Meta will be one of the key tools in your developer toolbox. So, if you do have to look deeper into the code, you’ll have the right toolbox available to help you. These tools will be explored later on.

## Conditional examples

In this reading, you will learn when to use the if else statement and when to use the switch statement.

Both if else and switch are used to determine the program execution flow based on whether or not some conditions have been met.

This is why they are sometimes referred to as flow control statements. In other words, they control the flow of execution of your code, so that some code can be skipped, while other code can be executed.

At the heart of both flow control structures lies the evaluation of one or more conditions.

Generally, if else is better suited if there is a binary choice in the condition.

For example, in plain English: if it's sunny, wear sunglasses. Otherwise, don't.

In this case, using an if statement is an obvious choice.

When there are a smaller number of possible outcomes of truthy checks, it is still possible to use an if else statement, such as:

```javascript
if (light == 'green') {
	console.log('Drive');
} else if (light == 'orange') {
	console.log('Get ready');
} else if (light == 'red') {
	console.log("Dont' drive");
} else {
	//this block will run if no condition matches
	console.log('The light is not green, orange, or red');
}
```

However, if there are a lot of possible outcomes, it is best practice to use a switch statement because it is easier less verbose. Being easier to read, it is easier to follow the logic, and thus reduce cognitive load of reading multiple conditions.

Nevertheless, this is not a rule set in stone. It is simply a stylistic choice.

To reinforce this point, here's an example of the earlier if else conditional statement, using the switch syntax:

```javascript
//converting the previous if-else example with switch-case
switch (light) {
	case 'green':
		console.log('Drive');
		break;
	case 'orange':
		console.log('Get ready');
		break;
	case 'red':
		console.log("Don't drive");
		break;
	default:
		//this block will run if no condition matches
		console.log('The light is not green, orange, or red');
		break;
}
```

## Inheritance in JavaScript

In JavaScript, inheritance allows a class to derive properties and characteristics from another class while having its own properties as well. There are two main types of inheritance in JavaScript: prototypal inheritance and class inheritance.

```javascript
let bird = {
	hasWings: true,
	canFly: true,
	hasFeathers: true,
};

let eagle = Object.create(bird);
console.log(eagle);
console.log(eagle.hasWings);
console.log(eagle.canFly);
console.log(eagle.hasFeathers);

let penguin = Object.create(bird);
penguin.canFly = false;
console.log(penguin);
console.log(penguin.hasWings);
console.log(penguin.canFly);
console.log(penguin.hasFeathers);

let parrot = Object.create(bird);
console.log(parrot);
console.log(parrot.hasWings);
console.log(parrot.canFly);
console.log(parrot.hasFeathers);
```

- Prototypal Inheritance: This type of inheritance involves the use of an object’s prototype to inherit properties and methods from another object. In JavaScript, “prototypal inheritance” is a mechanism by which an object can inherit the properties and methods of another object.

```javascript
// Parent object
const person = {
	name: 'John',
	age: 30,
	greet: function () {
		console.log(`Hello, I'm ${this.name}`);
	},
};

// Child object inheriting from the parent object
const employee = Object.create(person);
employee.jobTitle = 'Engineer';

employee.greet(); // Output: Hello, I'm John
console.log(employee.jobTitle); // Output: Engineer
```

- Class Inheritance: This type of inheritance involves the use of the extends keyword to create a new class that inherits properties and methods from another class.

```javascript
class Game {
	constructor(name, maxNumberOfPlayers) {
		this.name = name;
		this.maxNumberOfPlayers = maxNumberOfPlayers;
	}
}

// Child class inheriting from the Game class
class Videogame extends Game {
	constructor(name, maxNumberOfPlayers, platform) {
		super(name, maxNumberOfPlayers);
		this.platform = platform;
	}
}

let game = new Game('Monopoly', 8);
let videogame = new Videogame('UNO', 10, 'Nintendo Switch');

console.log(game.name); // Output: Monopoly
console.log(videogame.name); // Output: UNO
console.log(videogame.platform); // Output: Nintendo Switch
```

In both cases, inheritance allows us to reuse previously-created class elements in a new class without having to rewrite the same code, resulting in more efficient and concise code.

## Types of testing

As a developer, you are tasked to test a piece of software, how would you do it in the next few minutes. I am going to explain what software testing is. I'm going to introduce you to the three most used types of testing. You might say that testing a piece of software at a high level means making sure that it behaves as expected in any modern software development project. These expectations are recorded as software requirements. There are many aspects of software testing, but for now let's think of it as the act of confirming that it works as outlined in the software's requirements. Now that I have a working definition of testing, let's think about how you might approach it for a UX designer. Testing might mean making sure that the website looks and behaves as expected. For project manager on a software project testing might mean that a specific piece of software works well with other parts of your system for a software engineer. Testing might mean writing code that doesn't break the existing functionality is bug free and satisfies the requirements as set out in a given task based on what your motivations are. There are several ways that you can test your software projects practically. This means that there are different kinds of testing. Now, I'll discuss the following three types of testing into in testing R. E to a integration testing and unit testing. Let's start with into in testing a real life example of E two EE testing would be if a laptop manufacturer, let his employees open some off the assembly line laptops turn them on and use them just like a normal user would do to make sure that the entire in product behaves as it should. More specific to web development into. In testing tries to imitate how a user might interact with your app. This means that in Italy testing you need to open your web application in a browser and then test it by interacting with the page the same way a user might interact with it. For example, clicking on the log in button are going through the process of adding an item to the shopping cart. In other words, you're testing the entire finished software product from the perspective of the end user. Now here's something you may find interesting. The person testing the app doesn't have to be a developer. Finally, E two E tests are the slowest and take the most time to set up and run. Here are a few examples of eat away testing frameworks available on the market. Web driver Js Protractor and Cyprus. Next I'll discuss integration testing. Integration testing is testing how parts of your system interact with other parts of your system. In other words, it's testing how separate parts of your apps work together. Let's explore two examples of integration testing software react testing, library and enzyme integration tests are faster and cheaper than E two E tests but not as fast or as cheap as unit testing. What is unit testing. Let's have a look. Unit testing is the process of testing the smallest units of your source code in isolation. A good example of this is functions. A unit is the smallest piece of code that you can test separately from the rest of the app. Practically the smallest unit of testable code in Js is usually a function or a method. Unit tests are self contained. They're meant to test code in isolation, preferably separate from the rest of your app. This makes unit tests fast to run and easy to write. So That was a brief overview of the three different kinds of tests. Together, they are sometimes represented as a three level testing pyramid. First at the base of the Pyramid are the unit tests which have the highest speed and the lowest cost. Then in the center of the pyramid are the integration tests of average speed and expense. And finally at the top of the pyramid are the E two E tests, the slowest and most expensive tests to run. You are now familiar with the three most common ways that you can test your applications

## Introduction to Jest

At this stage, you might be familiar with the concept of testing your code to make sure it's working as you intend it. You might also have come across some syntax of testing frameworks. But what about a language like JavaScript that has no built-in testing functionality? For JavaScript, you can use testing frameworks like Jest. Over the next few minutes, I am going to introduce you to the features of the Jest framework, code coverage, mocking, and snapshot testing. It is quite a mouthful. Let's get started. JavaScript doesn't have built-in objects or methods that would allow for tests to be written. Therefore, many different libraries have been built to tackle the issue of testing. Some examples of these libraries include Jasmine, Mocha, Karma, and qUnit. Then there is the one that you will cover now, namely the Jest testing framework. Jest is a JavaScript testing framework. It's often used for testing code like React, a JavaScript library maintained by Meta and a community of individual developers and companies. Besides plain JavaScript and React code just allows you to test Babel, TypeScript, Node, Angular, Vue, and various other frameworks. Jest also supports code coverage. Code coverage is a measure of what percentage of my code is covered by tests. If I say that I have an 80 percent code coverage, that means that only one-fifth of my entire code base is not covered by tests. But even 100 percent code coverage doesn't mean that you have tested for every conceivable expectation. It just means that there are some expectations tested for each line of my code. Still, code coverage is a handy tool to gauge the amount of my code base that's included in tests. The higher the code coverage, the lower the chance of having unidentified bugs. As a rule, the higher the percentage of code coverage, the lower the amount of time required to write new tests. This, however, depends on whether there are incomplete software requirements pending or if you are going to receive more requirements in the future. Next, let's cover the concept of mocking. Mocking allows you to separate the code that you are testing from it's related dependencies. In other words, you can use the mocking features to make sure that your unit testing is stand-alone. For example, you can test the front end functionality of your web app by mocking the data as if it came back from a server when in fact it came from the client. Mocking is especially helpful because very often web applications are built by teams of developers. Some developers work on the backend of a feature and others work on the front end. This could result in bottlenecks. Take an example where the team decides to build a new feature that lists the address book of users of the app on the front end. The actual user related data for this feature would come from the server. But what if a back-end developer was a bit late in developing their part of the feature? Then a front end developer would be stuck waiting for the back-end developer to complete their work before the front-end code can be built. With mocking you can avoid this bottleneck. Mocks, allow you to pretend that the users are already there. The needed data comes from the mock rather than from the backend. This allows the front-end developers to finish their site of the new feature independently. In certain cases, developers can use mocking to ship features faster. Some libraries, such as sign-on, focus specifically on mocking. But the great thing about Jest is that you use it's mock functions without any additional installations. In Jest you use mocking by employing Jest mock functions. It's also easy to test asynchronous code in Jest. There are no difficult setups and tests are relatively easy to code even for newcomers to the framework. Finally, Jest allows you to perform snapshot testing. Snapshot testing is used by developers to verify that there are no regressions in the DOM of our apps after some changes to the code base are made. You're now familiar with the concept of testing your JavaScript code using the Jest testing framework. Great work.
