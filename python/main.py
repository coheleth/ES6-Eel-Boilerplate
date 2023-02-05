import eel
import os

dirname = os.path.dirname(__file__)


# Test eel
@eel.expose
def connection_test():
  return "Eel connection up and running! ;)"


eel.init(os.path.join(dirname, '../out'))
eel.start('index.html')
