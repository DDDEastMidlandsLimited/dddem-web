import React from 'react';
import theme from '../../../theme/theme';
import Header from '../../../components/Header';
import Head from 'next/head';

export default function SpeakerGridItemComponent(props) {

  let hovering = () => false;


  function Title(){
    return `Link to Information About ${props.speakername}`;
  }

  return (
    <div>
      <article className="speaker-grid-item">
        <a
          tabIndex="0"
          href={props.link}
          title={Title()}
        >
          <img
            className="speaker-image"
            src={props.pic}
            alt="Picture of Connell"
          />
          <div className={`hover-pop ${hovering === true ? "popped" : ""}`}>
            <h4>{props.speakername}</h4>
            <p>{props.talkbrief}</p>
          </div>
        </a>
      </article>
      <style jsx>
        {`
          h4 {
            margin-top:7px;
            text-decoration:none;
            color:white;
          }

          .speaker-image {
            width: 175px;
            height: 175px;
            margin: 5px;
          }

          .speaker-grid-item {
            min-width: 180px;
            height: 180px;
            overflow: hidden;
          }

          .hover-pop{
            width: 175px;
            background-color:#1A7D87;
            position: relative;
            top: -10px;
            margin-left: 5px;
            animation: floatOut 0.2s normal ease-out;
          }

          .speaker-grid-item:hover .hover-pop{
            top: -85px;
            height:85px;
            padding:7px;
            box-sizing: border-box;
            animation: floatIn 0.3s normal ease-in;
          }

          @-webkit-keyframes floatIn {
              0% {
                  top:10px;
              }
              100% {
                  top: -85px;
              }
          }
          @keyframes floatIn {
              0% {
                  top:10px;
              }
              100% {
                  top: -85px;
              }
          }

          @-webkit-keyframes floatOut {
            0% {
                top:-85px;
            }
            100% {
                top: 10x;
            }
        }
        @keyframes floatOut {
            0% {
                top:-85px;
            }
            100% {
                top: 10px;
            }
        }

        `}
      </style>
    </div>
  );
}
