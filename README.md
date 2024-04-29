# SenseLynk Front End

This React App should be hosted on an AWS machine where IoT devices are connected to. Meta data, sensor data and sensor control are handled by the AWS backend, while front end UI are provided by this App.

## Components Library
[Shadcn](https://ui.shadcn.com/) provides a collection of reusable components that can be pasted into JSX. Shadcn support CLI install with Vanilla React, usage can be found here [Usage](https://ui.shadcn.com/docs/cli), run `npx shadcn-ui@latest add [component]` to add components.

Configuration with vanilla React requires a dummy `tsconfig.json` file, and @ alias can be setup using `craco.config.js`. `package.json` should then be updated to use craco when running script:
```
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

## REST API