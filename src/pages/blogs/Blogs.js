import React from "react";
import { Link } from "react-router-dom";
import useTitleHelmet from "../../hooks/TitleHelmet";

const Blogs = () => {
  useTitleHelmet("blogs");
  return (
    <div className="text-white">
      <div className="bg-gray-100 dark:bg-slate-800 dark:text-white min-h-screen text-gray-300 py-10">
        {/* blog One  */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-[#120E43] dark:bg-blue-900">
          <img
            src="https://miro.medium.com/max/1012/1*Z5SpsmDvk67BIImwHvh_cQ.png"
            alt="imageJS"
            className="h-[300px] w-full mb-5"
          />
          <div className="blog-body px-10 pt-1 pb-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Jan 22, 2022</span>
            </div>
            <div className="mt-3">
              <Link to="/#" className="text-2xl font-bold hover:underline">
                What are the Difference between SQL and NoSQL Database?
              </Link>
              <p className="mt-2">
                When it comes to choosing a database the biggest decisions is
                picking a relational (SQL) or non-relational (NoSQL) data
                structure. While both the databases are viable options still
                there are certain key differences between the two that users
                must keep in mind when making a decision.
              </p>
              <h3 className="font-bold text-md">The Main Differences: </h3>
              <h3 className="font-bold text-md underline">1. Type</h3>
              <p>
                SQL databases are primarily called as Relational Databases
                (RDBMS); whereas NoSQL database are primarily called as
                non-relational or distributed database.
              </p>
              <h3 className="font-bold text-md underline">2. Language </h3>
              <p>
                SQL databases defines and manipulates data based structured
                query language (SQL). Seeing from a side this language is
                extremely powerful. SQL is one of the most versatile and
                widely-used options available which makes it a safe choice
                especially for great complex queries. But from other side it can
                be restrictive
              </p>
              <h3 className="font-bold text-md underline">3. Scalability </h3>
              <p>
                In almost all situations SQL databases are vertically scalable.
                This means that you can increase the load on a single server by
                increasing things like RAM, CPU or SSD. But on the other hand
                NoSQL databases are horizontally scalable
              </p>
              <h3 className="font-bold text-md underline">4. Structure </h3>
              <p>
                SQL databases are table-based on the other hand NoSQL databases
                are either key-value pairs, document-based, graph databases or
                wide-column stores. This makes relational SQL databases a better
                option for applications that require multi-row transactions such
                as an accounting system or for legacy systems that were built
                for a relational structure.
              </p>
              <h3 className="font-bold text-md underline">
                5. Property followed{" "}
              </h3>
              <p>
                SQL databases follow ACID properties (Atomicity, Consistency,
                Isolation and Durability) whereas the NoSQL database follows the
                Brewers CAP theorem (Consistency, Availability and Partition
                tolerance).{" "}
              </p>
              <h3 className="font-bold text-md underline">6. Support </h3>
              <p>
                Great support is available for all SQL database from their
                vendors. Also a lot of independent consultations are there who
                can help you with SQL database for a very large scale
                deployments but for some NoSQL database you still have to rely
                on community support and only limited outside experts are
                available for setting up and deploying your large scale NoSQL
                deployments. Great support is available for all SQL database
                from their vendors. Also a lot of independent consultations are
                there who can help you with SQL database for a very large scale
                deployments but for some NoSQL database you still have to rely
                on community support and only limited outside experts are
                available for setting up and deploying your large scale NoSQL
                deployments.{" "}
              </p>
            </div>
            <div className="flex items-center justify-end mt-4">
              <div>
                <Link to="/#" className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-300 dark:text-white">
                    Maruf Chowdhury
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Two  */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-[#120E43] dark:bg-blue-900">
          <img
            src="https://camo.githubusercontent.com/2d1bdeb0c9b88c2d58ddd74aa18c790b323c9cdbf98473d5673e0caf32ff8a6b/68747470733a2f2f6f63746f626572636d732e636f6d2f73746f726167652f6170702f75706c6f6164732f7075626c69632f3538622f3861362f3062352f353862386136306235303133333733373937383530312e706e67"
            alt="imageJS"
            className="h-[300px] w-full mb-5"
          />
          <div className="blog-body px-10 pt-1 pb-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Jun 28, 2022</span>
            </div>
            <div className="mt-3">
              <Link to="/#" className="text-2xl font-bold hover:underline">
                What is JWT, and how does it work?
              </Link>
              <h1 className="mt-2 font-bold text-md">Json Web Token (JWT)</h1>
              <p>
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </p>
              <h1 className="mt-2 font-bold text-md">How It Works?</h1>
              <p>
                fer from other web tokens in that they contain a set of claims.
                Claims are used to transmit information between two parties.
                What these claims are depends on the use case at hand. For
                example, a claim may assert who issued the token, how long it is
                valid for, or what permissions the client has been granted. A
                JWT is a string made up of three parts, separated by dots (.),
                and serialized using base64. In the most common serialization
                format, compact serialization, the JWT looks something like
                this: xxxxx.yyyyy.zzzzz. 
                <br />Once decoded, you will get two JSON
                strings: 
                <br />The header and the payload. The signature. <br />
                The JOSE(JSON Object Signing and Encryption) header contains the type of
                token — JWT in this case — and the signing algorithm. The
                payload contains the claims. This is displayed as a JSON string,
                usually containing no more than a dozen fields to keep the JWT
                compact. This information is typically used by the server to
                verify that the user has permission to perform the action they
                are requesting.
              </p>
            </div>
            <div className="flex items-center justify-end mt-4">
              <div>
                <Link to="/#" className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-300 dark:text-white">
                    Maruf Chowdhury
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Three  */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-[#120E43] dark:bg-blue-900">
          <img
            src="https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp"
            alt="imageJS"
            className="h-[300px] w-full mb-5"
          />
          <div className="blog-body px-10 pt-1 pb-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Jun 1, 2020</span>
            </div>
            <div className="mt-3">
              <Link to="/#" className="text-2xl font-bold hover:underline">
              What are the difference between javascript and NodeJS?
              </Link>
              <p className="mt-2">
              1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
              <br />As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />
              2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />
              3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />
              4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. <br />
              Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive. <br />
              5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input. <br />
              Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
              </p>
            </div>
            <div className="flex items-center justify-end mt-4">
              <div>
                <Link to="/#" className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-300 dark:text-white">
                    Maruf Chowdhury
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Four */}
        <div className="container overflow-hidden max-w-4xl my-10 mx-auto rounded-lg shadow-sm bg-[#120E43] dark:bg-blue-900">
          <img
            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1"
            alt="imageJS"
            className="h-[300px] w-full mb-5"
          />
          <div className="blog-body px-10 pt-1 pb-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Jun, 2022</span>
            </div>
            <div className="mt-3">
              <Link to="/#" className="text-2xl font-bold hover:underline">
              How does NodeJS handle multiple requests at the same time?
              </Link>
              <p className="mt-2">
              We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br />
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />
              If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
              </p>
            </div>
            <div className="flex items-center justify-end mt-4">
              <div>
                <Link to="/#" className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                  />
                  <span className="hover:underline text-gray-300 dark:text-white">
                    Maruf Chowdhury
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
