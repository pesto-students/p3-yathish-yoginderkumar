1.  When a user enters an URL in the browser, how does the browser fetch the desired result?
    Response : Let's start from the basics. So, when you type link to your website something like "https://facebook.com/profile". Now if we break down the link we can see 3 parts in this link.

        1. https:// :- HTTPS stands for HyperText Transfer Protocol Secure. This helps browser to create a connection with the server using Transport Layer Security or TLS. This TLS makes sure to transport data in an encrypted way.

        2. facebook.com :- Now this is a domain name for your particular website which is uniquely identifiable throughout the internet. Every domain has its unique static IP address which looks something like "255.0.3.12". Every device or anything over the internet gets this unique address even your website has one. Now its very hard to remember an IP address that's why DNS or Domain Name System came into existence. We won't go deep in this topic so moving on.

        3. /profile :- A website also follows or has a directory system which serves a particular meaning along with it. Like here "/profile" may show you your profile on "facebook.com" it makes sense also. Right?
        This part of the link is called path. Which takes you to a particular path on the website.

Now, we know what a link does or mean. Now what's the role of the browser here?
In simple words browser's main functionality is to look for the web resources which you requested and rendering those resources on you browser's window. The resource is usually an HTML documented which shows your data in a structured way but resource can also be an image, a PDF, a video etc.

Now let's look at some "High Level Components" of the browser.

    1. UI (User Interface): This includes URL bar (Where you enter your URL, forward/back button (To navigate back and forward in browser), bookmark menu or basically every part you see in your browser.

    2. Browser Engine : Browser engine takes care of actions which takes place between UI and rendering engine.

    3. Rendering Engine : This engine is responsible for displaying you, your requested resources. Rendering engine is the engine which parses your HTML and CSS specifications to display it to you on the browser (Of course).

    4. Networking : This space is responsible to make network calls so that it can go and fetch your requested resources from the World Wide Web.

    5. UI Backend : This is used for drawing widgets like combo boxes and windows which are not platform specific.

    6. JavaScript interpreter : Its quite understandable that it handles JS in your resources fetched.

    7. Data storage : This layers persists in your browser to store your data. It deals with localStorage, sessionStorage, cookies etc.

    It is important to note that browsers such as Chrome run multiple instances of the rendering engine. So it runs a different engine for a different tab.

Example :- ![alt Browser FLow](https://res.cloudinary.com/complex-coder/image/upload/v1655552742/Pesto/Browser_1_s1ptqa.png)

Let's discuss a bit more about rendering engine.
The Rendering Engine : So the responsibility of this rendering engine is quite simple which is to render stuff for you on your browser.
By default it renders HTML & XML content. It can also display PDF by using a PDF Viewer plugin and same goes for other type of content.
Some of the examples of rendering engine is Trident, Gecko, WebKit (By Safari), where google uses Blink.

    How does this rendering takes place in real time? Let's find out
    Rendering engine receives requested resource from networking layer. Here starts work of rendering engine.

    After receiving content rendering engine, parses HTML document and then converts that parsed elements into DOM nodes which is also known as the "Content Tree". This engine also parses the CSS data whether external or inline css in styled elements. This styling information from CSS and visual information from HTML will be used to create another tree called "render tree".

    After construction of this render tree it gets to a new process which is called "Layout" process. Which gives exact coordinates where it should appear on the screen.

    Now we know that "Parsers" are very crucial in the process of rendering engine. Let's discuss few of parsers.

    1. HTML Parsers : The job of the HTML parser is to parse the HTML markup into a parse tree or content tree.

    2. CSS Parsers : So, unlike HTML, CSS is a context free grammar and can be parsed using the types of parsers described in the introduction. In fact the CSS specification defines CSS lexical and syntax grammar.

    3. JavaScript Parsers :

Layout :-
When the render engine adds elements to the tree, it does not have a position and size. Calculating size and position's value is done under layout process. HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document.

Painting :-
In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.

Example :- ![alt Rendering Engine](https://res.cloudinary.com/complex-coder/image/upload/v1655552736/Pesto/Screenshot_2022-06-17_at_10.41.57_PM_pse14m.png)

Tree Construction : So when parser runs or gets even created DOM is also created. During the tree construction stage the DOM tree which the Document in its root will be modifies and elements will be added to it. Each node emitted by the tokenizer will be processed by the tree constructor.

Let's have an examples
Example :-

<html>
  <body>
    Hello world
  </body>
</html>

Explanation :- The input to tree construction is a sequence of tokens from tokenization stage. Receiving the "html" token will cause a move to the "before html" mode and a reprocessing of the token in that mode. This will cause creation of the HTMLHtmlElement element, which will be appended to the root Document object.

The state will be changed to "before head". The "body" token is then received. An HTMLHeadElement will be created implicitly although we don't have a "head" token and it will be added to the tree.

We now move to the "in head" mode and then to "after head". The body token is reprocessed, an HTMLBodyElement is created and inserted and the mode is transferred to "in body".

The character tokens of the "Hello world" string are now received. The first one will cause creation and insertion of a "Text" node and the other characters will be appended to that node.

The receiving of the body end token will cause a transfer to "after body" mode. We will now receive the html end tag which will move us to "after after body" mode. Receiving the end of file token will end the parsing.

Let's get an overview of "Script Processors"
Web works synchronously. Every dev wants their script to be parsed and executed immediately whenever <script> tag is introduced.
Parsing of the rest of the DOC stops or gets to a halt until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. It was the process for several years but there was an option know as "defer" attribute to script so it will not halt doc parsing because of the script processing. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

That's how our web browser works behind the scenes. We all know how web browser look for the resources over the internet in few seconds but this is also an interesting thing how quickly it displays our resources on the screen even though it does so much stuff under the hood.

Links helped :-

1. https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/
2. https://web.dev/howbrowserswork/
3. https://docs.automic.com/documentation/webhelp/english/AA/12.3/DOCU/12.3/Automic%20Automation%20Guides/Content/Script/Writing/Script_Processing_Order.htm
