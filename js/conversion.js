function convert() {
    const conversionType = document.getElementById("conversionType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result;

    switch (conversionType) {
        case "computeconvc":
            result = (inputValue * 9/5) + 32;
            document.getElementById("resultInput").value = `${inputValue}°C = ${result.toFixed(2)}°F`;
            break;
        case "computeconvf":
            result = (inputValue - 32) * 5/9;
            document.getElementById("resultInput").value = `${inputValue}°F = ${result.toFixed(2)}°C`;
            break;
        case "computemtf":
            result = inputValue * 3.28084;
            document.getElementById("resultInput").value = `${inputValue} meters = ${result.toFixed(2)} feet`;
            break;
        case "computeftm":
            result = inputValue / 3.28084;
            document.getElementById("resultInput").value = `${inputValue} feet = ${result.toFixed(2)} meters`;
            break;
        default:
            document.getElementById("resultInput").value = "Invalid conversion type.";
    }

    document.getElementById("resultInput").style.display = "block";
}