/*

-----Learn The Basics-----

1. What are APIs ?
Explanation :-
* API ka full form hai Application Programming Interface.
* Yeh ek interface yaa connection point hota hai jo alag-alag software applications ko ek doosre ke saath communicate karne deta hai.
* API ka kaam kya hota hai -
    API ko aise samjho jaise ek waiter jo restaurant mein customers (applications) aur kitchen (server ya backend) ke beech mein message pass karta hai.
    Customer menu se kuch order karta hai, waiter order ko kitchen tak le jaata hai, aur jab khaana ready hota hai, waiter usko wapas customer ke table pe laata hai.
    API bhi exactly aise hi kaam karta hai.
    •	Client - Jo request bhejta hai (browser yaa mobile app).
	•	Server - Jo request process karta hai (backend server yaa database).
	•	API - Jo dono ke beech communicate karta hai.
* Real-Life Example -
    Aap jab Zomato app open karte ho aur restaurant ka menu dekhte ho, toh Zomato ke backend server se data fetch kiya jaata hai using an API.
    Jab aap ek particular restaurant select karte ho, API request jaati hai backend ko, aur wo waha se details laakar app pe dikhata hai.
* Key Points to Understand APIs -
    Abstraction -
        API details ko abstract karta hai. Matlab aapko backend ka logic samajhne ki zarurat nahi, bas aapko pata hona chahiye ki kaunsi request bhejni hai aur kaunsa data milega.
	Protocol -
        APIs usually kisi specific protocol ko follow karte hain.
        Sabse common protocol HTTP/HTTPS hota hai.
        Iska matlab request aur response ko web ke rules ke according manage kiya jaata hai.
* Types of APIs -
    REST API -
        Yeh sabse popular hai, jo HTTP protocols pe based hoti hain.
        REST API mein client aur server ke beech stateless communication hota hai.
	SOAP API -
        Yeh XML format pe based hoti hai aur thodi strict hoti hai.
	GraphQL -
        Yeh ek query-based API hai jo ek flexible alternative hai REST APIs ke liye.
        Ismein aap specific data ki query kar sakte ho, jo aapko chahiye.
* Example of API Request -
    Agar aap ek user ki details ko fetch karna chahte ho, toh ek HTTP request send ki jaati hai like -
        GET /users/12345 HTTP/1.1
        Host: api.example.com
        Authorization: Bearer token12345
        Is request pe server response bhejta hai with user details -
            {
                "id": 12345,
                "name": "Sahil Ladhania",
                "email": "sahil@example.com"
            }
* Why APIs are Important -
    Scalability -
        API ka structure is tarah hota hai ki alag-alag clients (mobile, web, etc.) ko easily handle kar sake.
	Reusability -
        Aap ek API ko multiple applications mein use kar sakte ho, bina naye code likhne ki zarurat.
	Interoperability -
        APIs allow different technologies to work together, jaise JavaScript code kisi Python server ke saath communicate kar sakta hai.

2. What is HTTP ?
Explanation :-
* HTTP ka full form hai Hypertext Transfer Protocol.
* Yeh ek protocol hai jo web browsers aur servers ke beech data transfer ke rules define karta hai.
* Jab aap web page visit karte ho, toh HTTP ka use hota hai client (aapka browser) aur server ke beech request-response cycle ko manage karne ke liye.
* HTTP ka kaam kya hai -
    HTTP ek request-response model pe kaam karta hai.
    Client server ko request bhejta hai, aur server response mein data (jaise HTML, CSS, JavaScript files) bhejta hai.
    Simple terms mein, jab aap browser mein URL type karte ho, toh HTTP request server tak jaati hai aur server response wapas client ko bhejta hai.
* HTTP ek request-response model pe kaam karta hai.
* Client server ko request bhejta hai, aur server response mein data (jaise HTML, CSS, JavaScript files) bhejta hai.
* Simple terms mein, jab aap browser mein URL type karte ho, toh HTTP request server tak jaati hai aur server response wapas client ko bhejta hai.
* HTTP kaise kaam karta hai -
    1.	Client Request -
        Jab aap kisi website ka URL browser mein daalte ho (jaise https://example.com), toh browser ek HTTP request send karta hai server ko.
        HTTP request mein kuch components hote hain:
        HTTP Method -
            Jaise GET, POST, PUT, DELETE, etc. (isko hum agle questions mein detail mein dekhenge).
        Request Headers -
            Yaha pe client kuch additional information bhejta hai, jaise authentication token, browser type, etc.
        Request Body -
            Agar data send karna ho (jaise form submit karna), toh wo body mein send hota hai.
	2.	Server Response -
        Server request ko process karta hai, aur ek response bhejta hai.
        HTTP response mein yeh cheezein hoti hain -
            Status Code -
                Response ka result (jaise 200 OK, 404 Not Found, etc.).
            Response Headers -
                Extra information like content type, caching details, etc.
            Response Body -
                Actual data (jaise HTML page, JSON data, etc.).
	3.	Connection Establishment -
        HTTP ka communication TCP/IP protocol ke upar build hota hai.
        Sabse pehle client aur server ke beech TCP connection establish hota hai, uske baad data exchange hota hai.
        Stateless Protocol -
            HTTP ek stateless protocol hai. Har request independent hoti hai, aur server ko previous request ke baare mein kuch yaad nahi hota.
            Agar server ko koi state yaad rakhni hai, toh cookies, tokens, ya session ka use hota hai.
* HTTP ka kaam kis tarah hota hai (Example) -
    Jab aap browser mein https://example.com type karte ho -
        Browser ek HTTP GET request send karta hai.
        Ex -
            GET / HTTP/1.1
            Host: example.com
        Server yeh request process karta hai aur response mein ek HTML page bhejta hai.
        Ex -
            HTTP/1.1 200 OK
            Content-Type: text/html
            <html>
                <head><title>Example</title></head>
                <body><h1>Welcome to Example.com</h1></body>
            </html>
* HTTP vs HTTPS -
    HTTP -
        Data plain text mein transfer hota hai, jo less secure hota hai.
	HTTPS -
        Secure version hai, jo SSL/TLS encryption use karta hai taaki data encrypt ho aur koi third party usse read na kar sake.
* Use Cases of HTTP -
	Web Browsing -
        Jab aap koi bhi website visit karte ho, HTTP use hota hai browser aur server ke beech.
	API Calls -
        Web APIs bhi HTTP protocol ko follow karti hain, jisme client-server ke beech JSON data transfer hota hai.
* Limitations of HTTP -
    Statelessness -
        Kyunki HTTP stateless hota hai, har request ko independent treat kiya jaata hai, aur server ko har baar user ki state yaad karni padti hai.
	No Encryption -
        HTTP mein data encryption nahi hota, isliye sensitive data share karna risky hota hai.
* Working of HTTP Layers -
    Application Layer (HTTP) -
        Yeh layer data ko format karti hai for transfer (HTTP methods, headers, etc.).
	Transport Layer (TCP) -
        Yeh data ko packets mein divide karta hai aur ensure karta hai ki data correctly transfer ho.
	Network Layer (IP) -
        Yeh packets ko source se destination tak route karta hai.

3. What are HTTP Versions ?
Explanation :-
* HTTP (Hypertext Transfer Protocol) ke multiple versions aaye hain jo web communication ko improve karte gaye.
* Har version ka apna improvement aur changes hain jo web performance, security, aur efficiency ko better banate hain. * Aaj tak ke main versions yeh hain -
    HTTP/0.9
	HTTP/1.0
	HTTP/1.1
	HTTP/2
	HTTP/3
* Har ek version ka deep dive karte hain aur samajhte hain kaise kaam karta hai.
* HTTP/0.9 (1991) -
    First version of HTTP, aur yeh sirf “GET” method ko support karta tha.
    Ismein koi HTTP headers nahi the, aur response sirf ek plain text HTML file hoti thi.
    Features -
        •	Sirf GET request support hoti thi.
        •	No headers - Koi extra information jaise content-type, caching, cookies, etc. ko handle nahi kiya jaata tha.
        •	Simple aur very limited communication protocol.
    Limitation -
        •	Ismein sirf HTML page ko fetch kiya jaa sakta tha, koi media files (images, CSS, JS) ko transfer nahi kiya jaa sakta tha.
* HTTP/1.0 (1996) -
    Is version ne kaafi improvements laayi, jaise -
        •	Headers ka introduction -
            Isse ab browser aur server additional information exchange kar sakte hain jaise content type (HTML, CSS, images, etc.).
        •	Different Methods -
            GET ke alawa POST aur HEAD methods ko introduce kiya gaya.
        •	Response Codes -
            Status codes jaise 404 Not Found aur 200 OK ka concept laaya gaya, taaki client ko pata chale ki request ka result kya tha.
    Features -
        •	Request-Response Cycle -
                Ab server response ke saath headers bhejta hai, jo zyada information deta hai jaise caching control, content-type, etc.
        •	Different Media Types -
                Sirf HTML nahi, ab images, CSS, JavaScript, etc. ko bhi serve kiya ja sakta hai.
        •	Connection Closing -
                Har request ke baad connection close ho jaata tha. Yeh iski limitation thi, kyunki multiple requests ke liye har baar naya connection open-close hota tha, jo slow tha.
    Limitation -
        •	No Persistent Connection -
                Har request ke liye connection open aur close hota tha, jo network overhead increase karta tha.
* HTTP/1.1 (1997) -
    Yeh sabse zyada widely used version hai ab tak, aur ismein bohot major improvements aaye jo web performance ko drastically improve kiya.
    Key Features -
        Persistent Connections -
            Ab ek hi TCP connection multiple requests ko handle kar sakta hai.
            Matlab aap ek hi connection ko open rakhe multiple resources fetch kar sakte ho (jaise HTML, CSS, JS, images, etc.).
            Isse connection overhead kam hota hai.
        Pipelining -
            Is feature ke through ek connection ke through multiple requests ko parallel mein send kiya jaa sakta hai.
            Jaise aap ek HTML page aur uske linked resources (images, JS files) ko ek saath fetch kar sakte ho.
        Caching -
            HTTP/1.1 ne caching ke liye headers ko introduce kiya, jaise Cache-Control aur ETag.
            Yeh web pages ko faster load karne mein help karta hai, kyunki browser cached data ko use kar sakta hai bina server se data fetch kiye.
        Chunked Transfer Encoding -
            Is feature se server ko full response ready hone ka wait nahi karna padta, wo data ko chunks mein bhej sakta hai.
            This helps in streaming large responses.
        Additional Methods -
            PUT, DELETE, OPTIONS, aur PATCH methods bhi introduce kiye gaye, jo REST APIs ke liye important hain.
    Limitations -
        •	Head-of-Line Blocking -
                HTTP/1.1 mein ek problem thi jise head-of-line blocking kehte hain.
                Ismein ek request slow ho gayi toh baaki requests bhi uske baad ruk jaati thi.
                Multiple requests parallel mein toh send ki jaati thi, but ek response block ho gaya toh sab block ho jaati thi.
* HTTP/2 (2015) -
    HTTP/2 ne performance aur efficiency ko kaafi improve kiya.
    Iska focus tha web page ko faster load karna aur network overhead ko minimize karna.
    Key Features -
        Binary Protocol -
            HTTP/1.1 text-based protocol tha, HTTP/2 ne binary protocol ko adopt kiya.
            Binary protocol zyada efficient hota hai parsing ke liye.
        Multiplexing -
            HTTP/2 mein multiplexing feature aata hai, jisme ek connection ke andar multiple requests aur responses ko ek saath handle kiya jaa sakta hai bina blocking ke.
            Isse performance kaafi improve hoti hai.
        Header Compression -
            HTTP headers ko compress kiya jaata hai, jo bandwidth bachaata hai aur fast communication ensure karta hai.
        Server Push -
            Is feature mein server client ko resources push kar sakta hai bina explicit request ke.
            Jaise agar client ne HTML page request kiya aur server ko pata hai ki us HTML page ke saath CSS aur JS files bhi chahiye hongi, toh server wo files proactively bhej sakta hai.
        Prioritization -
            HTTP/2 requests ko priority assign kar sakta hai.
            Iska matlab yeh hota hai ki client pehle kis resource ko serve karna chahte hain, wo decide kar sakte hain.
    Limitations -
        •	Ab tak koi major limitation nahi hai, but kyunki ab bhi kaafi servers aur clients HTTP/1.1 pe hain, backward compatibility ke liye HTTP/1.1 ko support karna padta hai.
* HTTP/3 (Upcoming, 2020-Present) -
    HTTP/3 ne TCP ko hata ke QUIC protocol ko introduce kiya hai, jo performance aur reliability ko aur improve karta hai.
    QUIC ek transport layer protocol hai jo Google ne develop kiya aur ismein TCP ki problems solve ki gayi hain.
    Key Features -
        UDP-based Protocol -
            HTTP/3 UDP ke upar build hota hai, jo TCP se fast aur low-latency connections allow karta hai.
            TCP mein handshake aur connection-establishment ka process slow tha.
        Faster Connections -
            Kyunki QUIC multiple streams ko ek saath handle kar sakta hai bina ek doosre ko block kiye, HTTP/3 isse zyada faster hota hai.
        Improved Security -
            HTTP/3 mein security bhi built-in hoti hai, jaise TLS 1.3 ka use hota hai for encryption.
    Benefits -
        •	HTTP/3 ka main benefit hai low latency aur fast data transfer, especially mobile networks aur slow connections ke liye.
        QUIC ki wajah se data loss ke baad bhi quickly recovery possible hoti hai bina connection ko restart kiye.
* Conclusion -
    Har HTTP version ne communication ko faster, secure aur reliable banaya hai.
        •	HTTP/1.1 ne performance aur pipelining improve kiya.
        •	HTTP/2 ne multiplexing aur server push features ke through web speed ko better banaya.
        •	HTTP/3 ka focus low latency aur faster connections pe hai using QUIC protocol.

4. What are HTTP Methods ?
Explanation :-
* HTTP Methods ka matlab hota hai kaunse type ka action aap perform karna chahte ho jab server se request send karte ho.
* Yeh methods define karte hain ki server ko request par kaise respond karna chahiye.
* Yeh methods kaafi important hote hain REST APIs design karne ke liye, kyunki har method ka apna role hota hai.
* Main HTTP Methods yeh hain -
	GET
	POST
    PUT
	DELETE
	PATCH
	HEAD
	OPTIONS
	TRACE
* GET Method -
    GET method ka use tab hota hai jab hume server se data fetch karna hota hai bina kisi data ko modify kiye.
    •	Purpose - Fetch data from the server.
	•	Idempotent - Yes (Iska matlab hai ki multiple times same request bhejne par result same rahega.)
	•	Request Body - GET requests mein koi body nahi hoti. Saari information URL ke through jaati hai.
	•	Caching - GET requests ko browser aur servers cache kar sakte hain.
	•	Safe Method - GET request data ko sirf retrieve karta hai, modify nahi.
    Ex -
        GET /users HTTP/1.1
        Host: example.com
        Yeh request server se /users endpoint ka data fetch karega.
    Use Case -
        •	Kisi webpage ko load karne ke liye.
        •	User ka profile data fetch karne ke liye.
* POST Method -
    POST method ka use tab hota hai jab hume server par naya data create ya submit karna hota hai.
    •	Purpose - Data ko server par submit ya create karna.
	•	Non-idempotent - Yes (Multiple times same request bhejne par result different ho sakta hai.)
	•	Request Body - POST request ke body mein data bheja jaata hai (usually JSON format mein).
	•	Not Safe - POST request server par data create ya modify kar sakta hai.
    Ex -
        POST /users HTTP/1.1
        Host: example.com
        Content-Type: application/json
        {
            "name": "Sahil",
            "age": 25
        }
        Yeh request /users endpoint par naya user create karega jisme name aur age values di gayi hain.
    Use Case -
        •	Form submission (signup, login forms).
        •	Server par naye resources (jaise user, blog post) create karne ke liye.
* PUT Method -
    PUT method ka use tab hota hai jab hume existing data ko update ya replace karna hota hai.
    Agar resource pehle se nahi hai, toh yeh naya resource create bhi kar sakta hai.
	•	Purpose - Existing resource ko update karna ya replace karna.
	•	Idempotent - Yes (Agar aap same request multiple times bhejte ho toh result same rahega).
	•	Request Body - PUT request ke body mein data hota hai jo update ya replace karna hai.
	•	Not Safe - PUT request data ko modify karta hai.
    Ex -
        PUT /users/1 HTTP/1.1
        Host: example.com
        Content-Type: application/json
        {
            "name": "Sahil",
            "age": 26
        }
        Yeh request /users/1 ke data ko update karega.
    Use Case -
        •	User profile ko update karna.
        •	Existing blog post ya resource ko replace karna.
* DELETE Method -
    DELETE method ka use tab hota hai jab hume server se koi resource delete karna hota hai.
	•	Purpose - Resource ko server se delete karna.
	•	Idempotent - Yes (Agar aap same request multiple times bhejte ho toh result same rahega, kyunki ek baar delete ho gaya toh phir wo wapas nahi aayega.)
	•	Request Body - DELETE requests mein usually koi body nahi hoti.
	•	Not Safe - DELETE request resource ko permanently remove karta hai.
    Ex -
        DELETE /users/1 HTTP/1.1
        Host: example.com
        Yeh request /users/1 endpoint se user ko delete karega.
    Use Case -
        •	User ko delete karna.
        •	Blog post ya data ko remove karna.
* PATCH Method -
    PATCH method ka use tab hota hai jab hume existing resource ko partially update karna hota hai.
    PUT se difference yeh hai ki PATCH mein partial modifications hoti hain.
	•	Purpose - Resource ke part ko update karna.
	•	Idempotent - Yes (Multiple requests same result denge.)
	•	Request Body - PATCH request mein data hota hai jo part ko modify karna hai.
	•	Not Safe - PATCH request resource ko modify karta hai.
    Ex -
        PATCH /users/1 HTTP/1.1
        Host: example.com
        Content-Type: application/json
        {
            "age": 27
        }
        Yeh request /users/1 ka sirf age field update karega.
    Use Case -
        •	User ke profile ka ek specific field update karna (jaise age ya address).
        •	Partial data update karna jisme resource completely replace nahi hota.
* HEAD Method -
    HEAD method ka use tab hota hai jab hume GET jaisa request bhejna ho, but without the response body.
    Yeh sirf response headers ko return karta hai.
	•	Purpose - Server se resource ke headers ko retrieve karna bina data body ke.
	•	Idempotent - Yes.
	•	Request Body - Koi body nahi hoti.
	•	Safe Method - Kyunki yeh sirf metadata fetch karta hai, koi data modify nahi karta.
    Ex -
        HEAD /users HTTP/1.1
        Host: example.com
        Yeh request sirf /users resource ka header information fetch karega, body nahi.
    Use Case -
        •	Resource ke size ya last modification time check karna.
        •	Website ya API ke status ko check karne ke liye without loading full data.
* OPTIONS Method -
    OPTIONS method ka use tab hota hai jab hume server se pata karna ho ki kaunse HTTP methods aur options supported hain specific resource ke liye.
	•	Purpose - Server se pata karna ki kaunse methods allowed hain.
	•	Idempotent - Yes.
	•	Request Body - Koi body nahi hoti.
	•	Safe Method - OPTIONS request sirf information fetch karta hai.
    Ex -
        OPTIONS /users HTTP/1.1
        Host: example.com
        Yeh request /users resource ke liye allowed methods ko fetch karega.
    Use Case -
        •	API ke methods discover karne ke liye.
        •	CORS (Cross-Origin Resource Sharing) ke liye.
* TRACE Method -
    TRACE method ka use tab hota hai jab hume server ke through route trace karna hota hai.
    Yeh server se response mein exact request wapas bhejta hai, jo debugging aur diagnosis ke kaam aata hai.
	•	Purpose - Request ke route ko trace karna.
	•	Idempotent - Yes.
	•	Request Body - TRACE mein usually koi body nahi hoti.
	•	Not Safe - TRACE request ko production mein use nahi kiya jaata kyunki yeh sensitive information ko expose kar sakta hai.
    Ex -
        TRACE /users HTTP/1.1
        Host: example.com
        Yeh request /users resource ke liye poori request route ko trace karega.
    Use Case -
        •	Network debugging ke liye, but rarely used in production.
* Summary of HTTP Methods -
	•	GET - Data ko fetch karne ke liye.
	•	POST - Naye data ko create ya submit karne ke liye.
	•	PUT - Existing data ko completely replace karne ke liye.
	•	DELETE - Data ko delete karne ke liye.
	•	PATCH - Data ko partially update karne ke liye.
	•	HEAD - Resource ke headers ko fetch karne ke liye bina body ke.
	•	OPTIONS - Pata karne ke liye ki resource ke liye kaunse methods allowed hain.
	•	TRACE - Request ke route ko trace karne ke liye (used rarely).

5. What are HTTP Status Codes ?
Explanation :-
* HTTP Status Codes wo numerical codes hote hain jo server client ko response dene ke waqt provide karta hai.
* Yeh status codes batate hain ki client ka request successful tha ya nahi, aur agar nahi tha toh problem kya thi.
* Har status code ke saath ek short description hoti hai jo situation explain karti hai.
* Status codes ko 5 categories mein divide kiya jaata hai, jo starting digit ke basis par classified hain -
	1xx (Informational) – Request received, processing is continuing.
	2xx (Success) – Request successfully received, understood, and accepted.
	3xx (Redirection) – Further action needs to be taken to complete the request.
	4xx (Client Error) – Request contains bad syntax or cannot be fulfilled.
	5xx (Server Error) – Server failed to fulfill a valid request.
* 1xx (Informational Response) -
    1xx series status codes batate hain ki server ne request ko receive kar liya hai, aur wo abhi processing kar raha hai.
    Client ko wait karna hota hai aur action complete hone ka intazaar karna hota hai.
    1xx status codes rarely directly use kiye jaate hain, lekin jab use hote hain, toh usually wo background processes ke liye hote hain.
    Common 1xx Status Codes -
        •	100 Continue -
                Server ne request ke initial part ko receive kar liya hai, client ko request continue karni chahiye.
        •	101 Switching Protocols -
                Server ne request ko samajh liya hai, aur client ke request ke hisaab se protocol change kar raha hai (jaise HTTP se WebSocket par switch karna).
* 2xx (Success) -
    2xx series status codes batate hain ki request successful thi aur server ne jo bhi requested action tha wo perform kar diya.
    Common 2xx Status Codes -
        •	200 OK -
                Sab kuch theek hai.
                Client ke request ke hisaab se response body mein data return hota hai.
                Ex -
                    HTTP/1.1 200 OK
                    Content-Type: application/json
                    {
                        "name": "Sahil",
                        "age": 25
                    }
                    Yaha server ne client ke request ko process karke successfully data wapas bhej diya.
        •	201 Created -
                Resource successfully create ho gaya hai, aur response mein server naya resource provide karta hai.
                Ex -
                    HTTP/1.1 201 Created
                    Location: /users/1
                    Yaha ek naya user create ho gaya aur /users/1 par available hai.
        •	204 No Content -
                Server ne request ko successfully process kar liya hai, lekin koi content wapas return nahi karega.
                Ex -
                    HTTP/1.1 204 No Content
                    Yaha koi response body nahi hoti, lekin yeh signal hota hai ki request theek se process hui.
* 3xx (Redirection) -
    3xx series status codes batate hain ki client ko apna request redirect karna hoga ya dusri jagah se resource ko access karna padega.
    Common 3xx Status Codes -
        •	301 Moved Permanently -
                Requested resource permanently move ho gaya hai, aur naye location ke URL ko response mein provide kiya gaya hai.
                Ex -
                    HTTP/1.1 301 Moved Permanently
                    Location: https://new-website.com
        •	302 Found -
                Resource temporarily dusri jagah par move kiya gaya hai, lekin wo future mein wapas aa sakta hai.
                Ex -
                    HTTP/1.1 302 Found
                    Location: https://temporary-redirect.com
        •	304 Not Modified -
                Client ke paas jo resource hai (usually cached version) wo abhi tak valid hai, toh server se naya data fetch karne ki zarurat nahi.
                Ex -
                    HTTP/1.1 304 Not Modified
                    Yeh status code caching ko optimize karne ke liye use hota hai.
* 4xx (Client Error) -
    4xx series status codes tab aate hain jab client ka request galat ho ya incorrect syntax ke saath ho.
    Yeh errors client ki taraf se hoti hain.
    Common 4xx Status Codes -
        •	400 Bad Request -
                Client ka request invalid ya bad syntax ke saath hai, aur server ise process nahi kar sakta.
                Ex -
                    HTTP/1.1 400 Bad Request
                    Yaha request galat thi ya syntax error tha.
        •	401 Unauthorized -
                Resource ko access karne ke liye proper authentication required hai, jo provide nahi kiya gaya.
                Ex -
                    HTTP/1.1 401 Unauthorized
                    Yaha client ko login ya authentication karna padega.
        •	403 Forbidden -
                Client ka request valid tha, lekin client ko resource access karne ke permissions nahi hain.
                Ex -
                    HTTP/1.1 403 Forbidden
                    Yaha access ka permission nahi diya gaya, chahe authentication ho ya na ho.
        •	404 Not Found -
                Requested resource available nahi hai ya URL galat hai.
                Ex -
                    HTTP/1.1 404 Not Found
                    Yaha resource server par exist nahi karta.
        •	429 Too Many Requests -
                Client ne bahut zyada requests bhej diye hain, aur server temporarily usko block kar raha hai.
                Ex -
                    HTTP/1.1 429 Too Many Requests
                    Yaha rate-limiting ki wajah se client ko temporarily block kiya gaya hai.
* 5xx (Server Error) -
    5xx series status codes tab aate hain jab server ki taraf se galti hoti hai.
    Yeh errors batate hain ki client ka request theek tha, lekin server request ko process nahi kar paaya.
    Common 5xx Status Codes -
        •	500 Internal Server Error -
                Server ne unexpected error encounter kiya, jo request ko process nahi kar paya.
                Ex -
                    HTTP/1.1 500 Internal Server Error
                    Yaha koi technical issue server mein ho sakta hai.
        •	502 Bad Gateway -
                Server ne invalid response receive kiya from upstream server (jaise proxy ya gateway server).
                Ex -
                    HTTP/1.1 502 Bad Gateway
                    Yaha server ke bich mein koi aur server involved tha jo response sahi se forward nahi kar paaya.
        •	503 Service Unavailable -
                Server temporarily available nahi hai, usually because of overload ya maintenance.
                Ex -
                    HTTP/1.1 503 Service Unavailable
                    Yaha server temporarily down ya busy ho sakta hai.
        •	504 Gateway Timeout -
                Server jo upstream server se response expect kar raha tha, wo timeout ho gaya.
                Ex -
                    HTTP/1.1 504 Gateway Timeout
                    Yaha intermediate server ne timely response nahi diya.
* Summary of HTTP Status Codes -
	•	1xx (Informational) - Request ko accept kiya gaya, processing abhi ho rahi hai.
	•	2xx (Success) - Request successful tha, aur server ne jo requested action tha wo perform kiya.
	•	3xx (Redirection) - Client ko resource ke liye dusri jagah jana padega.
	•	4xx (Client Error) - Client ka request galat tha ya incorrect syntax tha.
	•	5xx (Server Error) - Server request ko process karte waqt fail ho gaya.
* Yeh status codes client-server communication ka core part hote hain.
* Har code ke basis par aapko samajh mein aa jata hai ki request ka kya result tha aur agar koi error aayi, toh kahan thi.

6. What are HTTP Headers ?
Explanation :-
* HTTP Headers wo additional information hote hain jo client aur server ke beech request-response cycle mein exchange hote hain.
* Yeh headers request aur response ke meta-data ko carry karte hain, jisse dono parties ko samajhne mein madad milti hai ki request ko kaise handle karna hai ya response ko kaise interpret karna hai.
* HTTP Headers ke 2 main types hote hain -
	Request Headers -
        Yeh headers client ke taraf se bheje jaate hain aur batate hain ki client kya chah raha hai, jaise content type, user-agent, authorization, etc.
	Response Headers -
        Yeh headers server ke taraf se bheje jaate hain jo client ko batate hain ki request ka kya result tha, aur server kya response bhej raha hai.
* Types of HTTP Headers -
    Headers ko different types mein classify kiya gaya hai based on unke usage ke hisaab se.
        General Headers -
            Yeh headers client aur server ke liye common hote hain aur both request-response mein use hote hain.
        Request Headers -
            Yeh headers client ki specific request details batate hain, jaise ki client ka browser kaun sa hai, kya content chahiye, etc.
        Response Headers -
            Yeh headers server ki response details provide karte hain, jaise ki response content type, caching information, etc.
        Entity Headers -
            Yeh headers entity (body) ka meta-data provide karte hain, jaise ki body ka size, type, encoding, etc.
* General Headers -
    General headers wo hote hain jo common information provide karte hain jo client aur server dono ke liye relevant ho.
* Request Headers -
    Request headers client ke preferences aur authentication ke baare mein batate hain.
    Inhe server ko request process karte waqt samajhna hota hai.
* Response Headers -
    Response headers client ko batate hain ki server ka response kaisa hai, aur kya additional information client ko process karni chahiye.
* Entity Headers -
    Entity headers wo headers hote hain jo response body ke baare mein information provide karte hain, jaise ki body ka type, encoding, aur content length.
* Custom Headers -
    Developers apni requirement ke hisaab se custom headers bhi bana sakte hain jo specific data pass karne ke liye kaam aate hain.
    Custom headers ko usually X- prefix ke saath define kiya jaata hai.
* How HTTP Headers Work -
    Let’s consider a typical GET request and response example with headers.
        Request -
            GET /users HTTP/1.1
            Host: example.com
            User-Agent: Mozilla/5.0
            Accept: application/json
            Authorization: Bearer abcdef123456
        Response -
            HTTP/1.1 200 OK
            Content-Type: application/json
            Content-Length: 150
            Set-Cookie: sessionId=abcdef123456; Path=/; HttpOnly
            Date: Wed, 22 Sep 2024 10:00:00 GMT
            {
                "id": 1,
                "name": "Sahil"
            }
            Is example mein headers ne bataya -
                •	Client ko kaun sa content chahiye (request headers).
                •	Server kaunsa content bhej raha hai (response headers).
                •	Authentication kaise handle hua.
                •	Session management cookies ke through kaise set ki gayi.
* Conclusion -
    HTTP Headers communication ka important part hain jo client aur server ke beech extra information share karte hain.
    Headers se server ko request ko better samajhne mein madad milti hai, aur client ko response ko handle karne mein.

7. What are Cookies ?
Explanation :-
* Cookies web development mein ek client-side storage mechanism hain jinke through client aur server ke beech state ko maintain kiya jaata hai.
* Web applications mein, HTTP ek stateless protocol hai, matlab server ko har request ke saath client ke previous interactions ke baare mein koi knowledge nahi hoti.
* Is problem ko solve karne ke liye cookies ka use hota hai, jo client ke browser mein small data store karti hain aur har subsequent request ke saath server ko bheji jaati hain.
* Cookies ka main use hai -
	Session Management - User login ya shopping cart jaise features ko track karne ke liye.
	Personalization - User preferences, themes, and settings store karna.
	Tracking - User activities ko track karna, jaise ki analytics ke liye.
* Types of Cookies -
	Session Cookies
        •	Temporary cookies jo browser close hone par automatically delete ho jaati hain.
        •	Ex - User login sessions ke liye use hoti hain.
	Persistent Cookies
        •	Yeh cookies specific expiry date tak browser mein stored rehti hain.
        •	Ex - Remember me options ya site preferences store karne ke liye.
	Secure Cookies
        •	Yeh sirf HTTPS connection ke saath hi transfer hoti hain. Secure communication ko ensure karti hain.
        •	Ex - Payment details ya sensitive information handle karte waqt use hoti hain.
	HttpOnly Cookies
        •	Yeh cookies JavaScript ke through access nahi ki jaa sakti.
        •	Sirf server ke through manage hoti hain, isliye security ke liye kaafi useful hoti hain, specially XSS (Cross-Site Scripting) attacks ko rokne ke liye.
	SameSite Cookies
        •	Cross-site request forgery (CSRF) attacks ko prevent karne ke liye yeh cookies use hoti hain.
        •	Ex - Agar SameSite attribute set hota hai, toh cookie tabhi send hoti hai jab request same domain se aaye.
* Cookie Attributes -
* Cookies ko kaise control kiya jaaye, yeh attributes ke through define hota hai.
	Name -
        Cookie ka ek unique name hota hai.
        Ex - sessionId
	Value -
        Cookie ka data ya value store hoti hai.
        Ex - sessionId=abc123
	Domain -
        Yeh batata hai ki cookie kaunse domain ke liye valid hai.
        Ex - Domain=example.com
	Path -
        Yeh batata hai ki cookie kaunse path ke liye available hai.
        Ex - Path=/users
	Expires/Max-Age -
        Cookie kab expire hogi.
        Expires mein specific date di ja sakti hai, aur Max-Age mein seconds ke form mein expiry time.
        Ex - Expires=Wed, 22 Sep 2024 10:00:00 GMT
        Ex - Max-Age=3600 (cookie ek ghante tak valid rahegi)
	Secure -
        Yeh attribute ensure karta hai ki cookie sirf HTTPS connection pe hi send ho.
        Ex - Secure
	HttpOnly -
        Is attribute ke saath cookie ko sirf HTTP/HTTPS requests ke through access kiya ja sakta hai, JavaScript ke through nahi.
        Ex - HttpOnly
	SameSite -
        Is attribute se define hota hai ki cookie cross-site requests ke saath send ki jaye ya nahi.
        Values - Lax, Strict, None
* How Cookies Work -
    Cookies ka typical flow client-server communication mein kuch iss tarah hota hai.
    Client Request -
        Client ek request karta hai server ko.
        Client ke paas abhi cookie nahi hai.
        Ex -
            GET /login HTTP/1.1
            Host: example.com
    Server Response (Set-Cookie) -
        Server response ke saath cookie set karta hai using Set-Cookie header.
        Ex -
            HTTP/1.1 200 OK
            Set-Cookie: sessionId=abc123; Path=/; HttpOnly; Secure
            Yaha, server client ko sessionId cookie set karta hai jo future requests ke saath bheji jaayegi.
    Subsequent Requests (Send Cookie) -
        Client subsequent requests ke saath cookie ko server ko bhejta hai.
        Ex -
            GET /dashboard HTTP/1.1
            Host: example.com
            Cookie: sessionId=abc123
            Ab har request ke saath sessionId cookie automatically include ho jaati hai.
* Security Risks of Cookies -
	Cross-Site Scripting (XSS) -
        Agar cookies HttpOnly nahi hain, toh malicious scripts client-side JavaScript ke through cookies ko steal kar sakte hain.
	Cross-Site Request Forgery (CSRF) -
        CSRF attacks mein attacker ek unauthorized request ko forge kar sakta hai jisme victim ka session cookie use hota hai.
        Isse bachne ke liye SameSite attribute use karna chahiye.
	Session Hijacking -
        Agar cookies properly secured nahi hain, attacker sensitive session IDs ko capture karke unauthorized access le sakta hai.
* Real-World Use Case -
    Agar aap kisi website pe login karte ho, jaise ki Amazon, toh Amazon aapka session manage karne ke liye ek cookie set karta hai jisme aapka session ID hota hai.
    Jab tak aapka session valid hai, aapko dobara login karne ki zarurat nahi hoti, kyunki har request ke saath aapki session cookie automatically send hoti rehti hai.
    Agar session expire ho jaata hai (cookie ka expire time khatam ho jaata hai), toh aapko dobara login karna padega.
* Conclusion -
    Cookies web applications ke liye ek crucial mechanism hain jo client aur server ke beech state ko manage karte hain. Yeh session management, tracking, aur personalization ke liye use hote hain, lekin inhe securely implement karna bahut zaroori hota hai to avoid attacks like XSS and CSRF.

8. What is CORS ?
Explanation :-
* CORS (Cross-Origin Resource Sharing) ek security feature hai jo browsers ko control deta hai ki kaunse domains ko cross-origin requests karne ki permission di jaye.
* Yani, jab aap ek web application se doosre origin (domain, protocol, ya port) par request karte hain, toh CORS ensure karta hai ki woh request secure hai ya nahi.
* Origin Concept -
    Origin ka matlab hota hai scheme (protocol), host (domain), aur port ka combination.
    Jaise -
        •	https://example.com:443 (secure)
        •	http://example.com:80 (non-secure)
* Agar aapka web application https://example.com se hai aur aap request karte hain https://another-domain.com/api, toh yeh ek cross-origin request hota hai.
* Why CORS is Important -
	Security -
        CORS browser ko unauthorized domains se requests block karne ki ability deta hai, jisse sensitive data protect hota hai.
	API Access Control -
        CORS APIs ko restrict karne ka mechanism provide karta hai, jisse sirf authorized domains hi unki resources access kar sake.
* How CORS Works -
    CORS ka mechanism HTTP headers ke zariye kaam karta hai.
    Jab client ek cross-origin request bhejta hai, toh browser server se kuch specific headers check karta hai.
        Preflight Request -
            Agar request method unsafe hai (like PUT, DELETE), ya agar koi custom headers include kiye gaye hain, toh browser pehle ek OPTIONS request bhejta hai.
            Isse server se check hota hai ki kya yeh request allow hai ya nahi.
            Ex -
                OPTIONS /api/resource HTTP/1.1
                Origin: https://example.com
                Access-Control-Request-Method: POST
        Response to Preflight -
            Agar server request ko allow karta hai, toh woh relevant CORS headers ke saath response bhejta hai.
            Ex -
                HTTP/1.1 200 OK
                Access-Control-Allow-Origin: https://example.com
                Access-Control-Allow-Methods: POST, GET
        Actual Request -
            Agar preflight request successful hoti hai, toh browser actual request bhejta hai.
            Ex -
                POST /api/resource HTTP/1.1
                Origin: https://example.com
        Response to Actual Request -
            Server response mein CORS headers include karta hai, jo batata hai ki request ko allow kiya gaya hai ya nahi.
            Ex -
                HTTP/1.1 200 OK
                Access-Control-Allow-Origin: https://example.com
* CORS Headers -
    CORS mein kuch common headers hain jo server use karte hain.
        Access-Control-Allow-Origin -
            Yeh header specify karta hai ki kaunse origins ko resource access karne ki permission hai.
            Ex -
                Access-Control-Allow-Origin: https://example.com
        Access-Control-Allow-Methods -
            Yeh header batata hai ki kaunse HTTP methods (GET, POST, PUT, DELETE) ko allow kiya gaya hai.
            Ex -
                Access-Control-Allow-Methods: GET, POST, PUT
        Access-Control-Allow-Headers -
            Yeh header specify karta hai ki client kis custom header ko request mein include kar sakta hai.
            Ex -
                Access-Control-Allow-Headers: Content-Type, Authorization
        Access-Control-Expose-Headers -
            Yeh header batata hai ki kaunse headers ko client access kar sakta hai response ke andar.
            Ex -
                Access-Control-Expose-Headers: X-Custom-Header
        Access-Control-Allow-Credentials -
            Agar aapko cookies ya authentication information share karni hai, toh is header ko true set karna hota hai.
            Ex -
                Access-Control-Allow-Credentials: true
* Common CORS Errors -
	No ‘Access-Control-Allow-Origin’ header -
        Jab server response mein CORS headers nahi hota, toh browser request ko block kar deta hai.
	CORS policy: No ‘Access-Control-Allow-Credentials’ -
        Agar credentials set hai lekin server Access-Control-Allow-Credentials header ko true nahi karta, toh request block hoti hai.
* Conclusion -
    CORS web security ka ek zaroori part hai jo cross-origin requests ko control karta hai.
    Yeh ensure karta hai ki sirf authorized origins ko resources access karne ki permission di jaye, jisse sensitive data protect hota hai.

9. What are HTTP Caching ?
Explanation :-
* HTTP Caching ek mechanism hai jo web performance ko improve karne ke liye use hota hai.
* Yeh allow karta hai browsers aur intermediate proxies ko web resources (jaise ki HTML pages, images, scripts) ko store karne ke liye, taaki future requests ke liye yeh resources quickly available ho sakein bina server se dobara fetch kiye.
* Why Caching is Important -
	Performance Improvement -
        Caching se resources ko local storage se fetch kiya ja sakta hai, jo latency ko kam karta hai aur page load time ko accelerate karta hai.
	Reduced Server Load -
        Agar resources cache mein hain, toh server par load kam ho jaata hai kyunki woh requests handle nahi karni padti.
	Bandwidth Savings -
        Caching se network bandwidth save hoti hai, kyunki resources ko repeat requests ke liye download nahi karna padta.
* How HTTP Caching Works -
    Caching ka mechanism kuch HTTP headers ke zariye kaam karta hai.
    Jab client (browser) ek resource request karta hai, server response mein caching headers include karta hai.
        Cache-Control -
            Yeh header cache behavior ko define karta hai.
            Ismein directives hoti hain jo specify karti hain ki resource ko cache karna hai ya nahi, aur kitne time ke liye cache karna hai.
            Ex -
                Cache-Control: max-age=3600
                Iska matlab hai ki resource ko 1 hour (3600 seconds) tak cache kiya ja sakta hai.
        Expires -
            Yeh header specify karta hai ki resource kab expire hoga.
            Iski date ke baad resource ko fresh request karna padega.
            Ex -
                Expires: Wed, 22 Sep 2024 10:00:00 GMT
        ETag -
            Yeh header resource ki unique identifier hoti hai.
            Jab browser resource ko cache karta hai, toh woh ETag ko store karta hai.
            Next request par browser yeh ETag bhejta hai taaki server ko check kar sake ki resource change hua hai ya nahi.
            Ex -
                ETag: "abc123"
        Last-Modified -
            Yeh header batata hai ki resource kab last modify hua tha.
            Browser isse use karke server se check karta hai ki resource mein koi changes aaye hain ya nahi.
            Ex -
                Last-Modified: Tue, 21 Sep 2024 10:00:00 GMT
* Caching Strategies -
	Public vs. Private Caching -
        •	Public Cache - Yeh cache ko shared environment mein store karta hai, jaise proxies.
        •	Private Cache - Yeh cache ko user-specific content ke liye store karta hai, jaise user profile pages.
	Revalidation -
        •	Jab cache expire hota hai, browser server ko resource ko validate karne ke liye request bhejta hai.
        •	Server agar resource ko change nahi karta, toh woh 304 Not Modified response bhejta hai, aur cache ko use kiya ja sakta hai.
        Ex -
            GET /api/resource HTTP/1.1
            If-None-Match: "abc123"
    Stale-While-Revalidate -
        •	Is strategy mein agar cached resource expire ho gaya hai, toh browser stale resource ko show karta hai, lekin background mein server se fresh resource fetch karta hai.
* Cache Invalidation -
    Cache ko invalidate karna important hai jab resources change hote hain.
    Yeh kuch methods se hota hai.
        Versioning -
            Resource URL mein version number include karna, jaise style.v1.css, style.v2.css.
            Jab resource change hota hai, version number bhi change hota hai.
        Purge -
            Cache ko manual ya automated way mein clear karna, jise Content Delivery Network (CDN) use karte hain.
* Ex of HTTP Caching -
    Client Request -
        Client jab ek resource request karta hai.
        Ex -
            GET /api/data HTTP/1.1
            Host: example.com
    Server Response -
        Server response mein caching headers include karta hai.
        Ex -
            HTTP/1.1 200 OK
            Cache-Control: max-age=3600
            ETag: "abc123"
            Content-Type: application/json
            { "data": "some value" }
    Subsequent Request -
        Jab client phir se same resource request karta hai, toh browser ETag ko use karta hai.
        Ex -
            GET /api/data HTTP/1.1
            If-None-Match: "abc123"
            Host: example.com
    Server Response to Revalidation -
        Agar resource unchanged hai, toh server response deta hai.
        Ex -
            HTTP/1.1 304 Not Modified
            Agar resource change ho gaya hota, toh server fresh data ke saath response karta.
* Conclusion -
    HTTP Caching web performance ko significantly improve karta hai by reducing latency, server load, aur bandwidth usage.
    Caching strategies aur proper cache management se applications fast aur efficient bante hain.

10. What is URL, Query & Path Parameters ?
Explanation :-
* URL (Uniform Resource Locator) ek web resource ka address hai jo specific resources ko identify karta hai.
* URLs mein parameters include kiye ja sakte hain jo server ko additional information provide karte hain.
* Components of a URL -
    Ek URL ke kuch key components hote hain.
        Scheme -
            Protocol specify karta hai, jaise http, https, ftp, etc.
            Ex - https://
        Host -
            Domain name ya IP address jo resource ko host karta hai.
            Example - example.com
        Port (optional) -
            Specific port number jo service ko access karta hai.
            Ex - :443 for HTTPS
        Path -
            Resource ka path jo server par file ya endpoint ko locate karta hai.
            Ex - /api/v1/users
        Query String (optional) -
            URL ke end par parameters specify karta hai, jisse data pass kiya ja sakta hai.
            Ex - ?id=123&sort=asc
        Fragment (optional) -
            Page ka specific section ya anchor ko identify karta hai.
            Ex - #section1
* Complete URL Example - https://example.com:443/api/v1/users?id=123&sort=asc#section1
* Path Parameters -
    Path parameters URL ke path mein directly include hote hain.
    Yeh typically resource ka identifier hota hai.
    Ex -
        •	URL - https://api.example.com/users/123
        •	Yahan 123 user ID hai, jo specific user ko identify karta hai.
* Usage -
    Path parameters ko RESTful APIs mein use kiya jaata hai.
    GET /users/123 → User ID 123 ke details fetch karne ke liye.
* Query Parameters -
    Query parameters URL ke end par ? se start hote hain aur & ke zariye multiple parameters ko separate karte hain.
    Yeh server ko additional information provide karte hain.
    Ex -
        •	URL - https://api.example.com/products?category=electronics&sort=price
        •	Yahan category aur sort query parameters hain.
* Usage -
    Query parameters ko filtering, sorting, ya pagination ke liye use kiya jaata hai.
    GET /products?category=electronics&sort=price → Electronics products ko price ke hisaab se sort karna.
* Ex of Path Parameter -
    Request -
        GET https://api.example.com/users/456
    Response -
        {
            "id": 456,
            "name": "John Doe",
            "email": "john@example.com"
        }
* Ex of Query Parameter -
    Request -
        GET https://api.example.com/products?category=books&sort=rating
    Response -
        [
            { "id": 1, "name": "Book A", "rating": 4.5 },
            { "id": 2, "name": "Book B", "rating": 4.0 }
        ]
* Conclusion -
    URL, query, aur path parameters web APIs aur applications mein data ko identify karne aur manipulate karne ke liye essential components hain.
    Path parameters specific resources ko target karte hain, jabki query parameters additional criteria provide karte hain, jaise filtering aur sorting.

11. What is Content Negotiation in API Design ?
Explanation :-
* Content Negotiation ek mechanism hai jo client aur server ke beech resource representation ko negotiate karne ke liye use hota hai.
* Iska matlab hai ki client specify kar sakta hai ki woh kis format mein response chahata hai (jaise JSON, XML, HTML), aur server uske hisaab se response bhejta hai.
* Why is Content Negotiation Important -
	Flexibility -
        Different clients (web browsers, mobile apps, etc.) ko alag-alag formats ki zarurat hoti hai.
        Content negotiation se server multiple formats ko support kar sakta hai.
	Interoperability -
        Yeh different systems ke beech compatibility ko ensure karta hai, jisse diverse clients ko access milta hai.
	Performance -
        Clients sirf un resources ko request kar sakte hain jo unhe chahiye, jisse unnecessary data transfer kam hota hai.
* How Content Negotiation Works -
    Content negotiation typically HTTP headers ke zariye kaam karta hai.
    Jab client request bhejta hai, toh woh apne preferred formats ko specify karta hai.
        Accept Header -
            Client kaunsa content type accept kar sakta hai, yeh specify karta hai.
            Ex -
                GET /api/resource HTTP/1.1
                Accept: application/json
        Content-Type Header -
            Yeh header server response ke content type ko define karta hai.
            Ex -
                Content-Type: application/json
* Types of Content Negotiation -
	Server-driven Negotiation
        Server client ke request ko evaluate karta hai aur appropriate format mein response bhejta hai.
        Ex -
            Agar client Accept - application/json request karta hai, toh server JSON response deta hai.
	Client-driven Negotiation
        Client server ko specific format ke liye request karta hai.
        Ex -
            Client GET /api/resource.json request karta hai, jisse server JSON format return karta hai.
	Content Negotiation via URL
        URL ke path mein format specify karna.
        Ex -
            GET /api/resource.xml ya GET /api/resource.json.
* Ex of Content Negotiation -
    Client Request -
        Client ek resource request karta hai aur preferred format specify karta hai.
        Ex -
            GET /api/users HTTP/1.1
            Accept: application/json
    Server Response -
        Agar server JSON format support karta hai, toh woh response kuch is tarah se hoga.
        Ex -
            HTTP/1.1 200 OK
            Content-Type: application/json
            {
                "users": [
                    { "id": 1, "name": "Alice" },
                    { "id": 2, "name": "Bob" }
                ]
            }
    Agar client Accept -
        application/xml request karta hai, toh server XML response de sakta hai.
        Ex -
            HTTP/1.1 200 OK
            Content-Type: application/xml
            <users>
                <user id="1">Alice</user>
                <user id="2">Bob</user>
            </users>
* Best Practices for Content Negotiation -
	Clear Documentation - API documentation mein supported content types ko clearly mention karna.
	Fallbacks - Agar requested format available nahi hai, toh server ek default format (usually JSON) mein response dena.
	Error Handling - Agar client incorrect format request karta hai, toh appropriate HTTP status code (jaise 406 Not Acceptable) return karna.
* Conclusion -
    Content negotiation API design ka ek essential aspect hai jo client-server communication ko flexible aur efficient banata hai.
    Yeh ensure karta hai ki clients unhe zarurat ke mutabiq response format receive karein, jisse overall user experience improve hota hai.

12. What is TCP / IP ?
Explanation :-
* TCP/IP (Transmission Control Protocol/Internet Protocol) ek foundational protocol suite hai jo internet aur network communication ke liye use hota hai.
* Yeh protocols devices ko connect karne aur unke beech data transmission ko manage karne ke liye design kiye gaye hain.
* Key Components of TCP/IP -
	IP (Internet Protocol)
        IP data packets ko source se destination tak route karta hai. Yeh packets ko network par unique address (IP address) ke through identify karta hai.
        Types of IP -
            IPv4 - 32-bit address space (e.g., 192.168.1.1).
            IPv6 - 128-bit address space (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334), jo future ki zarurat ko dhyan mein rakhkar design kiya gaya hai.
	TCP (Transmission Control Protocol)
        TCP connection-oriented protocol hai jo reliable communication ensure karta hai.
        Yeh data packets ko sequence mein deliver karta hai aur transmission ke dauran errors ko check karta hai.
        Features of TCP -
            Connection Establishment - TCP connection establish karne ke liye three-way handshake ka use karta hai.
            Error Recovery - Agar packets lost ya corrupted hote hain, toh TCP unhe retransmit karta hai.
            Flow Control - TCP data transmission ko control karta hai taaki sender receiver ko overload na kare.
* How TCP/IP Works -
	Data Encapsulation
        Data ko TCP/IP stack mein encapsulate kiya jaata hai.
        Yeh layers data ko different formats mein convert karti hain, jo network ke liye suitable hota hai.
	Layered Architecture
        TCP/IP model ko layers mein organize kiya gaya hai.
        Application Layer -
            HTTP, FTP, SMTP, etc. protocols yahan hote hain.
            Yeh user applications ko network ke sath interact karne ka mauka dete hain.
        Transport Layer -
            TCP aur UDP (User Datagram Protocol) yahan hote hain.
            TCP reliable connection provide karta hai, jabki UDP fast but unreliable hota hai.
        Internet Layer -
            IP yahan hota hai. Yeh data packets ko route karta hai.
        Link Layer -
            Physical hardware (Ethernet, Wi-Fi) ke liye responsible hai.
* Three-Way Handshake -
    TCP connection establish karne ke liye three-way handshake ka process follow hota hai.
        SYN - Client server ko connection establish karne ke liye SYN packet bhejta hai.
        SYN-ACK - Server client ko SYN-ACK packet bhejta hai, jo connection establishment ko confirm karta hai.
        ACK - Client server ko ACK packet bhejta hai, jo connection successfully established hone ka indication hai.
* Ex of Process -
    Client sends -
        SYN
    Server replies -
        SYN-ACK
    Client sends -
        ACK
* Data Transmission -
	Client data packets TCP ke through bhejta hai.
    TCP packets ko sequence karta hai aur unki integrity check karta hai.
    Receiver TCP packets ko receive karta hai, unhe verify karta hai, aur agar koi packet lost ho gaya hai, toh woh request karta hai.
* Error Detection and Recovery -
	TCP har packet ke sath checksum include karta hai, jo data integrity ko verify karta hai.
	Agar packet ka checksum mismatch hota hai, toh packet ko retransmit kiya jaata hai.
* Conclusion -
    TCP/IP ek essential protocol suite hai jo internet aur networks ki backbone hai.
    Yeh reliable data transmission aur communication ko ensure karta hai, jisse modern applications aur services ka operation possible hota hai.

13. What is the Basics of DNS ?
Explanation :-
* DNS (Domain Name System) ek hierarchical naming system hai jo internet par resources ko human-readable domain names ke zariye identify karta hai.
* Yeh system domain names ko IP addresses mein convert karta hai, jisse devices ek dusre se communicate kar sakein.
* Key Functions of DNS -
	Name Resolution
        DNS ka primary function domain names ko IP addresses mein translate karna hai.
        Ex - www.example.com ko 192.0.2.1 mein convert karna.
	Domain Management
        DNS domain names aur unke records ko manage karta hai, jaise A records, CNAME records, MX records, etc.
	Load Distribution
        DNS load balancing ka kaam karta hai, jisse multiple servers ke beech traffic distribute hota hai.
* How DNS Works -
	User Query -
        •	Jab user browser mein URL enter karta hai, toh browser DNS resolver (typically ISPs ka) se request karta hai.
	Recursive Query -
        •	Resolver DNS records ko find karne ke liye recursive queries send karta hai, starting from the root DNS servers.
	Root DNS Servers -
        •	Yeh servers highest level par hote hain aur top-level domain (TLD) servers ke address provide karte hain (jaise .com, .org).
	TLD Servers -
        •	TLD servers domain name ke specific authoritative name servers ke address ko provide karte hain.
	Authoritative Name Servers -
        •	Yeh servers actual domain name ke corresponding IP address provide karte hain.
	Caching -
        •	DNS resolver IP address ko cache karta hai taaki future queries ko jaldi respond kiya ja sake.
* Types of DNS Records -
	A Record (Address Record) -
        Domain name ko IPv4 address se map karta hai.
        Ex -
            example.com.  IN  A  192.0.2.1
    AAAA Record (IPv6 Address Record) -
        Domain name ko IPv6 address se map karta hai.
        Ex -
            example.com.  IN  AAAA  2001:0db8:85a3:0000:0000:8a2e:0370:7334
    CNAME Record (Canonical Name Record) -
        Domain name ko dusre domain name se map karta hai.
        Ex -
            www.example.com.  IN  CNAME  example.com.
    MX Record (Mail Exchange Record) -
        MX Record (Mail Exchange Record).
        Ex -
            example.com.  IN  MX  10 mail.example.com.
    TXT Record (Text Record) -
        Arbitrary text information store karta hai, jisse email verification aur domain ownership prove karne ke liye use hota hai.
        Ex -
            example.com.  IN  TXT  "v=spf1 include:_spf.example.com ~all"
* DNS Caching -
	DNS servers aur resolvers IP addresses ko cache karte hain taaki repeated queries ke liye faster responses mile.
	Caching duration ko TTL (Time To Live) se control kiya jaata hai, jo batata hai ki record kitni der tak cache rahega.
* Conclusion -
    DNS internet ka ek essential component hai jo domain names ko IP addresses mein translate karta hai.
    Yeh system users ko easily web resources access karne ki sahuliyat deta hai, jisse internet browsing seamless hoti hai.
    DNS ki efficiency aur reliability modern internet services ke liye critical hai.

*/
