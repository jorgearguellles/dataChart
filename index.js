const svg = d3.select("svg");

const width = +svg.attr("width");
const height = +svg.attr("height");

const render = data => {
  const xValue = d => d.utilizacion;
  const yValue = d => unixTimeToHumanTime(d.timestamp);
  const margin = {top: 50, right:40, left:340, bottom:30};
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth]);
  
  const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.1);
    //console.log(yScale.domain());

  const g = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  g.append("g")
    .call(d3.axisLeft(yScale))
    .selectAll(".domain")
      .remove();

  g.append("g")
    .call(d3.axisBottom(xScale))
    .attr("transform", `translate(0, ${innerHeight})`);

  g.selectAll("rect").data(data)
    .enter().append("rect")
      .attr("y", d => yScale(yValue(d)))
      .attr("width", d => xScale(xValue(d)))
      .attr("height", yScale.bandwidth());

  g.append("text")
    .attr("y", -15)
    .text("% De utilización de maquina por día")
};

d3.csv("./data/dataGenial.csv").then(data => {
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
