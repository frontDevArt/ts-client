import { useState } from 'react';
import './Banner.scss';

const Banner = () => {
  const [closeBanner, setCloseBanner] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}?sso=true`)
      .then(() => {
        setIsCopied(true)
          setTimeout(function () {
            setIsCopied(false)
          }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy to clipboard:", error);
      });
  }

  return (
    <>
    {closeBanner ? null : <><div className={`snackbar ${isCopied ? 'snackbar--show' : ''}`}>Link copied to clipboard</div><div className="banner">
      <div className="banner-body">
        <div className="banner-body__icon">
          <svg
            fill="none"
            viewBox="0 0 21 20"
            height="20"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M9.5 7H11.5V5H9.5V7ZM10.5 18C6.09 18 2.5 14.41 2.5 10C2.5 5.59 6.09 2 10.5 2C14.91 2 18.5 5.59 18.5 10C18.5 14.41 14.91 18 10.5 18ZM10.5 0C9.18678 0 7.88642 0.258658 6.67317 0.761205C5.45991 1.26375 4.35752 2.00035 3.42893 2.92893C1.55357 4.8043 0.5 7.34784 0.5 10C0.5 12.6522 1.55357 15.1957 3.42893 17.0711C4.35752 17.9997 5.45991 18.7362 6.67317 19.2388C7.88642 19.7413 9.18678 20 10.5 20C13.1522 20 15.6957 18.9464 17.5711 17.0711C19.4464 15.1957 20.5 12.6522 20.5 10C20.5 8.68678 20.2413 7.38642 19.7388 6.17317C19.2362 4.95991 18.4997 3.85752 17.5711 2.92893C16.6425 2.00035 15.5401 1.26375 14.3268 0.761205C13.1136 0.258658 11.8132 0 10.5 0ZM9.5 15H11.5V9H9.5V15Z"
            ></path>
          </svg>
        </div>
        <div className="banner-body__container">
          <div className="banner-content">
            <div>
              <span className="banner-content__title">About Bookmarking: </span>
              <span className="banner-content__message">
                You’re part of a phased introduction of our new login experience.
                Please bookmark this page as your new Truckstop login page.
              </span>
            </div>
          </div>
        </div>
        <div className="banner-body__action">
          <button onClick={handleCopy} disabled={isCopied} className="copy-link-button mdc-button mdc-button--outlined">
            <div className="copy-link">
              <span className="mdc-button__ripple"></span>
              <span className="mdc-button__label">Copy Link</span>
            </div>
          </button>
        </div>
      </div>
      <div onClick={() => setCloseBanner(true)} className="banner-close">
        <svg
          fill="none"
          viewBox="0 0 12 12"
          height="12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M11.6 1.52802L10.472 0.400024L6.00002 4.87203L1.52802 0.400024L0.400024 1.52802L4.87203 6.00002L0.400024 10.472L1.52802 11.6L6.00002 7.12803L10.472 11.6L11.6 10.472L7.12803 6.00002L11.6 1.52802Z"
          ></path>
        </svg>
      </div>
    </div></>}
    </>
  )
}

export default Banner