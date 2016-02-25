import sqlite3

class Database_creation(object):
	connection = sqlite3.connect("test.db")
	
	
	try:



		connection.execute('''CREATE TABLE IF NOT EXISTS user_table(
		USERNAME TEXT PRIMARY KEY NOT NULL,
		EMAIL TEXT NOT NULL,
		FIRSTNAME TEXT NOT NULL,
		PASSWORD TEXT NOT NULL,
		STATUS TEXT NOT NULL  );
        ''');
		print("hello")

		
		print("hello 9")
		connection.execute('''CREATE TABLE IF NOT EXISTS product_maintenance_table(
        ID TEXT PRIMARY KEY NOT NULL,
        USERNAME TEXT NOT NULL,
        DATES DATE NOT NULL

		); ''');
		print("hello 1")


		connection.execute('''CREATE TABLE IF NOT EXISTS chats(
        ID TEXT PRIMARY KEY NOT NULL,
        USERNAME TEXT NOT NULL,
        DATES DATE NOT NULL

		); ''');
		print("hello 4")

		

		

		connection.execute('''CREATE TABLE IF NOT EXISTS maintenance_table(
        ID TEXT PRIMARY KEY NOT NULL,
        USERNAME TEXT NOT NULL,
        DATES DATE NOT NULL

		); ''');
		print("hello 1")


		connection.execute('''CREATE TABLE IF NOT EXISTS repair_table(
        ID TEXT PRIMARY KEY NOT NULL,
        USERNAME TEXT NOT NULL,
        DATES DATE NOT NULL

		); ''');


		connection.execute('''CREATE TABLE IF NOT EXISTS log_table(
        PRODUCTID TEXT  NOT NULL,
	    NAME TEXT NOT NULL,
	    DESCRIPTION TEXT NULL,
	    STATUS TEXT NOT NULL,
	    DATES DATE NULL
		); ''');
		print("success")



		connection.execute('''CREATE TABLE IF NOT EXISTS product_table(
	    ID TEXT PRIMARY KEY NOT NULL,
	    NAME TEXT NOT NULL,
	    DESCRIPTION TEXT NOT NULL,
	    STATUS INT NOT NULL,
	    ADDEDBY TEXT NULL
	    ); ''');
	    


	    

       


	except (sqlite3.OperationalError):
		print(sqlite3.OperationalError)



		


