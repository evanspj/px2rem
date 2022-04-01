export default function InfoSidebar({ close, infoSidebar }) {
  return (
    <aside
      className={`fixed top-0 bottom-0 right-0 w-full xl:w-[600px] h-screen bg-white border-l-2 border-gray-100 ${
        infoSidebar ? 'translate-x-0' : 'translate-x-full'
      } transition-all duration-400 ease-in-out `}
    >
      <div class="relative px-4 xl:px-6 pt-12 pb-16">
        <header class="absolute top-4 right-4 xl:top-6 xl:right-6 w-full flex justify-end z-20">
          <button
            onClick={close}
            class="rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in-out
          p-1"
          >
            <svg
              class="w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </header>
        <div className="sticky top-6 max-h-[calc(100vh-100px)]  overflow-y-scroll">
          <section class="px-8 leading-relaxed">
            <h3 class="font-bold text-xl">How are the units calculated?</h3>
            <ul class="list-circle space-y-4 mt-3">
              <li className="ml-5">
                Both the <code>px</code> and <code>rem</code> units are
                calculated based off the <code>base</code>
                size you set. (Defaults to 16px)
              </li>
              <li className="ml-5">
                In order to get the <code>px</code> value, it is either 1) set
                by you directly or 2) calculated based off the <code>rem</code>{' '}
                value you input using the following formula: <code>px</code>={' '}
                <code>rem</code> x <code>base</code>.
              </li>
              <li className="ml-5">
                Getting the <code>rem</code> value is similar to the{' '}
                <code>px</code>
                method and is 1) set by you directly or 2) calculated based off
                the
                <code>px</code>
                value you input using the following formula:
                <code>rem</code> = <code>px</code> / <code>base</code>.
              </li>
            </ul>
          </section>
          <section class="leading-relaxed px-8 mt-8">
            <h3 class="font-bold text-xl">
              Why another pixel to rem converter?
            </h3>
            <p class="mt-3">
              I found myself utilizing other online resources more frequently
              while designing projects that aimed to use the amazing{' '}
              <a
                href="https://tailwindcss.com"
                class="underline hover:text-violet-300"
              >
                Tailwind CSS
              </a>{' '}
              framework, however wanted something that was a bit more minimal
              and ad free. Also, it gave me an excuse to use{' '}
              <a
                href="https://vitejs.dev"
                class="underline hover:text-violet-300"
              >
                Vite
              </a>{' '}
              in a project.
            </p>
          </section>
        </div>
      </div>
    </aside>
  );
}
