# Real-Time Bus Tracker Project
> Mapping live data from Boston Transit - Project for Week 9 MIT Full Stack Development

## Description
This project is to track the current bus locations for busses on Route 1 in Boston, MA, specifically between MIT and Harvard. We are using **mapbox** as the mapping platform and accessing live bus gps information from the **MBTA API**.

I added layers showing the route location on the map as well as the stops. I also added onhover popups to show the stop titles.

To track the current bus locations I am using "markers". For the markers I created a custom svg file and in addition to positioning using the latitude and longitude I also have them orient based on supplied direction (bearing) data. The markers also have a popup which shows the route number and last stop (direction) that can be activated by clicking on them.

## How to Run
This project can be viewed live at [kparsonsDesign.github.io/bustracker/](kparsonsdesign.github.io/bustracker/).

## Roadmap of Future Improvements
- Improve the functionality of the marker popups so that they are onhover events instead of click.
- Add a dropdown menu to show only busses travelling in a single direction along the route or both (ie: inbound, outbound, all).
- Extend the route line layer to include all of route 1, not just between MIT and Harvard.
- Color code the markers based on occupancy percentage (green for empty, red for full).

## License
MIT License

Copyright (c) 2022 Katherine Parsons

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
