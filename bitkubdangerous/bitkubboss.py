import hashlib
import hmac
import json
from tkinter import HIDDEN
from typing_extensions import Self
import requests

API_HOST = "https://api.bitkub.com"
# ============== GET =================
G_SERVERTIME = "/api/servertime"
G_STATUS ="/api/status"
G_MARKET = "/api/market/symbols"
G_SYMBOLS = "/api/market/symbols"	# 
G_TICKER = "/api/market/ticker"		# list last coin update
G_TRADE = "/api/market/trades"		# list recent trades.
G_BUYS = "/api/market/bids"			# list open buy orders.
G_SELLS = "/api/market/asks"		# list open sell orders
G_ORDERS = "/api/market/books"		# list all open orders.
# ====================================

# ============== POST =================
P_WALLET = "/api/market/wallet"
P_BALANCES = "/api/market/balances"
# ====================================

class tradeservice:
	def __init__(self, key, secret):
		self.key = key
		self.secret = secret.encode()
		self.header = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-BTK-APIKEY": key,
        }
		
	def getbalance(self):
		current_server_time = self.get_server_time()
		payload = {
			"ts" : current_server_time
		}	
		payload["sig"] = self.sign(payload)
		res = requests.post(API_HOST + P_BALANCES, headers=self.header, data=self.json_encode(payload))
		if res.status_code == 200:
			return res.json()
		else:
			print(res)

	# def getcoinupdate(self):

	def json_encode(self, data):
		return json.dumps(data, separators=(",", ":"), sort_keys=True)

	def sign(self, data):
		j = self.json_encode(data)
		# print("Signing payload: " + j)
		h = hmac.new(self.secret, msg=j.encode(), digestmod=hashlib.sha256)
		return h.hexdigest()

	def get_server_time(self):
		server_time = requests.get(API_HOST + G_SERVERTIME)
		return int(server_time.text)

class askbitkub:
	# @staticmethod
	def __fetch__(url, query=""):
		res = requests.get(url + query)
		return res.json()	

	def get_coin_change():
		return askbitkub.__fetch__(API_HOST + G_TICKER)
		
	def get_available_coins():
		return askbitkub.__fetch__(API_HOST + G_SYMBOLS)

	def get_recent_trades(sym, lmt):
		query = "?sym={0}&lmt={1}".format(sym, lmt)
		return askbitkub.__fetch__(API_HOST + G_TRADE, query)

	def get_open_buy_orders(sym, lmt):
		query = "?sym={0}&lmt={1}".format(sym, lmt)
		return askbitkub.__fetch__(API_HOST + G_SELLS, query)



# todo for my purposes.
# report last price of imx, eth, ada, every hour.
