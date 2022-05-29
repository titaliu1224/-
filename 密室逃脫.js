var storyContent = ﻿{"inkVersion":19,"root":[["^點擊文字選項以進行遊戲","\n","^請注意，圖片僅供參考，<b>請以文字敘述為主來進行遊戲</b>。","\n","ev","str","^開始遊戲","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["^ ","\n",{"->":"Game_Start"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Game_Start":[["^陽光灑落，鬧鐘鈴鈴鈴的響。","\n","ev","str","^拿起手機","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"Game_Start.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^再睡一下",{"->":"$r","var":true},null]}],{"c-0":["^ ",{"->":"Take_Phone"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Game_Start.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"^...","\n","^我翻了個身，拉起被子將自己裹得嚴實，好像這樣就聽不見那惱人的鈴聲似的。","\n","^今日安靜的出奇，我很快就又進入夢鄉。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"Take_Phone":[["^「吵死了。」","\n","^我伸手想熟練的按掉鬧鐘，卻發現介面長得不太一樣。","\n","^這應是 Android 的介面，而我是眾所皆知的果粉，早已使用 iPhone 多年。","\n","^這不是我的手機！","\n","ev","str","^試著解鎖","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^放著不管","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ","\n","^將睡意拋到千里外，","<>","\n",{"->":".^.^.^.unlock"},{"#f":5}],"c-1":["^ ",{"->":"Do_Not_Take_Phone"},"\n",{"#f":5}]}],{"unlock":[["^我滑開了螢幕鎖定畫面。","\n","^這支手機沒有上鎖，但滑開後的介面完全不是我所熟悉的 Android 手機。","\n","^手機主畫面（？）空無一物，是一片純淨的黑，除了正中央有個同樣是黑色的 icon。","\n","ev","str","^點開它","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^無視它","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ","\n",{"->":".^.^.^.^.open"},{"#f":5}],"c-1":["\n","^滑了又滑，這支手機好像沒有別的應用程式了。","\n",{"->":".^.^.^.^.no_open"},{"#f":5}]}],{"#f":1}],"open":[["ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},"^伸手點擊，彈出的是一個類似感謝卡的圖片：","\n","^<i>「感謝您參與我們的計畫，安擎先生，我們已依照約定將款項送至指定帳戶。</i>","\n","^<i>請享受我們為您準備的盛宴，節目將於下午五點開始。」</i>","\n","^右下角署名：歐亙企業","\n","ev","str","^查看時間","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"Take_Phone.open.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^什麼盛宴？",{"->":"$r","var":true},null]}],["ev",{"^->":"Take_Phone.open.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^什麼節目？",{"->":"$r","var":true},null]}],"ev","str","^環顧四周","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["\n","^手機上並沒有任何顯示時間的地方。","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"Take_Phone.open.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"\n","^這麼想來，我也有些餓了。","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"Take_Phone.open.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"\n","^聽起來毛毛的，我應該要趕緊採取行動了。","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["\n",{"->":"See_Surrounding"},{"#f":5}]}],{"#f":1}],"no_open":[["ev","str","^環顧四周","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"See_Surrounding"},{"#f":5}]}],{"#f":1}],"#f":1}],"Do_Not_Take_Phone":[["^好可怕，我還是不要帶著這來路不明的東西吧。","\n","^我將手機擱置在床頭並坐起身。","\n","ev","str","^環顧四周","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"See_Surrounding"},"\n",{"#f":5}]}],{"#f":1}],"See_Surrounding":[["ev",{"VAR?":"time"},40,">","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"Bad_Ending"},{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"VAR?":"time"},20,">","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"CNT?":"See_Phone"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"CNT?":"Take_Phone.unlock"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"Phone_vibration"},{"->":".^.^.^.5"},null]}],"nop","\n",{"->":".^.^.^.6"},null]}],"nop","\n",{"->":".^.^.^.14"},null]}],"nop","\n","^<br>","\n","^<img src=\"room.png\" style=\"max-width: 700px; max-height: 700px\">","\n",["^我環顧四周，這裡被整理的整齊——只有一張床和兩扇門，要不整齊也難吧。","\n","^天花板上有日光燈，但因牆壁、門、地板和床都是一片純白，所以自玻璃窗透進來的陽光能在房內反射，看不出來燈是否是開啟狀態。","\n","ev","str","^查看床鋪","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^查看天花板","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^查看地板","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^查看牆壁","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^查看左邊的門","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^查看右邊的門","/str","/ev",{"*":".^.c-5","flg":4},"ev","str","^查看窗戶","/str","/ev",{"*":".^.c-6","flg":4},"ev","str","^查看隨身物品","/str","/ev",{"*":".^.c-7","flg":4},{"c-0":["^ ",{"->":"See_Bed"},"\n",{"#f":5}],"c-1":["^ ",{"->":"See_Ceiling"},"\n",{"#f":5}],"c-2":["^ ",{"->":"See_Floor"},"\n",{"#f":5}],"c-3":["^ ",{"->":"See_Wall"},"\n",{"#f":5}],"c-4":["^ ",{"->":"See_Left_Door"},"\n",{"#f":5}],"c-5":["^ ",{"->":"See_Right_Door"},"\n",{"#f":5}],"c-6":["^ ",{"->":"See_Window"},"\n",{"#f":5}],"c-7":["^ ",{"->":"See_Things"},"\n",{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":1}],"Phone_vibration":[["^嗡嗡——","\n","^口袋中的手機震動了兩下。","\n","ev","str","^拿起來看","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"See_Phone"},"\n",{"#f":5}]}],{"#f":1}],"See_Phone":[["^手機中有一則陌生通知，似乎是來自那唯一的黑色 app。","\n","ev","str","^查看訊息","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n","^<i>「提醒您，宴會將於半小時後開始，屆時會有專人帶您到宴會會場，請您在這段時間內完成洗漱。</i>","\n","^<i>我們期待您的到來。」","\n",[["ev",{"^->":"See_Phone.0.c-0.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^半小時？",{"->":"$r","var":true},null]}],["ev",{"^->":"See_Phone.0.c-0.5.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^宴會？專人？那很好啊！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Phone.0.c-0.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^時間過得這麼快嗎？看來我得快一點了。","\n",{"->":"See_Surrounding"},{"#f":5}],"c-1":["ev",{"^->":"See_Phone.0.c-0.5.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^等到那時就能請他們解釋一切原委，並告訴我出去的辦法了吧！","\n",["ev","str","^坐下靜待時間過去","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^去廁間洗漱整理儀容","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^繼續探索房間","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^我回到床上坐下，看著這個房間。","\n","^我依舊沒有頭緒我為何身在這裡，也不知道是否該逃跑。","\n","^或許等等的宴會會告訴我答案吧。","\n","^......","\n",{"->":"Bad_Ending"},{"#f":5}],"c-1":["\n",{"->":"See_Left_Door"},{"#f":5}],"c-2":["^  ","\n",{"->":"See_Surrounding"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"See_Bed":[["^純白的被褥，純白的枕頭，純白的床單……我要是住在這裡一定會瘋掉。","\n","ev","str","^查看枕頭","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^查看被子","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^查看床單","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^嘗試拿起手機","/str",{"CNT?":"Do_Not_Take_Phone"},"/ev",{"*":".^.c-3","flg":21},"ev","str","^什麼都不看","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["^ ",{"->":".^.^.^.pillow"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.comforter"},"\n",{"#f":5}],"c-2":["^ ",{"->":".^.^.^.sheet"},"\n",{"#f":5}],"c-3":["^ ",{"->":"Take_Phone.unlock"},"\n",{"#f":5}],"c-4":["^ ",{"->":"See_Surrounding"},"\n",{"#f":5}]}],{"pillow":[["^就是個枕頭。","\n","ev","str","^敲打它","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^晃動它","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^不理它","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ","\n","^伸出拳頭朝它一頓猛揍……消耗體力後感覺更餓了。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["^ ","\n","^我拿起來搖了搖。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":"See_Bed.shake_pillow"},{"#f":5}],"c-2":["^ ",{"->":"See_Bed"},"\n",{"#f":5}]}],{"#f":1}],"shake_pillow":["ev",{"CNT?":".^.^.key"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"See_Bed.pillow"},{"->":".^.^.^.4"},null]}],"nop","\n",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":"See_Bed.pillow"},{"->":".^.^.17"},null],"s1":["pop","^ ",{"->":"See_Bed.key"},{"->":".^.^.17"},null],"#f":5}],"\n",{"#f":1}],"key":[["^一把鑰匙掉了出來，在床鋪上翻了兩圈。","\n",["ev",{"^->":"See_Bed.key.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^我將鑰匙收好，以備不時之需",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Bed.key.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^。","\n",{"->":"See_Bed"},{"#f":5}]}],{"#f":1}],"comforter":[["^蓬蓬的被子，在開著空調的房間裡可以說是天堂。","\n","ev","str","^抖動它","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^鋪平它","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^什麼都不做","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^我揮動手臂，使勁抖了兩下。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^將它鋪平後我伸手撫平它的摺痕。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-2":["\n",{"->":"See_Bed"},{"#f":5}]}],{"#f":1}],"sheet":["^我走下床，掀開被子。","\n","^就是個床單。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^"},{"#f":1}],"#f":1}],"See_Ceiling":[["^抬頭，就是水泥一般的天花板，但被漆成白色，房間中央有方形的日光燈，燈光微弱。","\n",["ev",{"^->":"See_Ceiling.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^有辦法摸到它嗎？",{"->":"$r","var":true},null]}],["ev",{"^->":"See_Ceiling.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^沒啥好看的。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Ceiling.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^伸長手臂……","\n","^怎麼可能呢。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"See_Ceiling.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"See_Surrounding"},{"#f":5}]}],{"#f":1}],"See_Floor":[["^白色磁磚地，好像蒙了一層灰。","\n",["ev",{"^->":"See_Floor.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^到底有沒有掃地啊？",{"->":"$r","var":true},null]}],"ev","str","^趴到地上","/str","/ev",{"*":".^.c-1","flg":4},["ev",{"^->":"See_Floor.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^沒啥好看的。 ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Floor.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^看著因我的一舉一動而揚起的灰塵反射著陽光，我邊小聲嘀咕抱怨。","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["^ ","\n",{"->":".^.^.^.lay"},{"#f":5}],"c-2":["ev",{"^->":"See_Floor.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"See_Surrounding"},{"#f":5}]}],{"lay":[["^我趴到地上，朝各處掃視。","\n",["ev",{"^->":"See_Floor.lay.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^像個智障一樣……",{"->":"$r","var":true},null]}],["ev",{"^->":"See_Floor.lay.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^掃視床底",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Floor.lay.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^我站起身。","\n",{"->":".^.^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"See_Floor.lay.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^，","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.^.under_bed"},{"#f":5}]}],{"#f":1}],"under_bed":[["ev",{"CNT?":".^.^.^.photo"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^除了灰塵外，已經沒有東西了。",{"->":".^.^.^.4"},null]}],"nop","\n","ev",{"CNT?":".^.^.^.photo"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"See_Floor.lay"},{"->":".^.^.^.10"},null]}],"nop","\n","<>","^發現了一張小卡。","\n","ev","str","^鑽進去撿起來","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^用桿子撈出來","/str",{"CNT?":"See_Wall.stick"},"/ev",{"*":".^.c-1","flg":21},["ev",{"^->":"See_Floor.under_bed.0.28.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^好髒。",{"->":"$r","var":true},null]}],{"c-0":["\n","^盯著床底更厚的灰塵，我硬著頭皮鑽進去，伸長手將小卡拿了出來。","\n",{"->":".^.^.^.^.photo"},{"#f":5}],"c-1":["\n","^伸長桿子，我慢慢的把小卡撈出來，剛剛有找到這根桿子實在是太好了。","\n",{"->":".^.^.^.^.photo"},{"#f":5}],"c-2":["ev",{"^->":"See_Floor.under_bed.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.28.s"},[{"#n":"$r2"}],"\n","^不得不說，床底下的灰塵更厚了是要我怎麼進去？","\n",{"->":".^.^.^.^.lay"},{"#f":5}]}],{"#f":1}],"photo":[["^是我和哥哥小時候的照片。","\n","^照片中的我們頂著太陽，穿著同套衣服，對鏡頭比著大大的勝利手勢。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},["ev",{"^->":"See_Floor.photo.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^哥哥小時候總是帶著我到處玩……",{"->":"$r","var":true},null]}],["ev",{"^->":"See_Floor.photo.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^算了，回憶這些幹嘛，都過去了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Floor.photo.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","^某個周末，我們去附近的公園踢球，我為了接飛得太高的球而因此跌倒擦傷膝蓋，紅色的血液讓我哭了出來，哥哥拉著我跑到小學的保健室想找校護阿姨，卻因假日無人留守，兩人便在無人的學校探險。","\n","^又曾有次放學，說著要走捷徑回家，走著走著，30分鐘後我們又回到了原點。","\n","^國中時，每日早晨也都是哥哥邊罵著髒話邊叫我趕緊起床，早餐已經買好放在桌上，要我拿了去學校吃……","\n",[["ev",{"^->":"See_Floor.photo.0.c-0.13.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^這張照片是哥哥老師送我們的禮物。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Floor.photo.0.c-0.13.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^自幼父母雙亡的我們被轉送到親戚家，由於不是親生孩子，親戚總是對我們視若無睹。","\n","^哥哥從小就擔起了爸爸的責任，我知道我虧對了他，所以他才會在上大學後變成了另一個人。","\n","^是我的錯呀。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":"See_Floor"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"See_Floor.photo.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^"},{"#f":5}]}],{"#f":1}],"#f":1}],"See_Wall":[["ev",{"CNT?":".^.^.stick"},"/ev",[{"->":".^.b","c":true},{"b":["^ 牆上已經被我打出一個大洞了……",{"->":".^.^.^.4"},null]}],"nop","\n","ev",{"CNT?":".^.^.stick"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"See_Surrounding"},{"->":".^.^.^.10"},null]}],"nop","\n","^我沿著房間走一圈，就是牆壁，毫無坑洞的那種。","\n","ev","str","^敲敲看","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"See_Wall.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^沒啥好看的 ",{"->":"$r","var":true},null]}],{"c-0":["^ ",{"->":".^.^.^.knock"},"\n",{"#f":5}],"c-1":["ev",{"^->":"See_Wall.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],{"->":"See_Surrounding"},"\n",{"#f":5}]}],{"knock":["ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},"^咚！咚！咚！","\n",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":"See_Wall"},{"->":".^.^.17"},null],"s1":["pop","^ ","<>","^扣！有一處聲音不太一樣。 ",{"->":"See_Wall.special_wall"},{"->":".^.^.17"},null],"#f":5}],"\n",{"#f":1}],"special_wall":[["ev","str","^用力打","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"See_Wall.special_wall.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^算了，安靜一點的好",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"See_Wall.hit_wall"},{"#f":5}],"c-1":["ev",{"^->":"See_Wall.special_wall.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"^，太吵而驚動到什麼人就糟了。","\n",{"->":"See_Surrounding"},{"#f":5}]}],{"#f":1}],"hit_wall":["ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},"^我使勁打它、踢它，發出了巨大聲響。","\n",["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop",{"->":".^.^.29"},null],"s1":["pop",{"->":".^.^.29"},null],"s2":["pop",{"->":".^.^.29"},null],"s3":["pop","^ ",{"->":"See_Wall.stick"},{"->":".^.^.29"},null],"#f":5}],"\n",{"->":".^.^.special_wall"},{"#f":1}],"stick":[["^匡噹——","\n","^「牆」被敲出了一個洞。","\n","^裡頭有一支像是用來掛門簾一樣的伸縮桿，和我的前臂差不多長。","\n",["ev",{"^->":"See_Wall.stick.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^將桿子拿在手上",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Wall.stick.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"^，我繼續探索周圍。","\n",{"->":"See_Surrounding"},{"#f":5}]}],{"#f":1}],"#f":1}],"See_Left_Door":[["^<img src=\"toilet.png\" style=\"max-width: 700px; max-height: 700px\">","\n","^門輕易的被推開，是小間且簡陋的廁所。","\n",["ev",{"^->":"See_Left_Door.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^「至少有打掃……」",{"->":"$r","var":true},null]}],["ev",{"^->":"See_Left_Door.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^先上個廁所吧",{"->":"$r","var":true},null]}],"ev","str","^查看馬桶","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^查看天花板","/str","/ev",{"*":".^.c-3","flg":4},["ev",{"^->":"See_Left_Door.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":2},{"s":["^沒啥好看的",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Left_Door.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^我邊自言自語邊走進去。","\n","^雖然除了馬桶和洗手台外，這裡什麼都沒有，但還是蠻乾淨的，白色的地板上也見不著灰塵。","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"See_Left_Door.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"^。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.pee"},{"#f":5}],"c-2":["\n","^雖然百般不願意，還是看一下吧。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.toilet"},{"#f":5}],"c-3":["\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.ceiling"},{"#f":5}],"c-4":["ev",{"^->":"See_Left_Door.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"^。","\n","^我退出廁所並帶上門。","\n",{"->":"See_Surrounding"},{"#f":5}]}],{"pee":[["^打從一早起來就想上廁所了，好險這裡的設備還算完善。","\n","^所以說這個房間到底是哪裡啊？","\n","ev","str","^沖馬桶","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^別沖吧","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":".^.^.^.^.flush"},{"#f":5}],"c-1":["\n","^還是別沖的好，吵到誰就完蛋了。","\n",{"->":".^.^.^.^"},{"#f":5}]}],{"#f":1}],"flush":["ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},"^我按下沖水把手，水嘩啦嘩啦的沖過，聲音迴盪在整個廁間。","\n","^唉呀，好像有點吵。","\n",{"->":".^.^"},{"#f":1}],"toilet":[["^就是個普通的白色傳統馬桶，沒有什麼自動升降馬桶蓋或是溫暖坐墊的功能。","\n","ev","str","^沖水","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^打開水箱蓋子","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^沒啥好看的","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"->":".^.^.^.^.flush"},{"#f":5}],"c-1":["\n","^我打開水箱蓋子檢查，","<>","\n",{"->":".^.^.^.^.waterbox"},{"#f":5}],"c-2":["\n",{"->":".^.^.^.^"},{"#f":5}]}],{"#f":1}],"waterbox":["ev",{"CNT?":".^.^.screwdriver"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^水箱正在填充新的水。","\n",{"->":".^.^.^.^.toilet"},{"->":".^.^.^.4"},null]}],"nop","\n","ev",{"CNT?":".^.^.flush"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^裡頭就是水，還因為加了清潔劑而有點混濁，所以有種深不見底的錯覺。","\n",{"->":".^.^.^.^.toilet"},{"->":".^.^.^.11"},null]}],"nop","\n","ev",{"CNT?":".^.^.flush"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^水箱因剛剛沖過馬桶所以正在填充水，水箱底部有個螺絲起子，看起來早已生鏽。","\n","ev","str","^拿起螺絲起子","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^不理他","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.17"},{"c-0":["^ ","\n","^雖然要把手伸進馬桶中是百般不願意，但水箱應該是蠻乾淨的吧？","\n",{"->":".^.^.^.^.^.screwdriver"},{"#f":5}],"c-1":["\n","^不論是可疑的螺絲起子還是馬桶水箱，都不是讓人想觸碰的東西。","\n",{"->":".^.^.^.^.^.toilet"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"screwdriver":[["ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},"^我拿起螺絲起子，並將它身上的水甩掉。","\n","^因為長期處在潮濕的環境，它生鏽得像是一擰螺絲便會自己碎掉，不知道是誰放進水箱裡的呢？","\n",["ev",{"^->":"See_Left_Door.screwdriver.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^「一定是以前也在這裡居住過的人。」",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Left_Door.screwdriver.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","^即便還不清楚這裡是哪裡，以前曾經有誰居住過也不清楚，但能夠找到一些道具實在是讓我安心了不少。","\n",{"->":".^.^.^.^.toilet"},{"#f":5}]}],{"#f":1}],"ceiling":[["^天花板像是用塑膠板拼接而成，而角落有個抽風口。","\n","ev","str","^敲敲看天花板","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^查看天花板內部","/str",{"CNT?":".^.^.^.break_ceiling"},"/ev",{"*":".^.c-1","flg":5},"ev","str","^查看抽風口","/str","/ev",{"*":".^.c-2","flg":4},["ev",{"^->":"See_Left_Door.ceiling.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^沒啥好看的",{"->":"$r","var":true},null]}],{"c-0":["\n","^要怎麼敲呢？","\n",["ev","str","^試圖爬上馬桶敲","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^拿螺絲起子戳","/str",{"CNT?":".^.^.^.^.^.screwdriver"},"/ev",{"*":".^.c-1","flg":5},"ev","str","^拿桿子敲","/str",{"CNT?":"See_Wall.stick"},"/ev",{"*":".^.c-2","flg":5},{"c-0":["\n","^我蓋上馬桶蓋，小心翼翼的踩上並伸出手。","\n","^還是碰不到啊......","\n","^早知道小時候多打一些籃球、多跳一些繩，才能長得高一點。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.^.^"},{"#f":5}],"c-1":["\n","^我蓋上馬桶蓋，小心翼翼的踩上並伸出手。","\n","^這個起子還是不夠長......","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.^.^"},{"#f":5}],"c-2":["\n","^我舉起方才找到的桿子，伸長它好讓我能頂到天花板。","\n","^扣！扣！扣！","\n","^天花板裡頭是空心的。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},["ev","str","^破壞他","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^不理他","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^他裡面一定有什麼端倪！","\n","^我用力拿桿子戳其中一片塑膠板。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":"See_Left_Door.knock_ceiling"},{"#f":5}],"c-1":["\n","^誰會想要對天花板施展暴力啊？","\n","^雖然我也才破壞過牆壁就是了。","\n",{"->":".^.^.^.^.^.^.^"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.break_ceiling"},{"#f":5}],"c-2":["\n","^嗯......就是很普通的抽風口，一打開廁所的燈，它便會嗡嗡作響開始運作。","\n",["ev","str","^對著抽風口求救","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^對著抽風口大罵","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^沒什麼好看的","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^喂！！有人嗎！！！","\n","^我朝它大喊，但沒有什麼反應，只有回音迴盪在整個廁間。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.^.^"},{"#f":5}],"c-1":["\n","^幹！！你們到底是三小東西！！抓我走是什麼意思！","\n","^是腦袋有洞需要我幫你們補起來是不是！","\n","^......罵完心情舒坦了一些。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.^.^"},{"#f":5}],"c-2":["\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-3":["ev",{"^->":"See_Left_Door.ceiling.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"^。","\n",{"->":".^.^.^.^"},{"#f":5}]}],{"#f":1}],"knock_ceiling":[[["ev",{"^->":"See_Left_Door.knock_ceiling.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^碰！",{"->":"$r","var":true},null]}],["ev",{"^->":"See_Left_Door.knock_ceiling.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^放棄吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Left_Door.knock_ceiling.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.pong"},{"#f":5}],"c-1":["ev",{"^->":"See_Left_Door.knock_ceiling.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.ceiling"},{"#f":5}]}],{"#f":1}],"pong":[["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop",{"->":".^.^.29"},null],"s1":["pop","^  ",{"->":".^.^.29"},null],"s2":["pop","^  ",{"->":".^.^.29"},null],"s3":["pop","^ ",{"->":".^.^.^.^.break_ceiling"},{"->":".^.^.29"},null],"#f":5}],"\n","^巨大聲響迴盪在整個房間中。","\n","^我有點害怕有誰發現了我的怪異行為。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.knock_ceiling"},{"#f":1}],"break_ceiling":[["^那片塑膠板終於被我推開，天花板裡頭非常的暗。","\n","ev","str","^用手機照亮","/str",{"CNT?":"Take_Phone.unlock"},"/ev",{"*":".^.c-0","flg":21},["ev",{"^->":"See_Left_Door.break_ceiling.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^離開吧",{"->":"$r","var":true},null]}],{"c-0":["\n","^對了，我還有那個奇怪的手機啊！","\n","^好險它仍保有手機的基本功能－－手電筒。","\n","^我打開它，對著天花板裡面四周檢查。","\n","^裡面有一些複雜的管線......","\n","^還有一個......盒子？","\n",["ev","str","^拿出來看","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^伸長手拿出這個盒子，","<>","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.^.^.^.key_box"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"See_Left_Door.break_ceiling.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"^。","\n",{"->":".^.^.^.^.ceiling"},{"#f":5}]}],{"#f":1}],"key_box":[["^它是一個精緻的木盒，感覺是用來裝首飾的。","\n","^它被鎖住了。","\n","^盒子中間有個金色的金屬鎖，有些掉漆與生鏽，可能是銀質的。","\n","ev","str","^用鑰匙開鎖","/str",{"CNT?":"See_Bed.key"},"/ev",{"*":".^.c-0","flg":21},"ev","str","^打不開...","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":".^.^.^.^.key"},{"#f":5}],"c-1":["\n","^試著使用暴力拉開，它依舊不為所動......","\n","^只好先收起來了。","\n",{"->":".^.^.^.^.ceiling"},{"#f":5}]}],{"#f":1}],"key":[["^拿出在枕頭下找到的鑰匙，很順利的轉開了鎖。","\n","^木盒中有著柔軟的凹槽，其中放著的是一把粗糙的鑰匙。","\n",["ev",{"^->":"See_Left_Door.key.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^用鑰匙拿鑰匙......",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Left_Door.key.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^這還真是有點荒謬。","\n","^不過它看起來很重要，先收著吧。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^.^.ceiling"},{"#f":5}]}],{"#f":1}],"#f":1}],"See_Right_Door":[["^一面木門，就和一般辦公室中會出現的一樣。只是上頭沒有任何指示牌或是能看見外面情況的小玻璃窗。","\n","ev","str","^嘗試打開","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^用枕頭下發現的鑰匙解鎖","/str",{"CNT?":"See_Bed.key"},"/ev",{"*":".^.c-1","flg":5},"ev","str","^用木盒中的鑰匙解鎖","/str",{"CNT?":"See_Left_Door.key"},"/ev",{"*":".^.c-2","flg":5},"ev","str","^沒什麼好看的","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^我握緊門把，下壓......門被鎖住了。","\n","^這不是理所當然的嗎","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^從口袋中拿出剛剛發現的鑰匙。","\n","^插不進去耶，是我的角度不對嗎？","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^從剛剛在廁間天花板發現的木盒中取出鑰匙，我小心翼翼的把他對準鎖孔。","\n","^喀擦。","\n","^是鎖被轉開的聲音。","\n",[["ev",{"^->":"See_Right_Door.0.c-2.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^將門推開",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"See_Right_Door.0.c-2.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^，外面是一條長廊，盡頭是個叉路，兩側牆壁只有消防栓等工具，沒有任何路標或是其他房間。","\n","^天花板的日光燈是冷冷的白色，有種身在辦公室的錯覺。","\n","^走廊上非常安靜，沒有人來往。","\n",["ev","str","^走出去","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^回到房間待著","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"Good_Ending"},{"#f":5}],"c-1":["\n","^「外頭有點奇怪啊......」","\n","^我嘀咕著，邊輕輕關上門，以免有人發現我試圖亂跑。","\n","^只好等宴會開始了。","\n",{"->":"Bad_Ending"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-3":["\n",{"->":"See_Surrounding"},{"#f":5}]}],{"#f":1}],"See_Window":[["^窗戶高掛在牆上，從我的角度只能看到天空。","\n","ev","str","^跳起來看外頭","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^爬到床上跳跳看","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^伸手去摸","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^沒什麼好看的","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^我在原地使勁的跳，隱約能見到外面是一片田地，沒有高樓大廈。","\n","^......好累。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^我爬到床上使勁的跳，彈簧床讓我能更順利的看見外頭。","\n","^外面就是一片農田，沒有高樓、沒有車水馬龍的街道。","\n","^做為一個城市小孩，這裡讓人感到很陌生。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^我掂起腳尖、伸長手臂。","\n","ev",{"CNT?":".^.^.^.necklace"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^窗框上除了滿滿的灰塵外，沒有別的東西了。","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":"See_Window"},{"->":".^.^.^.7"},null]}],"nop","\n","^窗框上滿是灰塵，不過我摸到了觸感不一樣的東西。","\n",["ev","str","^拿起來看","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"See_Window.necklace"},{"#f":5}]}],{"#f":5}],"c-3":["\n",{"->":"See_Surrounding"},{"#f":5}]}],{"necklace":["^這是一個金質的項鍊。","\n","^細細的金鍊上有著四葉幸運草的裝飾，很是典雅。","\n","^不知道是誰的呢？","\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},{"->":".^.^"},{"#f":1}],"#f":1}],"See_Things":["ev",0,"/ev",{"temp=":"things"},"^我身上的東西有：","<>","\n","ev",{"CNT?":"Take_Phone.unlock"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^來路不明的手機","<>","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.11"},null]}],"nop","\n","ev",{"CNT?":"See_Bed.key"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"things"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^、","<>",{"->":".^.^.^.7"},null]}],"nop","\n","^枕頭下發現的鑰匙","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.17"},null]}],"nop","\n","ev",{"CNT?":"See_Floor.photo"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"things"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^、","<>",{"->":".^.^.^.7"},null]}],"nop","\n","^床底下的照片","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.23"},null]}],"nop","\n","ev",{"CNT?":"See_Wall.stick"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"things"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^、","<>",{"->":".^.^.^.7"},null]}],"nop","\n","^牆壁中的桿子","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.29"},null]}],"nop","\n","ev",{"CNT?":"See_Left_Door.screwdriver"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"things"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^、","<>",{"->":".^.^.^.7"},null]}],"nop","\n","^馬桶水箱中的螺絲起子","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.35"},null]}],"nop","\n","ev",{"CNT?":"See_Left_Door.key_box"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"things"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^、","<>",{"->":".^.^.^.7"},null]}],"nop","\n","^廁所天花板中的木盒","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.41"},null]}],"nop","\n","ev",{"CNT?":"See_Left_Door.key"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"things"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^、","<>",{"->":".^.^.^.7"},null]}],"nop","\n","^木盒中的鑰匙","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.47"},null]}],"nop","\n","ev",{"CNT?":"See_Window"},"/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"things"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^、","<>",{"->":".^.^.^.7"},null]}],"nop","\n","^窗框上的項鍊。","\n","ev",{"VAR?":"things"},1,"+",{"temp=":"things","re":true},"/ev",{"->":".^.^.^.53"},null]}],"nop","\n","ev",{"VAR?":"things"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^......我身上什麼都沒有。","\n","^有人偷了我的東西？？","\n",{"->":".^.^.^.61"},null]}],"nop","\n",{"->":"See_Surrounding"},{"#f":1}],"Good_Ending":["^我鼓起勇氣往前走，腳步聲和日光燈微微的嗡嗡聲是這裡唯一的聲音。","\n","^前方，不知道還有什麼在等著我？","\n","^<b>遊戲結束</b>","\n","end",{"#f":1}],"Bad_Ending":[["^叩叩叩！敲門聲自右邊的門傳來。","\n","^隨即，兩名身著西裝、帶著墨鏡的男子直朝我走來。","\n","^「安擎先生，宴會即將開始了，我們會帶您到宴會會場」其中一名男子說。","\n","ev","str","^試圖反抗","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^跟他們走","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^「你...你們要幹嘛......不要過來！」我慢慢挪後身子，邊舉起手想擋住他們。","\n","^他們似乎不太開心，邊說著請我配合邊把我架了出去。","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^「好的，麻煩你們了。」我頷首，他們一前一後的帶我出去。","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^房間外頭是個走廊，天花板上的日光燈是冷冷的白色。","\n","^跟著西裝男走很快就來到了類似餐廳的地方。","\n","^餐廳中有很多組桌椅，但只有其中幾桌擺了各式的食物，沙拉、主餐、甜點，應有盡有。","\n","^其中一桌坐了一名男性，身著直條紋西裝，看來已等候多時。","\n","ev","str","^跟他對話","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n","^正當我想說話時，他先我一步開口：「請坐，挑您喜歡的吃」。","\n","^話落，餐廳中響起悠揚的音樂，但此時滿腹疑問的我才沒心情聽音樂吃美食。","\n",[["ev",{"^->":"Bad_Ending.0.g-0.c-2.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^「你們是誰？」",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Bad_Ending.0.g-0.c-2.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^我問道。","\n","^桌前的男人向西裝男駛了眼色，西裝男立刻拿出了幾張A4紙。","\n",[["ev",{"^->":"Bad_Ending.0.g-0.c-2.5.c-0.10.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^從哪拿出來的紙啊？？",{"->":"$r","var":true},null]}],["ev",{"^->":"Bad_Ending.0.g-0.c-2.5.c-0.10.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^...",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Bad_Ending.0.g-0.c-2.5.c-0.10.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^我忍不住在心裡吐槽。","\n",{"->":"Bad_Ending.0.g-1"},{"#f":5}],"c-1":["ev",{"^->":"Bad_Ending.0.g-0.c-2.5.c-0.10.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"Bad_Ending.0.g-1"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"#f":5}],"g-1":["^襯衫男翻閱了一下，將其遞到我面前。","\n","^「容我和您介紹一下，敝姓簡，我是您這次合約的專員。」","\n","^「我們是歐亙企業——雖然並不是合法的那種。」說到這，他自嘲的笑了笑。","\n","^「我們以販售人體器官聞名，顧客將器官或身體交給我們，而我們付錢給客戶。」","\n","^「這比起器官捐贈來說，可是一筆非常划算的交易兼公益活動——你知道的，光靠捐贈根本無法滿足所有需要健康器官的人，若有我們和我們顧客的幫忙，一切都會順利許多。」","\n",["ev",{"^->":"Bad_Ending.0.g-1.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^這人到底在說什麼？？",{"->":"$r","var":true},null]}],["ev",{"^->":"Bad_Ending.0.g-1.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^所以我是他們口中的「顧客」嗎？",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"Bad_Ending.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","^這樣是違法的吧？為什麼他要和我說這個？？","\n",{"->":".^.^.^.g-2"},{"#f":5}],"c-4":["ev",{"^->":"Bad_Ending.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n","^......為什麼？","\n",[["ev",{"^->":"Bad_Ending.0.g-1.c-4.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^錢去了哪裡？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Bad_Ending.0.g-1.c-4.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^若我真的是顧客，我應當獲得一筆錢。","\n","^但我並不是愛錢如癡的人，即便再怎麼樣都不可能做這種交易。","\n","^除非有人為了錢陷害我？","\n",{"->":".^.^.^.^.^.g-2"},{"#f":5}]}],{"#f":5}],"#f":5}],"g-2":["^「您不懂嗎？」","\n","^「您在獲得一大筆錢的同時，也拯救了另一個人的性命！」","\n",["ev",{"^->":"Bad_Ending.0.g-2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^他瘋了吧？",{"->":"$r","var":true},null]}],["ev",{"^->":"Bad_Ending.0.g-2.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^「所以我簽了約嗎？」",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"Bad_Ending.0.g-2.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^我在心裡暗自咒罵。","\n","^「所以您當時聯絡了我們，和我們簽了約。」男人將桌上的白紙再朝我推了幾公分。","\n",{"->":".^.^.^.g-3"},{"#f":5}],"c-6":["ev",{"^->":"Bad_Ending.0.g-2.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"^我問。","\n","^「是的，沒錯。這就是您當時簽的約。」男人將桌上的白紙再朝我推了幾公分。","\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^「您的合約是賣出您一側的肺葉，這並不會對您的健康造成多大影響。」","\n","^「而款項與匯款資訊都寫在合約中了，請不要擔心，我們已將約定的款項匯至您的帳戶中了。」","\n","ev","str","^查看收款資訊","/str","/ev",{"*":".^.c-7","flg":20},{"c-7":["\n","^這個收款帳號不是我的啊......？","\n","^不對，有點眼熟。","\n","^是哥哥的？","\n","^認知到這個事實後，男人喋喋不休的在講些什麼我一個字都沒聽進去。","\n","^仔細回想起來，好像真有些和哥哥、錢有關的事。","\n",[["ev",{"^->":"Bad_Ending.0.g-3.c-7.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^哥哥......哥哥......",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Bad_Ending.0.g-3.c-7.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^啊，哥哥出了車禍！","\n","^當時接到消息後我馬上趕去了醫院，醫生卻說需要一大筆錢來做手術。","\n","^我急著各處借款，終是湊齊了金額，然而根本沒有能力還得起。","\n","^直到某夜我喝得有點醉，見著了歐亙的廣告，便找了他們簽了約。","\n",[["ev",{"^->":"Bad_Ending.0.g-3.c-7.11.c-0.15.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是我自己做的嗎......",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Bad_Ending.0.g-3.c-7.11.c-0.15.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^既不是有人害我，也不是什麼戲劇化的過程，僅僅是我叫來了人，簽下自己的名字而已。","\n","^<br>","\n",{"->":"Bad_Ending.0.g-4"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"#f":5}],"g-4":["^眼前的男人笑得親切，我卻覺得他絕非善類。","\n","ev","str","^接受事實","/str","/ev",{"*":".^.c-8","flg":4},["ev",{"^->":"Bad_Ending.0.g-4.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-9","flg":2},{"s":["^「能夠取消合約嗎？」",{"->":"$r","var":true},null]}],{"c-8":["\n","^「好吧，我知道了。」我打自進餐廳以來，第一次開口講話。","\n","^「你們給的金額也算是合理，我接受你們的交易。」","\n","^男人朗朗大笑「我就喜歡您這種人！請您享用美食吧，我不吵您了，我兩個小時後會回來向您說明後續事宜，您就先沉澱一下心情吧！」","\n",{"->":".^.^.^.g-5"},{"#f":5}],"c-9":["ev",{"^->":"Bad_Ending.0.g-4.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"^我小心翼翼的問道。","\n","^「不好意思，是我聽錯了嗎？」男人偏頭，臉上的微笑變得有些僵硬。","\n",[["ev",{"^->":"Bad_Ending.0.g-4.c-9.10.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^「我想取消合約。」",{"->":"$r","var":true},null]}],["ev",{"^->":"Bad_Ending.0.g-4.c-9.10.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^「呃......沒事。」",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Bad_Ending.0.g-4.c-9.10.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^我重複了剛剛說的話，男人微慍的臉色讓我有些害怕。","\n","^「請您享用美食吧，我兩個小時後會回來向您說明後續事宜。您就先沉澱一下心情吧。」","\n",{"->":".^.^.^.^.^.g-5"},{"#f":5}],"c-1":["ev",{"^->":"Bad_Ending.0.g-4.c-9.10.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^男人恢復了剛剛的笑容，起身道「請您享用美食吧，我不吵您了。我兩個小時後會回來向您說明後續事宜，您就先沉澱一下心情吧！」","\n",{"->":".^.^.^.^.^.g-5"},{"#f":5}]}],{"#f":5}],"#f":5}],"g-5":["^男人起身離開了餐廳，留下西裝男守在餐廳門口。","\n","^<b> 遊戲結束</b>","\n","end",{"#f":5}]}],{"#f":1}],"global decl":["ev",1,{"VAR=":"time"},"/ev","end",null],"#f":1}],"listDefs":{}};