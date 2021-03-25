import React from 'react';
import ContentSection from '../../styles/ContentSection';

export default function PubConf() {
  return (
    <section id="pubconf">
      <h1>PubConf - The Unofficial After Party</h1>
      <a name="after-party-about" />
      <h2>About</h2>
      <p>
        After the conference, there will be a special{' '}
        <a
          href="https://pubconf.io/"
          target="_blank"
          rel="noreferrer"
        >
          PubConf
        </a>{' '}
        featuring some of our speakers and special guests. This
        evening event has comedy talks, music, food and beverages.
        It&apos;s great fun for all and we encourage you to come
        along.
      </p>
      <p>
        <strong>Quick about:</strong>
      </p>
      <ul>
        <li>
          The talks conducted at PubConf are 5 minute, comedy ignite
          talks:
        </li>
        <li>
          20 slides timed to increment every 15 seconds. The speakers
          have no control
        </li>
        <li>
          The top three talks will go into a final battle to win
          prizes. These three finalists will be presented with a
          ignite deck they have never seen before and given a topic.
          They will then have to come up with an impromptu talk on the
          spot.
        </li>
        <li>
          Talk topics have an emphasis on humour. Often the content is
          not suitable to be shared away from the safety of PubConf.
        </li>
        <li>
          PubConf is a separate entity and business from DDD East
          Midlands. As such they have their own Code of Conduct. Hence
          "Unofficial" after party. We are not involved in its
          organisation.
        </li>
      </ul>
      <p>
        <strong>
          <a
            href="https://blog.dddeastmidlands.com/2019/10/15/pubconf-nottingham-faq.html"
            target="_blank"
            rel="noreferrer"
          >
            Find out more about PubConf in this blog post by Dylan
            Beattie
          </a>
        </strong>
      </p>
      <img
        src="/static/banners/pubconf.jpg"
        alt="PubConf Nottingham Banner"
        className="picture"
      />
      <a name="after-party-rules" />
      <h2>Rules of PubConf</h2>
      <strong>What happens at PubConf, stays at Pubconf.</strong>
      <ul>
        <li>
          No photos or videos unless you have the speakers explicit
          permission.
        </li>
        <li>
          No quoting talks. (Taken out of context, a joke can be
          damaging)
        </li>
      </ul>
      <p>
        <strong>
          Age limit is over 18 years old as the venue is serving
          alcohol.
        </strong>
      </p>

      <style jsx>{ContentSection}</style>
    </section>
  );
}
