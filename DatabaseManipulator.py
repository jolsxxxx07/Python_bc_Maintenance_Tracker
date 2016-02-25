import sqlite3
class DataManipulate(object):

    
	def __init__(self):
		
		print("called")
		#import pdb; pdb.set_trace()
		self.connection = sqlite3.connect("test.db")



	def createNewUser(self,username,password,firstname,email,status):
		
	    self.connection.execute("INSERT INTO user_table(USERNAME,PASSWORD, FIRSTNAME,EMAIL,STATUS) VALUES(?,?,?,?,?)",(username,password,firstname,email,status))
	    print("user created")
	    self.connection.commit()
	    self.close()
	    return "{created:true}"

	def updateUser(self,user_data):
		self.connection.execute("UPDATE USERS SET PASSWORD=? ,EMAIL= ?, FIRSTNAME =? WHERE USERNAME =?",(user_data[1],user_data[2],user_data[3],user_data[0]))
		return "user updated"

	def addProduct(self,ids,itemname,description,status,added):
		print("in here")
		self.connection.execute("INSERT INTO product_table(ID,NAME ,DESCRIPTION,STATUS,ADDEDBY) VALUES(?,?,?,?,?)",(ids,itemname,description,0,added))
		self.connection.commit()
		print("product created")
		self.close()
		return "product created"

	def getUser(self,username,password):
		cursor =self.connection.execute("SELECT * FROM user_table WHERE USERNAME = ? AND PASSWORD =?",(username,password))
		count = 0
		for row in cursor:
			count+=1
		self.close()	

		return count

	def getAllUsers(self):
		cursor =self.connection.execute("SELECT * FROM user_table")
		persons =[]
		for row in cursor:
			persons.append(row[0]).append(row[1]).append(row[2]).append(row[3])



	

	def close(self):
		self.connection.close()
		
	def selectProduct(self,user_data):
		pass

	def get_All_products(self):
		cursor =self.connection.execute("SELECT * FROM product_table")
		products =[]
		for row in cursor:
			products.append( row[0] )
			products.append( row[1] )
			products.append( row[2] )
			products.append( row[3] )
			products.append( row[4] )
		self.close()

		return products

	def logProduct(self,productid,name,description,status,dates):
		print("In log product")
		

		self.connection.execute("INSERT INTO log_table(PRODUCTID,NAME,DESCRIPTION,STATUS,DATES) VALUES(?,?,?,?,?)", (productid,name,"description",status,"now") )
		self.connection.commit()
		print("producted updated")
		self.close()

	def activityLog(self,item):
		print("in activity")
		itemid = ("%"+item+"%",)
		
		cursor = self.connection.execute("SELECT * FROM log_table WHERE PRODUCTID LIKE ? ",itemid)
		activity =[]
		for row in cursor:
			activity.append(row[0])
			activity.append(row[1])
			activity.append(row[2])
			activity.append(row[3])
			activity.append(row[4])

		self.close()
		return activity;

	def allActivity(self):
		cursor = self.connection.execute("SELECT * FROM log_table ")
		activity =[]
		for row in cursor:
			activity.append(row[0])
			activity.append(row[1])
			activity.append(row[2])
			activity.append(row[3])
			activity.append(row[4])

		self.close()
		return activity;








