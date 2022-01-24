# p5-sketch-gui

> Create [p5](https://p5js.org) sketch thanks to a simple graphical user interface that adds controls for any variables.

⚠️ It is a personal project. I have created it quickly enough to meet my needs. It will be enhanced over the time.

## Documentation

### Start the application

```sh
# Use the project node version
nvm use

# Install dependencies
npm install

# Start the local web server
npm start
```

### Create a sketch file

Create a JavaScript file in the `src/sketches` folder. You can duplicate the sample `sketch.js` that exports a simple sketch and controls to customize the canvas size.

This file should export at least a named function called `getSketchDefinition`. The exported `controls` constant is not mandatory but, well, this is the main goal of the application!

Go to `http://localhost:3000/` and type the name of your file in the dedicated input to load it:

![Sketch input](docs/sketch-input.png)


### Add controls

Export a `controls` object with simple key/value pairs:

```js
export const controls = {
  canvasWidth : 800,
  canvasHeight : 800
};
```

This will generate a menu with two sliders:

![Generated menu](docs/generated-menu.png)

Instead of simple key/value pairs, you can use key/object pairs to have more control over the generated menu:

```js
export const controls = {
  canvasWidth : {
    value : 800,
    min : 400,
    max : 1200
  },
  canvasHeight : {
    value : 800,
    min : 400,
    max : 1200
  }
};
```

### Add sketch

Export a [`getSketchDefinition`](#get-sketch-definition) function:

```js
export function getSketchDefinition(state) {
  const { canvasWidth, canvasHeight } = state;

  return {
    settings : {
      width : canvasWidth,
      height : canvasHeight
    },
    shapes : [{
      type : "rect",
      params : {
        x : 20,
        y : 20,
        width : 300
      }
    }]
  };
}
```

<a name="get-sketch-definition"></a>
#### `getSketchDefinition`

- **state** `Object` updated value of your variables
- returns a [Sketch Definition Object](#sketch-definition)

<a name="sketch-definition"></a>
#### Sketch Definition

- **settings** `Object`
  - **backgroundColor** `string` sketch background color
  - **width** `string` sketch width
  - **height** `string` sketch height
- **shapes** `Array<Object>` Containing an array of [Shape Object](#shape)

<a name="shape"></a>
#### Shape

- **type** `string` type of shape. Possible values: `circle`, `cubic-bezier`, `line`, `rect` **(Required)**
- **params** `Object` Containing a [Circle Params Object](#circle-params), or a [Cubic Bezier Params Object](#cubic-bezier-params), or a [Line Params Object](#line-params), or a [Rect Params Object](#rect-params) **(Required)**

<a name="circle-params"></a>
#### Circle Params

- **x** `number` circle center x-coordinate **(Required)**
- **y** `number` circle center y-coordinate **(Required)**
- **diameter** `number` circle diameter **(Required)**
- **backgroundColor** `string` circle background color
- **borderColor** `string` circle border color

<a name="cubic-bezier-params"></a>
#### Cubic Bezier Params

- **p0** `Object` first point coordinates **(Required)**
  - **x** `number` first point x-coordinate **(Required)**
  - **y** `number` first point y-coordinate **(Required)**
- **p1** `Object` second point coordinates **(Required)**
  - **x** `number` second point x-coordinate **(Required)**
  - **y** `number` second point y-coordinate **(Required)**
- **p2** `Object` third point coordinates **(Required)**
  - **x** `number` third point x-coordinate **(Required)**
  - **y** `number` third point y-coordinate **(Required)**
- **p3** `Object` fourth point coordinates **(Required)**
  - **x** `number` fourth point x-coordinate **(Required)**
  - **y** `number` fourth point y-coordinate **(Required)**
- **color** `string` curve color

<a name="line-params"></a>
#### Line Params

- **p0** `Object` first point coordinates **(Required)**
  - **x** `number` first point x-coordinate **(Required)**
  - **y** `number` first point y-coordinate **(Required)**
- **p1** `Object` second point coordinates **(Required)**
  - **x** `number` second point x-coordinate **(Required)**
  - **y** `number` second point y-coordinate **(Required)**
- **color** `string` line color

<a name="rect-params"></a>
#### Rect Params

- **x** `number` rect top left point x-coordinate **(Required)**
- **y** `number` rect top left point y-coordinate **(Required)**
- **width** `number` rect width **(Required)**
- **height** `number` rect height
- **backgroundColor** `string` rect background color
- **borderColor** `string` rect border color