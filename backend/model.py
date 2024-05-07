from fastapi import FastAPI
from joblib import load
from pydantic import BaseModel
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

class ModelInput(BaseModel):
    streetname: int
    frc: int
    distance: float
    timeset: int 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

# Load the pre-trained Random Forest model
model = load('./model.joblib')

@app.post("/predict/")
async def predict(input_data: ModelInput):
    # Convert input features to numpy array
    input_array = np.array([[
            input_data.streetname,
            input_data.frc,
            input_data.distance,
            input_data.timeset
        ]])
    # Perform prediction using the pre-trained model
    prediction = model.predict(input_array)
    # Return the prediction result
    return {"prediction": prediction.tolist()}
