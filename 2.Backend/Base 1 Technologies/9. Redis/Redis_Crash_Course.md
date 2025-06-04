# Redis Crash Course

## **1. Redis Strings**

### **What is it?**
- Redis String simplest data type hai—bilkul key–value store, jahan har key ke saath ek string (ya binary data) map hota. 
- Value max size `~512 MB` tak ho sakta hai.

### **Why is it used?**
- Simple value store ke liye, jaise counters, sessions, small blobs (JSON), caching of HTML ya API result.
- Redis Strings atomic operations (INCR, DECR) support karte for counters.

### **Where is it used?**
- **Caching** - API response, computed HTML, template fragments.
- **Counters** - Page views, likes, visits count.
- **Feature Flags** - On/Off switches (feature:new_ui = "1").
- **Session Store** - Session token mapping user → JSON data.

### **When is it used?**
- Jab hame ek simple, single-value store chahiye jisko low-latency pe read/write karna hai.
- Jab aapko key-based read-heavy data fast serve karni hai.

### **Benefits of Using it?**
- **Speed** - Sub-millisecond reads/writes.
- **Atomic Operations** - INCR, DECR, SETNX (set if not exists), GETSET (old value return).
- **Memory Efficieny** - Small data in RAM with minimal overhead.

### **How to use it?**
#### **Redis CLI Example :**
```js
  SET page:home:cache "<html>...</html>"
  GET page:home:cache
  INCR counter:pageviews
  DECR counter:online_users
  SETEX session:abc123 "3600" "{ \"userId\": 42, \"role\": \"admin\" }"
```
* **Note** - Always use this convention `Method <Key>:<ID> Value ` , for ex - `SET user:1 sahil`
- `SET key value` → store kare
- `GET key` → retrieve kare
- `INCR key` → increment
- `DECR key` → decrement
- `SETEX key ttl value` → value set + expiration (in seconds)

#### Node.js (ioredis) Example :
```javascript
  const Redis = require('ioredis');
  const redis = new Redis();

  // Caching API response for 60 seconds
  await redis.setex('api:user:100', 60, JSON.stringify({ name: 'Alice', age: 30 }));

  // Counter increment
  await redis.incr('counter:signups');

  // Get and parse
  const data = JSON.parse(await redis.get('api:user:100'));
  console.log(data.name); // "Alice"
```

### Example Situations :
1. **Page View Counter** - Har page load pe
```redis
  INCR pageviews:homepage
```
  * Total views milenge bahut fast.

2. **Login Session** -
- On login -
```redis
  SETEX session:token123 3600 "{ \"userId\": 42, \"roles\": [\"user\"] }"
```
- On each request -
```redis
  GET session:token123
```
- Agar null, session expired; otherwise parse user.

3. **Feature Flag** -
- Deploy new feature -
```redis
  SET feature:new_checkout "1"
```
- **Code me check** :
```javascript
  const isOn = await redis.get('feature:new_checkout'); 
  if (isOn === '1') { showNewCheckout(); }
```

---

## **2. Redis Lists (Stacks and Queues)**

### **What is it?**
- Redis List ek ordered collection of strings hai. 
- Internally doubly‐linked list jaisa behave karta hai. 
- Aap LPUSH, RPUSH, LPOP, RPOP se list ke ends me add/pop kar sakte ho.
  - **Stack Behavior** - `LPUSH + LPOP → LIFO`
  - **Queue Behavior** - `LPUSH + RPOP (ya RPUSH + LPOP) → FIFO`

### **Why is it used?**
- Simple message queues, task lists, job scheduling.
- Chat message buffering (agar temporarily hold karna ho).
- Latest N items (recent log messages).

### **Where is it used?**
- **Task Queues** - Background jobs like image-processing tasks.
- **Message Buffer** - Chat server me incoming messages queue.
- **Recent Activity Feed** - Store recent 100 feed items.

### **When is it used?**
- Jab hame sequential processing chahiye (FIFO) ya stack-like processing (LIFO).
- Jab hame "pop/push" low-latency operations chahiye on both ends.

### **Benefit of Using it**
- **Atomic Push/Pop** - LPUSH + RPOP atomic operations.
- **Blocking Pops** - BLPOP, BRPOP—agar list empty ho, to block until element available (worker blocking).
- **List Trimming** - LTRIM key 0 99 → keep only first 100 elements.

### **How to use it?**
#### **Redis CLI Example (Queue) :**
```js
  RPUSH task_queue "{ \"jobId\": 1, \"action\": \"sendEmail\" }"
  RPUSH task_queue "{ \"jobId\": 2, \"action\": \"generateReport\" }"
  // Worker side (blocking pop)
  BLPOP task_queue 0   // blocks until an item arrives
```

#### **Redis CLI Example (Stack) :**
```js
  LPUSH stack:undo "cmd1"
  LPUSH stack:undo "cmd2"
  LPOP stack:undo   // returns "cmd2"
  LPOP stack:undo  // returns "cmd1"
```

#### Node.js Example (ioredis) :
```javascript
  // Producer: enqueue job
  await redis.rpush('jobQueue', JSON.stringify({ jobId: 101, type: 'resize' }));

  // Worker: blocking pop
  async function processJobs() {
    while (true) {
      const result = await redis.blpop('jobQueue', 0);
      const job = JSON.parse(result[1]); // result[0] is key name
      await handleJob(job);
    }
  }
  processJobs();
```

### Example Situations

1. **Background Jobs**:
- User uploads profile picture → primary server enqueues:
```js
  RPUSH avatar:jobs "{ \"userId\": 42, \"filePath\": \"/tmp/img.png\" }"
```
- Worker runs in loop:
```js
  BLPOP avatar:jobs 0
  // Resize image, upload to S3, update DB
```

2. **Chat Message Queue**:
- User sends message, temporarily push:
```js
  RPUSH chat:room:123 "{ \"from\": \"alice\", \"text\": \"Hi!\" }"
```
- Another process pops and broadcasts to WebSocket:
```js
  BRPOP chat:room:123 0
  // Parse and send via WS to subscribers
```

3. **Undo Stack in Editor**:
- User action:
```js
  LPUSH editor:undo "{ \"action\": \"insert\", \"pos\": 5 }"
```
- On undo:
```js
  LPOP editor:undo  # Last action pe wapas jao
```

---

## **3. Redis Sets**

### **What is it?**

Redis Set ek unordered collection of unique strings hai. Duplicate elements allow nahi hotey.

### **Why is it used?**
- Unique item storage: followers list, tags, feature flags, membership.
- Set operations: SADD, SREM, SMEMBERS, SINTER, SUNION, SDIFF.

### **Where is it used?**
- Social Features: Follower/Following lists, user groups.
- Tag Systems: Article tags, product categories.
- Unique Visitors: Track unique users on a page.

### **When is it used?**
- Jab hame list me duplicates nahi hone chahiye.
- Jab hame set theory operations (intersection, union, difference) chahiye.

### **Benefit of Using it**
- O(1) membership check: SISMEMBER key member bohot fast (amortized constant).
- Set Operations:
  - SINTER key1 key2 → common elements.
  - SUNION key1 key2 → combined unique elements.
  - SDIFF key1 key2 → elements in key1 but not in key2.
- Memory Efficient: Under the hood hash table with low overhead.

### **How to use it?**

#### **Redis CLI Example:**
```js
  # Add followers
  SADD followers:alice "bob" "charlie" "dan"
  SADD followers:bob "alice" "ed"

  # Check membership
  SISMEMBER followers:alice "dan"   # returns 1 (true)

  # Intersection (mutual followers)
  SINTER followers:alice followers:bob   # returns ["alice"? Actually check common)

  # Remove member
  SREM followers:alice "dan"

  # All members
  SMEMBERS followers:alice
```

#### Node.js (ioredis):
```javascript
await redis.sadd('tags:article:100', 'redis', 'nosql', 'database');
const isTag = await redis.sismember('tags:article:100', 'redis'); // 1
const tags = await redis.smembers('tags:article:100');            // ["redis","nosql","database"]
```

### Example Situations :

1. **Followers Feature (Mutual Friends)**:
- Alice follows Bob & Charlie:
```js
  SADD following:alice "bob" "charlie"
```
- Bob follows Charlie & Alice:
```js
  SADD following:bob "alice" "charlie"
```
- Who both Alice & Bob follow?
```js
  SINTER following:alice following:bob   # returns ["charlie"]
```

2. **Unique Visitors**:
- On each page visit:
```js
  SADD page:123:visitors "user42"
```
- Count unique:
```js
  SCARD page:123:visitors   # returns unique count
```

3. **User Permissions / Roles**:
- Assign roles to user:
```js
  SADD roles:admin "alice" "ed"
```
- Check if Alice is admin:
```js
  SISMEMBER roles:admin "alice"   # 1
```

---

## **4. Redis HashMaps (Hashes)**

### **What is it?**
- Redis Hash ek map/dictionary type hai, jisme ek single key ke andar multiple field–value pairs store karte hain (jaise ek small JSON object).

### **Why is it used?**
- Structured data store karne ke liye, jaha multiple related fields ek sath rakhe jayein.
- Query/update specific fields bina poore object fetch kiye - `efficient memory + bandwidth use`.

### **Where is it used?**
- User Profiles: user:100 → { name: "Alice", age: "30", email: "a@x.com" }
- Session Data: Session info me alag-alag fields.
- Product Catalog: Product ke attributes (price, stock, category).

### **When is it used?**
- Jab data relational/structured ho aur aap single key me multiple sub-fields maintain karna chahte.
- Jab frequently only kuch fields update/ read karne ho.

### **Benefit of Using it**
- Atomic Field Operations: HSET, HGET, HINCRBY, HDEL.
- Bandwidth Efficiency: Agar ek 10-field object hai, aur sirf ek field update karna hai, aap sirf HSET key field newValue run karte—complete object transfer nahi karna.
- Memory Efficient: Redis hash internally optimize karta hai jab fields kam ho (ziplist); bada hone pe hashtable.

### **How to use it?**
#### **Redis CLI Example :**
```js
  # Create user profile
  HMSET user:42 name "Bob" age "28" email "bob@example.com"
  # Get single field
  HGET user:42 email      # "bob@example.com"
  # Get all fields
  HGETALL user:42
  # Increment numeric field
  HINCRBY user:42 points 10
  # Delete a field
  HDEL user:42 age
```

#### Node.js (ioredis):
```javascript
  // Set multiple fields
  await redis.hset('user:42', 'name', 'Bob', 'age', '28', 'email', 'bob@example.com');

  // Get one field
  const email = await redis.hget('user:42', 'email');

  // Get all fields as object
  const user = await redis.hgetall('user:42');
  console.log(user); 
  // { name: 'Bob', age: '28', email: 'bob@example.com' }

  // Increment score
  await redis.hincrby('user:42', 'score', 5);
```

### Example Situations :
1. **Leaderboard (Simple)**:
- Instead of sorted set, store user stats:
```js
  HMSET stats:100 "solved" "5" "submissions" "10" "rating" "1200"
```
- Update only "solved":
```js
  HINCRBY stats:100 solved 1
```

2. **Product Inventory**:
- Product details:
```js
  HSET product:555 name "Wireless Mouse"
  HSET product:555 price "799"
  HSET product:555 stock "150"
```
- Check stock:
```js
  HGET product:555 stock  # "150"
```

3. **Session Tracking**:
- On login:
```js
  HSET session:abc123 userId "42" expiresAt "1622800000"
```
- If user performs action, update expiry:
```js
  HSET session:abc123 expiresAt "1622803600"
```

---

## **5. Redis Ordered Sets (Sorted Sets / Priority Queue)**

### **What is it?**
- Redis Sorted Set (aka ZSET) unique elements store karta hai, har element ke saath ek score attach karta hai. 
- Elements sorted order me score ke basis pe rakhe jate.

### **Why is it used?**
- Jab aapko ranking/priority chahiye. Score ke hisab se items ko automatically sort karta hai.
- Useful leaderboards, job scheduling with priorities, rate-limiting buckets.

### **Where is it used?**
- Leaderboards - Game player scores.
- Priority Queues - Jobs with priority, scheduled tasks (timestamp as score).
- Top‐N Queries - Top trending items (views, likes).

### **When is it used?**
- Jab ek set of items ko score-based order me maintain karna ho.
- Jab aapko fast range queries chahiye (e.g., "Top 10", "Between score X and Y").

### **Benefit of Using it**
- Automatic Sorting: ZADD me score provide karo; insert ke saath hi sorted position mil jati.
- Range Queries: ZRANGE / ZREVRANGE by index, ZRANGEBYSCORE by score.
- Atomic Score Update: ZINCRBY.
- O(log N) insertion and retrieval.

### **How to use it?**

#### **Redis CLI Example:**
```js
# Leaderboard: add users with scores
ZADD leaderboard 1500 "alice"
ZADD leaderboard 2000 "bob"  # bob ka score ab highest

# Get top 3 (highest scores)
ZREVRANGE leaderboard 0 2 WITHSCORES

# Increase score
ZINCRBY leaderboard 50 "alice"  

# Get rank (0-indexed, highest is last index if not reversed)
ZREVRANK leaderboard "alice"  

# Remove user
ZREM leaderboard "charlie"

# Range by score
ZRANGEBYSCORE leaderboard 1000 2000 WITHSCORES
```

#### Node.js (ioredis):
```javascript
await redis.zadd('leaderboard', 1500, 'alice', 2000, 'bob', 1200, 'charlie');

// Top 2 players
const top2 = await redis.zrevrange('leaderboard', 0, 1, 'WITHSCORES');
console.log(top2); // [ 'bob', '2000', 'alice', '1500' ]

// Increment score
await redis.zincrby('leaderboard', 100, 'alice');

// Get rank of Alice (0-indexed, highest first)
const rank = await redis.zrevrank('leaderboard', 'alice');
console.log('Alice rank:', rank);
```

### Example Situations

1. **Game Leaderboard**:
- After each match:
```redis
ZADD leaderboard 3500 "userId:42"
```
- To show top 10 players on home page:
```redis
ZREVRANGE leaderboard 0 9 WITHSCORES
```

2. **Priority Job Queue**:
- Aap jobs ko scheduled time (timestamp) ke as-score use karke queue me daal sakte:
```redis
ZADD scheduled_jobs 1622800000 "{ \"jobId\": 501, \"task\": \"generate-report\" }"
```
- Worker polls current time:
```redis
ZRANGEBYSCORE scheduled_jobs 0 <now>  # jobs due till now
```
- Process each job, fir remove:
```redis
ZREM scheduled_jobs "{ ... }"
```

3. **Trending Topics**:
- Har vote ke saath:
```redis
ZINCRBY trending_topics 1 "redis"
```
- Get topics jinka score > X:
```redis
ZRANGEBYSCORE trending_topics X +inf
```

---

## **6. Redis Streams**

### **What is it?**

Redis Stream ek append‐only log data structure hai, jisme aap timestamped messages push karte aur consumer groups create karke un messages ko reliable tareeke se read kar sakte ho. Ye Kafka‐jaise "message streaming" model provide karta.

### **Why is it used?**
- Durable Messaging: Messages jab tak XACK nahi hota, stream me stored rahte.
- Consumer Groups: Multiple consumers ek group me parallel me messages process kar sakte; each message ek baar assign hoga.
- Replay & Offset Management: Agar consumer kabhi down ho jaye to aap offset se piche se read continue kar sakte.

### **Where is it used?**
- Event Sourcing: Event-driven systems, activity logs.
- Reliable Pub/Sub: Agar guaranteed delivery chahiye (Redis Pub/Sub me offline ho to data lose hota).
- Replayable Logs: Metrics collection, audit logs.

### **When is it used?**
- Jab aapko "event log" chahiye with persistence + acknowledgment.
- Jab multiple workers ko equally messages distribute karne ho without duplication.

### **Benefit of Using it**
- Persistence (AOF/RDB): Stream data disk pe bhi persist ho sakta hai (agar Redis persistence mode on hai).
- Consumer Groups:
  - XGROUP CREATE <stream> <group> $
  - Then XREADGROUP GROUP <group> <consumer> COUNT 1 STREAMS <stream> >
  - Consumer processes message, XACK <stream> <group> <messageId>.
- Message IDs: Each message ko unique ID milta—1672800000000-0 (timestamp-based).
- Backlog Management: XPENDING check karke pending messages count dekho.
- Trimming: XTRIM <stream> MAXLEN ~ 1000 se stream ko bounded length rakho.

### **How to use it?**

#### **Redis CLI Example:**
```js
# Producer: add message
XADD mystream * userId 42 action "login" timestamp 1622800000

# Create a consumer group (if not exists)
XGROUP CREATE mystream mygroup $ MKSTREAM

# Consumer: read next message (only ones > last read)
XREADGROUP GROUP mygroup consumer1 COUNT 1 STREAMS mystream >

# Suppose that returns:
# 1) mystream
# 2) 1622800000000-0 [ userId "42" action "login" timestamp "1622800000" ]

# After processing:
XACK mystream mygroup 1622800000000-0

# Check pending messages
XPENDING mystream mygroup

# Trim stream to last 1000 entries
XTRIM mystream MAXLEN ~ 1000
```

#### Node.js (ioredis):
```javascript
// Producer
await redis.xadd('mystream', '*', 'userId', '42', 'action', 'login', 'timestamp', Date.now());

// Consumer
async function consume() {
  // First time, create group if not exists
  try {
    await redis.xgroup('CREATE', 'mystream', 'mygroup', '$', 'MKSTREAM');
  } catch(e) {
    // ignore "BUSYGROUP" error if group already exists
  }
  while (true) {
    const entries = await redis.xreadgroup(
      'GROUP',
      'mygroup',
      'consumer1',
      'COUNT',
      1,
      'BLOCK',
      5000,  // 5 seconds block
      'STREAMS',
      'mystream',
      '>'
    );
    if (entries) {
      const [ , messages ] = entries[0];
      for (const [id, fields] of messages) {
        // fields is array [ 'userId', '42', 'action', 'login', 'timestamp', '1622800000' ]
        const data = {};
        for (let i = 0; i < fields.length; i += 2) {
          data[fields[i]] = fields[i+1];
        }
        // Process data
        console.log('Processing event:', id, data);
        // Acknowledge
        await redis.xack('mystream', 'mygroup', id);
      }
    }
  }
}
consume();
```

### Example Situations

1. **User Activity Log**:
- Sab user actions stream me daalo:
```redis
XADD user_activity * userId 100 action "view_problem" problemId 5
```
- Multiple analytics workers consumer group se read kar ke process kare:
```redis
XREADGROUP GROUP analytics_grp worker1 COUNT 10 STREAMS user_activity >
```

2. **Order Processing Pipeline (E-Commerce)**:
- User places order:
```redis
XADD orders_stream * orderId 901 userId 42 total 1500
```
- Inventory service, Billing service, Notification service sab apne own consumer group rakhte:
```redis
XGROUP CREATE orders_stream inventory 0
XGROUP CREATE orders_stream billing 0
XGROUP CREATE orders_stream notification 0
```
- Har service independently process kare aur XACK kare apne group me, taaki service-specific backlogs track ho.

3. **Chat Message Persistence**:
- Chat app:
```redis
XADD chat:room:321 * user "alice" text "Hello!"
```
- Chat servers in group "chat_consumers" consume reliably:
```redis
XREADGROUP GROUP chat_consumers serverA COUNT 1 STREAMS chat:room:321 >
```

---

## **7. Redis Geospatial Data**

### **What is it?**

Redis Geospatial features data types and commands jo latitude/longitude points store aur query karne me help karte—jaise GEOADD, GEORADIUS, GEOPOS, GEODIST.

### **Why is it used?**
- Location‐based queries fast solve karne ke liye (nearby search).
- Built‐in radius queries without writing complex Haversine formulas in app code.

### **Where is it used?**
- Ride‐Hailing / Delivery Apps: Find nearest drivers/restaurants.
- Social Apps: Nearby users, events.
- Geo‐Tagged Content: Photos, check-ins.

### **When is it used?**
- Jab aapko "points of interest" within X km of a given location quickly chahiye.
- Jab location updates frequently aur queries real-time honi chahiye.

### **Benefit of Using it**
- Automatic Geohash Indexing: Redis internally geohashes points into sorted sets—O(log N) queries.
- Radius & Bounding Box Queries: GEORADIUS, GEOSEARCH sab provide karte.
- Distance Calculation: GEODIST key member1 member2 unit returns km/m/mi.

### **How to use it?**

#### **Redis CLI Example:**
```js
# Add locations (longitude, latitude)
GEOADD cafes 77.5946 12.9716 "CafeA"
GEOADD cafes 77.6033 12.9791 "CafeB"
GEOADD cafes 77.5800 13.0000 "CafeC"

# Get position of a member
GEOPOS cafes "CafeA"    # returns [ [ "77.5946", "12.9716" ] ]

# Get distance between two members (in km)
GEODIST cafes "CafeA" "CafeB" km

# Find all cafes within 5 km radius of given (lon,lat)
GEORADIUS cafes 77.5900 12.9700 5 km WITHDIST WITHCOORD COUNT 10

# New command style (Redis 6.2+): 
GEOSEARCH cafes 
  FROMLONLAT 77.5900 12.9700 
  BYRADIUS 5 km 
  WITHDIST 
  WITHCOORD 
  COUNT 10
```

#### Node.js (ioredis):
```javascript
// Producer: add drivers with their last known location
await redis.geoadd('drivers', 77.5946, 12.9716, 'driver:101');
await redis.geoadd('drivers', 77.6000, 12.9700, 'driver:102');

// Query: nearest 5 drivers within 10 km of user's location
const nearby = await redis.georadius('drivers', 77.5900, 12.9700, 10, 'km', 'WITHDIST', 'WITHCOORD', 'COUNT', 5);
console.log(nearby);
/* returns:
  [
    [ 'driver:101', '0.5', ['77.5946', '12.9716'] ],
    [ 'driver:102', '1.2', ['77.6000', '12.9700'] ]
  ]
*/
```

### Example Situations

1. **Food Delivery App**:
- Restaurants geolocations store karna:
```redis
GEOADD restaurants 77.5946 12.9716 "RestoA"
GEOADD restaurants 77.6100 12.9650 "RestoB"
```
- Jab user (77.5900, 12.9700) product search kare:
```redis
GEORADIUS restaurants 77.5900 12.9700 3 km WITHDIST WITHCOORD COUNT 10
```

2. **Ride Hailing (Nearest Drivers)**:
- Drivers location update:
```redis
GEOADD drivers 77.6000 12.9800 "driver:500"
GEOADD drivers 77.6200 12.9900 "driver:501"
```
- Passenger opens app, find nearest 3 drivers within 5km:
```redis
GEOSEARCH drivers 
  FROMLONLAT 77.5900 12.9700 
  BYRADIUS 5 km 
  WITHDIST 
  WITHCOORD 
  COUNT 3
```

3. **Event App (Nearby Events)**:
- Event locations:
```redis
GEOADD events 77.5800 12.9600 "music_fest"
GEOADD events 77.6100 12.9800 "food_fair"
```
- User search events within 10km:
```redis
GEORADIUS events 77.5900 12.9700 10 km
```

---

## **8. Other Data Types in Redis**

Redis Strings, Lists, Sets, Hashes, ZSets, Streams, Geospatial ke alawa kuch aur niche data types aur features bhee hain:

### **a. Bitmaps**
- **What is it?**
  - Single Redis String ke andar bits (0/1) treat karte hain.
  - Commands: SETBIT key offset value, GETBIT key offset, BITCOUNT key [start end].
- **Use Case:**
  - Daily Active Users: Each user ko ek unique index assign karo. Agar user login ho to SETBIT dau:2025-06-03 <userIndex> 1.
  - Analytics: Count unique bit‐flags.
- **Benefit:**
  - Memory‐efficient: 1 bit per user record.
  - BITCOUNT O(N/8) i.e. fast count.

### **b. HyperLogLog**
- **What is it?**
  - Probabilistic data structure for approximate distinct counting.
  - Commands: PFADD, PFCOUNT, PFMERGE.
- **Use Case:**
  - High‐traffic website me unique visitor count per day.
  - Log analytics jahan exact count nahi important, estimated ±0.81% error acceptable.
- **Benefit:**
  - Fixed memory ~ 12 KB per HyperLogLog, chahe aap millions of unique elements add karo.

### **c. Bitfields**
- **What is it?**
  - Multi-bit integer storage inside a string. Commands: BITFIELD key GET u4 0, BITFIELD key INCRBY i5 8 1.
- **Use Case:**
  - Compact storage of small integer fields, jaise multiple counters in ek string.
  - IoT data, sensor readings.

### **d. Bloom Filters (Module Extension)**
- **What is it?**
  - Probabilistic set membership data structure with false positives possible, false negatives nahi.
  - Redis module: BF.ADD, BF.EXISTS.
- **Use Case:**
  - URL blacklist, email spam filter, caching layer to check existence before going to DB.
- **Benefit:**
  - Extremely memory‐efficient for large sets.

### **e. Redis JSON (Module)**
- **What is it?**
  - Redis module jo JSON documents store + manipulate karne ke liye commands deta: JSON.SET, JSON.GET, JSON.ARRAPPEND.
- **Use Case:**
  - When you want structured JSON storage with partial updates.
- **Benefit:**
  - Query / path ops directly inside Redis without pulling entire JSON to application.

### **f. RedisTimeSeries (Module)**
- **What is it?**
  - Module optimized for time‐series data, with commands like TS.CREATE, TS.ADD, TS.RANGE.
- **Use Case:**
  - Metrics, real‐time analytics, IoT sensor streams.
- **Benefit:**
  - Compression, downsampling, aggregation built‐in.

---

## **9. Pub/Sub in Redis**

### **What is it?**

Redis Publish/Subscribe (Pub/Sub) ek messaging pattern hai jahan aap PUBLISH <channel> <message> ke through message broadcast kar sakte, aur clients SUBSCRIBE <channel> karke us message ko real‐time receive kar sakte.

### **Why is it used?**
- Real‐time Notifications: Multiple subscribers turant update paate.
- Decoupled Architecture: Publisher ko pata nahi hota subscriber kaun hai.

### **Where is it used?**
- Chat Systems: Chat rooms ‒ har message sab clients tak phailana.
- Live Updates: Stock ticker updates, sports scores.
- Invalidating Cache: Multiple app servers me jab cache stale ho, ek node PUBLISH karega, baaki nodes subscribe karke cache clear kar lenge.

### **When is it used?**
- Jab aapko best-effort real-time messaging chahiye—"agar subscriber off ho to message miss karna acceptable hai."
- Jab ek message sab interested clients ko fan‐out karna ho.

### **Benefit of Using it**
- Low Latency: In-memory operation, sub‐millisecond delivery.
- Simplicity: Simple API (SUBSCRIBE, PUBLISH, PSUBSCRIBE).
- Fan‐out: Ek hi message multiple subscribers ko send ho jata.

### **How to use it?**

#### **Redis CLI Example:**
```js
# In terminal A (subscriber)
redis-cli
SUBSCRIBE channel:100

# In terminal B (publisher)
redis-cli
PUBLISH channel:100 "Hello User 100!"
```

Terminal A me aap dekhenge:
```
1) "message"
2) "channel:100"
3) "Hello User 100!"
```

#### Node.js (ioredis):
```javascript
const Redis = require('ioredis');
const publisher = new Redis();
const subscriber = new Redis();

// Subscriber
subscriber.subscribe('results:42', (err, count) => {
  // subscribed
});
subscriber.on('message', (channel, message) => {
  console.log('Received on', channel, message);
  // e.g. send via WebSocket to the browser
});

// Publisher (e.g., after job done)
await publisher.publish('results:42', JSON.stringify({
  user: 42, problem: 5, status: 'AC'
}));
```

### Example Situations

1. **Chat Room A → All Clients B, C, D**:
- In server code, clients B, C, D sab SUBSCRIBE chat:room:5.
- Jab A send karta:
```redis
PUBLISH chat:room:5 "{ \"from\": \"A\", \"text\": \"Hi sab!\" }"
```
- Sab subscribers turant message receive karenge.

2. **Cache Invalidation Across Cluster**:
- App server 1 me cache entry stale ho gayi:
```redis
PUBLISH cache:invalidate "user:100"
```
- Sab app servers subscribe subscribe cache:invalidate kar rakhte.
- On receive, sab servers DEL cache:user:100, taaki next request naya data fetch kare DB se.

3. **Document Collaboration**:
- Real-time collaborative editor:
```redis
PUBLISH doc:200 "{ \"user\": \"alice\", \"change\": "insert 'Hello' at pos 5" }"
```
- Sab editor instances subscribe doc:200, changes reflect sabko.

---

## **10. Speeding Up Node.js Server with Redis**

### **What is it?**

Node.js server Redis use karke caching layer, session store, rate-limiter, distributed lock, etc. implement karta hai.

### **Why is it used?**
- Reduce Latency & DB Load: Frequently accessed data Redis me cache kar ke expensive DB queries avoid karo.
- Session Management: Express-session me Redis store use karo—session in‐memory across Node cluster share ho jaye.
- Rate Limiting: Count requests per IP quickly.
- Distributed Locking: Critical sections me single‐instance execution ensure karo (SETNX).

### **Where is it used?**
- Caching: DB query results, HTML templates, API responses.
- Session Store: express-session, connect-redis.
- Rate Limiting: APIs per minute/hour limit.
- Locking: Prevent double‐spend, concurrent updates.

### **When is it used?**
- Jab aapke Node.js endpoints slow ho rahe ho heavy DB queries ke chakkar me.
- Jab aap multiple Node instances hain aur shared session chahiye.
- Jab concurrency issues solve karne ho across instances.

### **Benefit of Using it**
- Non‐Blocking Caching: Redis native async driver, Node event loop block nahi hota.
- Scalable Sessions: Single Redis store behind many Node servers, sessions consistent.
- Atomic Rate Limiting: Using INCR + EXPIRE inside Redis ensures atomic count.
- Locks: SET key value NX PX 30000 for 30s lock.

### **How to use it?**

1. **Caching Example**:
```javascript
const Redis = require('ioredis');
const redis = new Redis();

app.get('/user/:id', async (req, res) => {
  const userId = req.params.id;
  // 1. Check cache
  const cacheKey = `user:${userId}`;
  const cached = await redis.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  // 2. If not in cache, fetch from DB
  const user = await db.getUserById(userId);
  // 3. Store in cache with TTL 60s
  await redis.setex(cacheKey, 60, JSON.stringify(user));
  return res.json(user);
});
```

2. **Session Store (Express‐session + Connect‐redis)**:
```javascript
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = new Redis();

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'someSecret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 3600000 }
}));
```

3. **Rate Limiter**:
```javascript
app.use(async (req, res, next) => {
  const ip = req.ip;
  const key = `rl:${ip}`;
  const requests = await redis.incr(key);
  if (requests === 1) {
    // First request, set expire for window e.g. 60s
    await redis.expire(key, 60);
  }
  if (requests > 100) {
    return res.status(429).send('Too Many Requests');
  }
  next();
});
```

4. **Distributed Lock**:
```javascript
async function withLock(lockKey, fn) {
  const lockValue = Date.now() + Math.random().toString(); 
  // Try acquiring lock
  const acquired = await redis.set(lockKey, lockValue, 'NX', 'PX', 10000); // 10s TTL
  if (!acquired) {
    throw new Error('Could not acquire lock');
  }
  try {
    return await fn();
  } finally {
    // Release lock only if it's still ours
    const current = await redis.get(lockKey);
    if (current === lockValue) {
      await redis.del(lockKey);
    }
  }
}

// Usage
app.post('/transfer', async (req, res) => {
  try {
    await withLock('account:42:lock', async () => {
      // critical section: read balance, deduct, update DB
    });
    res.send('Transfer successful');
  } catch(e) {
    res.status(423).send('Resource locked, try again');
  }
});
```

### Example Situations

1. **Profile Page Caching**:
- User profile ka data bahut frequent request pe la rahe ho.
- Redis me store karke 90% requests DB avoid hogi.

2. **Shopping Cart Session**:
- User cart items store as Redis Hash:
```javascript
await redis.hset(`cart:${userId}`, 'item:100', 2, 'item:200', 1);
```
- Next instance me bhi same cart accessible.

3. **API Rate Limiting (explained above)**
- Prevent abuse by limiting 100 requests/min per IP.

4. **Prevent Double Spend**:
- Jab transaction process karte ho, lock user account for few seconds to avoid race conditions.

---

## **Wrap Up**

- Redis Strings: Basic key–value with TTL & atomic counters.
- Redis Lists: Stacks & Queues (LPUSH, RPUSH, LPOP, RPOP, BLPOP).
- Redis Sets: Unique collections with set operations (SADD, SREM, SMEMBERS).
- Redis HashMaps: Field–value maps (HMSET, HGETALL, HINCRBY).
- Redis Sorted Sets: Score‐based sorted elements (ZADD, ZRANGE, ZREVRANGE).
- Redis Streams: Reliable append‐only event logs with consumer groups (XADD, XREADGROUP, XACK).
- Redis Geospatial: Geo indexing + radius queries (GEOADD, GEORADIUS, GEOPOS).
- Other Data Types: Bitmaps, HyperLogLog, Bitfields, Modules (BloomFilter, RedisJSON, TimeSeries).
- Redis Pub/Sub: Real‐time messaging (PUBLISH, SUBSCRIBE).
- Speeding Up Node.js: Caching, session store, rate limits, distributed locks.

Har ek data type aur feature ka apna specialized use case hai. Aap inhe mix karke ek high‐performance, scalable backend bana sakte ho—jo, jaise LeetCode example me, submission queue (Lists) + real‐time notifications (Pub/Sub) + session caching (Hashes/Strings) + leaderboard (Sorted Sets) etc. sab handle karta hai.

Ab jab in sab concepts clear hain, aap chaaho to install Redis locally aur Redis CLI / ioredis se commands try karke khud practice karo. Happy learning! 