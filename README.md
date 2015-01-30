Nice relative time-ago based on Trello's algorithm
---

ie:

- just now
- 7 minutes ago
- an hour ago
- today at 10:31am
- yesterday at 10:45pm
- Jan 28 at 6:00pm


in javascript code

    RelativeTime.from(new Date())

in a template

    {{relativeTime time}}