# Master NextJS 

## NextJS Basics

____

### 1. What is NextJS?
### Explanation :-
* NextJS ek full-stack framework hai jo React ke upar bana hua hai.
* Matlab React ka hi use hota hai under the hood, but uske upar NextJS ne bohot saare features add kiye hain jo ek production-grade application banane mein help karte hain.
* **🧠 Simplified way** -
    `NextJS = React + Performance + Routing + Backend Support + SEO + Server Side Rendering + More`

⸻

### 2. Is it a Framework or a Library?
### Explanation :-
* `NextJS is a Framework, not a library`.
	* **Library ka matlab hota hai** - tum use karte ho jo tumhe chahiye (jaise React).
	* **Framework ka matlab hota hai** - woh tumhe structure deta hai ki kaise kaam karna chahiye (NextJS).
* **🧠 Ek aur angle se samajh** -
    * **React bolta hai** - “Tu decide kar ki routing kaise karega, SSR karega ya nahi, folder structure kya hoga.”
    * **NextJS bolta hai** - “Mere rules follow kar. Sab kuch optimized tareeke se ready hai.”

⸻

### 3. Is NextJS used in Frontend or Backend?
### Explanation :-
* NextJS dono ke liye use hota hai - `Frontend + Backend`
* Kyuki usme hum API routes bhi bana sakte hain (like Express), aur pages bhi (like React).
* Toh tu NextJS ko use karke frontend build kar sakta hai, aur saath hi chhoti-moti backend logics jaise form submission, auth, DB calls bhi handle kar sakta hai without Express.

⸻

### 4. Why do we need NextJS when React and Express are already there?
### Explanation :-
* Ye doubt next level hai! 
* Let’s dissect -
	* **React ek library hai** – tumhe manually sab set karna padta hai (routing, SSR, optimization, folder structure, etc).
	* **Express ek backend framework hai** – sirf APIs banane ke kaam aata hai.
* **Problem kya hai** -
    * Agar tu React + Express use karega toh manually:
	    * SSR (Server Side Rendering) configure karna padega
	    * Code-splitting manually karna padega
	    * SEO optimize karna padega
	    * Routing handle karna padega
* **NextJS sab kuch in-built deta hai** -
	* Page-based Routing
	* SSR / SSG / CSR out of the box
	* SEO Support
	* API Routes
	* Image Optimization
	* File System Routing
	* Static Site Generation
* So tu NextJS use karega toh tujhe performance, speed, structure, and SEO free mein milta hai.

⸻

### 5. What does NextJS solve / use-case?
### Explanation :-
* NextJS solve karta hai -

| 🧩 Problem in React              | ✅ Solution via NextJS                 |
|----------------------------------|----------------------------------------|
| Manual Routing setup             | File-system based Routing              |
| No SSR / SEO                     | Built-in SSR & SEO                     |
| Need Express for backend         | In-built API routes                    |
| Performance tuning needed        | Code-splitting & Lazy loading by default |
| Static site generation           | In-built SSG support                   |

* **Matlab** -
    * NextJS ek aise dev ke liye bana hai jo production-level app banana chahta hai bina 100 tools manage kiye.

⸻

### 6. What can we do with NextJS? Frontend or Backend?
### Explanation :-
* Yes, You can build full-fledged Applications with NextJS.
	* **Frontend** - UI using React + Tailwind etc.
	* **Backend** - Using API routes (like mini Express).
* Tu portfolio, blog, e-commerce site, dashboard, ya even mini SaaS apps bhi bana sakta hai NextJS se.

⸻

### 7. Best Use Case of NextJS – Where is it Perfect?
### Explanation :-
* NextJS is best jab tujhe chahiye -
	* **SEO + SSR** - Blog, News site, or Product site jahan Google indexing important hai.
	* **Performance** - Tu chahta hai ki page fast load ho (static generation or SSR).
	* **Hybrid Rendering** - Kuch page SSR ho, kuch SSG ho, kuch CSR ho.
	* **Simplified Dev Experience** - Ek hi framework se frontend + backend.

____

## NextJS Client Side

⸻

### 1. Why React is Not SEO Friendly But NextJS Is?
### Explanation :-
* **React Problem (CSR - Client Side Rendering)** -
	* Jab tu React app banata hai (Vite, CRA, etc.) → `browser pe sirf empty HTML + JS bundle jaata hai.`
	* Browser jab JavaScript ko load karega tabhi UI dikhega.
	* Crawlers (Googlebot) ko bas empty `<div id="root"></div>` milta hai initially.
	* Bots JS execute nahi karte ya incomplete run karte hain → hence low SEO ranking.
* **Reference** -
	* Your screenshot with this HTML -
	```html
	<body>
  		<div id="root"></div>
  		<script src="index.js"></script>
	</body>
	```
* **Iska matlab** - JavaScript load hone ke baad hi sab dikhega → SEO ke liye kharaab.
* **NextJS Solution (SSR - Server Side Rendering)** -
	* Jab NextJS ka page server side render hota hai, to server pe hi final HTML ban jata hai.
	* Crawlers ko direct blog content milta hai, bina JS execute kiye.
	* Better discoverability, higher rankings.
* **Reference** - Your image showing.
	* `Browser ⇄ Next Server → /index.html (has all blogs)`
* **TLDR** -

| Tech              | Crawlers ko kya milta hai? | SEO Score |
|------------------|-----------------------------|-----------|
| React (CSR)      | Empty `<div>`               | ❌        |
| NextJS (SSR/SSG) | Pre-rendered HTML           | ✅        |

⸻

### 2. Waterfalling Problem
### Explanation :-
* **Problem** -
	* In React (CSR):
		1.	Browser pehle index.html laata hai
		2.	Fir JS file laata hai
		3.	Fir JS chalega
		4.	Fir auth check karega
		5.	Fir /blogs fetch karega
		6.	Fir render karega
	* Yeh sab sequential hai → isse slower UX hota hai.
	* **Your Diagram** - shows 4-5 round trips — that’s waterfalling.
* **NextJS Solution** -
	* Server pe hi sab fetch karke HTML bana lo, fir browser ko bhej do.
	* Toh ek hi shot me blog + UI render ready milta hai.
* **Iska fayda** -
	* First Paint faster
	* SEO optimized
	* Less latency

⸻

### 3. What NextJS Offers Over React
### Explanation :-

| Feature                      | React | NextJS                         |
|-----------------------------|--------|--------------------------------|
| SSR Support                 | ❌     | ✅                             |
| File-Based Routing          | ❌     | ✅                             |
| Backend API Routes          | ❌     | ✅                             |
| Image Optimization          | ❌     | ✅                             |
| SEO Friendly                | ❌     | ✅                             |
| Static Site Generation (SSG)| ❌     | ✅                             |
| Server Components           | ❌     | ✅                             |
| Hosted on CDN               | ✅     | ❌ (server chahiye)            |

* NextJS is for production-grade apps
* React is for UI-level apps.

⸻

### 4. Routing in NextJS (Client Side)
### Explanation :-
* **Folder based routing** -
	* `/app/about/page.tsx → /about`
	* `/app/contact/page.tsx → /contact`
* No need for react-router-dom. 
* Bas folder banao, page banao — ho gaya
* NextJS 13+ uses the App Router. 
* Usme page.tsx file ka matlab ek route hai.
* **Bonus** -
	* Link ke liye use karo `<Link href="/about">About</Link>` (from next/link)
	* Routing is automatic & optimized

⸻

### 5. What are Layouts in NextJS?
### Explanation :-
* `Layout = common structure har page ke liye.`
* **Example** - `Header + Footer sab page pe chahiye`
```javascript
	// app/layout.tsx
	export default function RootLayout({ children }) {
	return (
		<html>
		<body>
			<Navbar />
			{children}
			<Footer />
		</body>
		</html>
	);
	}
```
* All pages inside /app use this layout automatically.

⸻

### 6. Layouts in Sub-Routes
### Explanation :-
* Subfolder ka layout sirf usi ke andar ke pages ko affect karta hai
```
app/
 └─ auth/
     ├─ signin/
     ├─ signup/
     └─ layout.tsx ← Applies only to signin/signup
```
* To create reusable layouts for specific sections like auth, dashboard, etc.
* Your screenshot (layout.tsx applied to both signup & signin) is correct ✅

⸻

### 7. What is Merging of Routes?
### Explanation :-
* Two ways to reuse layout :
	* **Approach 1** - Nested Folder (visible route)
		* `/app/auth/signin/page.tsx → /auth/signin`
	* Approach 2: () Folder (ignored in URL)
		* `/app/(auth)/signin/page.tsx → /signin`
	* Your screenshots clearly show -
		* `(auth)` → used only for grouping, not in route path
* Very useful for layout reuse without affecting the URL.

⸻

### 8. What is Components Directory in NextJS?
### Explanation :-
* `/components/` is just a convention folder (not part of routing).
	* Use it to store reusable UI pieces
	* **Example** - Button, Input, Navbar, etc.
* `/components/Button.tsx`
* `/components/Navbar.tsx`
* **Note** - Only /app/ folder is for routing, not /components/.

⸻

### 9. Why onClick Gives Error in NextJS?
### Explanation :-
* **Error** -
	* Event handlers cannot be passed to Server Components
* By default, all components are Server Components in NextJS 13+.
* But onClick, useEffect, useState etc. browser pe chalte hain, server pe nahi.
	* **Solution** -
		* Top of component likho: `"use client"`
		* Isse Next samjhta hai ki ye Client Component hai.
		* Your error screenshot perfectly proves this. ✅

⸻

### 10. What are Client and Server Components?
### Explanation :-

| Component Type | Runs Where?      | Can Use `useState` / `onClick`? | Purpose                          |
|----------------|------------------|----------------------------------|----------------------------------|
| Server         | Node.js Server   | ❌                               | SEO, SSR, DB calls               |
| Client         | Browser          | ✅                               | Interactivity                    |

* Client Component:
```js
"use client"
export default function Button() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count+1)}>{count}</button>
}
```
* **Rule of Thumb** -
	* Jab bhi state, effect, event use karna ho → `"use client"` lagao!
	* Your diagram showing which components are marked as Client Module is 100% on point ✅

____

## NextJS Server Side

### 1. How is it possible that Frontend and Backend ek hi folder mein hote hain in NextJS?
### Explanation :-
* **First Principle Understanding** -
* **Normally React + Express kya karta hai** -
	* React runs on localhost:3000
	* Express runs on localhost:5000
	* Need proxy setup
	* Face CORS issues
* **NextJS kya karta hai** -
	* `Next.js = Full-stack Framework`
	* `Single process = Server + UI dono handle karta hai`
	* **Ek hi server sab ka kaam karta hai** -
		* React pages serve karna (like /about, /home)
		* Backend APIs handle karna (like /api/users, /api/blogs)
* `Same folder = Same project = Same domain`

| Feature       | Traditional       | Next.js        |
|---------------|-------------------|----------------|
| Ports         | 3000 + 5000       | Only 3000      |
| CORS setup    | Required          | Not needed     |
| Deployment    | 2 builds          | 1 build        |
| Hosting       | 2 servers         | 1 server       |

* **Why is it designed this way** -
	* Single source of truth
	* No context switching
	* Great for Monorepo-style development
	* Cleaner Deployment & DevOps

⸻

### 2. How to Fetch Data in NextJS?
### Explanation :-
* **Next.js gives 3 ways (for pre-rendering)** -

| Method                | Timing                | Use-case                    |
|-----------------------|------------------------|-----------------------------|
| getServerSideProps()  | Every request (SSR)    | Always fresh data           |
| getStaticProps()      | At build time (SSG)    | Static content              |
| fetch() inside useEffect | On client side       | Interactive / dynamic stuff |

* **Examples** -
	* **SSR** -
		```js
		export async function getServerSideProps() {
		const res = await fetch('https://api.example.com/data');
		const data = await res.json();
		return { props: { data } };
		}
		```
	* **SSG** -
	```js
		export async function getStaticProps() {
			const res = await fetch('https://api.example.com/posts');
			const posts = await res.json();
			return { props: { posts } };
		}
	```
	* **CSR** -
	```js
		useEffect(() => {
  			fetch("/api/user").then(res => res.json()).then(setUser);
		}, []);
	```

⸻

### 3. How to Show Loaders in NextJS ?
### Explanation :-
* **Depends on rendering method** -
* **CSR (Client Side)** -
	```js
		const [loading, setLoading] = useState(true);

		useEffect(() => {
		fetch("/api/data")
			.then((res) => res.json())
			.then((data) => {
			setData(data);
			setLoading(false);
			});
		}, []);

		{loading ? <Loader /> : <MainContent />}
	```
* **SSR / SSG** -
	* Since HTML comes preloaded, you don’t need loader unless you are doing client-side hydration.
	* But you can show fallback using dynamic imports or suspense (experimental).

⸻

### 4. How to Write Backend APIs in NextJS?
### Explanation :-
* **Next.js allows you to write backend API routes like Express** -
* `File: app/api/hello/route.ts`
	```js
	export async function GET(req: Request) {
	return new Response(JSON.stringify({ message: "Hello" }), {
		headers: { "Content-Type": "application/json" },
		status: 200,
	});
	}

	export async function POST(req: Request) {
	const body = await req.json();
	// handle post
	}
	```
* **Structure** -

| URL         | Handler File                |
|-------------|-----------------------------|
| /api/hello  | app/api/hello/route.ts      |
| /api/user   | app/api/user/route.ts       |

* Ye server-only hota hai. 
* Tu yahan DB access, cookies, validation sab kuch kar sakta hai.

⸻

### 5. How to Connect to DB Using Prisma in NextJS?
### Explanation :-
* **Step-by-step** -
	* **Install Prisma** -
		* `npm install prisma --save-dev`
		* `npx prisma init`
	* **Update .env with DB URL** -
	* **Create Schema in prisma/schema.prisma** -
		```js
		model User {
		id    Int     @id @default(autoincrement())
		name  String
		email String  @unique
		}
		```
	* **Run** -
		* `npx prisma generate`
		* `npx prisma migrate dev --name init`
	* **Use it in your route** -
	```js
		import { prisma } from '@/lib/prisma';
		export async function GET() {
			const users = await prisma.user.findMany();
			return Response.json(users);
		}
	```
* **Create helper** -
	```js
		// lib/prisma.ts
		import { PrismaClient } from '@prisma/client';
		export const prisma = new PrismaClient();
	```

⸻

### 6. What is Singleton Prisma Client?
### Explanation :-
* **Problem** -
	* Agar tu har API call pe new PrismaClient() banayega →
	* Too many DB connections → Error: PrismaClientInitializationError
* **Solution** -
	* `Use singleton pattern = ek hi instance baar baar reuse karo`
	```js
		// lib/prisma.ts
		import { PrismaClient } from '@prisma/client';
		const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

		export const prisma =
		globalForPrisma.prisma ||
		new PrismaClient({
			log: ["query"],
		});

		if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
	```
	* Ye hota hai Singleton Prisma Client

⸻

### 7. What Are Server Actions in NextJS?
### Explanation :-
* `Server Actions = server-side function calls directly from the UI`
	* Ye backend logic ko directly component ke andar call karne ka tareeka hai
	* No need for API Routes separately
* **Example** -
	```js
		'use client'

		export default function Form() {
			async function createUser(formData) {
				"use server"
				// this code runs on server!
				await prisma.user.create({ data: { ... } });
			}

			return <form action={createUser}>...</form>
		}
	```
* **Pros** -
	* No API Routes needed
	* Cleaner code
	* Server + UI mix with good separation
* **Caution** -
	* Feature still under development (as of June 2025, needs flag sometimes)

____