def get_herf(soup):
    result = []
    div = soup.find("div",id="content")
    for a in div.find_all("a",class_="static-thumbnail"):
        result.append('https://www.gamemeca.com/' + a["href"])
    return result
def crawling(soup) :
    div = soup.find("div", class_="content-left")
    result = div.get_text()

    return result

list_href = []
list_content = []    
for i in range(1,3):
    url = "https://www.gamemeca.com/review.php?ca=review&se=O&p="+str(i)
    req = requests.get(url)
    soup = BeautifulSoup(req.text, "html.parser")
    
    list_href = get_herf(soup)
    
    for url in list_href:
        href_req = requests.get(url)
        href_soup = BeautifulSoup(href_req.text,"html.parser")
        result = crawling(href_soup)
        list_content.append(result)
print(list_content)

import numpy as np
list_content = np.array(list_content)
list_content.shape
keywords = []
for i in range(len(list_content)):
    keywords.append('game')
keywords = np.array(keywords)
l_c3 = np.column_stack((list_content,keywords))
l_c3