/*
Conditional classes with clsx
Last updated May 2023

You may have noticed so far that it's a bit of a pain to apply classes dynamically in React because you have to build the className string manually.

There are tiny libraries that help with that; the most popular ones are:

   1. classnames
   2. clsx

Both libraries are tiny; you can use whichever one you want. In this course, we'll use clsx because it's a bit more modern.
Installation

To install clsx, run:

npm install clsx

Import Cost

The clsx package is approximately 300 Bytes only (less than 1KB), so you don't have to worry about its size when importing it into your project.
Importing clsx

You can use clsx in React Tutorial in any challenge by importing, as we've already installed it for you.

To import clsx, you have to import clsx from the package name:

import clsx from "clsx";

Conditional classes

Now that we've imported clsx, let's see how it can simplify conditional classes:
*/
import clsx from "clsx";

const result = clsx({
    "link": true,
    "link-primary": true
});

console.log(result); //"link link-primary"
/*
So we gave clsx an object containing:

    link as a key, with true as a value
    and link-primary as a key, with true as a value and it returned a string containing both classes separated by space.

Let's take another example:
*/
import clsx from "clsx";

const result = clsx({
    "link": true,
    "link-primary": false
});

console.log(result); //"link"
/*
That's essentially the same thing as the previous example. Still, this time we've said that link-primary is false, so the resulting string did not include link-primary.

Instead of hardcoding true or false, what if we replace those with a variable or result of an expression? For example:
*/
import clsx from "clsx";

function MyComponent(props) {
    const className = clsx({
        "title": props.loggedIn
    });

    return <h1 className={className}></h1>
}

const example1 = <MyComponent loggedIn={true} />; // className="title"
const example2 = <MyComponent loggedIn={false} />; // className=""
/*
In the code above, props.loggedIn is a boolean. We use that boolean value to conditionally add/remove the title class:

    when props.loggedIn is true, clsx receives {"title": true} and in that case outputs the string "title".
    On the other hand, when props.loggedIn is false, clsx receives {"title": false} and in that case outputs an empty string "".

So clsx allows us to have conditional classes without having to write if conditions. Here's how the above example would look with if conditions and without clsx:
*/
function MyComponent(props) {
    let className = "";
    if (props.loggedIn) {
        className = "title";
    }

    return <h1 className={className}></h1>;
}
/*
You can also combine these concepts in a way that lets you always have a specific class, while conditionally applying another one:
*/
import clsx from "clsx";

function MyComponent(props) {
    const className = clsx({
        "text": true, // this class is always added
        "title": props.loggedIn
    });

    return <h1 className={className}></h1>
}

const example1 = <MyComponent loggedIn={true} />; // className="text title"
const example2 = <MyComponent loggedIn={false} />; // className="text"
/*
Notice how the class text is always added, whereas the class title is only conditionally added, depending on the boolean value of props.loggedIn.

Recap

    1. You can install clsx with npm install clsx
    2. clsx is a tiny utility for constructing className strings conditionally.
    3. clsx({"your-class-name": booleanValue}) is the generic syntax for clsx.
*/
