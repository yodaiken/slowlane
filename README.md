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
    <script>slowlane({page: true})</script>
    <!-- end: slowlane.js -->

Other options & defaults include:

    {
       images: false, // slow down image loading
       img_timeout: 10000, // time to delay image loading by (10 seconds = default)
       loading_img: "", // 'loading image' until timeout; will be browser's default "broken image" if not set
       page: true, // show 'loading...' overlay over page,
       page_loading_img: "http://www.aaronyodaiken.com/slowlane/loading_gif.gif", // background of overlay
       page_loading_text: "We are artifically slowing down your visit to this site to protest the FCC’s failure to protect network neutrality. <a href='#TODO' target='_blank'>Learn more here</a>"
    }

## TODO

- Find better loading indicator
- Create documentation for users
- Create website that explains "slowlane"
- cross browser compatibility checks?
