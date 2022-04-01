import { useState } from 'preact/hooks';

export default function Input({
  name,
  inputValue,
  onInput,
  onBlur,
  hasCopyButton,
}) {
  const [copied, setCopied] = useState(false);
  function copy(id) {
    const el = document.getElementById(id);
    el.select();
    document.execCommand('copy');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <div className="w-full relative box-border grid gap-2 group mb-4 lg:mb-0">
      <label className="text-sm font-bold uppercase" for={name}>
        {name}
      </label>
      <div className="relative">
        <input
          id={name}
          placeholder="0"
          value={inputValue}
          onInput={onInput}
          onBlur={onBlur}
          className="w-full rounded-xl bg-gray-50 ring-2 ring-gray-100 hover:ring-4 focus:ring-4 border-2 border-transparent
      focus:border-black outline-none text-center text-2xl lg:text-6xl placeholder:text-gray-300 transition
      duration-200 ease-in-out p-4 lg:py-8"
          type="number"
          name={name}
        />
        {hasCopyButton && (
          <button
            ariaLabel="Copy"
            disabled={!inputValue}
            className="absolute top-0 right-0 hidden group-hover:flex text-black p-2 disabled:text-[rgba(0,0,0,0.3)] disabled:cursor-default cursor-pointer"
            onClick={() => copy(name)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        )}
      </div>
      {hasCopyButton && (
        <p
          className={`${
            copied ? 'block' : 'hidden'
          } absolute top-0 right-0 bg-gray-200 text-black bg-opacity-15 rounded-md text-sm py-1 px-2 -mt-2`}
        >
          Copied!
        </p>
      )}
    </div>
  );
}
