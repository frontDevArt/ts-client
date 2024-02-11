import './RightSide.scss';

const RightSide = () => {
  return (
    <div className='right-side'>
      <div className="right-side__text-block-wrapper">
        <div className='right-side__text-block-invisible-part' />
        <div className="right-side__text-block-inner">
          <div className="right-side__text-block-inner-inner">
            <h1 className='right-side__text-block-title'>Earn up to $100!</h1>
            <p className='right-side__text-block-first-description'>
              Invite your friends to use Truckstop, and earn an Amazon gift card worth up to $100!
            </p>
            <p className='right-side__text-block-second-description'>
              You’re already using the #1 load board in the market. Now you can get paid for it! Help your friends build their businesses by sharing your favorite load board and/or Truckstop Factoring.
            </p>
            <div className="right-side__refer-wrapper">
              <a target="_blank" rel="noopener noreferrer" href="https://share.truckstop.com/splitscreen">
                Refer a friend
                <svg style={{ marginLeft: '1.25rem' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" /><script xmlns="" /><script xmlns="" />
                  <g clipPath="url(#clip0_158_8312)">
                    <path d="M18 9.21919C18 9.31642 17.9653 9.39976 17.8958 9.46917L13.8958 13.1567C13.7847 13.2539 13.6632 13.2748 13.5312 13.2192C13.3993 13.1567 13.3333 13.056 13.3333 12.9172V10.5838H0.333342C0.236111 10.5838 0.156261 10.5525 0.0937554 10.4901C0.0312499 10.4276 1.52588e-05 10.3477 1.52588e-05 10.2505V8.25048C1.52588e-05 8.15325 0.0312862 8.0734 0.0937554 8.01089C0.156225 7.94839 0.236111 7.91715 0.333342 7.91715H13.3334V5.58379C13.3334 5.43798 13.3993 5.33726 13.5313 5.28174C13.6632 5.22621 13.7848 5.24352 13.8959 5.33381L17.8959 8.9796C17.9653 9.04905 18 9.1289 18 9.21919Z" fill="#D90110" />
                  </g>
                  <defs>
                    <clipPath id="clip0_158_8312">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide