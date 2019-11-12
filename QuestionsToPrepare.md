# Interview Questions

## Introduce your self

Hi, My name is Yueleng, and I graduated from University of Windsor in statistics major two years ago. I started to do my job as a web developer in Markham in a start up company for 1 and half years. Throughout the period of current job, what we did as a team is to  create a whole solution for building a chatbot.

## What is your current job mainly doing? / Can you tell me your chatbot project.

The chatbot acturally includes three webpages. One for visitor's usage. That is actually an iframe located in the right bottom of our clients webpage. The other two web pages are operator's console and administrator's console. Operator console is mostly used by our clinets' employees. They can use the console to talk to the random visitors who need help, while we assume most of the conversations happend between visitors and our NLP server which means that operators are not involved. When visitors feel that NLP server does not give satisfied answer, he can initialize a request to talk to live operator, in this case, that particular conversation will stand out in order to get attention from one of the online operators. The administor's console is a place you can build up all the intentions with answers, in other words, building up the chatbot from scratch. Our client can build up a tree sturture of questions and answers to serve their customers, and NLP server's role is to analyse the visitor's question to match predefined quesiton, and give predefiend answer.

## What is your contribution to this project.

I joined our team as a junior develoepr. In first couple of months my job is fairly easy: mostly deal with HTML and CSS part to make our products / interfaces accessible to disables. You know, some of our cusotmers are government institutions and they have accessibility requirements. Later on, I started to implement business logics of our product, by using jQuery and javascript to manipulate DOM and realise the product features. Through that way I developed my skills in javascipt and jQuery. I think jQuery is a very good library, their API design is very neat and the way it queries the dom is natural. Although it is seldomly used in modern web development. Then, I contributed in collabration with developers of backend. Our backend stack is PHP + MySql. I created a bunch of new API(s) for front end to call through AJAX. 

One of the specific tasks I did was to for example add a search bar in previous ended converstation, like what you see in gmail search bar. First I created the UI in the top middle of the webpage (with placeholder in search bar say search conversation sessions). Secondly, I provided the search bar with two options, blur search mode and specific search mode. In specific search mode, you are poped up with a modal to fill in a form, while in blur search mode, you seperate every keyword by space. Thirdly, I started to write php side code to handle the data sent from the front end, handle means some validation work to ensure search query is valid and then query from MySql database. I have beening doing front-end design and front end request, backend response, front-end represent the webpage with received data for quitea while. 

In recent months, as our product grow mature, we decided to integrate our product with other platforms for example LiveChat. I say integrate, that is to use other platforms' customers' interface. Let say LiveChat, LiveChat's visitor's interface is also an iframe you added in the bottum right of any webpage. So any LiveChat user can install our chatbot from LiveChat MarketPlace, and after installing our chatbot, the message could be forwarded to our server and replied by our NLP server and send back to LiveChat user's customer. In that way, we greatly helped them to handle a lot more customers at the same time and help increase their productivity enoumously. My worked focused on write a node js server adapter handle messages came from all kinds of platforms and forward the message to PHP server. The adapter server mainly deals with message validation, request handling and conversation sessions control. Through Developing the adapter, I gradually learnt node js with some popular packages like EXPRESS.

## You mentioned online courses in your resume, what did you learn from this courses?

## Why did you become a web developer after graduating from master of statistics?

Well this is a good question. As a developer you actually is a creator, while as a statistician, most of time your are a vaildator. I dont think that one is inferior of the other, but I do have a passion on creating something. As a developer, you aimed at achieve your idea by your self or with your team, which I think is very cool. What's more important, I don't think the degree you hold confines yourself and I also do think the stats and math training of your background could help you become a better prgrammer.

## What do you expect yourself in 5 years.

Well I see right now I would like to explore some of the paths in the future or I'm actually doing right now. One is to strengthen myself in tech skills, expecially in system design and algorithms. These two things are of vital importance to become a seriously developer. And The other thing I think equally important is to communicate between developers in your team and product manager. So back to the question, I see my self as an accountable senior develoepr both in solid techs and effective communication.

## What would you usually do when encounter a problem at work?


## What design mode are you familiar with?

## What do you care when designing API(s)?

* Platform independence

* Service evolution

Main design priciples of RESTful APIs using HTTP: 
    1. REST APIs are designed around resources, which are any kind of object, data, or service that can be accessed by the client.
    2. A resource has an identifier, which is a URI that uniquely identifies that resource. For example, the URI for a particular customer order might be: https://adventure-works.com/orders/1
    3. Clients interact with a service by exchanging representations of resources. Many web APIs use JSON as the exchange format.
    4. REST APIs use a uniform interface, which helps to decouple the client and service implementations. For REST APIs built on HTTP, the uniform interface includes using standard HTTP verbs to perform operations on resources. The most common operations are GET, POST, PUT, PATCH, and DELETE.
    5. REST APIs use a stateless request model. HTTP requests should be independent and may occur in any order, so keeping transient state information between requests is not feasible. This constraint enables web services to be highly scalable, because there is no need to retain any affinity between clients and specific servers. Any server can handle any request from any client. That said, other factors can limit scalability.
    5. 

## Why not indexing every column for a table?

## Do you know anthentication?

## Do you know Database normalization?

* Reference: [Database Normalization (Explained in Simple English)](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)
* Insert Anomaly, Deletion Anomaly, Update Anomaly, Deletion Anomaly

* First Normal Form - The information is stored in a relational table with each column containing atomic values.

* Second Normal Form - The table is in first normal form and all the columns depend table's primary key. (Each table serve as a single purpose)

* Third Normal Form - The table is in second normal form and all of its columns are not transitively dependent on the primary key.
