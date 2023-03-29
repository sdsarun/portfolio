from bitkubboss import *
from lineservice import *
from secretapiprofile import *
from datetime import *
import time

# get current local time.
def whatTime(sec = 0, min = 0, hour = 0):
    last_time = datetime.now() + timedelta(seconds=sec, minutes=min, hours=hour)
    return last_time.strftime("%d-%m-%Y %X")

# get available coin.
def getCoinBucket():
    coinbucket = askbitkub.get_available_coins()
    coin_names = {}
    for row in coinbucket["result"]:
        name = row["symbol"]
        coin_names[name[4:]] = name
    return coin_names

def readCoinFromUser():
    n = int(input("Enter a amount coint: "))
    coin_names = getCoinBucket()
    coins_input = []

    cnt = 0 # track current item.
    while True:
        if cnt == n: # break when you got input complete done.
            break 

        coin_symbol = input("Enter a coin symbol (ex. BTC, ETH): ").upper()
        if coin_symbol in coin_names:
            if coin_symbol not in coins_input:  # check duplicate item.
                coins_input.append(coin_symbol) # store its.
                cnt = cnt + 1 # update track current item.
            else:
                print("duplicate item, please insert another symbol!")
        else:
            print("Wrong symbol, please try again!")
    return coins_input

def readTimeDelayFromUser():
    time_delay = int(input("Enter a time delay update in second: "))
    return time_delay

def showMessage(token, coins_input, time_delay):
    coin_names = getCoinBucket()
    message = songline(token) # create instance line notify.
    while True:
        last_update = askbitkub.get_coin_change() # fetch api.
        text = [] # store info coin for display to user

        for c in coins_input:
            last_price = last_update[coin_names[c]]["last"] # fetch last price.
            last_price = "{:,.2f}".format(last_price) # remove format price.

            # output example
            # BTC  9999999
            # ETH  1231231
            text.append("\n")
            text.append("🪙") # coin symbol
            text.append(c) # coin name
            text.append(" : ")
            text.append(last_price) 
        
        # text.append("\n\n" + whattime()) # include time stamp uncomment this line.
        output = "".join(text)

        message.sendtext(output) # send output to line application.
        print(output, "\n", "Next update is :", whatTime(sec=time_delay)) # debug in console.
        time.sleep(time_delay)


def run():
    coins_input = readCoinFromUser()
    time_delay = readTimeDelayFromUser()
    token = LINE_NOTIFY_API_KEY
    showMessage(token, coins_input, time_delay)

run()