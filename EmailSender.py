import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
class EmailS(object):

	def __init__(self):
		pass

	def configure_Mail(self,status,itemname,user,text):
		
		me = "starkstestingsolution@gmail.com"
		you = text




		msg = MIMEMultipart('alternative')
		msg['Subject'] = "Link"
		msg['From'] = me
		msg['To'] = you
		text = "Hi!\nHow are you?\nHere is the link you wanted:\nhttp://www.python.org"
		html = """\
		<html>


		<head>

        
		</head>
		<body>
		<p>Hi!<br>
		Notification from maintenance   tracking system<br>
		Here is the <a href="http://www.python.org">link</a> you wanted.
		</p>
		<b> b 5-00000 1- CG </b>
		<div><p> A request to 
		"""+status+  """     """+itemname + """  has been made by  """+user +""" </p>
		
		
		<a class='button' style='font: bold 11px Arial; text-decoration: none; background-color: #EEEEEE; color: #333333;
		padding: 2px 6px 2px 6px;  border-top: 1px solid #CCCCCC;
		border-right: 1px solid #333333;border-bottom: 1px solid #333333;
		border-left: 1px solid #CCCCCC;  ' href="http://localhost:5000/AcceptProduct?item='"""+itemname+"""'   &email='"""+you+"""'  &id='"""+user+"""'&status='"""+status+"""'' "> click To accept <a/>

        &nbsp; &nbsp;
		<a class='button' style='font: bold 11px Arial; text-decoration: none; background-color: #EEEEEE; color: #333333;
		padding: 2px 6px 2px 6px;  border-top: 1px solid #CCCCCC;
		border-right: 1px solid #333333;border-bottom: 1px solid #333333;
		border-left: 1px solid #CCCCCC;  ' href="http://localhost:5000/AcceptProduct?item='"""+itemname+"""'   &email='"""+you+"""'  &id='"""+user+"""'&status='"""+status+"""'' "> click To Reject <a/>
		</body>
		</html>
		"""
		part1 = MIMEText(text, 'plain')
		part2 = MIMEText(html, 'html')
		'''# Attach parts into message container.
		According to RFC 2046, the last part of a multipart message, in this case
		the HTML message, is best and preferred.'''
		msg.attach(part1)
		msg.attach(part2)
		'''# Send the message via local SMTP server.'''
		s = smtplib.SMTP('smtp.gmail.com:587')
		'''# sendmail function takes 3 arguments: sender's address, recipient's address'''
		'''# and message to send - here it is sent as one string.'''
		s.ehlo()
		s.starttls()
		s.login("starkstestingsolution@gmail.com","Jolaade080")
		s.sendmail(me, you, msg.as_string())
		s.quit()
		return "sent"

