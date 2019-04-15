# Migration guide nativescfript-fresco -> nativescript-image
If you have an app the uses nativescript-fresco plugin for efficienlty displaing images on Android, this guide can help you. If you are just starting with this plugin, however, if would be best to use [NativeScript Image plugin](https://github.com/Akylas/nativescript-image) and refer to its documentation.

The api is kept almost the same, so you wouldn't need much changes in your code.

#### 1. Add nativescript-image plugin to your app
Go to your app's root folder in terminal app and execute
```
tns plugin add nativescript-image
```

#### 2. Initialize nativescript-image
Initialize `nativescript-image` in the `launch` event of your {N} application by using the following code:

JavaScript:

```javascript
var application = require("application");
var imageModule = require("nativescript-image");

if (application.android) {
    application.on("launch", function () {
        imageModule.initialize();
    });
}
```

TypeScript:

```typescript
import application = require("application");
import imageModule = require("nativescript-image");

if (application.android) {
    application.on("launch", () => {
        imageModule.initialize();
    });
}
```

#### 3. Update fresco usages with image
##### Update import statements
```typescript
import * as frescoModel from "nativescript-fresco";
```
to
```typescript
import * as imageModel from "nativescript-image";
```

##### Update the XML namespace (xmlns)
```xml
xmlns:fresco="nativescript-fresco"
```
to
```xml
xmlns:img="nativescript-image"
```

##### Update markup
```xml
<fresco:FrescoDrawee imageUri="https://raw.githubusercontent.com/...
```
to
```xml
<img:Img src="https://raw.githubusercontent.com/
```

```html
<FrescoDrawee imageUri="https://raw.githubusercontent.com/...
```
to
```html
<NSImg src="https://raw.githubusercontent.com/...
```
for angular apps

#### 4. Remove nativescript-fresco initialization
```typescript
...
fresco.initialize();
...
```

#### 5. Uninstall nativescript-fresco plugin from your app
Go to your app's root folder in terminal app and execute
```
tns plugin remove nativescript-fresco
```

You can check migrated versions of the demo apps in the [migrated-demos branch](https://github.com/NativeScript/nativescript-fresco/tree/migrated-demos)