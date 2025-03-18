import pandas as pd


csvFilePath = "./doctorList.csv"
selectedColumns = ['EmployeeId', 'Name', 'LocationId', 'ExpLevel']

# importing the csv file
df = pd.read_csv(csvFilePath, usecols=selectedColumns)
df.columns = df.columns.map(str.lower)
print(df)

# filtering the csv file 
df = df[df.employeeid == "4657"]
print(df)

jsonFilePath = 'dvmData.json'
df.to_json(jsonFilePath, orient='records', index=False, indent=4)

