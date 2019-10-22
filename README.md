# Plotly Challenge

# Background:
The purpose of this project is to create an app that makes interactive pie charts and bubble charts based on the Javascript library Plotly.js.  This is accomplised by creating routes with Flask and using D3 in Javascript to capture the data from flask and assign it to each plot.  An event listener changes the data feeding the plots once a user clicks on each unique sample.

#  Step 1 - Plotly.js
Use Plotly.js to build interactive charts for your dashboard.
  * Create a PIE chart that uses data from your samples route (/samples/<sample>) to display the top 10 samples.
     * Use sample_values as the values for the PIE chart.
     * Use otu_ids as the labels for the pie chart.
     * Use otu_labels as the hovertext for the chart.
  
  * Create a Bubble Chart that uses data from your samples route (/samples/<sample>) to display each sample.
    * Use otu_ids for the x values.
    * Use sample_values for the y values.
    * Use sample_values for the marker size.
    * Use otu_ids for the marker colors.
    * Use otu_labels for the text values.
 
 * Display the sample metadata from the route /metadata/<sample>
 * Update all of the plots any time that a new sample is selected.
 
 # Step 2
 Deploy the app to Heroku
 
 ### Reference
The completed applicaton can be found on heroku at:  https://dashboard.heroku.com/apps/valmontinteractives
