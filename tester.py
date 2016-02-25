
'''connection = sqlite3.connect("test.db")
connection.execute("INSERT INTO user_table(USERNAME,PASSWORD, FIRSTNAME,EMAIL,STATUS) VALUES(?,?,?,?,?)",("joliphizzle","ronaldo","jolaade","jbadewale@yahoo.com","sdmin"))
print("after user")
'''

'''connection.execute("INSERT INTO product_table(ID,NAME ,DESCRIPTION,STATUS) VALUES(?,?,?,?)",("0000001","car","a vehicle to move",0)  )
connection.commit()
print("product created")'''''''''
'''connection.close()''''''
connection = sqlite3.connect("test.db")

connection.execute("SELECT * FROM product_table")
cursor =connection.execute("SELECT * FROM product_table")
products =[]
print(type(products))
print(dir(products))
for row in cursor:
	products.append( row[0] )
	products.append( row[1] )
	products.append( row[2] )
	products.append( row[3] )
	print(products)





'''
'''
import smtplib
fromaddr = 'starkstestingsolution@gmail.com'
toaddrs  = 'jbadewale@yahoo.com'
msg = "\r\n".join([
  "From: user_me@gmail.com",
  "To: user_you@gmail.com",
  "Subject: Just a message",
  "",
  " accept with  https://www.google.com  <html>  <body> <button> lool </button> </body>  </html>  "
  ])
username = 'starkstestingsolution@gmail.com'
password = 'Jolaade080'
server = smtplib.SMTP('smtp.gmail.com:587')
server.ehlo()
server.starttls()
server.login(username,password)
server.sendmail(fromaddr, toaddrs, msg)
server.quit()


import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# me == my email address
# you == recipient's email address
me = "starkstestingsolution@gmail.com"
you = "jbadewale@yahoo.com"

# Create message container - the correct MIME type is multipart/alternative.
msg = MIMEMultipart('alternative')
msg['Subject'] = "Link"
msg['From'] = me
msg['To'] = you

# Create the body of the message (a plain-text and an HTML version).
text = "Hi!\nHow are you?\nHere is the link you wanted:\nhttp://www.python.org"
html = """\
<html>
  <head></head>
  <body>
    <p>Hi!<br>
       How are you?<br>
       Here is the <a href="http://www.python.org">link</a> you wanted.
    </p>

    <div>

<button>Accept</button>

<button>Reject</button>
    </div>
  </body>
</html>
"""

# Record the MIME types of both parts - text/plain and text/html.
part1 = MIMEText(text, 'plain')
part2 = MIMEText(html, 'html')

# Attach parts into message container.
# According to RFC 2046, the last part of a multipart message, in this case
# the HTML message, is best and preferred.
msg.attach(part1)
msg.attach(part2)

# Send the message via local SMTP server.
s = smtplib.SMTP('smtp.gmail.com:587')
# sendmail function takes 3 arguments: sender's address, recipient's address
# and message to send - here it is sent as one string.
s.ehlo()
s.starttls()
s.login(username,password)
s.sendmail(me, you, msg.as_string())
s.quit()
'''

# sms.py
# Sends sms message to any cell phone using gmail smtp gateway
# Written by Alex Le

import smtplib

# Use sms gateway provided by mobile carrier:
# at&t:     number@mms.att.net
# t-mobile: number@tmomail.net
# verizon:  number@vtext.com
# sprint:   number@page.nextel.com

# Establish a secure session with gmail's outgoing SMTP server using your gmail account
server = smtplib.SMTP( "smtp.gmail.com", 587 )

server.starttls()

server.login( 'starkstestingsolution@gmail.com', 'Jolaade080' )

# Send text message through SMS gateway of destination number
server.sendmail( '<from>', '<number>@tmomail.net', '<msg>' )