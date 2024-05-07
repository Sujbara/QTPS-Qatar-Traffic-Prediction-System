# QTPS: Qatar Traffic Prediction System
## Overview:
QTPS (Qatar Traffic Prediction System) is a project aimed at revolutionizing travel planning in Qatar by predicting traffic conditions based on historical data. This README provides an overview of the project, including its objectives, methodology, and data collection approach.

## Problem Specification:
The primary goal of QTPS is to forecast traffic patterns in Qatar, enabling users to make informed decisions about their travel routes and schedules. Key questions that QTPS seeks to address include:

What is the current traffic volume on a specific street in Qatar?\
Which route offers the fastest travel time to reach a destination?
## Project Idea:
QTPS utilizes machine learning techniques to predict traffic conditions on main streets in Qatar. The system employs a regression model trained on historical traffic data to estimate the number of cars on a given road at a particular time. The user interface consists of a web-based dashboard where users can visualize streets, select their desired route and time, and receive recommendations for the fastest route to their destination.

## Dataset:
Since Qatar's traffic data is not readily available to the public, we will generate our own dataset for training and testing purposes. Data will be collected from the Traffic History API provided by TomTom. This API offers access to historical traffic statistics for October 2022, segmented by boundary boxes. We will develop a script to query the API and retrieve relevant information such as street names, functional classes, and timestamps to facilitate traffic prediction.

## Getting Started:
To begin using QTPS, follow these steps:

- Clone the repository to your local machine.
- Use your own TomTom API key to run the map.
- Download the model we trained if you want to use it and add it to the backend file, it is a random forest classifier with 0.9 accuracy. You can download it from here: https://drive.google.com/drive/folders/1Q6cQozBPIP6BoDiMEFXfmnHLx9r6DG6D?usp=sharing.
- Start both servers the frontend and the backend, check if the local host adress is the same as the one in the files.
## Contributions:
Contributions to QTPS are welcome!\
Tasks to contribute in:
- Making the map more dynamic, ex: adding zooming on the selected road, coloring the road based on traffic density, clicking a street name and sending its data to the model.
- Refactoring the code.
- Getting a better data for training, as mentioned the data used lacks some important features such as day of the week, you can check our work on the data here: https://drive.google.com/drive/folders/1Q6cQozBPIP6BoDiMEFXfmnHLx9r6DG6D?usp=sharing.
- Trying other models with some tweeks on the current dataset.
- Model and app deployment on some hosting server.

We appreciate your interest in QTPS and look forward to your feedback and contributions!
