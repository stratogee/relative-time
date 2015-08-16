Nice relative time-ago based on Trello's algorithm
---

The other algorithms like "timeago" don't take into account things like whether the date in question was yesterday or today to provide the most intuitive textual representation.

This package outputs text in the following formats based on how long ago the date was:

- just now
- 7 minutes ago
- an hour ago
- today at 10:31am
- yesterday at 10:45pm
- Jan 28 at 6:00pm

The textual representation updates in real-time

in javascript code (reactive)

    RelativeTime.from(new Date())

in a template (reactive)

    {{relativeTime time}}
