<div style="background-color: #357cf4; padding: 20px;">
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

</div>
