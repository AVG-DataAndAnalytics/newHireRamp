import os
import json

# Directory containing the PNG files
folder_path = '.\logo\PracticeLogos'  

# Get a list of all PNG files in the directory
pngFiles = [f for f in os.listdir(folder_path) if f.lower().endswith('.png')]

# Prepare a list to hold file information
files_info = []

for file in pngFiles:
    # Split the filename at the underscore and keep the first part
    fileName = file.split('_')[0] 

    # Get full file path
    filePath = os.path.join(folder_path, file)

    
    # Get file size 
    fileSize = os.path.getsize(filePath)
    
    # Collecting file information
    fileInfo = {
        'locationid': fileName,
        'path': filePath,
        'size': fileSize  
    }
    
    # Add the file information to the list
    files_info.append(fileInfo)

# Define the output JSON file
jsonFile = 'logo.json'

# Write the list of PNG file data to the JSON file
with open(jsonFile, 'w') as json_file:
    json.dump(files_info, json_file, indent=4)

# Print the output to verify
print(f"JSON file '{jsonFile}' created successfully.")
