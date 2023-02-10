def get_herf(soup):
    result = []
    div = soup.find("div",class_="w_news_list type_issue")
    for a in div.find_all("a",class_="news"):
        result.append("https://news.sbs.co.kr" + a["href"])
    return result
def crawling(soup) :
    div = soup.find("div", class_="text_area")
    result = div.get_text()
    
    return result

list_href = []
list_content = []
y = '301'
for i in range(1,91):
    if(i < 10):
        i = '0'+str(i)
    if(int(i) > 30):
        i = i - 30
        y = '212'
    if(int(i) > 60):
        i = i - 60
        y = '211'
    url = "https://news.sbs.co.kr/news/newsSection.do?sectionType=09&pageDate=202"+"y"+str(i)
    req = requests.get(url)
    soup = BeautifulSoup(req.text, "html.parser")
    
    list_href = get_herf(soup)
    #print(list_href)
    
    for url in list_href:
        href_req = requests.get(url)
        href_soup = BeautifulSoup(href_req.text,"html.parser")
        result = crawling(href_soup)
        list_content.append(result)
print(list_content)


######

import numpy as np
list_content = np.array(list_content)
#list_content.reshape(70,-1)
list_content.shape
keywords = []
for i in range(len(list_content)):
    keywords.append('sports')
keywords = np.array(keywords)
l_c = np.column_stack((list_content,keywords))
l_c.shape