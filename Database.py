import sqlite3

class Database(object):

    connection = sqlite3.connect("test.db")

    try:
    	connection.execute('''CREATE TABLE user_table(
		USERNAME TEXT PRIMARY KEY NOT NULL,
		EMAIL TEXT NOT NULL,
		PASSWORD TEXT NOT NULL
		STATUS TEXT NOT NULL  )''')


		connection.execute('''CREATE TABLE product_table(
	    ID INT PRIMARY KEY NOT NULL,
	    NAME TEXT NOT NULL,
	    DESCRIPTION TEXT NOT NULL,
	    STATUS INT NOT NULL
	    ) ''')


	   connection.execute('''CREATE TABLE product_maintenance(
       ID INT PRIMARY KEY NOT NULL,
       USERNAME TEXT NOT NULL,
       DATES DATE NOT NULL,
    
		) ''')

	connection.execute('''CREATE TABLE product_table(
    ID INT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    STATUS INT NOT NULL

		) ''')


	connection.execute('''CREATE TABLE maintenance_table(
    ID INT PRIMARY KEY NOT NULL,
    USERNAME TEXT NOT NULL,
    DATES DATE NOT NULL

		) ''')



	connection.execute('''CREATE TABLE repair_table(
    ID INT PRIMARY KEY NOT NULL,
    USERNAME TEXT NOT NULL,
    DATES DATE NOT NULL

		) ''')

	connection.execute('''CREATE TABLE activities_table(
    ID INT PRIMARY KEY NOT NULL,
    USERNAME TEXT NOT NULL,
    DATES DATE NOT NULL

		) ''')



	def createNewUser(self,username,email,password,status):
		connection.execute("INSERT INTO USERS(USERNAME,PASSWORD,EMAIL) VALUES("+username+','+password+','+email)+','+status+")
	    return "success"

	def updateUser(self,username,email,password):
		connection.execute("UPDATE USERS SET EMAIL="+email+', PASSWORD='+password+",EMAIL="+email ") WHERE USERNAME="+username+")
	    return "success"


	def deleteUser(self,username):
		pass


	def createProduct(self,name,description,status):
	    pass

	def updateProduct(self,name,description,status):
	    pass


	def maintenanceUpdate(self,id,username):

		pass

	def repair(self,id,username):
		pass

	def activities(self):
	    pass

    




except sqlite3.OperationalError:
	print("table created")










connection.close()