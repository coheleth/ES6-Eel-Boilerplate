import eel
import os

dirname = os.path.dirname(__file__)


# Test eel
@eel.expose
def connection_test():
  return "Eel connection up and running! ;)"


@eel.expose
def python_print(string):
  print(string)


eel.init(os.path.join(dirname, '../out'))
eel.start('index.html')
