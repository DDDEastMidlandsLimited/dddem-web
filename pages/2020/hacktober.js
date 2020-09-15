import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import {
  Transport,
  SocialMedia,
  CodeOfConduct,
} from '../../components/content';

export default () => (
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
            Hacktoberfest is a month-long celebration of Free and Open
            Source software during October, which is organised by{' '}
            <a href="https://www.digitalocean.com/">Digital Ocean</a>{' '}
            and sponsored by <a href="https://dev.to">DEV</a>, and
            aims to get more folks dipping their toes in contributing
            to Free and Open Source software, and showing everyone
            that there's more to a project than just code!
          </p>
        </div>
      </div>
      <p tabIndex="0">
        HacktoberFest is there to encourage you to take part in Open
        Source. If you are beginner there are many ways to find issues
        you can help with <a>which you can read about here.</a> In
        return for braving the world of OSS (Open Source Software),
        you get some awesome Hacktoberfest swag including t-shirts and
        stickers.
      </p>
      <div align="center">
        <br />
        <button>
          <a
            href="https://hacktoberfest.digitalocean.com/"
            target="_blank"
          >
            Sign Up Here
          </a>
        </button>
      </div>
      <p tabIndex="0">
        Below is a great challenge set by one of the awesome DDD East
        Midlands sponsors and links to where you can find DDD East
        Midlands related HacktoberFest issues.
      </p>
    </section>

    <section id="challenge">
      <h1 tabIndex="0">Sponsored Challenge</h1>
      <a name="challenge" />
      <h2 tabIndex="0">The Challenge and How To Enter</h2>
      <p tabIndex="0"></p>
      <h2 tabIndex="0">Prizes</h2>
      <p tabIndex="0"></p>
      <h2 tabIndex="0">Sponsored By Dead Happy</h2>
      <div className="row">
        <div className="columnleft">
          <img
            src="/static/hacktoberfest/hacktoberfest.png"
            alt="Hacktoberfest 2020 Logo"
            className="speakerpic"
          />
        </div>
        <div className="columnright">
          <p tabIndex="0"></p>
        </div>
      </div>
    </section>

    <section id="take-part">
      <h1 tabIndex="0">Contribute to DDD East Midlands</h1>
      <a name="take-part" />
      <p tabIndex="0">
        There are a number of issues that can be picked up on the DDD
        East Midlands repositories. We have labelled the issues with{' '}
        <i>up-for-grabs, hacktober, hacktoberfest</i> if we think they
        are small enough to be picked up for a PR.
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
        >
          Check out the GitHub issues here.
        </a>{' '}
      </li>
      <br />
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
