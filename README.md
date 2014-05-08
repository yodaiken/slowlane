slowlane
========

A quick implementation of: https://news.ycombinator.com/item?id=7710140

## Demo

http://aaronyodaiken.com/slowlane/demo/

## Usage

As early as possible in your page, include this HTML:

    <!-- start: slowlane.js -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="http://aaronyodaiken.com/slowlane/slowlane.js"></script>
    <script>slowlane()</script>
    <!-- end: slowlane.js -->

You can pass `slowlane` an optional object like this:

    {
       slow_timeout: 10000, // time to delay image loading by (10 seconds = default)
       msg_header: 'Does this site seem a bit slow?'
       msg: 'We are intentionally…',
       ctoa: 'We can only stop this with your help:',
       primary: 'I am in - how can I help?',
       primary_open: 'http://whitehouse.gov/...',
       secondary: 'More info, please?',
       secondary_open: 'http://wikipedia...'
    }

## TODO

- `fgrep todo`
- Create documentation for users
- Create website that explains "slowlane"
- cross browser compatibility checks?
