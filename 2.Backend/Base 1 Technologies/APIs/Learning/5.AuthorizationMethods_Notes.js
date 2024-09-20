/*

-----Authorization Methods-----

1. What is Role Based Access Control (RBAC) in API Design ?
Explanation :-
* A method of restricting access to resources based on the roles assigned to users.
* How It Works -
	•	Roles are predefined (e.g., Admin, User, Editor).
	•	Permissions are associated with each role (e.g., Admin can create, read, update, delete, while User can only read).
	•	The system checks the user’s role before granting access to an API endpoint.
* Use Case - Common in applications with hierarchical user permissions (e.g., admin panels, enterprise apps).

2. What is Attribute Based Access Control (ABAC) - An Authorization Method in API Design ?
Explanation :-
* An authorization method that uses attributes (user, resource, environment) to determine access permissions dynamically.
* How It Works -
	•	Attributes like user role, resource type, time of access, etc., are evaluated against rules.
	•	Ex - A user with the Manager role can access data only during business hours and only for certain resources.
	•	More Flexible Than RBAC - ABAC allows for more granular access control compared to predefined roles.

*/
