function createTable() {
    //Write your code here
	const totalRows = prompt("Input number of rows") ;
    const totalCol = prompt("Input number of columns") ;
	if(totalRows<=0 || totalCol<=0) {
		return alert("Enter a valid Number") ;
	}
	if(isNaN(totalCol) || isNaN(totalRows)) {
		return alert("Enter a valid Number") ;
	}
const myTable = document.querySelector("#myTable")
	let i = 0 ;
	
	while(i<totalRows) {
		const tr = document.createElement('tr') ;
		for(let j = 0 ; j < totalCol ; j++) {
	  const td = document.createElement('td') ;
			td.innerHTML = `Row-${i} Column-${j}` ;
			tr.appendChild(td) ;
		}
		myTable.append(tr) ;
		i++ ;
	}
}
