from stem import Signal
from stem.control import Controller
import time
import logging
import socket
import sys


print("starting")
errorCount = 0

if __name__ == "__main__":
    while (True):
        try:
            with Controller.from_port(address=socket.gethostbyname('proxy'), port=9051) as controller:
                print(socket.gethostbyname('proxy'))
                controller.authenticate(password='testpassword')
                controller.signal(Signal.NEWNYM)
                print("Changing IP")
                errorCount = 0
                time.sleep(100)
        except Exception as e:
            print("error updating IP")
            # print(e.traceback.format_exc())
            print(e)
            print(errorCount)
            time.sleep(1)
            errorCount = errorCount + 1
            # if errorCount >
