# angular

Coding Pirates: Angular course


## Tools

- VS Code
- Angular Language Service extension


## Scaffold a project

```powershell
choco install nvm -y
nvm install lts
npm install -g @angular/cli
ng --version  # Verification

ng new <app-name> # All defaults
cd <app-name>
ng serve --open

ng g c <comp-name>
ng g service <service-name>
```


## Development

- Create components: `header`, `picker`, `field`
- Show `header`, `picker` and `field` inside the main `app-root` component.
- Get a tileset from [here](https://emanuelledev.itch.io/farm-rpg?download), split it into tiles.
- Create a component: `brick`. Show an image.
- Create a service: `brick-selection`. Define the available bricks there.
- Create a component: `brick-selector`. Show a brick, react on click.
- Make the `picker` show the available bricks.
- Make the `header` show the selected brick.
- Create a service: `field`. Define the field array.
- Make the `field` show the bricks in the array. React on click.


## Publish to Firebase

- Go to [Firebase](firebase.google.com)
- Log in.
- Click _Go to Console_.
- Create a new project, go through the choices.
- Choose _Hosting_.
- Follow the commands:
  * `npm install -g firebase-tools`
  * `firebase login`
  * `firebase init` - choose _Hosting_ (not _App Hosting_)
  * `ng build --configuration production`
  * `firebase deploy`
