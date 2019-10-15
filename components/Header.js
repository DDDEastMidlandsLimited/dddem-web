import theme from '../theme/theme';

const Header = props => (
  <section>
    <div className="background"></div>
    <div className="logo">
      <img
        className="image"
        src="/static/ddd_avatar_300.jpg"
        alt="DDD East Midlands Logo"
      />
      <h1 tabIndex="0">{props.title}</h1>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: ${theme.font.sizes.mobile.headline1};
          color: ${theme.palette.primary};
        }
        .background {
          width: 100vw;
          background-image: url('/static/banners/ddd_backround_1500x500.jpg');
          background-color: ${theme.palette.primary};
          height: 200px;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .logo {
          text-align: center;
        }
        .image {
          margin-top: -50px;
          padding: 5px 10px;
          border-radius: ${theme.sizes.borderRadiusMobile};
          background-color: ${theme.palette.primary};
          width: 230px;
        }
        @media (min-width: 600px) {
          h1 {
            font-size: ${theme.font.sizes.desktop.headline1};
            color: ${theme.palette.primary};
          }
          .background {
            height: 300px;
          }
          .logo {
          }
          .image {
            margin-top: -100px;
            padding: 20px 30px;
            width: auto;
          }
        }
      `}
    </style>
  </section>
);

export default Header;
