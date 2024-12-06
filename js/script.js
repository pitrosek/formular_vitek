
document.getElementById('transferForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const fileSize = parseFloat(document.getElementById('fileSize').value);
    const transferSpeed = parseFloat(document.getElementById('transferSpeed').value);

    
    if (fileSize > 0 && transferSpeed > 0) {
        
        const transferTime = (fileSize * 8) / transferSpeed; 

        
        document.getElementById('transferTime').textContent = transferTime.toFixed(2);
        document.getElementById('result').classList.remove('d-none');
    } else {
        
        alert('Zadejte platné hodnoty větší než nula.');
    }
});
