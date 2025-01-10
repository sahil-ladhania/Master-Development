/*

1. HTTP is an application layer protocol for transmitting hypermedia documents, such as HTML. It is the foundation for any data exchange on the Web.

2. Hypertext Transfer Protocol (HTTP) is the foundation of data communication on the web.

3. It defines how messages are formatted and transmitted between web browsers and servers.

4. Request Anatomy :
* URL - Uniform Resource Locator
* URI - Uniform Resource Identifier
* Body Params
* Parameters
* Headers

5. URL Structure : Protocol://Domain:Port/Path?Query_Parameters#Fragment
* Protocol - Access Methods (http or https)
* Domain - Server Address
* Port - Communication Port
* Path - Resource Location
* Query_Parameters - Extra Data
* Fragment - Specific Section

6. To Make a Valid URL , you need these three things :
* Protocol
* Domain
* Path

7. In this URL : http://api.example.com/products?name=laptop&available=true ----> This is the URI : products?name=laptop&available=true

8. Every URL is an URI , But not all URI's are URL.

9. Body Params : 
* Body of the request which contains all the Data the server needs to succesfully process the request.
* Only used in the requests that must send Information such as Create or Update.
* Common Formats of Body Parameters - JSON(JSON Encoded Data) , Form Data(URL Encoded Key-Value Pairs) , XML(Structured Markup Data).

10. Parameters : Two Types
* Path Parameter - A Variable in the URI path that helps in pointing towards specific Resource.
* Query Parameter - A Variable in the URI path that helps in the querying or filtering through a list of resources.

11. Headers : 
* Provides additional information in http request and response.
* Convery metadata , instructions and details about the communication.
* Two Types :-
* Request Headers - Sent by the Client when making an http request.
* Response Headers - Sent by the Server in response to an http request.

12. Why Parse Query Parameters ?
* When a client sends a request with query parameters, Express needs to extract and organize them for you to use in your route handlers.
* Parsing involves converting the raw string format of query parameters into a more usable form within your Express application.

13. Middleware for Parsing URL-Encoded Parameters : 
* express.urlencoded : This middleware is specifically designed to parse URL-encoded parameters from the request body.

14. Why to use express.urlencoded Middleware ?
* app.use(express.urlencoded({ extended: true })) ka use Express application mein URL-encoded form data ko parse karne ke liye hota hai. 
* Jab aap kisi HTML form ko submit karte hain, form data ko URL-encoded format mein server tak bheja jata hai. URL-encoded data, key-value pairs ko aise format mein represent karta hai jisme keys aur values '&' se separate hote hain aur spaces %20 ke roop mein encode kiye jate hain ----> name=Sahil&age=25&city=Delhi
* Yeh middleware Express ke liye hota hai jo URL-encoded form data ko parse karta hai, taki aap apne route handlers mein req.body ke through is data ko easily access kar sakein.

15. Why is it important to Parse a Cookie ?
* Jab client (browser) server ko cookie bhejta hai, woh generally encrypted ya encoded form mein hota hai. To usko decode krne k liye kuch ayese chiz ka use krna hota hai jo uss cookie ko decode kr ske so that server use samaj paaye.

16. Why is Cookie Parser Middleware is used ?
* Kyuki Express k pass ayesa koi mechanism ni hai jisse wo cookie ko decode ya parse kr paye isliye we use cookie parser middleware.

17. Why to use express.json middleware ?
* app.use(express.json()) middleware ka use Express application mein JSON data ko parse karne ke liye hota hai.
* JSON (JavaScript Object Notation) ek common data interchange format hai. Bahut se APIs, clients, aur servers JSON format mein data exchange karte hain. JSON data ek plain text format hota hai jisme data key-value pairs mein hota hai.
* express.json() middleware JSON data ko Express application mein parse karne ke liye use hota hai. Is middleware ka use karke, aap apne routes mein aane wale JSON requests ko req.body ke through easily access kar sakte hain.

*/