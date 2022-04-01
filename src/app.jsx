import { useState } from 'preact/hooks';

import Input from './components/Input';
import SizesSidebar from './components/SizesSIdebar';
import InfoSidebar from './components/InfoSIdebar';

function NavButton({ children, link, href, onClick }) {
  const buttonClasses =
    'flex items-center text-sm rounded-md md:text-base  hover:bg-gray-100 transition-all duration-200 ease-in-out px-3 py-1';

  if (link) {
    return (
      <a
        className={buttonClasses}
        target="_blank"
        rel="noreferrer noopener"
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

export function App() {
  const [baseSize, setBaseSize] = useState(16);
  const [px, setPx] = useState(null);
  const [rem, setRem] = useState(null);
  const [focusedValue, setFocusedValue] = useState(false);
  const [infoSidebar, setInfoSidebar] = useState(false);
  const [sizesSidebar, setSizesSidebar] = useState(false);

  function toPX(e) {
    const value = e.target.value;
    if (value > 0) {
      setPx(value * 1);
      setRem(value / baseSize);
    } else {
      setPx(null);
      setRem(null);
    }
    setFocusedValue('px');
  }

  function toREM(e) {
    const value = e.target.value;
    if (value > 0) {
      setPx(value * baseSize);
      setRem(value * 1);
    } else {
      setPx(null);
      setRem(null);
    }
    setFocusedValue('rem');
  }

  function updateBase(e) {
    const value = e.target.value;
    setBaseSize(value);

    if (focusedValue == 'px') {
      setRem(value ? px / value : null);
    }
    if (focusedValue == 'rem') {
      setPx(value ? rem * value : null);
    }
  }

  function toggleInfoSidebar() {
    if (sizesSidebar) {
      setSizesSidebar(false);
    }
    setInfoSidebar(!infoSidebar);
  }

  function toggleSizesSidebar() {
    if (infoSidebar) {
      setInfoSidebar(false);
    }
    setSizesSidebar(!sizesSidebar);
  }

  return (
    <main className="w-full min-h-screen flex transition duration-200 ease-in-out">
      <div
        className={`lg:flex grow flex-col flex-wrap justify-between items-center ${
          sizesSidebar ? 'xl:mr-[400px]' : 'mr-0'
        } ${
          infoSidebar ? 'xl:mr-[600px]' : 'mr-0'
        } transition-all duration-400 ease-in-out`}
      >
        <header className="w-full flex justify-between px-4 lg:px-10 py-5">
          <div className="w-20 md:w-28">
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
          <div className="flex items-center space-x-4">
            <NavButton onClick={toggleInfoSidebar}>
              <p className="font-medium">About</p>
            </NavButton>
            <NavButton onClick={toggleSizesSidebar}>
              <p className="font-medium">Size Reference</p>
            </NavButton>
            <NavButton link href="https://github.com/evanspj/px2rem">
              <p className="font-medium mr-1">Github</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path
                    fill="currentColor"
                    d="M14,1H6v2h5.586L1.293,13.293l1.414,1.414L13,4.414V10h2V2C15,1.448,14.552,1,14,1z"
                  ></path>
                </g>
              </svg>
            </NavButton>
          </div>
        </header>
        <div className="max-w-screen-lg grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-10 px-8 lg:p-4 mx-auto mt-10 lg:mt-0">
          <Input
            name="base"
            inputValue={baseSize}
            onInput={updateBase}
            onBlur={(e) => {
              !e?.target?.value ? setBaseSize(16) : null;
            }}
          />
          <Input
            name="px"
            inputValue={px}
            onInput={toPX}
            onBlur={(e) => {
              !e?.target?.value ? setPx(null) : null;
            }}
            hasCopyButton
          />
          <Input
            name="rem"
            inputValue={rem}
            onInput={toREM}
            onBlur={(e) => {
              !e?.target?.value ? setRem(null) : null;
            }}
            hasCopyButton
          />
          <div className="w-full lg:col-span-3 flex justify-center">
            <p className="w-full max-w-lg lg:text-2xl font-semibold text-center mt-6 mb-10 lg:mt-24">
              Type in a pixel or rem value and watch it convert in real-time.
              Enjoy!
            </p>
          </div>
        </div>
        <footer className="w-full flex flex-col items-center mb-2">
          <p className="text-xs">
            Designed and Developed by{' '}
            <a
              className="underline"
              target="_blank"
              rel="noopener"
              href="https://evanspj.com"
            >
              Patrick Evans
            </a>
          </p>
          <p>
            <a
              className="underline text-xs"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/evanspj/px2rem/blob/main/LICENSE"
            >
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
  );
}
