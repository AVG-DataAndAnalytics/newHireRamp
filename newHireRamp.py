import pandas as pd

csvFilePath = "./NewHireRamp.csv"
selectedColumns = ['Month','EmployeeId', 'Name', 'LocationId', 'ExpLevel', 'RevenuePerDay',  'VisitsPerDay',  'RevenuePerVisit', 'Est RPD', 'Est VPD', 'Est RPV']

# importing the csv file
df = pd.read_csv(csvFilePath, usecols=selectedColumns)
df = df.replace('\\$', '', regex=True)
df = df.replace(',', '', regex=True)

df['Month'] = pd.to_datetime(df['Month'], errors='coerce')
df['Month'] = df['Month'].dt.strftime('%B %Y')

df.columns = df.columns.str.replace('\s', '_', regex=True).map(str.lower)
print(df)

# filtering the csv file 
df = df[df.employeeid == "4657"]
print(df)

jsonFilePath = 'data.json'
df.to_json(jsonFilePath, orient='records', index=False, indent=4)

