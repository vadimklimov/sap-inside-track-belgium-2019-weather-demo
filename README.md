# Troubleshooting Node.js applications: Debugging in SAP Cloud Platform Cloud Foundry
## Overview

A demo application that was used to illustrate principles and techniques of remote debugging Node.js applications deployed to SAP Cloud Platform Cloud Foundry during a session "Troubleshooting Node.js applications: Debugging in SAP Cloud Platform Cloud Foundry" at SAP Inside Track Belgium 2019.

Session recap is provided in SAP Community blog series:

|Blogs|
|---|
|[Part 1: Remote Debugging - Environment Preparation and General Techniques](https://blogs.sap.com/2019/05/22/sit-belgium-2019-recap-debugging-node.js-applications-in-scp-cf.-part-1-remote-debugging-environment-preparation-and-general-techniques/)|
|[Part 2: Remote Debugging in Production Environment](https://blogs.sap.com/2019/05/22/sit-belgium-2019-recap-debugging-node.js-applications-in-scp-cf.-part-2-remote-debugging-in-production-environment/)|
|[Part 3: Accessing Service Instance](https://blogs.sap.com/2019/05/22/sit-belgium-2019-recap-debugging-node.js-applications-in-scp-cf.-part-3-accessing-service-instance/)|
|[Part 4: Time Travel Debugging](https://blogs.sap.com/2019/05/22/sit-belgium-2019-recap-debugging-node.js-applications-in-scp-cf.-part-4-time-travel-debugging/)|

## Notes
A valid OpenWeatherMap API key shall be obtained and maintained in an environment variable *OWM_APP_ID* before running the application.
* When running the application locally, maintain an API key in the configuration file *.env*.
* When deploying the application to SAP Cloud Platform Cloud Foundry, maintain an API key in Cloud Foundry deployment manifest *manifest.xml*.
