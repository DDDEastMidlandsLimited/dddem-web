import React from 'react';
import ContentSection from '../../styles/ContentSection';

export default function Catering() {
  return (
    <section id="catering">
      <h1 tabIndex="0">Catering</h1>
      <a name="food" />
      <h2>Food and Dietary Requirements</h2>
      <p tabIndex="0">
        Lunch and snacks will be provided on the day. This will be a
        hot buffet lunch and the options will be chefs choice on the
        day.
      </p>
      <p tabIndex="0">
        All food is prepared in kitchens where nuts, gluten and other
        allergens could be present. As the menu descriptions cannot
        include all ingredients, we will try to cater to the
        requirements you listed as part of your ticket registration.
      </p>
      <p tabIndex="0">
        <strong>
          Here is an example menu provided by the menu to give you an
          idea of what might be provided for lunch:
        </strong>
      </p>
      <ul>
        <li tabIndex="0">
          Stir fried vegetables and beans in a Korean style bulgogi
          sauce
        </li>
        <li tabIndex="0">
          Chicken, leek and mushroom pie topped with shortcrust pastry
        </li>
        <li tabIndex="0">
          Lamb rogan josh served with naan and mango chutney
        </li>
        <li tabIndex="0">Parmentier potatoes</li>
        <li tabIndex="0">Steamed coriander rice</li>
        <li tabIndex="0">Medley of garden vegetables</li>
        <li tabIndex="0">Carrot, spring onion and sultana salad</li>
        <li tabIndex="0">Spiced cous cous</li>
      </ul>

      <a name="drink" />
      <h2 tabIndex="0">Alcohol</h2>
      <p tabIndex="0">
        We will not be serving alcohol as part of the event and ask
        that you don&apos;t bring any with you as we are not licenced.
      </p>

      <a name="coffee" />
      <h2 tabIndex="0">Coffee</h2>
      <p tabIndex="0">
        There is a coffee cart at the event being run by{' '}
        <a
          href="https://www.cartwheelcoffee.com/"
          target="_blank"
          rel="noreferrer"
        >
          Cartwheel Coffee
        </a>
        , thanks to our Sponsors UNiDAYS.
      </p>
      <style jsx>{ContentSection}</style>
    </section>
  );
}
