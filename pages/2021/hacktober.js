import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';
import Image from 'next/image';

export default function HacktoberFest() {
  return (
    <Layout>
      <Head>
        <title>HacktoberFest 2021</title>
      </Head>
      <Header
        title={'Hacktoberfest 2021 Information'}
        banner="/static/banners/hacktober.jpg"
      />

      <div className="hacktober">
        <section className="content-section" id="intro">
          <h1>Introduction To Hacktoberfest</h1>
          <a name="intro" />
          <div className="row">
            <div className="columnleft">
              <Image
                src="/static/hacktoberfest/hacktoberfest.png"
                alt="Hacktoberfest 2020 Logo"
                className="hacktoberlogo"
              />
            </div>
            <div className="columnright">
              <p>
                Hacktoberfest is a month-long celebration of Free and
                Open Source software during October, which is
                organised by{' '}
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
          <p>
            HacktoberFest is there to encourage you to take part in
            Open Source. If you are beginner there are many ways to
            find issues you can help with{' '}
            <a>which you can read about here.</a> In return for
            braving the world of OSS (Open Source Software), you get
            some awesome Hacktoberfest swag including t-shirts and
            stickers.
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

        <section className="content-section" id="take-part">
          <h1>Contribute to DDD East Midlands</h1>
          <a name="take-part" />
          <p>
            There are a number of issues that can be picked up on the
            DDD East Midlands repositories. We have labelled the
            issues with <i>up-for-grabs, hacktober</i> if we think
            they are small enough to be picked up for a PR.
          </p>
          <ul>
            <li>Pick up an issue.</li>
            <li>Write a blog post.</li>
            <li>Fix spelling mistakes.</li>
            <li>Raise an issue.</li>
          </ul>
          <p>
            Below are links to the DDD East Midlands repositories.
          </p>

          <h2>DDD East Midlands Website Repository</h2>
          <p></p>

          <ul>
            <li>
              {' '}
              <a
                href="https://github.com/DDDEastMidlandsLimited/dddem-web"
                target="_blank"
                rel="noreferrer"
              >
                See the Readme on the main GitHub page for
                instructions on running the website locally.
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
          </ul>
          <h2>DDD East Midlands Blog Repository</h2>
          <p></p>
          <ul>
            <li>
              {' '}
              <a
                href="https://github.com/DDDEastMidlandsLimited/dddem-blog"
                target="_blank"
                rel="noreferrer"
              >
                See the Readme on the main GitHub page for
                instructions on running the website locally.
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
          </ul>
          <br />
        </section>

        <section className="content-section" id="first-pr">
          <h1 tabIndex="10">First PR?</h1>
          <a name="first-pr" />
          <h2 tabIndex="11">Add your selfie!</h2>
          <p tabIndex="12">
            Take a photo of yourself and add it to this page.
          </p>
          <h2 tabIndex="13">How to do this?</h2>
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
          <h3 tabIndex="14">Fork the repository</h3>
          <p>
            <ul>
              <li>
                {' '}
                <a
                  href="https://github.com/DDDEastMidlandsLimited/dddem-web"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fork the repository for this website here.
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://guides.github.com/activities/forking/"
                  target="_blank"
                  rel="noreferrer"
                >
                  You can find some instructions on how to fork
                  repositories in this guide.
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clone the repository locally using these
                  instructions.
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork"
                  target="_blank"
                  rel="noreferrer"
                >
                  Configure your remote fork to have the original
                  projects main branch as it’s upstream using these
                  instructions.
                </a>
              </li>
              <li>
                If you regularly pull in changes from this remote
                “upstream” repository, your fork will remain up to
                date, reducing the chance of later complex merge
                conflicts.
              </li>
            </ul>
          </p>
          <h3 tabIndex="15">Create a branch</h3>
          <p>
            <ul>
              <li>
                In your forked repository{' '}
                <a
                  href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"
                  target="_blank"
                  rel="noreferrer"
                >
                  create a branch
                </a>
                , which is named according to the contribution
                guidelines for the repository.
              </li>
              <li>
                If there are no guidelines available, give your branch
                a short name that summarises your changes.
              </li>
            </ul>
          </p>
          <h3 tabIndex="16">Add your change to this page</h3>
          <p>
            <ul>
              <li>
                Add a photo of yourself to the{' '}
                <b>
                  <i>public/static/hacktoberfest/2021</i>
                </b>{' '}
                folder.
              </li>
              <li>
                Add the following code to the{' '}
                <b>
                  <i>pages/2021/hacktoberfest.js</i>
                </b>{' '}
                page under the "Hacktoberfest Corner Contributors!"
                section.
              </li>
            </ul>
          </p>
          <p className="columnfullwidth">
            <Image
              className="codesnip img-center"
              src="/static/hacktoberfest/codesnip.png"
              alt="Picture of the code snip you need to use"
            />
          </p>
          <h3 tabIndex="17">Run prettier</h3>
          <p>
            In your terminal of choice (command line, bash etc) run
            the command `npm run prettier:fix`. This will fix the
            formatting in your changes.
          </p>
          <h3 tabIndex="18">Commit, push and raise a Pull Request</h3>
          <p>
            <ul>
              <li>
                {' '}
                <a
                  href="https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line"
                  target="_blank"
                  rel="noreferrer"
                >
                  Commit your changes
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository"
                  target="_blank"
                  rel="noreferrer"
                >
                  Push your changes up.
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
                  target="_blank"
                  rel="noreferrer"
                >
                  You can then raise a Pull Request using the GitHub
                  UI.
                </a>
              </li>
            </ul>
          </p>
          <h3 tabIndex="19">Ask for Help!</h3>
          <p>
            If you need some help, ask any one of our fantastic
            Hacktoberfest volunteers!
          </p>
        </section>

        <section className="content-section" id="list">
          <h1 tabIndex="20">Hacktoberfest Corner Contributors!</h1>
          <section className="speaker-grid">
            <article className="speaker-grid-item">
              <Image
                className="speaker-image"
                src="/static/hacktoberfest/2021/Jess_White.jpg"
                alt="Picture of Jess White"
              />
            </article>
            <article className="speaker-grid-item">
              <Image
                className="speaker-image"
                src="/static/hacktoberfest/2021/Pete_Gallagher.jpg"
                alt="Picture of Pete Gallagher"
              />
            </article>
            <article className="speaker-grid-item">
              <Image
                className="speaker-image"
                src="/static/hacktoberfest/2021/andystannard.jpg"
                alt="Picture of Andy Stannard"
              />
            </article>
            {/*       <article className="speaker-grid-item">
            <Image
              className="speaker-image"
              src="/static/hacktoberfest/2021/FirstName_SecondName.jpg"
              alt="Picture of FirstName LastName"
            />
          </article> */}
          </section>
        </section>
      </div>
    </Layout>
  );
}
