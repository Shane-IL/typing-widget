# Typing Widget

Little widget that prints text with a typing animation and then erases it in a loop

## Usage

```js
TypingWidget.init('text', document.querySelector('.widget-container'), {options});
```

## Options
```js
Options (values displayed are defaults, all are int and in ms)
 {
    longPause: 800, //the pause between when the widget finishes typing or deleting the string.
    keyStrokePause: 200, //the pause between each keystroke when typing the string
    deletePause: 50 //the pause between each character deletion when deleting the string
 }
```


## Customization
You can use the following CSS classes for the widget
```js
typing-widget //the main widget
typing-widget-display //the container for the display elements
typing-widget-text //the string that is typed and deleted
typing-widget-cursor //the cursor
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
