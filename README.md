Express Blocking Handler
------------------------

If there are some slow blocking code in route handlers, what will happen.

```
npm install
node index.js
```

Then open several terminal sessions, visit the url:

<http://localhost:3000>

at the near same time.

You will see all the requests are accepted, but each later request has more time to get the response.