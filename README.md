# JustFloored

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5. It uses [ExpressJS](https://expressjs.com/) and [NodeJS](https://nodejs.org/en/) version 15.0.1 to configure the server.

This project basically uses the MEAN stack with no need for a database, so EAN stack...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production Server

1) Run `npm run build_prod` to build the project. This will place a production ready version of the app and put it in the `dist/just-floored` directory.
2) Run `node server.js` to run the server. This uses Express.js as the backend. This will run on `localhost:3000` if you are in development. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Project Structure

- The front end code you will find under `just-floored/src`. `server.js` is the script used to configure the server.
- All components are stored in `just-floored/src/app/components`. The components are used to paint the site.
- Serices are stored in `just-floored/src/app/services`. Services are used to communicate with the backend (Express / Node).
- CSS files should be stored in `just-floored/src/assets/css`.
- Images should be stored in `just-floored/src/assets/img`.
- Scripts should be stored in `just-floored/src/assets/js`.
- This project uses Unify template from HTMLStream. `just-floored/src/assets/vendor` are files used by the template. Not all the required, css, js, and vendor files are added to the git repo. If the files are needed, use the `unify.zip` file to access required resources.
- This project uses a `.env` file to work. Make sure you have the development `.env` if you wish to make changes to the site. Contact the website owner for details.
