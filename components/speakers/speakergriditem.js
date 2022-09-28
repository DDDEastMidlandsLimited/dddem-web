import React from 'react';
import Image from 'next/image';

export default function SpeakerGridItemComponent(props) {
  let hovering = () => false;

  function Title() {
    return `Link to Information About ${props.speakername}`;
  }

  return (
    <div>
      <article className="speaker-grid-item">
        <a tabIndex="0" href={props.link} title={Title()}>
          <Image
            className="speaker-image"
            src={props.pic}
            alt="Picture of Connell"
            height={250}
            width={250}
            layout="responsive"
          />
          <div
            className={`hover-pop ${
              hovering === true ? 'popped' : ''
            }`}
          >
            <h4>{props.speakername}</h4>
            <p>{props.talkbrief}</p>
          </div>
        </a>
      </article>
    </div>
  );
}
