const svg = d3.select("svg");

const width = +svg.attr("width");
const height = +svg.attr("height");


const render = data => {
  const xValue = d => +d.utilizacion;
  const yValue = d => unixTimeToHumanTime(d.timestamp);
  const margin = {top: 80, right:20, left:250, bottom:80};
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth]);
    // console.log( data.map(d => d.utilizacion.toFixed(2)));
    console.log( data.map(d => d.utilizacion));
  
  

  const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.1);
    // console.log(yScale.domain());

  const g = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  g.append("g")
    .call(d3.axisLeft(yScale))
    .select(".domain")
      .remove();

  const xAxisG = g.append("g")
    .call(d3.axisBottom(xScale).tickSize(-innerHeight))
    .attr("transform", `translate(0, ${innerHeight})`);
  
  xAxisG.append("text")
    .attr("class", "axis-label")
    .attr("y", 35)
    .attr("x", innerWidth / 2)
    .attr("fill", "black")
    .text("% De utilización");

  g.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
      .attr("y", d => yScale(yValue(d)))
      .attr("width", d => xScale(xValue(d)))
      .attr("height", yScale.bandwidth())
      .style( "fill", function(d) {
        let returnColor;
        if (d.utilizacion <= 10) {
          returnColor = "red";
        } else if (d.utilizacion < 60) {
          returnColor = "steelblue";
        } else { 
          returnColor = "green";
        }
        return returnColor;
    });

  g.append("text")
    .attr("class", "title")
    .attr("y", -15)
    .text("Utilización de maquina en un día");

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
  const humanDateFormat = dateObject.toLocaleString("es", 
  {weekday: "long",
  month: "long", 
  day: "numeric",
  year: "numeric"}) //"domingo, 30 de enero de 53442"
  return humanDateFormat
}


function getMin(data){
  let numbers = data.map(d => d.utilizacion);
  let min = Math.min(...numbers);
  return min;
}