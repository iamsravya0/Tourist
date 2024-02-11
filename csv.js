
// html document to get fully loaded before executing the script
document.addEventListener("DOMContentLoaded",()=>{
const fileInput=document.getElementById('fileInput');
const dataTable=document.getElementById("dataTable").getElementsByTagName('tbody')[0];

fileInput.addEventListener("change",handleFile)

// unction to handle the selcted file
function handleFile(){
    // to get the selected file
    const file=fileInput.files[0]
    // check if a file selected
    if(file){
        // create the file reader object to read the documents of the file
        const reader=new FileReader();
        // READ THE FILE AS TEXT
        reader.readAsText(file);
        // event trigerred when the file reding is complete
        reader.onload=(event)=>{
            // get the csv data from the loaded file
            const csvData=event.target.result;
            // display the data in the table
            displayData(csvData);
        };
    }
    // else{
    //     alert('no csv data to read');
    // }
}
// function to display the csv in the table
function displayData(csvData){
    //split the csv data into array of rows using the new line character
    const data=csvData.split('\n');
    // clear the existing content of teh table body
    dataTable.innerHTML="";
    // iteration of each row data
    for(let i=1 ; i<data.length-1; i++){
        // split each row into individual values using a comma as the delimiter
        const row=data[i].split(',');
        // extract name and age values from the row
        const name=row[0];
        const age=row[1];
        // insert the new row into the table and add,it width name and age data
        const newRow=dataTable.insertRow(dataTable.rows.length);
        newRow.insertCell(0).textContent=name;
        newRow.insertCell(1).textContent=age;
    }
}
})