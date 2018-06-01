import React from "react";
import Contiamo from "./ContiamoLogo";
import PraiseQRCode from "./PraiseQRCode";

export default [
  {
    title: "👋🏾"
  },
  {
    title: "Tejas",
    subtitle: (
      <React.Fragment>
        Like <em>&ldquo;Contagious&rdquo;</em>.
      </React.Fragment>
    )
  },
  {
    title: (
      <React.Fragment>
        Frontend @ <Contiamo />
      </React.Fragment>
    )
  },
  {
    title: <React.Fragment>You Can't &rarr; You Can</React.Fragment>,
    subtitle: "The Welcoming Nature of JavaScript"
  },
  {
    title: (
      <em>
        &ldquo;JavaScript developers should just jump off a bridge and
        die.&rdquo;
      </em>
    ),
    subtitle: <React.Fragment>&mdash; Scala Engineer, 2017</React.Fragment>
  },
  {
    title: "2 Second History",
    subtitle: (
      <React.Fragment>
        Nothing &rarr; LiveScript &rarr; JavaScript &rarr; ES*
      </React.Fragment>
    )
  },
  { title: "Dynamic Types", subtitle: <code>const js = "friend";</code> },
  {
    title: "APIs",
    subtitle: (
      <React.Fragment>
        <p>
          <em>
            &ldquo;JavaScript is also coupled with The DOM, a horrendous API.
            There is a lot of confusion about where JavaScript ends and the DOM
            begins.&rdquo;
          </em>
        </p>
        &mdash; crockford.com
      </React.Fragment>
    )
  },
  { title: "Unopinionated", subtitle: "" },
  { title: <s>Unopinionated</s>, subtitle: "" },
  {
    title: "Functional",
    subtitle: (
      <ul>
        <li>First-Class Functions</li>
        <li>Recursion</li>
        <li>Everything* becomes an object or a function</li>
        <li>
          Purity <em>(By Convention)</em>
        </li>
        <li>
          Immutable <em>(By Convention)</em>
        </li>
      </ul>
    )
  },
  { title: "ASI;", subtitle: "" },
  {
    title: "My Journey with JS",
    subtitle: <React.Fragment>You Can't &rarr; You Can</React.Fragment>
  },
  {
    title: "Praise 🙌🏿",
    subtitle: (
      <div style={{ textAlign: "center" }}>
        <p>Voice-invoked Functions</p>
        <p>github.com / TejasQ / praise</p>
        <p>
          <PraiseQRCode />
        </p>
      </div>
    )
  }
];
