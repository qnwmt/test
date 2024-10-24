const csvUrl = 'https://example.com/addresses.csv';
fetch(csvUrl)
  .then(response => response.text())
  .then(csvText => { ... })
  .catch(error => { ... });

  Papa.parse(csvText, {
	complete: function(results) {
	  displayAddresses(results.data);
	},
	header: false,
	skipEmptyLines: true
  });
  
  function displayAddresses(data) {
	const tableBody = document.getElementById('addressTable').getElementsByTagName('tbody')[0];
	tableBody.innerHTML = '';  // テーブルの内容をクリア
  
	data.forEach((row) => {
	  const address = row[0];  // 1列目が住所だと仮定
	  const newRow = tableBody.insertRow();
	  const cell = newRow.insertCell();
	  cell.textContent = address;
	});
  }
  