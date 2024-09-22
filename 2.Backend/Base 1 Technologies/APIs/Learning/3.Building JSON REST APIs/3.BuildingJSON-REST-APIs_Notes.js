/*

-----Building JSON / REST APIs-----

1. What are REST Principles ?
Explanation :-
* REST (Representational State Transfer) ek architectural style hai jo web services ko design karne ke liye use hota hai.
* REST principles ko samajhna important hai, kyunki yeh APIs ko scalable aur maintainable banate hain.
* Key REST Principles -
	Statelessness -
        Har request client se server tak independent hoti hai.
        Server ko client ki state ka koi knowledge nahi hota.
        Yeh scalability aur reliability ko enhance karta hai.
	Client-Server Architecture -
        Client aur server alag hote hain, jo ek dusre se communicate karte hain.
        Isse client aur server ki functionalities ko alag rakhne mein madad milti hai.
	Uniform Interface -
        REST APIs ek standardized way mein resources ko access karne ki allow karte hain.
        Yeh principles APIs ko samajhne aur istemal karne mein asaan banate hain.
            Iske components hain -
                •	Resource identification (URI)
                •	Resource representations (JSON, XML, etc.)
                •	Self-descriptive messages
                •	Hypermedia as the engine of application state (HATEOAS)
	Resource-Based -
        REST APIs resources par focus karti hain, jo uniquely identify kiye jaate hain URIs se.
        Ex - GET /users/1 ek user resource ko access karta hai.
	Cacheability -
        Responses cache kiye ja sakte hain, jisse performance improve hoti hai.
        Server response headers ke through cacheable data specify karta hai.
	Layered System -
        REST architecture multiple layers mein organize kiya ja sakta hai, jisse system ka complexity hide hota hai aur scalability badhta hai.
* Conclusion -
    REST principles API development ko standardized, scalable aur maintainable banate hain.
    Inhe follow karke aap efficient web services design kar sakte hain.

2. What is URI Design ?
Explanation :-
* URI (Uniform Resource Identifier) design RESTful APIs mein ek important role play karta hai.
* URI resources ko uniquely identify karne ke liye use hota hai aur isse aapki API ka structure aur usability define hota hai.
* Key Principles of URI Design -
	Meaningful and Predictable -
        URIs ko aise design karna chahiye ki woh clear aur meaningful ho.
        Users ko easily samajh aana chahiye ki woh kis resource ko access kar rahe hain.
        Ex -
            Bad URI: /getUser?id=1
            Good URI: /users/1
	Use Nouns for Resources -
        URIs mein resources ko nouns ke through represent karna chahiye.
        Verbs (jaise get, create, etc.) ko HTTP methods par chhod dena chahiye.
        Ex -
            /users, /products instead of /getUsers, /createProduct.
	Hierarchical Structure -
        URIs ko hierarchical structure mein design karna chahiye, jisse resource relationships samajhne mein madad milti hai.
        Ex -
            /users/1/orders (User 1 ke orders)
	Use of HTTP Methods -
        URI design mein HTTP methods ka istemal karke actions define kiye jaate hain.
            GET for fetching data
            POST for creating data
            PUT for updating data
            DELETE for deleting data
	Avoiding File Extensions -
        URIs ko file extensions (jaise .html, .php) se bachna chahiye, kyunki yeh implementation details ko expose karte hain.
        Ex -
            /users is better than /users.php.
	Query Parameters for Filtering and Pagination -
        Agar aapko specific results chahiye, to query parameters ka istemal kar sakte hain.
        Ex -
            /products?category=electronics&page=2
* Best Practices for URI Design -
	Consistent Naming Conventions -
        URI mein lowercase letters aur hyphens (-) ka istemal karein, jisse readability badhti hai.
        Ex -
            /user-profiles instead of /UserProfiles.
	Versioning -
        API versioning ka support URIs mein include karna chahiye.
        Ex -
            /v1/users, /v2/products.
    Avoid Deep Nesting -
        URIs ko unnecessarily deep nesting se bachna chahiye, kyunki yeh complexity badha sakta hai.
        Ex -
            Avoid /users/1/orders/2/items/3.
* Conclusion -
    Achhe URI design se API usability aur clarity badh jaati hai.
    Isse clients ko resources ko easily access karne mein madad milti hai aur overall developer experience enhance hota hai.

3. What are Versioning Strategies ?
Explanation :-
* API versioning ek important practice hai jo ensure karta hai ki aapki API backward compatible rahe, jab aap changes ya enhancements implement karte hain.
* Yeh clients ko naye features use karne ki flexibility deta hai bina existing functionality ko break kiye.
* Key Versioning Strategies -
	URI Versioning
        Is method mein API version ko URI mein include kiya jata hai.
        Yeh sabse common aur straightforward approach hai.
        Ex -
            /v1/users
            /v2/users
        Advantages -
            Clear and visible versioning.
            Easy to manage different versions.
        Disadvantages -
            URIs can become cluttered with versions over time.
	Query Parameter Versioning -
        Is method mein version ko query parameter ke roop mein pass kiya jata hai.
        Ex -
            /users?version=1
        Advantages -
            URIs remain clean and maintainable.
            Clients can easily specify the version they want.
        Disadvantages -
            Query parameters can be overlooked by clients.
	Header Versioning -
        API version ko HTTP headers mein include kiya jata hai. Yeh approach less visible hai par ek clean URI structure maintain karta hai.
        Ex -
            Request header - Accept: application/vnd.myapi.v1+json
        Advantages -
            Clean URIs without versioning clutter.
            Flexibility in supporting multiple versions.
        Disadvantages -
            Less discoverable for clients who may not read headers.
	Content Negotiation -
        API responses ko content negotiation ke through versioned kiya jata hai, jahan client specific media type request karta hai.
        Ex -
            Request header - Accept: application/vnd.myapi+json; version=1
        Advantages -
            Flexible approach.
            Allows detailed control over the response format.
        Disadvantages -
            Complexity in implementation and client understanding.
	Semantic Versioning -
        Semantic versioning ek convention hai jo version numbers ko major, minor, aur patch changes ke hisaab se define karta hai.
        Ex -
            1.0.0, 1.1.0, 2.0.0
        Advantages -
            Clear understanding of changes (breaking vs non-breaking).
            Helps clients understand the impact of upgrading.
        Disadvantages -
            Requires discipline in maintaining version numbers.
* Best Practices for API Versioning -
	Communicate Changes Clearly - Clients ko changes aur deprecated features ke bare mein achhe se inform karein.
	Avoid Breaking Changes - Try to minimize breaking changes in minor version updates.
	Document Versions - Har version ke liye proper documentation provide karein, jisse clients easily samajh saken ki kya changes hue hain.
	Deprecate Gradually - Old versions ko gradually deprecate karein aur clients ko migration ke liye time de.
* Conclusion -
    API versioning strategies ensure karti hain ki aapki API evolve hoti rahe without breaking existing clients.
    Aapko apne use case ke hisaab se suitable strategy choose karni chahiye, jisse maintainability aur usability dono achieve ho sake.

4. How to handle CRUD Operations ?
Explanation :-
* CRUD operations ka matlab hai Create, Read, Update, aur Delete, jo kisi bhi API ka core functionality hai.
* RESTful APIs mein in operations ko HTTP methods ke through implement kiya jata hai.
* Mapping CRUD Operations to HTTP Methods -
    Create -
        HTTP Method - POST
        Description - Naye resources create karne ke liye use hota hai.
    Read -
        HTTP Method - GET
        Description - Resources ko read ya fetch karne ke liye use hota hai.
    Update -
        HTTP Method - PUT (Full update) ya PATCH (Partial update)
        Description - Existing resources ko update karne ke liye use hota hai.
    Delete -
        HTTP Method - DELETE
        Description - Resources ko delete karne ke liye use hota hai.
* Best Practices for Handling CRUD Operations -
	Use Proper Status Codes -
        Har operation ke liye appropriate HTTP status codes ka istemal karein jisse client ko response ka state samajh aaye.
	Consistent Data Formats -
        CRUD operations ke liye consistent request aur response formats maintain karein (JSON ya XML).
	Validation -
        Incoming data ko validate karein (e.g., required fields, data types) aur appropriate error responses return karein.
	Security -
        CRUD operations ke liye proper authentication aur authorization mechanisms implement karein.
	Logging and Monitoring -
        CRUD operations ko log karein aur monitor karein, taaki aap easily troubleshoot kar sakein.
* Conclusion -
    CRUD operations RESTful APIs ka foundation hain.
    Inhe effectively handle karne se API usability, maintainability, aur client satisfaction badh jaati hai.

5. What is Pagination ?
Explanation :-
* Pagination ek technique hai jo large datasets ko manageable chunks mein divide karne ke liye use hoti hai.
* Jab aapki API ke response mein bohot saari records hoti hain, to pagination clients ko specific records retrieve karne ki flexibility deti hai.
* Why Use Pagination -
	Performance -
        Large datasets ko ek hi baar load karne se server aur client dono par load badhta hai.
        Pagination se performance improve hoti hai, kyunki sirf required data hi load hota hai.
	User Experience -
        Users ko bohot saari information ek hi page par dikhana overwhelming ho sakta hai.
        Pagination se users easily navigate kar sakte hain.
	Network Efficiency -
        Bandwidth ko optimize karne ke liye, sirf required records hi transfer kiye jaate hain.
* Common Pagination Techniques -
    Offset-Based Pagination -
        Isme offset aur limit parameters use kiye jaate hain.
        Ex -
            Request -
                GET /users?offset=20&limit=10
                Yaha, offset=20 ka matlab hai ki first 20 records skip karna hai aur limit=10 ka matlab hai ki next 10 records retrieve karne hain.
        Advantages -
            Simple implementation.
            Easy to understand for clients.
        Disadvantages -
            As datasets grow, performance issues ho sakte hain due to skipped records.
    Cursor-Based Pagination -
        Is technique mein unique identifier (cursor) use kiya jata hai, jo last fetched item ko point karta hai.
        Ex -
            Request -
                GET /users?cursor=abc123&limit=10
                Yaha, cursor=abc123 ka matlab hai ki is record ke baad ke 10 records retrieve karne hain.
        Advantages -
            More efficient for large datasets.
            Avoids issues with data changes between requests.
        Disadvantages -
            Implementation complex ho sakti hai.
    Page-Based Pagination -
        Isme pages ka concept use hota hai, jahan aap specify karte hain ki kaunsa page retrieve karna hai.
        Ex -
            Request -
                GET /users?page=2&limit=10
                Yaha, page=2 ka matlab hai ki second page ke records fetch karne hain.
            Advantages -
                Easy to implement and understand.
            Disadvantages -
                Data changes ke case mein issues ho sakte hain.
* Best Practices for Pagination -
	Consistent Parameters -
        Pagination ke liye consistent parameters (e.g., page, limit, offset) ka istemal karein.
	Provide Total Count -
        API responses mein total records ka count include karein, taaki clients ko pata ho kitne pages available hain.
	Handle Edge Cases -
        Pagination requests ko handle karte waqt edge cases (jaise invalid page numbers) ka dhyan rakhein aur appropriate error responses return karein.
	Performance Testing -
        Pagination ka performance impact test karein, taaki aapka API efficient rahe.
* Conclusion -
    Pagination ek essential technique hai jo APIs ko performance aur user experience enhance karne mein madad karti hai.
    Sahi pagination strategy select karne se aapki API efficiency badh jaati hai.

6. What is Rate Limmiting ?
Explanation :-
* Rate Limiting ek technique hai jo API requests ki frequency ko control karne ke liye use hoti hai.
* Iska primary goal server ko overloading se bachana aur fair usage ko ensure karna hai, taaki sabhi users ko service achhe se mile.
* Why Use Rate Limiting -
	Prevent Abus -
        Rate limiting se aap ensure karte hain ki koi bhi user ya client API ko misuse nahi karein, jaise excessive requests bhejna.
	Resource Management -
        Server resources (CPU, memory, bandwidth) ko manage karne mein madad karta hai, jisse server ka performance maintain rahe.
	Enhanced User Experience -
        Rate limiting se API response times consistent rehte hain, jo overall user experience improve karta hai.
	Protection Against DDoS Attacks -
        Distributed Denial of Service (DDoS) attacks se bachne mein madad karta hai, jahan attackers multiple requests bhejkar service ko down karne ki koshish karte hain.
* Common Rate Limiting Strategies -
	Fixed Window -
        Isme ek fixed time window define kiya jata hai (jaise 1 minute), aur us time frame mein maximum requests ki limit set ki jaati hai.
        Ex -
            100 requests per minute.
        Advantages -
            Simple to implement.
            Easy to understand.
        Disadvantages -
            Bursty traffic issues ho sakte hain, jahan ek second mein maximum requests bheje ja sakte hain aur baaki samay koi requests nahi hoti.
	Sliding Window -
        Isme ek sliding window technique use hoti hai, jahan request count current time period ke hisaab se maintain kiya jata hai.
        Ex -
            Agar aap 100 requests per minute allow karte hain, to window hamesha current timestamp ke hisaab se slide hota hai.
        Advantages -
            Better handling of burst traffic compared to fixed window.
        Disadvantages -
            Implementation complexity badh sakti hai.
	Token Bucket -
        Is method mein tokens ka bucket maintain kiya jata hai, jahan har request ek token consume karta hai.
        Tokens time ke saath refill hote hain.
        Ex -
            1 token per second, and a bucket can hold 10 tokens.
            Users can make bursts of requests as long as they have tokens.
        Advantages -
            Flexibility in handling burst requests.
        Disadvantages -
            Implementation can be complex.
	Leaky Bucket -
        Is technique mein requests ko ek bucket ki tarah treat kiya jata hai, jahan bucket ek fixed rate se leak hoti hai.
        Ex -
            Allowing 1 request per second, but users can queue up requests.
        Advantages -
            Smooth handling of traffic spikes.
        Disadvantages -
            Can lead to delayed requests if the queue fills up.
* Best Practices for Implementing Rate Limiting -
	Set Clear Limits -
        Rate limits ko clearly define karein, jaise per minute, per hour, etc., aur unhe document karein.
    Provide Feedback -
        Clients ko limit exceed hone par appropriate feedback (like HTTP status code 429 Too Many Requests) de.
	Monitor Usage -
        API usage ko monitor karein taaki aapko usage patterns samajh aaye aur limits ko adjust kar sakein.
	Different Limits for Different Users -
        Different user types (like free vs. premium) ke liye alag rate limits implement karein.
	Graceful Handling -
        Rate limits exceed hone par gracefully handle karein, jisse user experience bura na ho.
* Conclusion -
    Rate limiting ek critical aspect hai jo API ki stability aur usability ko maintain karta hai.
    Properly implemented rate limiting se aap server resources protect kar sakte hain aur clients ko ek consistent experience provide kar sakte hain.

7. What is Idempotency ?
Explanation :-
* Idempotency ek property hai jo ensure karti hai ki ek operation ko multiple baar execute karne par result wahi rahe.
8 Yani, agar aap ek request ko ek baar ya multiple baar bhejte hain, to server ka response aur state consistent rehna chahiye.
* Importance of Idempotency -
	Reliability -
        Idempotent operations ensure karte hain ki agar network issues ya retries ke wajah se same request baar baar bheji ja rahi hai, to bhi data inconsistent nahi hoga.
	Error Handling -
        Clients ko error handling mein madad milti hai, kyunki agar unhe pata hai ki koi operation idempotent hai, to wo bina dar ke retry kar sakte hain.
    State Consistency -
        Application ki state ko consistent rakhne mein madad karta hai, jo overall data integrity ke liye zaroori hai.
* Idempotent HTTP Methods -
    GET -
        Description -
            Data ko retrieve karne ke liye use hota hai.
            Multiple requests karne par result same hota hai.
        Ex -
            GET /users/1
            Idempotency - Haan, multiple baar request bhejne par response wahi rahega.
    PUT -
        Description -
            Existing resource ko update karne ke liye use hota hai.
            Agar aap ek resource ko ek hi state mein rakhte hain, to multiple requests se wahi state milega.
        Ex -
            PUT /users/1
            Content-Type: application/json
            {
                "name": "Alice"
            }
            Idempotency - Haan, multiple baar request bhejne par resource ka state wahi rahega.
    DELETE -
        Description -
            Resource ko delete karne ke liye use hota hai.
            Agar resource pehle se delete hai, to repeated delete requests se error nahi aata.
        Ex -
            DELETE /users/1
            Idempotency - Haan, agar resource pehle se delete hai, to multiple delete requests se koi error nahi aayega.
    PATCH -
        Description -
            Resource ko partially update karne ke liye use hota hai.
            Agar aap same update request bhejte hain, to state same rahega agar wo valid hai.
        Ex -
            PATCH /users/1
            Content-Type: application/json
            {
                "email": "alice@example.com"
            }
            Idempotency - Haan, agar aap wahi patch request karte hain, to resource ka state wahi rahega.
* Non-Idempotent HTTP Methods -
    POST -
        Description -
            Naye resources create karne ke liye use hota hai.
            Multiple requests se naye resources create ho sakte hain.
        Ex -
            POST /users
            Content-Type: application/json
            {
                "name": "Alice"
            }
            Idempotency - Nahi, multiple requests se multiple resources create honge.
* Best Practices for Idempotency -
	Use Idempotent Methods When Possible -
        Jitne ho sake idempotent methods ka istemal karein, taaki data integrity maintain rahe.
	Implement Idempotency Keys -
        POST requests ke liye idempotency keys implement karein, taaki aap clients ko ek unique key provide karein jisse wo repeat requests bhej sakte hain bina duplicates create kiye.
	Document Idempotent Behavior -
        API documentation mein idempotent methods aur unka behavior clearly mention karein.
* Conclusion -
    Idempotency ek essential concept hai jo API reliability aur data consistency ko enhance karta hai.
    Iska istemal karne se aapko error handling aur user experience mein improvement milta hai.

8. What is HATEOAS ?
Explanation :-
* HATEOAS ka full form hai Hypermedia as the Engine of Application State. Ye RESTful APIs ka ek important principle hai, jo client ko dynamically navigate karne ki capability deta hai without needing prior knowledge of the API structure.
* Key Concepts of HATEOAS -
	Hypermedia
        API response mein links include hote hain jo further actions aur related resources ki taraf point karte hain.
        Iska matlab hai ki client ko samajhne ke liye additional documentation ki zaroorat nahi hoti.
	Application State -
        Client API ke through application ka state change kar sakta hai by following links provided in the responses.
	Discoverability -
        HATEOAS se clients easily discover kar sakte hain ki available actions kya hain aur kaise unhe perform kiya ja sakta hai.
* How HATEOAS Works -
    Initial Request -
        Jab client initial request karta hai, to server response mein resource details ke saath related actions ke links bhi provide karta hai.
        Ex -
            Request -
                GET /users/1
            Response -
                {
                    "id": 1,
                    "name": "Alice",
                    "links": [
                        {
                            "rel": "self",
                            "href": "/users/1"
                        },
                        {
                            "rel": "update",
                            "href": "/users/1/update"
                        },
                        {
                            "rel": "delete",
                            "href": "/users/1/delete"
                        }
                    ]
                }
                Is response mein links array hai jo alag actions ke liye URLs provide karta hai.
    Client Navigation -
        Client ab in links ka istemal karke specific actions perform kar sakta hai bina manually URLs ko hardcode kiye.
        Ex -
            Agar client ko user update karna hai, to wo link follow karke update action perform karega.
            PUT /users/1/update
* Benefits of HATEOAS -
	Reduced Coupling
        Clients ko API structure ke baare mein knowledge nahi rakhna padta, jisse aapka API versioning aur evolution aasaan hota hai.
	Improved Flexibility
        Agar aap API mein changes karte hain, to clients ko links ke through new actions discover karne ki capability hoti hai.
	Better Documentation
        Documentation ki zaroorat kam hoti hai kyunki clients ko real-time links ke through navigate karne ki capability milti hai.
* Challenges of Implementing HATEOAS -
	Increased Complexity
        Server-side implementation zyada complex ho sakti hai, kyunki aapko dynamically links generate karne padte hain.
	Client-Side Logic
        Clients ko bhi HATEOAS ke saath kaam karne ke liye complex logic likhna pad sakta hai.
	Performance Overhead
        Hypermedia links ko generate karne mein kuch performance overhead ho sakta hai, jo large datasets par noticeable ho sakta hai.
* Conclusion -
    HATEOAS ek powerful concept hai jo APIs ko self-descriptive banata hai aur clients ko flexible navigation provide karta hai.
    Iska istemal karne se API ki discoverability aur usability improve hoti hai.

9. What is Error Handeling ?
Explanation :-
* Error Handling ka matlab hai ki jab API requests fail hoti hain ya unexpected conditions occur karte hain, to unhe kaise handle kiya jaye.
* Iska aim hota hai clients ko meaningful information provide karna taaki wo samajh saken ki kya galat hua aur kaise solve karna hai.
* Importance of Error Handling -
	User Experience
        Agar users ko clear aur actionable error messages milte hain, to unhe apni requests ko samajhne aur sahi karne mein madad milti hai.
	Debugging
        Developers ke liye detailed error messages debugging process ko aasaan karte hain.
	Consistency
        Consistent error responses ensure karte hain ki clients predictable tarike se errors ko handle kar saken.
* Best Practices for Error Handling -
	Use Standard HTTP Status Codes
        Errors ko represent karne ke liye appropriate HTTP status codes ka istemal karein, taaki clients ko unki severity samajh aaye.
	Provide Meaningful Error Messages
        Error responses mein clear aur meaningful messages dena zaroori hai, jisse client samajh sake ki problem kya hai.
	Include Error Codes
        Custom error codes provide karein, jo specific errors ko represent karte hain. Isse debugging aur troubleshooting mein madad milti hai.
	Document Errors
        API documentation mein errors aur unke possible causes ko detail se explain karein.
	Graceful Degradation
        Agar koi part of the service fail ho jata hai, to application ko gracefully degrade hona chahiye, taaki users ko unexpected behavior na mile.
	Logging and Monitoring
        Errors ko log karein aur monitor karein, jisse aapko issues ko identify aur fix karne mein madad mile.
* Error Response Structure -
    Error responses ka ek standard structure hona chahiye.
    Ye consistency aur predictability ko maintain karta hai.
* Conclusion -
    Error handling ek critical aspect hai jo API ki reliability aur user experience ko enhance karta hai.
    Proper error handling se clients ko clear information milti hai, jisse unhe samajhne aur resolve karne mein madad milti hai.

10. What is RFC 7807 - Problem Details for HTTP APIs in Error Handling ?
Explanation :-
* RFC 7807 ek specification hai jo standardized format provide karta hai error responses ke liye in HTTP APIs.
* Iska aim hai ki APIs ko ek consistent aur machine-readable way mein errors report karne ka ek tarika diya ja sake.
* Key Components of RFC 7807 -
    RFC 7807 define karta hai ki error responses ka structure kya hoga.
    Ismein kuch important fields shamil hote hain -
        type -
            Error ka URI jo error ki type ko represent karta hai.
            Ex -
                "type": "https://example.com/probs/out-of-credit"
        title -
            Error ka ek short, human-readable summary.
            Ex -
                "title": "Out of Credit"
        status -
            HTTP status code jo error ko represent karta hai.
            Ex -
                "status": 403
        detail -
            Detailed description of the error.
            Ye extra information provide karta hai jo client ko samajhne mein madad karta hai.
            Ex -
                "detail": "Your account has insufficient credit."
        instance -
            Specific resource ke instance ka URI jisse error related hai.
            Ex -
                "instance": "/users/123"
* Ex of RFC 7807 Error Response -
    Agar ek API request fail hoti hai due to insufficient credit, to error response is tarah dikhega -
        {
            "type": "https://example.com/probs/out-of-credit",
            "title": "Out of Credit",
            "status": 403,
            "detail": "Your account has insufficient credit.",
            "instance": "/users/123"
        }
* Benefits of Using RFC 7807 -
	Standardization -
        APIs ko ek standardized format milta hai jo error handling ko consistent aur predictable banata hai.
	Machine-Readable -
        Ye errors ko machine-readable format mein represent karta hai, jisse automated systems inhe easily process kar sakte hain.
	Human-Readable -
        Error messages ka structure aisa hota hai ki developers aur users dono ko easily samajh aaye.
	Improved Debugging -
        Detailed error information debugging ko aasaan banati hai, jisse developers ko problems identify karne mein madad milti hai.
* Implementing RFC 7807 in APIs -
	Define Error Types -
        Apne application ke liye specific error types define karein aur unka URI create karein.
	Construct Error Responses -
        Errors ko handle karte waqt RFC 7807 ke according structured responses banayein.
	Document Errors -
        API documentation mein errors aur unke meanings ko clearly mention karein.
* Conclusion -
    RFC 7807 ek useful standard hai jo error handling ko improve karta hai APIs mein.
    Iska istemal karke, aap apne API ki reliability, usability, aur developer experience ko enhance kar sakte hain.

*/
