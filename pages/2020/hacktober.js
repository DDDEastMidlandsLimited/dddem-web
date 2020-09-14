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
      <p tabIndex="0"></p>
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
