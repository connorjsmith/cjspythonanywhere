import random
import string

import cherrypy

class StringGenerator (object):
	@cherrypy.expose
	def index (self):
		return "Hello World!"
	@cherrypy.expose
	def generate(self):
		global text
		text = open('index.html','r')
		return text

if __name__ == '__main__':
	cherrypy.quickstart(StringGenerator(),'/', 'config.conf')