document.getElementById('transferForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fileSize = parseFloat(document.getElementById('fileSize').value);
    const fileUnit = parseFloat(document.getElementById('fileUnit').value);
    const transferSpeed = parseFloat(document.getElementById('transferSpeed').value);

    if (isNaN(fileSize) || fileSize <= 0 || isNaN(transferSpeed) || transferSpeed <= 0) {
        alert("Zadejte platné kladné hodnoty pro velikost souboru a přenosovou rychlost.");
        return;
    }

    const transferData = {
        sizeInBits: fileSize * fileUnit * 8,
        speedInBitsPerSecond: transferSpeed * 1000000
    };

    const transferTime = transferData.sizeInBits / transferData.speedInBitsPerSecond;

    document.getElementById('result').classList.remove('d-none');
    document.getElementById('transferTime').textContent = transferTime.toFixed(2);
});

