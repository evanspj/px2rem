const sizes = [
  { px: 4, rem: 0.25 },
  { px: 8, rem: 0.5 },
  { px: 12, rem: 0.75 },
  { px: 16, rem: 1 },
  { px: 20, rem: 1.25 },
  { px: 24, rem: 1.5 },
  { px: 32, rem: 2 },
  { px: 40, rem: 2.5 },
  { px: 48, rem: 3 },
  { px: 64, rem: 4 },
  { px: 96, rem: 6 },
  { px: 128, rem: 8 },
  { px: 160, rem: 10 },
  { px: 176, rem: 11 },
  { px: 192, rem: 12 },
  { px: 208, rem: 13 },
  { px: 224, rem: 14 },
  { px: 256, rem: 16 },
  { px: 320, rem: 20 },
  { px: 480, rem: 30 },
  { px: 576, rem: 36 },
  { px: 768, rem: 48 },
  { px: 800, rem: 50 },
  { px: 960, rem: 60 },
  { px: 992, rem: 62 },
  { px: 1024, rem: 64 },
  { px: 1120, rem: 70 },
  { px: 1200, rem: 75 },
  { px: 1280, rem: 80 },
  { px: 1440, rem: 90 },
  { px: 1600, rem: 100 },
]

export default function SizesSidebar({ close, sizesSidebar }) {
  return (
    <aside
      className={`fixed top-0 bottom-0 right-0 w-[400px] h-screen bg-white border-l-2 border-gray-100 ${
        sizesSidebar
          ? 'translate-x-0'
          : 'translate-x-full xl:translate-x-[400px]'
      } transition-all duration-400 ease-in-out `}
    >
      <div class="relative px-6 pt-6 pb-16">
        <header class="absolute top-4 right-6 w-full flex justify-end z-20">
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
        <section class="sticky top-6 max-h-[calc(100vh-100px)]  overflow-y-scroll">
          <h3 class="sticky top-0 bg-white font-bold text-xl">
            Basic Size Conversions
          </h3>
          <ul class="list-none  mt-3">
            {sizes.map((size, i) => (
              <li
                key={i}
                class="grid grid-cols-2 border-b border-gray-300 last:border-none py-1"
              >
                <p>{size.px}px</p>
                <p>{size.rem}rem</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  )
}
