var activeLink = "Industries";
var links = ['Industries','qualification'];
var statsRootNode, statsRegion;

function onLinkClicked(link) {
  activeLink = link;
  drawStatsDetails(activeLink);
}

function drawStats(rootNode, region) {
    statsRootNode = rootNode;
    statsRegion = region;
  rootNode = rootNode.querySelector('#region-tree');
  // console.log(jsonp_industry)
  var data = [jsonp_code8114, jsonp_code8114, jsonp_code8114b, jsonp_code8115].reduce((acc, d) => {
    if(d.hasOwnProperty(region)) { acc.push(d[region]); }
    return acc;
  }, []);

  var json = JSON.stringify(data[3], null, 2);
  var linksHtml = links.map((d) => {
    return  `<a onClick="onLinkClicked('${d}')">${d}</a>`
  }).join(' | ');
  var html = `${linksHtml}<div id="stats">${activeLink}</div>`;
  d3.select(rootNode).html(html);
  drawStatsDetails(activeLink);
}

function drawStatsDetails(activeLink) {
  console.log("drawStatsDetails", activeLink)
  if(statFns.hasOwnProperty(activeLink)) {
    statFns[activeLink](statsRootNode.querySelector("#stats"), statsRegion);
  } else {
    console.log(activeLink)
  }
}
