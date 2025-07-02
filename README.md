# My website

Hi! This site is just whatever I felt like writing about at the time. Feel free to let me know if there are any problems :)

## Other stuff for me to remember

### React
```ssh
WATCHPACK_POLLING = true
```

### CSS
```css
/* blur behind a dialog */
dialog::backdrop {
    backdrop-filter: blur(3px);
}

/* checkbox colours */
input[type="checkbox"] {
    /* checked colour */
    accent-color: rebeccapurple;
    /* unchecked colour */
    filter: invert(53%) sepia(30%) saturate(3747%) hue-rotate(213deg) brightness(105%) contrast(104%);
}

input[type="checkbox"]:checked {
    /* otherwise it interferes with accent-color */
    filter: none;
}

/* rectangle around what's in focus */
:focus-visible {
    outline: 2px solid pink;
}

/* highlight */
::selection {
    background-color: pink;
}
```
