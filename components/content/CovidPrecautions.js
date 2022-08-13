import React from 'react';
import ContentSection from '../../styles/ContentSection';

export default function CovidPrecautions() {
  return (
    <section id="covid-precautions">
      <h1 tabIndex="0">Covid Precautions</h1>
      <p tabIndex="0">
        Having spoken to several of our ticket holders we have found
        that we have several delegates with underlying health issues -
        including one of our organising team - and a lot of nervous
        attendees.
      </p>
      <p tabIndex="0">
        DDD East Midlands Conference is an inclusive event to
        celebrate and explore the great technical talent across the
        region, so we don’t want you spending the day anxious about
        covid, we want you to be having fun!
      </p>
      <p tabIndex="0">
        To ensure the event is as safe as possible for all in
        attendance we are taking the following precautions and ask
        that you help us by cooperating with them.
      </p>
      {/*       <div>
        <img
          src="/static/info/Precautions.png"
          alt="An image showing the cautions in white text against a blue background"
          className="picture"
        />
      </div> */}
      <h2 tabIndex="0">On arrival at the event</h2>
      <p tabIndex="0">When you arrive we will do the following:</p>
      <br />
      <h3 tabIndex="0">Check your temperature</h3>
      <p tabIndex="0">
        We will do this by using a “thermometer gun,” a device that is
        equipped with an infrared sensor that can quickly measure
        surface temperature without making any contact with a person's
        skin.
      </p>
      <br />
      <h3 tabIndex="0">
        Prove you have had a negative result on a lateral flow test in
        the last 24-48 hours
      </h3>
      <p tabIndex="0">
        We would like you to do this by entering your negative result
        at
        <a
          href="https://test-for-coronavirus.service.gov.uk/report-result/login-choice"
          target="_blank"
          rel="noreferrer"
          tabIndex="0"
        >
          https://test-for-coronavirus.service.gov.uk/report-result/login-choice.
        </a>
        From this you will receive an email or text message to confirm
        your negative result, which we would like you to show us upon
        arrival.
      </p>
      <p tabIndex="0">
        <b>If you cannot prove a negative lateral flow result</b> we
        will have a testing area at the venue where you will be asked
        to do one in real time before joining the conference. Please
        bear in mind this will take 30 mins as a minimum so arrive
        early!
      </p>
      <br />
      <h3 tabIndex="0">Ask you to choose a wrist band.</h3>
      <p tabIndex="0">
        The wrist band will indicate if you are socially distancing or
        not.
      </p>
      <li>
        <b>Red band:</b> Please keep your distance.{' '}
      </li>
      <li>
        <b>Green band:</b> I'm not socially distancing.
      </li>
      <p tabIndex="0">
        We thank you in advance for being respectful about peoples
        choices around their social distancing requirements.
      </p>
      <br />
      <h2 tabIndex="0">Throughout the day</h2>
      <ul tabIndex="0">
        <li tabIndex="0">
          It is not a socially distanced conference so there is no
          requirement for you to keep your distance from your friends,
          but please be respectful of others who may want to keep
          their distance.
        </li>

        <li tabIndex="0">
          Face mask wearing will be optional, depending on your
          comfort levels.
        </li>
        <li tabIndex="0">
          We will provide hand sanitiser around the venue for use
          throughout the day
        </li>
      </ul>

      <h2 tabIndex="0">Thank you for your patience</h2>
      <p tabIndex="0">
        These additional checks will mean it takes a little longer to
        check you in than we would usually like, but hope you
        understand we are taking these precautions so that everyone
        feels safe and relaxed and can enjoy the event.
      </p>

      <style jsx>{ContentSection}</style>
    </section>
  );
}
