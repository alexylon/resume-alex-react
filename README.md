## Alexander Alexandrov's Website

This is my personal web resume. [Check it out here](https://alexandrov.cc/)

<div align="center"><img align="center" src="/resume-screenshot.jpg" width="2560" alt="Alexander's Website Screenshot"></div>

I used [tbakerx](https://github.com/tbakerx/react-resume-template) as a starting point 
with refactoring, changes and upgrades on my side:

- Migrated all `yarn` scripts to `npm`, as the latter is my personal choice of package manager.
- Replaced scrolling between sections with `react-scroll`. Animated scrolling. Active section is set also with `react-scroll`.
- Fixed iOS navigation issues.
- Migrate `heroicons` to v.2.
- Other UI fixes.

### Start in development mode: 

`npm run dev` then navigate to `http://localhost:3000`

### Build: 

`npm run build` -> the output build directory will be `.next`, and the static build directory will be `out`.

### Start in production mode: 

`npm run build` + `npm run start` then navigate to `http://localhost:3000`

<br/><br/>
[![forthebadge](/src/images/made-with.svg)](https://forthebadge.com)
