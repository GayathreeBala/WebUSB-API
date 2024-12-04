USB Drive Detection Web Application
Overview
This web application detects when a USB drive is connected or disconnected. It uses the WebUSB API to interact with USB devices and dynamically displays updates about the connection status on the webpage.
________________________________________
How It Works
1.	Frontend:
o	A webpage with a clean and minimalistic design (midnight green and off-white theme).
o	Dynamically displays connection or disconnection events.
o	Logs the history of USB events with timestamps.
2.	Backend:
o	The webpage is hosted locally using a Python HTTP server.
o	The WebUSB API is used to detect USB connection and disconnection events directly in the browser.
________________________________________
How to Set It Up and Run Locally
Step 1: Install Python
Ensure Python (version 3.x or higher) is installed on your system. If not, download and install Python from the official website.
Step 2: Set Up the Project
1.	Place all project files (HTML, CSS, JS) in a directory (e.g., usb-detection).
2.	Ensure your project structure looks like this: 
usb-detection/
├── index.html
├── styles.css
├── script.js
Step 3: Start the HTTPS Server
1.	Navigate to the project directory:
cd usb-detection
2.	Start the HTTPS server using Python:
python3 -m http.server 
Step 4: Grant Permissions
The WebUSB API requires HTTPS. Grant permissions when prompted by the browser to allow USB access.
________________________________________
Libraries or APIs Used
1.	WebUSB API:
o	Detects USB connection and disconnection events.
o	Fetches details about connected USB devices (e.g., name, manufacturer, serial number).
2.	Python HTTP Server:
o	Hosts the application locally with port number 8000.
________________________________________
Features
•	Real-time detection of USB connection and disconnection.
•	Logs the history of events with timestamps.
•	User-friendly interface with device details displayed dynamically.
________________________________________
Testing 
•	When no USB is connected: USB not detected 
![image](https://github.com/user-attachments/assets/c50c293b-4bc2-4d1c-95fe-96c5353c28c7)


•	Select the avaliable devices from by clicking “Request Devices”: USB connected
 ![image](https://github.com/user-attachments/assets/e0f7f3f1-ce2c-46ac-81fe-883e1c2bc770)


•	When selected device is not connected:
 
 ![image](https://github.com/user-attachments/assets/a913ece0-4f7c-481a-84d8-827ee0ce20b5)


Troubleshooting

•	Ensure your browser supports the WebUSB API (e.g., Chrome).

•	If the page doesn't load, confirm that the SSL certificates are correctly set up.

•	Check the browser console (F12) for any errors related to USB permissions or API usage.

•	ANY OTHER ERROR COULD BE BECAUSE OF THE LIMITATIONS OF WebUSB, AND LACK OF DOCUMENTATION OF THE API.

