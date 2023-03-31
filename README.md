# dataguard-frontend-challenge

Frontend is deployed on https://dataguard-frontend-challenge.netlify.app/
Backend mock is deployed on https://plugins-api-jd48.vercel.app/api/

### What was done:

Fetching all the data and displaying it in the tabs.
Unfortunately I didn't manage to do everything I wanted to do in the 4 hours time frame.

### Here are the steps I would do next:

- Implement 'disable plugins' functionality. Plugin card already has isDisabled prop. Need to disable plugin depending on the prop value. Could be done via css (div with absolute position and semitransparent background after the element) and disable the toggle via it's prop.
- Currently, on plugin toggle only the local state changes. Need to emit an event on toggle. Event should contain pluginId and isActive in payload. Need to 'prevent default' to avoid reloading and receive the event on the parent element PluginCard.vue. In PluginCard.vue need to dispatch store action. Store action event should change the store state and call REST api to update the plugin stare on server.
- Add global 'plugin disable/enable' toggle. From the NavigationBar component need to dispatch a store action on toggle's change. The store action should change all plugins state and call REST api to update plugins on server.
- Styling improvements.
- Some cleanup. For example group 'error' and 'loading' conditions and move them to separate handlers. Remove code duplication. There are very similar code blocks in stores. probably some helper could be used
- Unit tests are missing
