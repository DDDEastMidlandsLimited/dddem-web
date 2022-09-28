import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';

export default function TicketInformation() {
  return (
    <Layout>
      <Head>
        <title>Ticket Information</title>
      </Head>
      <Header
        title={'Ticket Information'}
        banner="/static/banners/ticket.jpg"
      />

      <section className="content-section" name="Contents">
        <h1 tabIndex="0">Contents</h1>

        <p>
          <strong>
            <a href="#ticketcost">How much do tickets cost?</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#ticketrelease">
              When will tickets be released?
            </a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#return">
              What do if I can&apos;t come to the event anymore?
            </a>
          </strong>
        </p>
      </section>

      <section className="content-section" id="cost">
        <a name="ticketcost" />
        <h1 tabIndex="0">How much do tickets cost?</h1>
        <p tabIndex="0">
          Tickets for the event will be free but limited in
          availability. We wanted to ensure that price wouldn&apos;t
          be a barrier for those wanting to attend.
        </p>
      </section>

      <section className="content-section">
        <a name="ticketrelease" />
        <h1 tabIndex="0">When will tickets be released?</h1>
        <p tabIndex="0">
          The 2021 event is now done. The next event will be in 2023.
        </p>
        <ul tabIndex="0">
          <li>
            <strong>First wave:</strong> To be confirmed
          </li>
          <li>
            <strong>Second wave:</strong> To be confirmed
          </li>
        </ul>
      </section>

      <section className="content-section">
        <a name="return" />
        <h1 tabIndex="0">
          What do if I can&apos;t come to the event anymore?
        </h1>
        <p tabIndex="0">
          If you can no longer come to the event you (we are sad you
          can&apos;t make it!) please return your ticket so that
          someone else can claim it.
        </p>
        <p tabIndex="0">
          You can return your ticket through a couple of ways:
        </p>
        <ul>
          <li tabIndex="0">Return it through Eventbrite.</li>
          <li>
            <a href="contact" target="_blank" rel="noreferrer">
              Contact Jessica and she can sort it out for you.
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
