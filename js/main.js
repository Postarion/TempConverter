document.getElementById('celInput').addEventListener('input',
function(e){
    let cel = e.target.value;
    if (cel!=""){
    document.getElementById('celToFar').innerHTML =( (cel*1.8) + 32).toFixed(2);
    document.getElementById('celToKev').innerHTML =( (cel*1) + 273.15).toFixed(2);
    }
    else{
        document.getElementById('celToFar').innerHTML ="";
        document.getElementById('celToKev').innerHTML ="";     
    }
});

document.getElementById('farInput').addEventListener('input',
function(e){
    let far = e.target.value;
    if(far!=""){
   		document.getElementById('farToCel').innerHTML =((5/9)*((far*1)-32)).toFixed(2);
   	 	document.getElementById('farToKev').innerHTML =((5/9)*((far*1)+459.67)).toFixed(2);
    }
    else{
   		document.getElementById('farToCel').innerHTML ="";
        document.getElementById('farToKev').innerHTML ="";
    }
});

document.getElementById('kevInput').addEventListener('input',
function(e){
    let kel = e.target.value;
    if(kel!=""){
    document.getElementById('kevToFar').innerHTML =( 1.8*((kel*1)-273) + 32).toFixed(2);
    document.getElementById('kevToCel').innerHTML =((kel*1)-273.15).toFixed(2);
    }
    else{
        document.getElementById('kevToFar').innerHTML ="";
        document.getElementById('kevToCel').innerHTML ="";
    }
});