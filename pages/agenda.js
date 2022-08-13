import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import theme from '../theme/theme';
import Head from 'next/head';
import Image from 'next/image';

export default function Agenda() {
  return (
    <Layout>
      <Head>
        <title>Agenda</title>
      </Head>
      <Header title={'Agenda'} banner="/static/banners/album.jpg" />

      <section tabIndex="0" name="QR Code">
        <div className="img-center">
          <p tabIndex="0">
            Use the below QR code or head to{' '}
            <a
              href="https://ddd-east-midlands-conference-2021.sessionize.com"
              target="_blank"
              rel="noreferrer"
            >
              this site
            </a>{' '}
            to get the event app on your phone and create a
            personalised plan for the day. If accessing on your phone,
            then go to the three dots on your browser and use the "add
            to homescreen" option.
          </p>
          <Image
            src="/static/appqrcode.png"
            alt="QR code"
            className="qrcode"
          />
        </div>
      </section>

      <section tabIndex="0" name="Agenda">
        <div
          className="sessionize-loader"
          data-sessionize-load-url="https://sessionize.com/api/v2/tz5o91c3/view/GridSmart?under=True"
        >
          <div className="sz-spinner"></div>
        </div>
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

          .qrcode {
            width: 250px;
          }

          .img-center {
            text-align: center;
          }
        `}
      </style>
    </Layout>
  );
}
