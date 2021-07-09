chart = {
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .attr("fill", color)
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.utilizacion-turno-porcentual))
      .attr("height", d => y(0) - y(d.utilizacion-turno-porcentual))
      .attr("width", x.bandwidth());

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  return svg.node();
}

data = Object.assign(d3.csvParse(await FileAttachment("./data/dataGenial.csv").text(), ({Día, Utilizacion}) => ({timestamp: Día, utilizacion_turno_porcentual: +Utilizacion})).sort((a, b) => d3.descending(a.utilizacion_turno_porcentual, b.utilizacion_turno_porcentual)), {format: "%", y: "↑ Utilización"})

x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.5)

y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.utilizacion-turno-porcentual)]).nice()
    .range([height - margin.bottom, margin.top])

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].name).tickSizeOuter(0))

yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text(data.y))

color = "steelblue"
height = 600
margin = ({top: 30, right: 0, bottom: 30, left: 40})
d3 = require("d3@6")