const FullWidthImage = props => (
  <p>
    <style jsx>
      {`
            p {
                background-image: url("${props.url}");
                height: 300px;
                background-repeat: no-repeat;
                background-position: center;
                text-align:center;
                background-size: 100% auto;
            }
            `}
    </style>
  </p>
);

export default FullWidthImage;
