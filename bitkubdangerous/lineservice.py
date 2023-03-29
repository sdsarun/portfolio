import requests

class songline:
    def __init__(self, token):
        self.token = token
        self.header = {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization" : "Bearer " +  self.token
        }
    
    def sender(self, payload):
        url = "https://notify-api.line.me/api/notify"
        # print(payload)
        res = requests.post(url, headers=self.header, data=payload)
        self.reportsender(res.status_code)

    def sendmessage(self, message, sticker, imgurl):
        return self.sender({"message" : message, "stickerPackageId" : sticker["packageid"], "stickerId" : sticker["stickerid"], "imageThumbnail" : imgurl, "imageFullsize" : imgurl})
    
    def sendtext(self, message):
        return self.sender({"message" : message})
    
    def sendsticker(self, sticker):
        return self.sender({"message" : " ", "stickerPackageId" : sticker["pakageid"], "stickerId" : sticker["stickerid"]})

    def sendimage(self, imgurl):
        return self.sender({"message" : " ", "imageThumbnail" : imgurl, "imageFullsize" : imgurl})

    def reportsender(self, status_code):
        if status_code == 200:
            print("send complete.")
        else:
            print("error : ", status_code)


class stickers:
    gotothemoon = {
        "pakageid" : 446,
        "stickerid" : 1988
    }

    imrich = {
        "pakageid" : 446,
        "stickerid" : 2003
    }

    gotothehell = {
        "pakageid" : 446,
        "stickerid" : 2006
    }

    noway = {
        "pakageid" : 446,
        "stickerid" : 2005
    }