# AngularMemoryLeaks

The goal of this project is to highlight the link between Angular components and the Observables.<br/>

If you want to play with the memory leaks, you will find a toggle button at top-right of the page
to activate and deactivate the memory leaks. Then you can simply use the Memory tab into the Chrome dev tool and
take several snapshots of the application after navigating into it. <br/>

After comparing your snapshots, you will find references to MessageListComponent and RxJS objects. These references
create memory leaks in the application.

## Installation

1) Install NodeJS: Use the [NodeJS Installer](https://nodejs.org/en/download/)

2) Install the application

```
npm install
```

3) Run the application

```
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
