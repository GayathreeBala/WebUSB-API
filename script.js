// Set up event listeners for real-time USB device connect and disconnect
navigator.usb.addEventListener('connect', event => {
    handleUSBEvent(event, 'connected');
});

navigator.usb.addEventListener('disconnect', event => {
    handleUSBEvent(event, 'disconnected');
});

// Function to request USB device
async function requestDevice() {
    try {
        const device = await navigator.usb.requestDevice({ filters: [] });
        const elem = document.querySelector('#device');
        elem.textContent = `Use device: '${device.productName}'`;
        elem.onclick = () => testPrint(device);
        logEvent(`Connected: ${device.productName}, Manufacturer: ${device.manufacturerName}, Serial Number: ${device.serialNumber || 'N/A'}`);
        updateStatus('connected', device);
    } catch (e) {
        console.error(e);
        updateStatus('error', e.message);
    }
}

// Function to update the status on the page
function updateStatus(action, device = null) {
    const statusElement = document.getElementById('status');
    
    if (action === 'connected' && device) {
        const deviceInfo = `
            USB Device Connected:
            <br>Name: ${device.productName}
            <br>Manufacturer: ${device.manufacturerName}
            <br>Serial Number: ${device.serialNumber || 'N/A'}
        `;
        statusElement.innerHTML = deviceInfo;
    } else if (action === 'disconnected') {
        statusElement.innerHTML = 'No USB device detected';
    } else if (action === 'error') {
        statusElement.innerHTML = `Error: ${device}`;
    }
}

// Function to handle USB events (connected/disconnected)
function handleUSBEvent(event, action) {
    const device = event.device;
    if (action === 'connected') {
        updateStatus('connected', device);
    } else if (action === 'disconnected') {
        updateStatus('disconnected');
    }
    logEvent(`[${new Date().toLocaleTimeString()}] ${action.charAt(0).toUpperCase() + action.slice(1)}: ${device.productName}, Manufacturer: ${device.manufacturerName}, Serial Number: ${device.serialNumber || 'N/A'}`);
}

// Function to log events with timestamp
function logEvent(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`);
}

// Continuously check for connected devices on page load
window.onload = async () => {
    const devices = await navigator.usb.getDevices();
    if (devices.length > 0) {
        const device = devices[0]; // Just take the first device for now
        handleUSBEvent({ device: device }, 'connected');
        document.getElementById('status').innerHTML = 'USB detected';
    } else {
        document.getElementById('status').innerHTML = 'No USB device detected';
    }
};
