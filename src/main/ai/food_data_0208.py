def crawling(soup) :
    content = []
    div = soup.find_all("span", class_="se-fs- se-ff-")
    for i in range(len(div)):
        if (div[i].get_text() == "\u200b") :
            continue
        content.append(div[i].get_text())
    result = content
    return result

list_href = []
list_content = []
for i in range(12,60):    
    url = "https://www.menupan.com/restaurant/goodrest/goodrest_view.asp?id=1843"+str(i)+"&rurl=%2FRestaurant%2FGoodRest%2FGoodRest%5Flist%2Easp%3Fmn%3Df%26ds%3Dc%26tc%3D28516%26pg%3D10"
    req = requests.get(url)
    soup = BeautifulSoup(req.text, "html.parser")
    #print(list_href)
    result = crawling(soup)
    list_content.append(result)
print(list_content)

import numpy as np
list_content2 = np.array(list_content2)
list_content2.shape
keywords2 = []
for i in range(len(list_content2)):
    keywords2.append('food')
keywords2 = np.array(keywords2)
l_c2 = np.column_stack((list_content2,keywords2))
l_c2