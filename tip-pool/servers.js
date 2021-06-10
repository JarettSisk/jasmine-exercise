let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';
  // loop through the allservers obj
  for (let key in allServers) {
    let curServer = allServers[key];
    // create the dom elements
    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);
    // set the tip average by taking the tip total and dividing by the number of servers
    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;
    // append the new server to the table along with the tipaverage
    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr);
    serverTbody.append(newTr);
  }
}
