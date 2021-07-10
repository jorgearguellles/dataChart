const svg = d3.select("svg");

const width = +svg.attr("width");
const height = +svg.attr("height");

const render = data => {

  const xValue = d => d.utilizacion;
  const yValue = d => unixTimeToHumanTime(d.timestamp);

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, width]);
  
  const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, height]);
  
    //console.log(yScale.domain());

  svg.selectAll("rect").data(data)
    .enter().append("rect")
      .attr("y", d => yScale(yValue(d)))
      .attr("width", d => xScale(xValue(d)))
      .attr("height", yScale.bandwidth());
};

d3.csv("dataGenial.csv").then(data => {
  data.forEach(d => {
    d.utilizacion = +d.utilizacion;
  });
  render(data);
});


function unixTimeToHumanTime(timestamp){
  const milliseconds = timestamp * 1000 
  const dateObject = new Date(milliseconds)
  const humanDateFormat = dateObject.toLocaleString("es", {weekday: "long", month: "long", day: "numeric",year: "numeric"}) //"domingo, 30 de enero de 53442"
  return humanDateFormat
}