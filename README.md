![px2rem-repo-image](https://user-images.githubusercontent.com/8595624/159067182-6eab2510-1dd8-423e-93fb-62d020bf2862.jpg)

# px2rem
A simple pixel to rem converter with a minimal design.

### How are the units calculated?
- Both the `px` and `rem` units are calculated based off the `base` size you set. (Defaults to 16px)
- In order to get the `px` value, it is either 1) set by you directly or 2) calculated based off the `rem` value you input using the following formula: `px` = `rem` x `base`.
- Getting the `rem` value is similar to the `px` method and is 1) set by you directly or 2) calculated based off the `px` value you input using the following formula: `rem` = `px` / `base`.

### Why another pixel to rem converter?
I found myself utilizing other online resources more frequently while designing projects that aimed to utilize the amazing [Tailwind CSS](https://tailwindcss.com) framework, however wanted something that was a bit more minimal and ad free. Also, it gave me an excuse to use [Vite](https://vitejs.dev) in a project.


### Run locally on your machine
1. Download or clone repo `git clone https://github.com/evanspj/px2rem.git`
2. Go to product root directory `cd px2rem`
3. Run `yarn` or `npm install` to install the necessary dependencies
4. Start dev server: `yarn dev` or `npm run dev`


### License
[MIT License](/LICENSE)
