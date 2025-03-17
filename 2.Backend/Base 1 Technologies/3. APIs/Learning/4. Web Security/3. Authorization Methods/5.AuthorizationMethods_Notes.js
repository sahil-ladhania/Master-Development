/*

-----Authorization Methods-----

1. What is Role Based Access Control (RBAC) in API Design ?
Explanation :-
* Role Based Access Control (RBAC) ek authorization method hai jo user permissions ko unke roles ke through manage karta hai.
* Is approach ka main focus ye hai ki users ko unke roles ke adhar par resources aur operations tak access diya jaye.
* Key Concepts of RBAC -
	Roles -
        Roles defined karte hain ki user ko kya permissions milengi. Jaise, “admin”, “editor”, ya “viewer”.
        Har role specific permissions set karti hai.
	Users -
        Users ko ek ya zyada roles assign kiya ja sakta hai.
        Isse flexibility milti hai aur aap easily access control manage kar sakte hain.
    Permissions -
        Permissions define karte hain ki ek role kya actions perform kar sakta hai, jaise “read”, “write”, “delete”, etc.
* How RBAC Works -
	Role Assignment -
        Jab user system mein register hota hai, to unhe ek ya zyada roles assign kiye jate hain.
        Ex - Ek user ko “editor” role diya gaya.
    Access Control -
        Jab user koi request karta hai (jaise ek API call), to system check karta hai ki user ke paas required role hai ya nahi.
        Ex - Agar “editor” role ke paas “write” permission hai, to editor post create kar sakta hai.
	Policy Enforcement -
        API middleware ya framework RBAC policies ko enforce karta hai, ensuring ki sirf authorized users hi specific actions perform kar saken.
* Benefits of RBAC -
	Simplicity -
        Roles ki wajah se access control management aasaan ho jata hai, kyunki aapko individual user permissions manage nahi karni padti.
	Scalability -
        Jaise jaise users add hote hain, aap easily unhe roles assign karke permissions manage kar sakte hain.
	Security -
        Ye unauthorized access ko rokta hai, kyunki users sirf unhe assigned roles ke liye hi permissions rakhte hain.
* Challenges of RBAC -
    Role Explosion -
        Agar roles ka design sahi nahi hai, to aapko bahut saari roles create karni pad sakti hain, jisse management complex ho jata hai.
	Lack of Granularity -
        RBAC kabhi kabhi zyada granular permissions ko handle nahi kar pata, jisse complex access control scenarios ke liye ye effective nahi hota.
* Conclusion -
* RBAC ek effective method hai API design mein access control ko manage karne ke liye, jo simplicity aur security provide karta hai.
* Iska istemal karke, aap easily user permissions ko define aur manage kar sakte hain.

2. What is Attribute Based Access Control (ABAC) - An Authorization Method in API Design ?
Explanation :-
* Attribute Based Access Control (ABAC) ek advanced authorization method hai jo access decisions ko user attributes, resource attributes, aur environmental conditions par based karta hai.
* Ye RBAC se zyada flexible aur granular access control provide karta hai.
* Key Concepts of ABAC -
	Attributes -
        Attributes ka matlab hai characteristics ya properties jo users, resources, aur environment ko describe karte hain.
        Ex -
            User Attributes - User’s department, role, location.
            Resource Attributes - Resource type, owner, sensitivity level.
            Environment Attributes - Time of access, location of access.
	Policies -
        ABAC policies define karti hain ki kaunse attributes kis tarah se combine honge taaki access decision liya ja sake.
        Policies mein logical statements hote hain jo evaluate kiye jaate hain jab user resource access karne ki koshish karta hai.
* How ABAC Works -
	Attribute Collection -
        Jab user request karta hai, to system user, resource, aur environmental attributes ko collect karta hai.
	Policy Evaluation -
        Collected attributes ko defined policies ke against evaluate kiya jata hai.
        Ex -
            Agar policy kehti hai “agar user ka department ‘HR’ hai aur resource ka sensitivity level ‘high’ hai, to access allow hai”, to iske hisaab se decision liya jayega.
	Access Decision -
        Agar policies ke criteria meet hote hain, to access grant kiya jata hai; agar nahi, to deny kiya jata hai.
* Benefits of ABAC -
	Fine-Grained Access Control -
        ABAC granular access control provide karta hai, kyunki aap attributes ka combination use karke complex access scenarios handle kar sakte hain.
	Flexibility -
        Policies ko easily update kiya ja sakta hai, jisse aap quickly new access requirements ko adapt kar sakte hain.
	Dynamic Access -
        Attributes aur environmental conditions ke basis par access ko dynamically adjust kiya ja sakta hai.
* Challenges of ABAC -
	Complexity -
        ABAC policies ko define aur manage karna complicated ho sakta hai, especially jab attributes ki quantity badh jaati hai.
	Performance Overhead -
        Attribute evaluation aur policy processing mein performance overhead ho sakta hai, particularly large datasets par.
	Policy Conflicts -
        Kabhi kabhi multiple policies ek hi resource par apply hoti hain, jisse conflict arise ho sakta hai.
* Conclusion -
    ABAC ek powerful aur flexible authorization method hai jo APIs mein fine-grained access control ko implement karne ke liye istemal hota hai.
    Iska istemal karke aap complex access scenarios ko effectively manage kar sakte hain, lekin iski complexity aur performance considerations ko bhi dhyan mein rakhna zaroori hai.

*/
