import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';
import Image from 'next/image';

export default function Demographics() {
  return (
    <Layout>
      <Head>
        <title>Demographics</title>
      </Head>
      <Header
        title={'Demographics'}
        banner="/static/banners/about.jpg"
      />

      <section
        className="demographics content-section"
        name="Contents"
      >
        <h1 tabIndex="0">Contents</h1>

        <p tabIndex="0">
          <strong>
            <a href="#attendee-statistics">Attendee Statistics</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#job-titles">Job Titles</a>
          </li>
          <li>
            <a href="#attendee-pronouns">Attendee Pronouns</a>
          </li>
        </ul>
        <p tabIndex="0">
          <strong>
            <a href="#talk-topics">Talk Topics</a>
          </strong>
        </p>
      </section>

      <section
        className="demographics content-section"
        id="attendee-statistics"
      >
        <h1 tabIndex="0">Attendee Statistics</h1>

        <a name="attendee-statistics" />

        <p tabIndex="0">
          We have been asked about who comes to DDD East Midlands. All
          tech professionals are welcome but below is a high level
          view from Eventbrite information about who attends the
          conference.
        </p>
      </section>

      <section className="demographics content-section" id="jobs">
        <h2 tabIndex="0">Job Titles</h2>

        <a name="jobs" />
        <p tabIndex="0">
          From the past two events it can be seen that the attendence
          is very engineering heavy. There are all levels of a
          business that attend, with a good showing from Directors and
          Heads of department as well. 2021 had a wider range of
          professions joining the conference, which is a trend we
          would like to continue.
        </p>
        <h3>2021</h3>
        <h4>Top 5 Job Titles</h4>
        <div className="center-pic">
          <Image
            src="/static/demographics/2021-jobs.png"
            alt="2021 Talk Topic Votes"
            className="picture"
            height="470"
            width="500"
          />
        </div>
        <h4>Further breakdown</h4>
        <div>
          <table>
            <tr>
              <th>Job Title</th>
              <th>Percentage %</th>
            </tr>
            <tr>
              <td>Software Engineer (Graduate - Senior)</td>
              <td>47.2</td>
            </tr>
            <tr>
              <td>Director/VP/Founder</td>
              <td>6.3</td>
            </tr>
            <tr>
              <td>Recruitment Consultant</td>
              <td>6.3</td>
            </tr>
            <tr>
              <td>CTO/CEO</td>
              <td>5.6</td>
            </tr>
            <tr>
              <td>Head of Engineering</td>
              <td>5.6</td>
            </tr>
            <tr>
              <td>Software Engineer (Lead)</td>
              <td>4.2</td>
            </tr>
            <tr>
              <td>Architect</td>
              <td>3.5</td>
            </tr>
            <tr>
              <td>DevOps Engineer</td>
              <td>3.4</td>
            </tr>
            <tr>
              <td>Student</td>
              <td>2.8</td>
            </tr>
            <tr>
              <td>Product Manager</td>
              <td>2.8</td>
            </tr>
            <tr>
              <td>Delivery Manager</td>
              <td>2.8</td>
            </tr>
            <tr>
              <td>Designer</td>
              <td>1.4</td>
            </tr>
            <tr>
              <td>QA Engineer</td>
              <td>1.4</td>
            </tr>
          </table>
        </div>

        <h3>2019</h3>
        <div className="center-pic">
          <Image
            src="/static/demographics/2019-jobs.png"
            alt="2021 Talk Topic Votes"
            className="picture"
            height="470"
            width="500"
          />
        </div>
        <div>
          <table>
            <tr className="header">
              <th>Job Title</th>
              <th>Percentage %</th>
            </tr>
            <tr>
              <td>Software Engineer (Graduate - Senior)</td>
              <td>47.0</td>
            </tr>
            <tr>
              <td>Director/VP/Founder</td>
              <td>8.5</td>
            </tr>
            <tr>
              <td>Head of Engineering</td>
              <td>7.0</td>
            </tr>
            <tr>
              <td>Software Engineer (Lead)</td>
              <td>5.6</td>
            </tr>
            <tr>
              <td>Student</td>
              <td>5.6</td>
            </tr>
            <tr>
              <td>Architect</td>
              <td>4.4</td>
            </tr>
            <tr>
              <td>Recruitment Consultant</td>
              <td>4.4</td>
            </tr>
            <tr>
              <td>CTO/CEO</td>
              <td>3.3</td>
            </tr>
            <tr>
              <td>Designer</td>
              <td>3.0</td>
            </tr>
            <tr>
              <td>QA Engineer</td>
              <td>2.2</td>
            </tr>
            <tr>
              <td>UX Consultant</td>
              <td>1.9</td>
            </tr>
            <tr>
              <td>Product Manager</td>
              <td>1.9</td>
            </tr>
            <tr>
              <td>DevOps Engineer</td>
              <td>1.9</td>
            </tr>
          </table>
        </div>
      </section>

      <section
        className="demographics content-section"
        id="attendee-pronouns"
      >
        <h2 tabIndex="0">Attendee Pronouns</h2>

        <h3>2021</h3>
        <p tabIndex="0">
          In 2021 we had more people share their preferred pronoun
          with us with only 5.9% preferring not to share. As per usual
          the highest percentage was for those using He/Him pronouns
          at around 69%. She/Her was the preferred pronoun of 23% of
          attendees and 2% preferred They/Them.
        </p>

        <a name="attendee-pronouns" />
        <h3>2019</h3>
        <p tabIndex="0">
          55% of the attendees did not provide their preferred pronoun
          on their ticket submission so it is hard to get an accurate
          view with that data. 12.2% of attendees put down She/Her or
          They/Them as their main pronoun, and 69% used the pronouns
          He/Him.
        </p>
      </section>

      <section
        className="demographics content-section"
        id="talk-stats"
      >
        <h1 tabIndex="0">Talk Statistics</h1>

        <a name="talk-stats" />

        <p tabIndex="0">
          We collect statistics from Sessionize about the talks
          submitted, the level of "entry" for each talk and the
          speakers past experience / whether they request extra
          support. These stats help us notice trends in popular
          topics.
        </p>

        <h3>2021</h3>
        <p tabIndex="0">
          Quite possibly because of the effects of the pandemic, but
          there was a larger sway towards the topics of management and
          core skills. People focused topics. Cloud was still high
          ranking as with the previous event, and there was a good mix
          of topics from different disciplines.
        </p>
        <div className="center-pic">
          <Image
            src="/static/demographics/2021-topics.png"
            alt="2021 Talk Topic Votes"
            className="picture"
            height="500"
            width="500"
          />
        </div>
        <p tabIndex="0">
          Like the previous event, most of the talks submitted were at
          a beginners level. For the next event we will try to support
          potential speakers on submitting more advanced talk levels.
        </p>
        <div className="center-pic">
          <Image
            src="/static/demographics/2021-level.png"
            alt="2021 Difficulty Level of Talks Submitted"
            className="picture"
            height="250"
            width="400"
          />
        </div>

        <h3>2019</h3>
        <p tabIndex="0">
          Talks submitted all had a least one tag attached about its
          subject area. This graph shows the number of submissions
          with each tag, which shows a definite trend towards process,
          architecture and hosting. We encourage talks in all areas of
          technology, so we made efforts to see if we can make efforts
          to strengthen submissions in other areas as well.
        </p>
        <div className="center-pic">
          <Image
            src="/static/demographics/2019-topics.png"
            alt="2019 Talk Topic Votes"
            className="picture"
            height="250"
            width="500"
          />
        </div>
        <p tabIndex="0">
          Another area of focus was that there would be talks at all
          levels for people to vote on and attend. The majority of
          talks were focused at an introductory level, which is
          normally beneficial to a lot of the audience. It is great
          that we had intermediate and advanced submissions as well,
          and would be great if we could get these proportions a bit
          higher.
        </p>
        <div className="center-pic">
          <Image
            src="/static/demographics/2019-level.png"
            alt="2019 Difficulty Level of Talks Submitted"
            className="picture"
            height="250"
            width="500"
          />
        </div>
      </section>
    </Layout>
  );
}
