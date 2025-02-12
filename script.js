document.addEventListener("DOMContentLoaded", function () {
    var qrCodeText = '';

    function generateQRCode() {
        var inputText = document.getElementById('inputText').value.trim();
        var logDiv = document.getElementById('logDiv');

        if (inputText !== '') {
            var qrCodeDiv = document.getElementById('qrCodeDiv');
            qrCodeDiv.innerHTML = ''; // Pulisce il contenitore prima di generare un nuovo QR

            new QRCode(qrCodeDiv, {
                text: inputText,
                width: 200,
                height: 200
            });

            qrCodeText = inputText;
            logDiv.innerHTML = '✅ QR Code generato correttamente!';
            logDiv.style.color = "#008000";
            logDiv.style.background = "#e0ffe0";
        } else {
            logDiv.innerHTML = '⚠️ Inserisci un testo valido.';
            logDiv.style.color = "#cc0000";
            logDiv.style.background = "#ffe0e0";
        }
    }

    function generateBarcode() {
        var inputText = document.getElementById('inputText').value.trim();
        var logDiv = document.getElementById('logDiv');

        if (inputText !== '') {
            var barcodeDiv = document.getElementById('barcodeDiv');
            barcodeDiv.innerHTML = ''; // Pulisce il contenitore prima di generare un nuovo Barcode

            var canvas = document.createElement('canvas');
            barcodeDiv.appendChild(canvas);

            JsBarcode(canvas, inputText, {
                format: "CODE128",
                lineColor: "#000",
                width: 2,
                height: 80,
                displayValue: true
            });

            logDiv.innerHTML = '✅ Barcode generato correttamente!';
            logDiv.style.color = "#008000";
            logDiv.style.background = "#e0ffe0";
        } else {
            logDiv.innerHTML = '⚠️ Inserisci un testo valido.';
            logDiv.style.color = "#cc0000";
            logDiv.style.background = "#ffe0e0";
        }
    }

    function saveQRCode() {
        if (qrCodeText.trim() !== '') {
            var qrCodeCanvas = document.getElementById('qrCodeDiv').getElementsByTagName('canvas')[0];
            if (qrCodeCanvas) {
                qrCodeCanvas.toBlob(function (blob) {
                    saveAs(blob, 'QRCode.png');
                });
            } else {
                document.getElementById('logDiv').innerHTML = '⚠️ Nessun QR code da salvare.';
            }
        }
    }

    function saveBarcode() {
        var barcodeDiv = document.getElementById('barcodeDiv');

        if (barcodeDiv.innerHTML.trim() !== '') {
            var barcodeCanvas = barcodeDiv.getElementsByTagName('canvas')[0];
            if (barcodeCanvas) {
                barcodeCanvas.toBlob(function (blob) {
                    saveAs(blob, 'Barcode.png');
                });
            }
        } else {
            document.getElementById('logDiv').innerHTML = '⚠️ Nessun barcode da salvare.';
        }
    }

    function clearPage() {
        document.getElementById('inputText').value = '';
        document.getElementById('qrCodeDiv').innerHTML = '';
        document.getElementById('barcodeDiv').innerHTML = '';
        document.getElementById('logDiv').innerText = '';
        logDiv.style.background = "#f0f0f0";
        qrCodeText = '';
    }

    // Espone le funzioni al contesto globale
    window.generateQRCode = generateQRCode;
    window.generateBarcode = generateBarcode;
    window.saveQRCode = saveQRCode;
    window.saveBarcode = saveBarcode;
    window.clearPage = clearPage;
});
