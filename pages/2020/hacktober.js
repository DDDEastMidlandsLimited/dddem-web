import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';

export default function HacktoberFest() {
  return (
    <Layout>
      <Head>
        <title>HacktoberFest 2021</title>
      </Head>
      <Header
        title={'Sponsor Information'}
        banner="/static/banners/information/hacktober.jpg"
      />

      <section id="intro">
        <h1 tabIndex="0">Introduction To Hacktoberfest</h1>
        <a name="intro" />
        <div className="row">
          <div className="columnleft">
            <img
              src="/static/hacktoberfest/hacktoberfest.png"
              alt="Hacktoberfest 2020 Logo"
              className="speakerpic"
            />
          </div>
          <div className="columnright">
            <p tabIndex="0">
              Hacktoberfest is a month-long celebration of Free and
              Open Source software during October, which is organised
              by{' '}
              <a href="https://www.digitalocean.com/">
                Digital Ocean
              </a>{' '}
              and sponsored by <a href="https://dev.to">DEV</a>, and
              aims to get more folks dipping their toes in
              contributing to Free and Open Source software, and
              showing everyone that there&apos;s more to a project
              than just code!
            </p>
          </div>
        </div>
        <p tabIndex="0">
          HacktoberFest is there to encourage you to take part in Open
          Source. If you are beginner there are many ways to find
          issues you can help with{' '}
          <a>which you can read about here.</a> In return for braving
          the world of OSS (Open Source Software), you get some
          awesome Hacktoberfest swag including t-shirts and stickers.
        </p>
        <div className="align-center">
          <br />
          <button>
            <a
              href="https://hacktoberfest.digitalocean.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sign Up Here
            </a>
          </button>
        </div>
      </section>

      <section id="take-part">
        <h1 tabIndex="0">Contribute to DDD East Midlands</h1>
        <a name="take-part" />
        <p tabIndex="0">
          There are a number of issues that can be picked up on the
          DDD East Midlands repositories. We have labelled the issues
          with <i>up-for-grabs, hacktober, hacktoberfest</i> if we
          think they are small enough to be picked up for a PR.
        </p>
        <li>Pick up an issue.</li>
        <li>Write a blog post.</li>
        <li>Fix spelling mistakes.</li>
        <li>Raise an issue.</li>
        <p tabIndex="0">
          Below are links to the DDD East Midlands repositories.
        </p>

        <h2 tabIndex="0">DDD East Midlands Website Repository</h2>
        <p tabIndex="0"></p>
        <li>
          {' '}
          <a
            href="https://github.com/DDDEastMidlandsLimited/dddem-web"
            target="_blank"
            rel="noreferrer"
          >
            See the Readme on the main GitHub page for instructions on
            running the website locally.
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            href="https://github.com/DDDEastMidlandsLimited/dddem-web/issues"
            target="_blank"
            rel="noreferrer"
          >
            Check out the GitHub issues here.
          </a>{' '}
        </li>

        <h2 tabIndex="0">DDD East Midlands Blog Repository</h2>
        <p tabIndex="0"></p>
        <li>
          {' '}
          <a
            href="https://github.com/DDDEastMidlandsLimited/dddem-blog"
            target="_blank"
            rel="noreferrer"
          >
            See the Readme on the main GitHub page for instructions on
            running the website locally.
          </a>{' '}
        </li>
        <li>
          {' '}
          <a
            href="https://github.com/DDDEastMidlandsLimited/dddem-blog/issues"
            target="_blank"
            rel="noreferrer"
          >
            Check out the GitHub issues here.
          </a>{' '}
        </li>
        <br />
      </section>

      <section id="first-pr">
        <h1 tabIndex="0">First PR?</h1>
        <a name="first-pr" />
        <h2 tabIndex="0">
          Tell us what you love about the East Midlands Tech Community
        </h2>
        <p tabIndex="0">
          Add a list element to the below with your name and a
          sentence or two about what you love about the East Midlands
          tech scene.
        </p>
        <h2 tabIndex="0">How to do this?</h2>
        <p>
          Some information about HacktoberFest and how to contribute
          can be read about{' '}
          <a
            href="https://jesswhite.co.uk/2020/09/20/hacktober-post.html"
            target="_blank"
            rel="noreferrer"
          >
            in this linked blog post.
          </a>{' '}
          Below are some instructions on how to make changes to this
          page.
        </p>
        <h3 tabIndex="0">Fork the repository</h3>
        <p>
          <a
            href="https://guides.github.com/activities/forking/"
            target="_blank"
            rel="noreferrer"
          >
            Fork the repository
          </a>{' '}
          and clone it locally.{' '}
          <a
            href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork"
            target="_blank"
            rel="noreferrer"
          >
            Configure your remote fork to have the original projects
            main branch as it’s upstream.
          </a>
          If you regularly pull in changes from this remote “upstream”
          repository, your fork will remain up to date, reducing the
          chance of later complex merge conflicts.
        </p>
        <h3 tabIndex="0">Create a branch</h3>
        <p>
          In your forked repository create a branch, which is named
          according to the contribution guidelines for the repository.
          If there are no guidelines available, give your branch a
          short name that summarises your changes.
        </p>
        <h3 tabIndex="0">Add your change to this page</h3>
        <p>
          In the `pages/2020/hacktober.js` file you will see the
          section "Why we like the East Midlands Tech Community:". Add
          your name and reason why you like the East Midlands tech
          community to the list.
        </p>
        <div className="align-center">
          <img
            src="/static/hacktoberfest/screenshot.png"
            alt="Screen shot of code to add to"
          />
        </div>
        <h3 tabIndex="0">Run prettier</h3>
        <p>
          In your terminal of choice (command line, bash etc) run the
          command `npm run prettier fix`. This will fix the formatting
          in your changes.
        </p>
        <h3 tabIndex="0">Commit, push and raise a Pull Request</h3>
        <p>
          Commit your changes with a message describing your change
          and push your changes up. You can then raise a Pull Request
          using the GitHub UI.
        </p>
      </section>

      <section id="list">
        <h1 tabIndex="0">
          Why we like the East Midlands Tech Community:
        </h1>
        <a name="list" />
        <li>
          <a
            href="https://twitter.com/JessPWhite"
            target="_blank"
            rel="noreferrer"
          >
            Jessica White
          </a>{' '}
          - The people who are part of the East Midlands Tech
          Community are amazing.
        </li>
        <li>
          <a href="" target="_blank">
            Chirag Bolakani
          </a>{' '}
          - It&apos;s a great pleasure to be a part of the East
          Midlands Tech Community as the people are very supportive
          and help you in your overall development.
        </li>
        <li>
          <a
            href="https://twitter.com/MRJulian97"
            target="_blank"
            rel="noreferrer"
          >
            Julian Merida
          </a>{' '}
          - Everyone in East Midlands Tech Community are really
          amazing! I&apos;ve learnt a lot from the content they share!
        </li>
      </section>
      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section div {
            padding-bottom: 10px;
          }

          .imagecenter {
            text-align: center;
          }

          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            text-align: center;
          }

          .speakerpic {
            width: 95%;
            border-radius: 50%;
          }

          button {
            border-radius: 12px;
            border: none;
            color: ${theme.palette.dark};
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px;
            background-color: #ff8ae2;
            margin-bottom: 15px;
          }

          button a {
            color: ${theme.palette.dark};
          }

          button:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
            color: ${theme.palette.tertiary};
          }

          .columnright {
            padding: 10px;
            float: right;
            width: 60%;
          }

          .columnleft {
            padding: 10px;
            float: left;
            width: 35%;
          }

          .align-center {
            text-align: center;
          }

          tr th {
            background-color: #dddddd;
          }

          @media only screen and (max-width: 810px) {
            .speakerpic {
              display: none;
            }
            .columnright {
              width: 100%;
              padding-top: 0px;
            }
            .columnleft {
              padding-top: 0px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
