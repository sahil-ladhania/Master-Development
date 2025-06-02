/*

-----Different API Styles-----

1. What is RESTfull APIs ?
Explanation :-
* RESTful APIs (Representational State Transfer) web services hain jo HTTP protocol ka use karke data exchange karte hain.
* Yeh APIs resources ko identify karne ke liye URLs ka istemal karte hain aur standard HTTP methods (GET, POST, PUT, DELETE) se communicate karte hain.
* Key Characteristics of RESTful APIs -
	Statelessness
        Har request server par client ki state ko maintain nahi karta.
        Har request mein client ka saara information hota hai.
	Resource-based
        Resources ko URLs ke through identify kiya jaata hai.
        Ex - GET /api/users user resources ko represent karta hai.
	Uniform Interface
        REST APIs ka ek consistent interface hota hai jisse clients aur servers ke beech communication simple aur predictable hota hai.
	Representation
        Resources ko multiple formats mein represent kiya ja sakta hai, jaise JSON, XML, etc.
	Client-Server Architecture
        Client aur server ke beech separation hoti hai, jisse development aur scalability enhance hoti hai.
* HTTP Methods in REST -
	GET -
        Resource ko retrieve karne ke liye.
        Ex - GET /api/users
	POST -
        Naya resource create karne ke liye.
        Ex - POST /api/users (with user data in body)
	PUT -
        Existing resource ko update karne ke liye.
        Ex - PUT /api/users/1 (with updated user data)
	DELETE -
        Resource ko delete karne ke liye.
        Ex - DELETE /api/users/1
* Ex of REST APIs -
    Client Request -
        GET /api/users HTTP/1.1
        Host: example.com
        Accept: application/json
    Server Response -
        HTTP/1.1 200 OK
        Content-Type: application/json
        [
            { "id": 1, "name": "Alice" },
            { "id": 2, "name": "Bob" }
        ]
* Best Practices for RESTful APIs -
	Use Nouns for Resources -
        URLs ko resources ke naam se design karna.
        Ex - /api/users instead of /api/getUsers
	Versioning -
        API versioning karna taaki backward compatibility maintain ho.
        Ex - /api/v1/users
	Error Handling -
        Proper HTTP status codes aur error messages ka istemal karna.
* Conclusion -
    RESTful APIs ek popular approach hain web services ko design karne ke liye, jisse resources ko efficiently access aur manipulate kiya ja sakta hai.
    Yeh standard HTTP methods ka use karke simple aur scalable solutions provide karte hain.

2. What is Simple JSON APIs ?
Explanation :-
* Simple JSON APIs wo APIs hain jo JSON (JavaScript Object Notation) format mein data exchange karte hain.
* Yeh APIs lightweight, easy to read, aur easy to parse hote hain, jo web applications ke liye highly suitable hai.
* Key Characteristics of Simple JSON APIs -
    JSON Format -
        JSON data representation ke liye text-based format hai, jo human-readable aur machine-readable dono hota hai.
        Ex -
            {
                "name": "Alice",
                "age": 25,
                "email": "alice@example.com"
            }
    HTTP Protocol -
        Simple JSON APIs HTTP protocol ka use karte hain, jaise GET, POST, PUT, DELETE, taaki requests aur responses handle kiya ja sake.
    Lightweight -
        JSON structure lightweight hota hai, jo data transfer ko efficient banata hai.
    Interoperability -
        JSON ka use multiple programming languages (JavaScript, Python, Java, etc.) ke sath hota hai, jisse diverse environments mein compatibility badhti hai.
* How Simple JSON APIs Work -
    Client Request -
        Client JSON format mein data send karta hai ya request karta hai.
        Ex -
            Client ek naya user create karne ke liye POST request bhejta hai.
            POST /api/users HTTP/1.1
            Content-Type: application/json
            {
                "name": "Alice",
                "age": 25,
                "email": "alice@example.com"
            }
    Server Processing -
        Server request ko process karta hai, user ko create karta hai, aur JSON format mein response bhejta hai.
    Server Response -
        Server client ko response deta hai, jo typically user ke details hota hai.
        Ex -
            HTTP/1.1 201 Created
            Content-Type: application/json
            {
                "id": 1,
                "name": "Alice",
                "age": 25,
                "email": "alice@example.com"
            }
* Advantages of Simple JSON APIs -
	Easy to Use -
        JSON syntax simple hai, jisse developers ke liye use karna asaan hota hai.
	Faster Parsing -
        JSON ko parse karna relatively fast hota hai compared to XML.
	Compatibility -
        JSON widely supported hai across various programming languages, frameworks, aur libraries.
* Use Cases for Simple JSON APIs -
	Web Applications - Client-server communication ke liye.
	Mobile Applications - Data exchange ke liye.
	Microservices - Services ke beech data sharing ke liye.
* Conclusion -
    Simple JSON APIs modern web development mein popular hain, kyunki yeh lightweight, easy-to-read, aur flexible solutions provide karte hain.
    JSON ka use karne se data transfer aur communication efficient hota hai, jisse web applications aur services ko build karna asaan ho jaata hai.

3. What is SOAP APIs ?
Explanation :-
* SOAP (Simple Object Access Protocol) ek protocol hai jo web services ko communicate karne ke liye use hota hai.
* Yeh XML-based messaging protocol hai jo network par information exchange karne ke liye standard rules follow karta hai.
* Key Characteristics of SOAP APIs -
    XML-Based -
        SOAP messages XML format mein hoti hain, jo structured aur self-descriptive hota hai.
        Ex -
            <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
            <Body>
                <GetUserRequest>
                    <UserId>1</UserId>
                </GetUserRequest>
            </Body>
            </Envelope>
    Protocol Independence -
        SOAP kisi bhi transport protocol (HTTP, SMTP, TCP, etc.) par operate kar sakta hai, lekin HTTP sabse common hai.
    WS-Security -
        SOAP security features provide karta hai, jaise message integrity, confidentiality, aur authentication.
    Standardized -
        SOAP ek standardized protocol hai, jo strict rules aur guidelines ke sath aata hai, jisse interoperability badhti hai.
* How SOAP APIs Work -
    Client Request -
        Client SOAP message create karta hai aur server ko send karta hai.
        Yeh message typically HTTP ke through bheja jaata hai.
        Ex -
            POST /api/users HTTP/1.1
            Content-Type: text/xml
            <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
            <Body>
                <GetUserRequest>
                    <UserId>1</UserId>
                </GetUserRequest>
            </Body>
            </Envelope>
    Server Processing -
        Server request ko process karta hai, jo XML-based message hota hai, aur user information retrieve karta hai.
	Server Response -
        Server SOAP message ke through response bhejta hai.
        Ex -
            HTTP/1.1 200 OK
            Content-Type: text/xml
            <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
            <Body>
                <GetUserResponse>
                    <User>
                        <Id>1</Id>
                        <Name>Alice</Name>
                    </User>
                </GetUserResponse>
            </Body>
            </Envelope>
* Advantages of SOAP APIs -
	Security -
        SOAP WS-Security ka support karta hai, jo sensitive data transmission ke liye zaroori hai.
	Formal Contract -
        SOAP APIs WSDL (Web Services Description Language) ka use karke service contract define karte hain, jisse clients aur servers ke beech interaction predictable hota hai.
	Reliability -
        SOAP reliable messaging features provide karta hai, jaise message delivery confirmation.
* Disadvantages of SOAP APIs -
	Complexity -
        SOAP implementation complex ho sakta hai, especially XML parsing aur error handling ke liye.
	Performance -
        SOAP messages ka size bada hota hai, jo performance ko impact kar sakta hai.
	Verbosity -
        XML ka use zyada bandwidth consume kar sakta hai compared to JSON.
* Use Cases for SOAP APIs -
	Enterprise Applications - High-security applications jahan data integrity zaroori hoti hai.
	Financial Services - Banking aur insurance services jo secure transactions ki zaroorat rakhte hain.
	Legacy Systems - Older systems jo SOAP ka support karte hain.
* Conclusion -
    SOAP APIs ek powerful aur secure approach hain web services ke liye, jo complex enterprise applications aur high-security environments mein use hoti hain.
    Inka XML-based structure aur strict protocols interoperability aur reliability ko ensure karte hain, lekin inki complexity aur performance limitations bhi hoti hain.

4. What is GraphQL APIs ?
Explanation :-
* GraphQL ek query language hai jo APIs ke liye use hoti hai, aur yeh data fetching ko simplify karta hai.
* Isse developers ko flexibility milti hai ki woh exactly kaunsa data retrieve karna chahte hain, isse over-fetching aur under-fetching ki problem solve hoti hai.
* Key Characteristics of GraphQL APIs -
    Single Endpoint -
        GraphQL APIs ka sirf ek endpoint hota hai, jahan se saari queries aur mutations handle hoti hain.
        Iska fayda yeh hai ki aapko multiple endpoints manage nahi karne padte.
    Flexible Queries -
        Clients apni zaroorat ke hisaab se specific fields ko request kar sakte hain.
        Ex -
            query {
                user(id: 1) {
                    name
                    email
                }
            }
    Strongly Typed Schema -
        GraphQL APIs ek strongly typed schema define karte hain, jo batata hai ki kaunse types, queries, aur mutations available hain.
        Schema ko GraphQL SDL (Schema Definition Language) mein define kiya jaata hai.
    Real-time Data with Subscriptions -
        GraphQL subscriptions ka support karta hai, jisse clients real-time updates receive kar sakte hain.
* How GraphQL APIs Work -
    Client Request -
        Client ek GraphQL query send karta hai, jisme wo specify karta hai ki usse kaunsa data chahiye.
        Ex -
            POST /graphql HTTP/1.1
            Content-Type: application/json
            {
                "query": "query { user(id: 1) { name, email } }"
            }
    Server Processing -
        Server query ko parse karta hai aur corresponding resolver functions ko call karta hai jo data fetch karte hain.
    Server Response -
        Server client ko sirf wahi data return karta hai jo client ne request kiya tha.
        Ex -
            {
                "data": {
                    "user": {
                    "name": "Alice",
                    "email": "alice@example.com"
                    }
                }
            }
* Advantages of GraphQL APIs -
	Reduced Over-fetching and Under-fetching -
        Clients sirf wahi data lete hain jo unhe chahiye hota hai, jisse unnecessary data transfer reduce hota hai.
	Single Request for Multiple Resources -
        Ek hi request mein multiple resources ko fetch kiya ja sakta hai, jo performance ko enhance karta hai.
	Strongly Typed -
        Strongly typed schema ki wajah se clients ko pata hota hai ki kya expect karna hai, jo development aur testing ko asaan banata hai.
* Disadvantages of GraphQL APIs -
	Complexity -
        Implementation complex ho sakti hai, aur caching aur rate limiting ke liye extra efforts ki zaroorat pad sakti hai.
    Learning Curve -
        Developers ko GraphQL ka syntax aur concepts seekhne mein time lag sakta hai.
	Overly Complex Queries -
        Clients complex queries banane ke liye free hote hain, jo performance issues create kar sakte hain agar achhe se manage na kiya jaye.
* Use Cases for GraphQL APIs -
	Single Page Applications (SPAs) - Jahan multiple data sources se data fetch karna hota hai.
	Mobile Applications - Jahan bandwidth aur performance ki constraints hoti hain.
	Microservices -  Multiple services se data aggregate karne ke liye.
* Conclusion -
    GraphQL APIs ek modern approach hain data fetching ke liye, jo flexibility aur efficiency provide karte hain.
    Yeh complex applications mein data handling ko simplify karte hain, jisse developers ko better control aur performance milta hai.

5. What is gRPC APIs ?
Explanation :-
* gRPC (gRPC Remote Procedure Calls) ek high-performance, open-source framework hai jo APIs ke liye use hota hai.
* Yeh Google dwara develop kiya gaya hai aur protocol buffers (protobuf) ka istemal karta hai data serialization ke liye.
* gRPC microservices architecture mein bahut popular hai kyunki yeh efficient communication aur easy service definition provide karta hai.
* Key Characteristics of gRPC APIs -
    Protocol Buffers -
        gRPC protobuf ko as a default serialization format use karta hai, jo binary format mein data ko encode karta hai.
        Yeh JSON se zyada compact aur faster hota hai.
        Ex -
            syntax = "proto3";
            message User {
                int32 id = 1;
                string name = 2;
                string email = 3;
            }
            service UserService {
                rpc GetUser (UserRequest) returns (User);
            }
    Multiple Communication Types -
        gRPC support karta hai multiple communication types -
            Unary RPC - Simple request-response model.
            Server Streaming RPC - Server multiple responses send karta hai for a single request.
            Client Streaming RPC - Client multiple requests send karta hai, server ek response return karta hai.
            Bidirectional Streaming RPC - Client aur server dono simultaneously data send aur receive kar sakte hain.
    Strongly Typed API -
        gRPC APIs strongly typed hoti hain, jo type safety aur compile-time checks ko ensure karti hain.
    Cross-Language Support -
        gRPC multiple programming languages support karta hai, jaise C++, Java, Python, Go, etc., jo cross-platform development ko asaan banata hai.
* How gRPC APIs Work -
    Client Request -
        Client gRPC client stub ka use karke remote procedure call karta hai.
        Ex -
            response = user_service.GetUser(UserRequest(id=1))
    Server Processing -
        Server request ko process karta hai aur corresponding response return karta hai.
    Server Response -
        Server client ko binary encoded response return karta hai.
        Ex -
            User(id=1, name="Alice", email="alice@example.com")
* Advantages of gRPC APIs -
	High Performance -
        Binary format aur HTTP/2 ke istemal se gRPC high throughput aur low latency provide karta hai.
	Streaming Support -
        Multiple types of streaming support karne ki wajah se complex applications mein efficient data transfer hota hai.
	Automatic Code Generation -
        Protocol buffers se automatically client aur server stubs generate kiye ja sakte hain, jo development process ko speed up karte hain.
* Disadvantages of gRPC APIs -
	Learning Curve -
        Developers ko protobuf aur gRPC ki concepts seekhne mein time lag sakta hai.
	Limited Browser Support -
        gRPC direct browser communication ke liye nahi design kiya gaya hai, isliye web applications mein istemal karne ke liye gRPC-web ka istemal karna padta hai.
	Complexity -
        Setup aur configuration zyada complex ho sakti hai, especially jab multiple services ho.
* Use Cases for gRPC APIs -
	Microservices Architecture - High-performance communication ke liye.
	Real-Time Applications - Jahan low latency zaroori hoti hai, jaise chat applications.
	Data Processing Pipelines - Streaming data transfer ke liye.
* Conclusion -
* gRPC APIs ek powerful tool hain modern software development ke liye, jo performance aur efficiency ko maximize karte hain.
* Yeh especially microservices aur real-time applications mein use hone ke liye ideal hain, jahan rapid data exchange ki zaroorat hoti hai.

*/
