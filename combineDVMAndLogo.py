import json

# Load the PNG files and doctors data
with open('logo.json', 'r') as f:
    png_files = json.load(f)

with open('dvmData.json', 'r') as f:
    doctors = json.load(f)

# Convert locationid in png_files to integer (if it's stored as a string in one of the files)
png_dict = {int(entry['locationid']): entry['path'] for entry in png_files}

# Add PNG file path to the doctor based on locationid (convert doctor's locationid to integer as well)
for doctor in doctors:
    location_id = int(doctor['locationid'])  # Convert locationid to integer for matching
    if location_id in png_dict:
        doctor['png_file'] = png_dict[location_id]
    else:
        doctor['png_file'] = None  # In case no match is found

# Save the updated doctors data to a new JSON file
with open('masterDVMData.json', 'w') as f:
    json.dump(doctors, f, indent=4)

print("Merged JSON file saved")


