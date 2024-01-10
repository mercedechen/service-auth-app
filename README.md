# Service Authorization Calculator

The purpose of this app is to improve efficiency in procedural workflows by accurately calculating authorized services based on service types and approved services.

## How to Use
1. Select service type: 
  - PCW (Personal Care Worker)
  - CDPAS (Consumer-Directed Personal Assistant Services)
  - SDC (Social Day Care)

2. Select start date from the calendar or manually input a date using mm/dd/yyyy format, ie. 01/01/2024

3. Select end date from the calendar or manually input a  date using mm/dd/yyyy format, ie. 01/31/2024

4. "Total Days" counts the number of days between the start date and end date

5. Check the days of the week based on member's approved service schedule. If a member receives 7 days of services, checking "all" selects and accounts for 7 days of the week for ease of access.

6. "Days Selected" counts the numbers of days selected in the week

7. "Approved Hours" let's the user input the amount of approved service hours

8. "Total Hours" calculates the number of days selected by the amount of approved hours and returns the result

9. "Total Units" calculates the total approved hours and converts it to units at a set rate of 1 hr = 4 units and returns the result

### Notes
Count the number of days between two (2) dates:
1. Dates default format is strings and JavaScript will require converting to objects to manipulate
2. Dates are in mm/dd/yyyy hh:mm:ss:ms format, remove time by using .setHours(0,0,0,0)
3. Use Math.round(), ((end date value - start date value)/(1000 * 60 * 60 * 24)) +1, to include start date
* 1000 ms = 1s
* 60s = 1m
* 60m = 1h
* 24h = 1d
4. Results renders to HTML ("Total Days" element)
5. If there are no start/end date input, "Total Days" remains at 0

Checkbox for "All" should account for all 7 days of the week:
1. If "All" is checked, then "Days Selected" renders 7
2. If "All" is not checked, then "Days Selected" renders 0
3. If "All is checked, disable single day checkboxes
