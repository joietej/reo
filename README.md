# reo

# Getting started

## Requirements
- [Design](https://www.figma.com/proto/4v2vqqsnubWyedOb0bZuVU/File-Selector-case?node-id=1%3A1944&viewport=1477%2C398%2C1.2320507764816284&scaling=min-zoom&page-id=0%3A1)
- [Use case](https://reoso.notion.site/File-Selector-case-7fb10e9fa9f242e9b30228dcaca7eb87)

## CI / CD
- [Project Vercel](https://vercel.com/tejassahasrabudhe/reo) 
- [Portal](https://reo-olive.vercel.app/)
## Bootstrap
This project was bootstrapped with [Vue ClI](https://cli.vuejs.org/).

## Assumptions & Comments
- Sample Data
  - Image urls are not accusable hence using file icons instated of image.
- UI / UX
  - Fonts & Colors are not 100% matched with given design.
  - Used overlay to create model dialog.
  - By default dialog is centered on screen.
  - Clicking outside the dialog closes the dialog.
- Testing 
  - Added one e2e test case - select single file
  - Added couple of unit tests as example
## Libraries

This project uses libraries which are available for Vue and React for seamless transition.
- [Headeless UI](https://headlessui.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vue Test Utils](https://vue-test-utils.vuejs.org/)



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
