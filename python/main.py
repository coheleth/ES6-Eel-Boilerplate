import eel
import os

dirname = os.path.dirname(__file__)


eel.init(os.path.join(dirname, '../out'))
eel.start('index.html')
