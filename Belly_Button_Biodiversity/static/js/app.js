function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    let url = `/metadata/${sample}`;
    // Use d3 to select the panel with id of `#sample-metadata`
    d3.json(url).then(function(sample) {
      let metadata_sample = d3.select("#sample-metadata");
    // Use `.html("") to clear any existing metadata
      metadata_sample.html("");
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(sample).forEach(function ([key, value]){
      let row = metadata_sample.append("p");
      row.text(`${key}: ${value}`)
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
    })   
});
}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
      let charturl = `/samples/${sample}`;
      d3.json(charturl).then(function(bub) {

    // @TODO: Build a Bubble Chart using the sample data
      let xvalues = bub.otu_ids;
      let yvalues = bub.sample_values;
      let markersize = bub.sample_values;
      let markercolors = bub.otu_ids;
      let textvalues = bub.otu_labels;

      let trace = {
        x: xvalues,
        y: yvalues,
        text: textvalues,
        mode: 'markers',
        marker: {
          size: markersize,
          color: markercolors
        }
      
      };

      let data = [trace];

      let layout = {
        xaxis: {title: "OTU ID"},
      };

      Plotly.newPlot("bubble",data,layout);
    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).

      d3.json(charturl).then(function(pi) {
        let pivalues = pi.sample_values.slice(0,10);
        let pilabels = pi.otu_ids.slice(0,10);
        let pihovertext = pi.otu_labels.slice(0,10);

        let trace1 = {
          values: pivalues,
          labels: pilabels,
          hovertext: pihovertext,
          type: 'pie'
        };

        let data2 = [trace1]

        Plotly.newPlot('pie',data2);



































      });

  });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
