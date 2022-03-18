import { useState } from 'preact/hooks'

import Input from './components/Input'
import SizesSidebar from './components/SizesSIdebar'
import InfoSidebar from './components/InfoSIdebar'

export function App() {
  const [baseSize, setBaseSize] = useState(16)
  const [px, setPx] = useState(null)
  const [rem, setRem] = useState(null)
  const [focusedValue, setFocusedValue] = useState(false)
  const [infoSidebar, setInfoSidebar] = useState(false)
  const [sizesSidebar, setSizesSidebar] = useState(false)

  function toPX(e) {
    const value = e.target.value
    if (value > 0) {
      setPx(value * 1)
      setRem(value / baseSize)
    } else {
      setPx(null)
      setRem(null)
    }
    setFocusedValue('px')
  }

  function toREM(e) {
    const value = e.target.value
    if (value > 0) {
      setPx(value * baseSize)
      setRem(value * 1)
    } else {
      setPx(null)
      setRem(null)
    }
    setFocusedValue('rem')
  }

  function updateBase(e) {
    const value = e.target.value
    setBaseSize(value)

    if (focusedValue == 'px') {
      setRem(value ? px / value : null)
    }
    if (focusedValue == 'rem') {
      setPx(value ? rem * value : null)
    }
  }

  function toggleInfoSidebar() {
    if (sizesSidebar) {
      setSizesSidebar(false)
    }
    setInfoSidebar(!infoSidebar)
  }

  function toggleSizesSidebar() {
    if (infoSidebar) {
      setInfoSidebar(false)
    }
    setSizesSidebar(!sizesSidebar)
  }

  return (
    <main className="w-full min-h-screen flex transition duration-200 ease-in-out">
      <div
        className={`flex grow flex-col flex-wrap justify-between items-center ${
          sizesSidebar ? 'xl:mr-[400px]' : 'mr-0'
        } ${
          infoSidebar ? 'xl:mr-[600px]' : 'mr-0'
        } transition-all duration-400 ease-in-out`}
      >
        <header className="w-full flex justify-between px-4 lg:px-10 py-5">
          <div className="w-28">
            <svg
              className="w-full fill-current"
              viewBox="0 0 1077 241"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M862.106 182V35.41h178.94c6.74 0 12.806 1.644 18.198 4.93 5.391 3.285 9.688 7.624 12.89 13.015 3.2 5.392 4.801 11.29 4.801 17.692V182h-35.889V72.816c0-.337-.126-.674-.379-1.01-.253-.338-.632-.506-1.137-.506h-50.295c-.506 0-.885.168-1.138.505-.253.337-.379.674-.379 1.011V182h-36.142V72.816c0-.337-.168-.674-.505-1.01-.337-.338-.674-.506-1.011-.506h-50.548c-.337 0-.632.168-.885.505-.252.337-.379.674-.379 1.011V182Zm-140.018 0c-6.402 0-12.3-1.643-17.692-4.928-5.391-3.286-9.73-7.625-13.016-13.017-3.285-5.391-4.928-11.289-4.928-17.691V71.047c0-6.403 1.643-12.3 4.928-17.692 3.286-5.391 7.625-9.73 13.016-13.016 5.392-3.285 11.29-4.928 17.692-4.928h77.339c6.571 0 12.552 1.643 17.944 4.928 5.392 3.286 9.689 7.625 12.89 13.016 3.201 5.392 4.802 11.29 4.802 17.692v55.856H722.341v17.691c0 .337.169.674.505 1.011.337.337.675.506 1.011.506h111.206V182H722.088Zm.253-87.195h76.833V72.816c0-.337-.168-.674-.506-1.01-.336-.338-.673-.506-1.01-.506h-73.8c-.337 0-.675.168-1.012.505-.336.337-.505.674-.505 1.011ZM551.994 182V71.047c0-6.403 1.643-12.3 4.929-17.692 3.285-5.391 7.666-9.73 13.142-13.016 5.476-3.285 11.415-4.928 17.818-4.928h81.13V71.3H589.4c-.337 0-.674.168-1.011.505-.337.337-.506.674-.506 1.011V182Zm-208.51 0v-70.262c0-6.571 1.642-12.552 4.928-17.944 3.286-5.392 7.624-9.689 13.016-12.89 5.392-3.201 11.373-4.802 17.945-4.802h106.15c.338 0 .675-.169 1.012-.506.336-.337.505-.674.505-1.01V37.432c0-.337-.169-.674-.505-1.011-.337-.337-.674-.506-1.011-.506H380.889c-.337 0-.674.169-1.01.506-.338.337-.506.674-.506 1.01v13.649h-35.89V35.664c0-6.572 1.643-12.553 4.93-17.945 3.285-5.392 7.623-9.688 13.015-12.89C366.82 1.628 372.801.027 379.373.027H487.04c6.403 0 12.342 1.6 17.818 4.802 5.476 3.202 9.857 7.498 13.143 12.89 3.285 5.392 4.928 11.373 4.928 17.945v40.69c0 6.572-1.643 12.553-4.928 17.945-3.286 5.392-7.667 9.73-13.143 13.016-5.476 3.286-11.415 4.929-17.818 4.929H380.89c-.338 0-.675.168-1.012.505-.337.337-.505.674-.505 1.011v30.834c0 .337.168.674.505 1.011.337.337.674.506 1.011.506h142.04V182Zm-177.677 0v-10.868l52.065-63.69-52.065-61.163V35.41h37.911l37.659 44.482 37.405-44.482h37.911v10.868l-52.064 61.163 52.064 63.69V182h-37.658l-37.658-46.251L203.718 182ZM.01 240.13V35.41h112.975c6.57 0 12.552 1.644 17.944 4.93 5.392 3.285 9.689 7.624 12.89 13.015 3.201 5.392 4.802 11.29 4.802 17.692v75.317c0 6.402-1.6 12.3-4.802 17.691-3.201 5.392-7.498 9.731-12.89 13.017-5.392 3.285-11.373 4.928-17.944 4.928H35.899v58.13Zm37.405-94.02h73.8c.506 0 .885-.168 1.138-.505.253-.337.379-.674.379-1.01V72.815c0-.337-.126-.674-.38-1.01-.252-.338-.631-.506-1.137-.506h-73.8c-.337 0-.674.168-1.01.505-.338.337-.506.674-.506 1.011v71.778c0 .337.168.674.505 1.011.337.337.674.506 1.011.506Z"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleInfoSidebar}
              className="flex items-center text-gray-500 hover:text-black transform transition
            duration-200 ease-in-out mr-4"
            >
              <p className="font-medium ml-2">About</p>
            </button>
            <button
              onClick={toggleSizesSidebar}
              className="flex items-center text-gray-500 hover:text-black transform transition
            duration-200 ease-in-out mr-4"
            >
              <p className="font-medium ml-2">Size Reference</p>
            </button>
            <a className="mr-4" href="#">
              <svg
                className="w-6 text-gray-500 hover:text-black transform transition duration-200
              ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 47"
              >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g
                    fill="currentColor"
                    transform="translate(-700.000000, -560.000000)"
                  >
                    <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </header>
        <div className="max-w-screen-lg lg:grid grid-cols-1 lg:grid-cols-3 gap-x-10 p-4  mt-10 lg:mt-0">
          <Input
            name="base"
            inputValue={baseSize}
            onInput={updateBase}
            onBlur={(e) => {
              !e?.target?.value ? setBaseSize(16) : null
            }}
          />
          <Input
            name="px"
            inputValue={px}
            onInput={toPX}
            onBlur={(e) => {
              !e?.target?.value ? setPx(null) : null
            }}
            hasCopyButton
          />
          <Input
            name="rem"
            inputValue={rem}
            onInput={toREM}
            onBlur={(e) => {
              !e?.target?.value ? setRem(null) : null
            }}
            hasCopyButton
          />
          <div className="w-full lg:col-span-3 flex justify-center">
            <p className="w-full max-w-lg lg:text-2xl font-semibold text-center mt-24">
              Type in a px or rem value and watch it convert in real-time.
              Enjoy!
            </p>
          </div>
        </div>
        <footer className="w-full flex flex-col items-center mb-2">
          <p className="text-xs">
            Designed and Developed by{' '}
            <a className="underline" href="">
              Patrick Evans
            </a>
          </p>
          <p>
            <a className="underline text-xs" href="">
              MIT License
            </a>{' '}
          </p>
        </footer>
      </div>
      <SizesSidebar
        sizesSidebar={sizesSidebar}
        close={() => setSizesSidebar(false)}
      />
      <InfoSidebar
        infoSidebar={infoSidebar}
        close={() => setInfoSidebar(false)}
      />
    </main>
  )
}
