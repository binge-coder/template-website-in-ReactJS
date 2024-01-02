const Banner = ({passOnClick}:any) => {
  return (
      <>
          <div role="alert" className="alert alert-info shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div className="text-info-content">
                  <h3 className="font-bold">New message!</h3>
                  <div className="text-xs">Wanna hide this banner?</div>
              </div>
              <button className="btn btn-sm" onClick={passOnClick}>hide this</button>
          </div>
    </>
  )
}

export default Banner