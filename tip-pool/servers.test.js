describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update table on updateServerTable()', function () {
    // submit a server
    submitServerInfo();
    // update the table
    updateServerTable();
    // selecting the current table data
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');
    // check how many TD items are created
    expect(curTdList.length).toEqual(3);
    // Make sure the input name is equal to the output name
    expect(curTdList[0].innerText).toEqual('Alice');
    // Make sure the tip average is formatted correcly
    expect(curTdList[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
