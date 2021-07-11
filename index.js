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
    //console.log( data.map(d => d.utilizacion.toFixed(2)));
    console.log( data.map(d => d.utilizacion));

  const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .padding(0.12);
    //console.log(yScale.domain());

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
    .attr("fill", "#8E8883")
    .text("% De utilización");

  xAxisG.append("text")
    .attr("class", "min")
    .attr("y", 30)
    .attr("x", 35)
    .attr("fill", "red")
    .text("- Menor dato");

  xAxisG.append("text")
    .attr("class", "max")
    .attr("y", 45)
    .attr("x", 35)
    .attr("fill", "green")
    .text("- Mayor dato");

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
    .text("Utilización de maquina en un día aleatorio");

  /* Test */
  g.append("text")
    .attr("class", "barData")
    .text("16.60%")
    .attr("y", 13)
    .attr("x", 140);

  g.append("text")
    .attr("class", "barData")
    .text("53.49%")
    .attr("y", 28)
    .attr("x", 560);
  
  g.append("text")
    .attr("class", "barData")
    .text("41.22%")
    .attr("y", 43)
    .attr("x", 420);
  
  g.append("text")
    .attr("class", "barData")
    .text("44.65%")
    .attr("y", 59)
    .attr("x", 460);

  g.append("text")
    .attr("class", "barData")
    .text("38.46%")
    .attr("y", 74)
    .attr("x", 390);

  g.append("text")
    .attr("class", "barData")
    .text("29.07%")
    .attr("y", 89)
    .attr("x", 284);

  g.append("text")
    .attr("class", "barData")
    .text("46.61%")
    .attr("y", 105)
    .attr("x", 484);

  g.append("text")
    .attr("class", "barData")
    .text("31.67%")
    .attr("y", 120)
    .attr("x", 313);

  g.append("text")
    .attr("class", "barData")
    .text("33.27%")
    .attr("y", 136)
    .attr("x", 330);

  g.append("text")
    .attr("class", "barData")
    .text("48.68%")
    .attr("y", 151)
    .attr("x", 505);

  g.append("text")
    .attr("class", "barData")
    .text("40.24%")
    .attr("y", 167)
    .attr("x", 410);

  g.append("text")
    .attr("class", "barData")
    .text("40.22%")
    .attr("y", 182)
    .attr("x", 410);

  g.append("text")
    .attr("class", "barData")
    .text("25.67%")
    .attr("y", 197)
    .attr("x", 245);

  g.append("text")
    .attr("class", "barData")
    .text("36.98%")
    .attr("y", 213)
    .attr("x", 370);
  
  g.append("text")
    .attr("class", "barData")
    .text("48.82%")
    .attr("y", 228)
    .attr("x", 510);

  g.append("text")
    .attr("class", "barData")
    .text("45.32%")
    .attr("y", 244)
    .attr("x", 470);
  
  g.append("text")
    .attr("class", "barData")
    .text("48.92%")
    .attr("y", 259)
    .attr("x", 510);
    
  g.append("text")
    .attr("class", "barData")
    .text("39.14%")
    .attr("y", 274)
    .attr("x", 400);
  
  g.append("text")
    .attr("class", "barData")
    .text("37.48%")
    .attr("y", 289)
    .attr("x", 380);

  g.append("text")
    .attr("class", "barData")
    .text("49.13%")
    .attr("y", 305)
    .attr("x", 510);
  
  g.append("text")
    .attr("class", "barData")
    .text("40.16%")
    .attr("y", 320)
    .attr("x", 410);

  g.append("text")
    .attr("class", "barData")
    .text("45.92%")
    .attr("y", 335)
    .attr("x", 470);

  g.append("text")
    .attr("class", "barData")
    .text("47.97%")
    .attr("y", 351)
    .attr("x", 500);

  g.append("text")
    .attr("class", "barData")
    .text("45.45%")
    .attr("y", 366)
    .attr("x", 470);

  g.append("text")
    .attr("class", "barData_out")
    .text("1.11%")
    .attr("y", 381)
    .attr("x", 14);

  g.append("text")
    .attr("class", "barData")
    .text("50.04%")
    .attr("y", 397)
    .attr("x", 520);

  g.append("text")
    .attr("class", "barData")
    .text("50.82%")
    .attr("y", 413)
    .attr("x", 530);
  
  g.append("text")
    .attr("class", "barData")
    .text("42.95%")
    .attr("y", 428)
    .attr("x", 440);

  g.append("text")
    .attr("class", "barData")
    .text("64.50%")
    .attr("y", 444)
    .attr("x", 685);
    
  g.append("text")
    .attr("class", "barData")
    .text("35.83%")
    .attr("y", 459)
    .attr("x", 357);
    
  g.append("text")
    .attr("class", "barData")
    .text("32.43%")
    .attr("y", 473)
    .attr("x", 320);
  
  g.append("text")
    .attr("class", "barData")
    .text("48.33%")
    .attr("y", 490)
    .attr("x", 500);
  
  g.append("text")
    .attr("class", "barData")
    .text("39.63%")
    .attr("y", 505)
    .attr("x", 405);
    
  g.append("text")
    .attr("class", "barData")
    .text("48.24%")
    .attr("y", 520)
    .attr("x", 500);
    
  g.append("text")
    .attr("class", "barData")
    .text("38.07%")
    .attr("y", 535)
    .attr("x", 388);


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