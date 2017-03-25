statFns.Industries = function(rootNode, region) {
  var data = jsonp_industry.hasOwnProperty(region) ? jsonp_industry[region] : undefined;

  var rows = Object.keys(data[0]).map((k) => {
    return {k: k, v: data[0][k] }
  })
  .filter(({k,v}) => { return parseInt(v, 10) == v; })
  .map((d) => {
    return `<div class="row"><div class="k">${d.k}</div><div class="v">${d.v}</div></div>`
  }).join("\n")

  d3.select(rootNode).html(`<div id="industries">${rows}</div>`);

};


statFns.qualification = function(rootNode, region) {
  var data = jsonp_code8114.hasOwnProperty(region) ? jsonp_code8114[region] : undefined;

  var rows = data.map((d) => {
    return {k: d["Highest qualification"], v: d["Value"] }
  }).map((d) => {
    return `<div class="row"><div class="k">${d.k}</div><div class="v">${d.v}</div></div>`
  }).join("\n")

  d3.select(rootNode).html(`<div id="industries">${rows}</div>`);


};
