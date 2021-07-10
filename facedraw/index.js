

const svg = d3.select("svg");
const height = +svg.attr("width");
const width = +svg.attr("height");

const circle = svg.append("circle")
  .attr("r", height / 2)
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("fill", "yellow")
  .attr("stroke", "black");

  const eyeSpaces = 100;
  const eyeYOffset = -70;

const leftEye = svg.append("circle")
  .attr("r", 30)
  .attr("cx", width / 2 - eyeSpaces)
  .attr("cy", height / 2 + eyeYOffset)
  .attr("fill", "black");

const rightEye = svg.append("circle")
  .attr("r", 30)
  .attr("cx", width / 2 + eyeSpaces)
  .attr("cy", height / 2 + eyeYOffset)
  .attr("fill", "black");


const g = svg.append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`)

const mouth = g.append("path")
  .attr("d", d3.arc()({
    innerRadius: 80,
    outerRadius: 100,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3/2
  }));