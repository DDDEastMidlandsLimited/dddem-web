import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function HacktoberFest() {
  return (
    <Layout>
      <Head>
        <title>HacktoberFest 2023</title>
      </Head>
      <Header
        title={'Hacktoberfest Corner 2023'}
        banner="/static/banners/hacktober.jpg"
      />

      <div className="hacktober">
        <section className="content-section" id="intro">
          <a name="intro" />
          <div className="row">
            <div className="columnleft">
              <Image
                src="/static/partners/newday.png"
                alt="Hacktoberfest 2020 Logo"
                className="hacktoberlogo"
                height="85"
                width="200"
                layout="responsive"
              />
            </div>
            <div className="columnright">
              <p>
                This years Hacktoberfest corner is being supported by
                NewDay. Head over to their area on the 7th October at
                DDD East Midlands conference for more information on
                how to take part.
              </p>
            </div>
          </div>
          <h1>Introduction To Hacktoberfest</h1>
          <a name="intro" />
          <div className="row">
            <div className="columnleft">
              <Image
                src="/static/hacktoberfest/hacktoberfest.png"
                alt="Hacktoberfest 2020 Logo"
                className="hacktoberlogo"
                height="85"
                width="200"
                layout="responsive"
              />
            </div>
            <div className="columnright">
              <p>
                Hacktoberfest is a month-long celebration of Free and
                Open Source software during October, which is
                organised by{' '}
                <Link 
                  href="https://www.digitalocean.com/"
                  passHref legacyBehavior
                  title="Digital Ocean Website"
                  tabIndex="0">
                  Digital Ocean.
                </Link>{' '}
                It aims to get more folks dipping their toes in
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
              <Link
                href="https://github.com/DDDEastMidlandsLimited/dddem-web"
                rel="noreferrer"
                passHref legacyBehavior
                title="GitHub Repository for DDD East Midlands Website"
                tabIndex="0"
              >
                See the Readme on the main GitHub page for
                instructions on running the website locally.
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link
                href="https://github.com/DDDEastMidlandsLimited/dddem-web/issues"
                target="_blank"
                rel="noreferrer"
                passHref legacyBehavior
                title="GitHub Issues for DDD East Midlands Website"
                tabIndex="0"
              >
                Check out the GitHub issues here.
              </Link>{' '}
            </li>
          </ul>
          <br />
        </section>

        <section className="content-section" id="first-pr">
          <h1>First PR?</h1>
          <a name="first-pr" />
          <h2>Add your name!</h2>
          <p>List yourself as someone who has taken part.</p>
          <h2>How to do this?</h2>
          <p>
            Some information about HacktoberFest and how to contribute
            can be read about{' '}
            <Link
              href="https://jessicabrentnall.co.uk/blog/hacktober-contributor-guide/"
              rel="noreferrer"
              passHref legacyBehavior
              title="Hacktoberfest Contributor Guide"
              tabIndex="0"
            >
              in this linked blog post.
            </Link>{' '}
            Below are some instructions on how to make changes to this
            page.
          </p>
          <h3>Fork the repository</h3>
          <p>
            <ul>
              <li>
                {' '}
                <Link
                  href="https://github.com/DDDEastMidlandsLimited/dddem-web"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="GitHub Repository for DDD East Midlands Website"
                  tabIndex="0"
                >
                  Fork the repository for this website here.
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  href="https://guides.github.com/activities/forking/"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="Guide to Forking a Repository"
                  tabIndex="0"
                >
                  You can find some instructions on how to fork
                  repositories in this guide.
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="Instructions for Cloning a Repository"
                  tabIndex="0"
                >
                  Clone the repository locally using these
                  instructions.
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="Configuring a Remote for a Fork"
                  tabIndex="0"
                >
                  Configure your remote fork to have the original
                  projects main branch as it’s upstream using these
                  instructions.
                </Link>
              </li>
              <li>
                If you regularly pull in changes from this remote
                “upstream” repository, your fork will remain up to
                date, reducing the chance of later complex merge
                conflicts.
              </li>
            </ul>
          </p>
          <h3>Create a branch</h3>
          <p>
            <ul>
              <li>
                In your forked repository{' '}
                <Link
                  href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="Guide to Creating a Git Branch"
                  tabIndex="0"
                >
                  create a branch
                </Link>
                , which is named according to the contribution
                guidelines for the repository.
              </li>
              <li>
                If there are no guidelines available, give your branch
                a short name that summarises your changes.
              </li>
            </ul>
          </p>
          <h3>Add your change to this page</h3>
          <p>
            <ul>
              <li>
                Add your name to
                <b>
                  <i>pages/2023/hacktoberfest.js</i>
                </b>{' '}
                page under the "Hacktoberfest Corner Contributors!"
                section.
              </li>
            </ul>
          </p>
          <h3>Run prettier</h3>
          <p>
            In your terminal of choice (command line, bash etc) run
            the command `npm run prettier:fix`. This will fix the
            formatting in your changes.
          </p>
          <h3>Commit, push and raise a Pull Request</h3>
          <p>
            <ul>
              <li>
                {' '}
                <Link
                  href="https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="Guide to Committing Changes"
                  tabIndex="0"
                >
                  Commit your changes
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  href="https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="Guide to Pushing Changes"
                  tabIndex="0"
                >
                  Push your changes up.
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  href="https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
                  rel="noreferrer"
                  passHref legacyBehavior
                  title="Guide to Creating a Pull Request"
                  tabIndex="0"
                >
                  You can then raise a Pull Request using the GitHub
                  UI.
                </Link>
              </li>
            </ul>
          </p>
          <h3>Ask for Help!</h3>
          <p>
            If you need some help, ask any one of our fantastic
            Hacktoberfest volunteers!
          </p>
        </section>

        <section className="content-section" id="intro">
          <h1>Hacktoberfest Corner Contributors!</h1>
          <a name="intro" />
          <div className="row">
            <li>Jessica Brentnall</li>
          </div>
        </section>
      </div>
    </Layout>
  );
}
