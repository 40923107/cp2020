var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Website', 'text': 'Github :  https://github.com/40923107/cp2020 \n Gitlab :\xa0 https://gitlab.com/gitlab-org/gitlab \n', 'tags': '', 'url': 'Website.html'}, {'title': 'HW1', 'text': '', 'tags': '', 'url': 'HW1.html'}, {'title': 'Pc Hardware', 'text': '', 'tags': '', 'url': 'Pc Hardware.html'}, {'title': 'PCH 4 Cases, Form Factors, and Power Supplies(外殼，外形尺寸和電源)(P.37~P.41)', 'text': '\n Learning objective 學習目標 \n \n • Describe common computer case designs and features. \n \xa0 描述常見的計算機機箱設計和功能。 \n • Describe common motherboard form factors and suitable cases for each. \n \xa0 描述常見的主板外形尺寸和適用的機箱。 \n • Identify power supply connectors. \n \xa0 識別電源連接器。 \n • Recommend and install an appropriate power supply given specific hardware to be powered. \n \xa0 根據要供電的特定硬件，建議並安裝適當的電源。 \n • Disassemble and reassemble computers in the most common case designs. \n \xa0 在最常見的案例設計中，拆卸並重新組裝計算機。 \n • Test power supplies to ascertain proper functioning. \n \xa0 測試電源以確定功能正常。 \n \xa0 \n', 'tags': '', 'url': 'PCH 4 Cases, Form Factors, and Power Supplies(外殼，外形尺寸和電源)(P.37~P.41).html'}, {'title': 'Computer Cases 電腦機箱', 'text': '\n Learning Objectives 學習目標 \n \n • Describe common computer case designs and features. \n \xa0 描述常見的計算機機箱設計和功能。 \n \n • Describe common motherboard form factors and suitable cases for each. \n \xa0 描述常見的主板外形尺寸和適用的機箱。 \n \xa0 \n In this lesson, we are going to cover the various cases available for computers, several form factors or layouts of the motherboards, and the different types of power supplies that we use to provide direct current (DC) to the computer’s components. \n 在本課程中，我們將介紹計算機可用的各種情況，主板的幾種外形尺寸或佈局以及用於為計算機組件提供直流（DC）的不同類型的電源。 \n \n From the outside, almost all computers looked the same for a long time, but contemporary systems have really changed the size and shape of the cases available. The most common cases are mid-size or mini-towers, while some people, mostly gamers, still like full-sized towers. Some cases are made in a small form factor (SFF) to be easily carried for portability or to match an entertainment system like a DVD player in size. Servers are often contained in very long and narrow cases that usually range in size from one unit tall (a few inches) to two units tall (about 6-8 inches). Each of these cases provide us with a distinct layout of the motherboard they will accept. This layout is called a form factor. Larger case sizes allow for additional devices (such as hard disk drives and optical drives). The type of case will depend on the customer’s needs. \n \n 從外部看，幾乎所有計算機在很長一段時間內看起來都是一樣的，但是現代系統確實改變了可用機箱的大小和形狀。 最常見的情況是中型或小型塔，而有些人（大多是遊戲玩家）仍然喜歡全尺寸塔。 某些情況下，它們採用小巧的外形（SFF）製成，以便攜帶方便或與DVD播放器等娛樂系統相匹配。 服務器通常裝在非常狹長的情況下，大小通常從一個單位高（幾英寸）到兩個單位高（約6-8英寸）不等。 這些情況中的每一種都為我們提供了可接受的主板佈局。 此佈局稱為形狀因數。 較大的機箱尺寸允許使用其他設備（例如硬盤驅動器和光盤驅動器）。 案例的類型將取決於客戶的需求。 \n \n \n \n Motherboards and Processors 主板和處理器 \n \n', 'tags': '', 'url': 'Computer Cases 電腦機箱.html'}, {'title': 'Form Factor 構成因素', 'text': 'The size and arrangement of the motherboard is described as the form factor. The ATX form factor is one of the most widely used form factors in contemporary computers. It has been in use since the 1990s. The ATX form factor contains a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards. \n \n 母板的尺寸和排列方式描述為外形尺寸。 ATX規格是現代計算機中使用最廣泛的規格之一。 自1990年代以來一直在使用。 ATX外形尺寸包含一個用於集成端口（音頻，視頻，聲音，網絡等）的後端口群集。 擴展插槽平行於電路板的短邊，並且機箱的左側殼體開口可輕鬆添加擴展卡。 \n \n \n \n The mini-ATX form factor is smaller in size than the ATX form factor, but still contains many of the ATX features, such as a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards. \n \n 微型ATX尺寸比ATX尺寸小，但仍包含許多ATX功能，例如用於集成端口（音頻，視頻，聲音，網絡等）的後部端口集群。 擴展插槽平行於電路板的短邊，並且機箱的左側殼體開口可輕鬆添加擴展卡。 \n \n As shown in the table below, there are many variations of the ATX form factor, with the main difference being the physical size of the board and the number of expansion slots. Bigger boards allow for additional expansion slots, but require a larger tower. \n \n 如下表所示，ATX尺寸因數而異，主要區別在於主板的物理尺寸和擴展插槽的數量。 更大的板可提供額外的擴展插槽，但需要更大的塔架。 \n \n \n \n \n The ITX form factor was created in 2001. The ITX form factor itself was not very popular, but a variant called the mini-ITX became quite popular, since it also fit into ATX-style cases. It also contains a rear port cluster for its integrated ports (audio, video, sound, network, etc.). The expansion slots run parallel to the short side of the board, and the cases have a left-side case opening to support easily adding expansion cards, just like the ATX boards. Smaller variations, called pico-ITX and nano-ITX, are often used in computing appliances such as smart televisions, Internet-connected set-top devices designed to integrate with TV sets, and others . \n \n \n ITX尺寸規格創建於2001年。ITX尺寸規格本身並不十分流行，但是一個名為mini-ITX的變體就變得非常流行，因為它也適用於ATX風格的機殼。 它還為集成端口（音頻，視頻，聲音，網絡等）包含一個後部端口集群。 擴展插槽平行於板子的短邊延伸，並且外殼具有左側的外殼開口，以支持輕鬆添加擴展卡，就像ATX板一樣。 較小的變體，稱為pico-ITX和nano-ITX，通常用於計算設備中，例如智能電視，旨在與電視機集成的互聯網連接的機頂盒設備等。 \n \n \n \n \n \n', 'tags': '', 'url': 'Form Factor 構成因素.html'}, {'title': 'Power Supplies 電源 (P.39)', 'text': '\n Learning Objectives 學習目標 \n \n •\xa0 Identify power supply connectors. \n \xa0 \xa0識別電源連接器。 \n \n •\xa0Recommend and install an appropriate power supply given specific hardware to be powered. \n \xa0 \xa0根據要供電的特定硬件，建議並安裝適當的電源。 \n \n Power supply units (PSUs) are required in all computer systems, since computers are designed to run on direct current (DC), but our home and office outlets only provide alternating current (AC). For a computer to run well, it requires good, clean power from the outlet to the computer’s PSU. The PSU then converts the AC input into DC output to the various subsystems of the computer at the necessary voltages. The PSU creates heat in this transformation from AC to DC. Therefore, a good power supply fan is essential to remove the heat from the PSU and computer system. A power supply is a field replaceable unit (FRU) and should be replaced — never repaired — because the capacitors will hold voltage well after the PSU has been unplugged. \n \n 所有計算機系統都需要電源單元（PSU），因為計算機被設計為以直流電（DC）運行，但是我們的家庭和辦公室插座僅提供交流電（AC）。 為了使計算機正常運行，需要從插座到計算機PSU的電源乾淨整潔。 然後，PSU將交流輸入轉換為直流輸出，並在必要的電壓下將其輸入計算機的各個子系統。 PSU在從AC轉換為DC的過程中會產生熱量。 因此，良好的電源風扇對於消除PSU和計算機系統的熱量至關重要。 電源是一個現場可更換單元（FRU），應進行更換（切勿修理），因為在拔下PSU後電容器將保持良好的電壓。 \n \n \n Computer PSU, showing a space for the fan and an electric cord input. \n 計算機電源模塊，顯示風扇和電線輸入的空間。 \n \n Power supplies are rated in watts, with contemporary computer systems requiring 400 watts of power or more. Every device inside the computer requires power and receives it from the PSU. Therefore, the more devices there are inside the computer, the more power that is required from the power supply.\xa0 \n \n 電源的額定功率為瓦特，當代計算機系統需要400瓦特或更高的功率。 計算機內部的每個設備都需要電源，並從PSU接收電源。 因此，計算機中存在的設備越多，電源所需要的功率就越大。 \n \n A technician should verify that the backward “UR” logo\xa0  appears on the power supply, since this indicates that the power supply has been properly safety tested. When purchasing a new computer, the power supply will already have been selected based on the initial configuration of the machine, but if you are adding new components to the workstation, you will need to verify that the power supply has enough wattage to support the existing and new components. To do this, you need to determine the wattage by adding all the devices’ wattage together. If the device is measured in amps, multiply amps times voltage (A x V) to calculate the watts. Power supplies are not 100 percent efficient, nor are they rated to be 100 percent efficient. Therefore, you should always keep the total wattage under 70 percent of the rated wattage of the power supply to ensure proper computer operations. \n \n 技術人員應驗證電源上是否有向後的“ UR”徽標，因為這表明電源已經過正確的安全測試。 購買新計算機時，將已經根據計算機的初始配置選擇了電源，但是如果您要向工作站添加新組件，則需要驗證電源是否具有足夠的功率以支持現有電源。 和新組件。 為此，您需要通過將所有設備的瓦數相加來確定瓦數。 如果設備以安培為單位測量，則將安培乘以電壓（A x V）以計算瓦數。 電源效率不是100％，也不是額定為100％。 因此，應始終將總功率保持在電源額定功率的70％以下，以確保計算機正常運行。 \n \n \n Power supply specifications. 電源規格 \n \n Dual Voltage\xa0雙電壓 \n \n Most of today’s computers are built around the world with different voltages. In the United States, power is delivered at 115–120 VAC (voltage alternating current) at 60 hertz. In Europe and Asia, the typical wall outlet provides 230–240 VAC at 50 hertz. If the power supply supports dual voltage, you need to ensure the correct setting is selected. In that situation, there should be a slider button that allows you to select the proper voltage. Slide the button to the appropriate voltage before plugging the power supply into the wall or damage to the computer can occur. \n \n 當今大多數計算機都是在世界各地以不同的電壓構建的。在美國，功率在60赫茲的115-120 VAC（交流電壓）下輸送。在歐洲和亞洲，典型的壁裝電源插座以50赫茲提供230-240 VAC。如果電源支持雙電壓，則需要確保選擇正確的設置。在這種情況下，應該有一個滑塊按鈕，可讓您選擇合適的電壓。在將電源插頭插入牆上之前，請將按鈕滑動至適當的電壓，否則可能會損壞計算機。 \n \n What do you think would happen if we selected the wrong voltage before plugging it in? Well, if we are in Europe and expecting 230 VAC from the wall, but set the switch to 110 VAC (the United States standard), the power supply would receive an overvoltage condition, damaging the power supply and possibly starting a fire. If instead we took a European PC, which expects 230 VAC, and plugged it into a United States electrical outlet providing 110 VAC, we would get an undervoltage condition, and the computer would not start up. \n \n 如果我們在插入之前選擇了錯誤的電壓，您會怎麼辦？好吧，如果我們在歐洲並期望牆壁有230 VAC的電壓，但將開關設置為110 VAC（美國標準），則電源將出現過壓狀況，從而損壞電源並可能引發火災。如果取而代之的是，我們帶了一個歐洲PC，該PC期望提供230 VAC的電源，然後將其插入提供110 VAC的美國電源插座，則將出現欠壓情況，並且計算機將無法啟動。 \n \n \n Power supply port and on/off switch within a metal honeycomb mesh to allow for power supply ventilation. \n 金屬蜂窩網內的電源端口和開/關開關可允許電源通風。 \n \n', 'tags': '', 'url': 'Power Supplies 電源 (P.39).html'}, {'title': 'Power Supply Connectors\xa0電源連接器(P.40)', 'text': '\n Learning Objectives 學習目標 \n •\xa0 Identify power supply connectors. \n \xa0 \xa0識別電源連接器。 \n \n ATX 12V 2.x power supplies connect to the motherboard by way of a 24-pin cable + 4-pin/8-pin for CPU and 6- or 8-pin for PCIe video. \n ATX 12V 2.x電源通過24針電纜+ 4針/ 8針（用於CPU）和6或8針（用於PCIe視頻）連接到主板。 \n \n The purpose of a "dual-rail" PSU is to separate and limit the current through each wire to avoid overheating. \n “雙軌” PSU的目的是分離並限制通過每條電線的電流，以避免過熱。 \n \n Originally, the ATX 1.x standard required 20 pins to provide the mainboard (motherboard) power connection. ATX version 2.x expanded this to 24 pins for a standard ATX12V power supply. Many power supplies will provide a 20+4 pin cable, so that they are backward compatible with older systems. \n 最初，ATX 1.x標準需要20個引腳來提供主板（主板）電源連接。 ATX版本2.x將其擴展為24引腳，用於標準ATX12V電源。 許多電源將提供20 + 4針電纜，以便它們與較早的系統向後兼容。 \n \n With the higher voltage requirements of the Pentium 4 and onward, the ATX version 2.x standard made this a 24-pin cable +4 pin (original mini-ATX or P4 connector) or an EPS12 8-pin connector. The ATX12V provides a four-wire square connector for additional motherboard power. ESP12V provides an eight-wire connector (often split into two four-wire connectors for backward compatibility) for additional CPU power. Finally, there is the AUX connector, a six-wire connector to provide older systems with extra power to the motherboard. \n 隨著奔騰4及更高版本對電壓的更高要求，ATX 2.x版標準將其設置為24針電纜+4針（原始的mini-ATX或P4連接器）或EPS12 8針連接器。 ATX12V提供一個四線方形連接器，用於增加主板電源。 ESP12V提供了一個八線連接器（為了便於向後兼容，通常分為兩個四線連接器），以提供更多的CPU電源。 最後，還有AUX連接器，這是六線連接器，可為較舊的系統提供額外的電源給主板。 \n \n ATX12V version 2.x eliminated the 3.3V and 5.5V rails in favor of 12V rails due to the nature of CPU and PCIe power requirements. The ATX standards from version 2.x on have all developed to improve power delivery. The 12V\xa0 dual-rail \xa0 PSU is designed to limit over voltage situations and protect against overheating. \n 隨著奔騰4及更高版本對電壓的更高要求，ATX 2.x版標準將其設置為24針電纜+4針（原始的mini-ATX或P4連接器）或EPS12 8針連接器。 ATX12V提供一個四線方形連接器，用於增加主板電源。 ESP12V提供了一個八線連接器（為了便於向後兼容，通常分為兩個四線連接器），以提供更多的CPU電源。 最後，還有AUX連接器，這是六線連接器，可為較舊的系統提供額外的電源給主板。 \n \n \n \n \n Power Cable\xa0電源線 \n Application\xa0應用 \n Pinouts/Voltage\xa0引腳排列/電壓 \n \n \n \n \n \n \n \n \n IDE/EIDE PATA devices (HDD/ODD); Case Fans; PCI/PCIe Expansion cards requiring external power (i.e., USB, Firewire, Thunderbolt) \n \n IDE / EIDE PATA設備（HDD / ODD）; 機箱風扇； 需要外部電源（例如USB，Firewire，Thunderbolt）的PCI / PCIe擴展卡 \n \n \n Red (+5V), Yellow (+12V), Black (G), Black (G) \n \n 紅色（+ 5V），黃色（+ 12V），黑色（G），黑色（G） \n \n \n \n \n \n \n \n SATA Devices (HDD/ODD); PCI/PCIe Expansion cards requiring external power (i.e., USB, Firewire, Thunderbolt) \n \n SATA設備（HDD / ODD）; 需要外部電源（例如USB，Firewire，Thunderbolt）的PCI / PCIe擴展卡 \n \n \n 15-pin (+3.3 V, +5V, +12V) \n \n 15針（+3.3 V，+ 5V，+ 12V） \n \n \n \n \n \n \n \n PCI Express Video Cards – 6 or 8 pins \n \n PCI Express視頻卡– 6或8針 \n \n \n 6-pin (+12 v) (ATX12V Vers. 2.1) \n 8-pin (+12 v) (ATX12V Vers. 2.2) \n or later \n \n 6針（+12 v）（ATX12V版本2.1） \n 8針（+12 v）（ATX12V Vers.2.2） \n 或以後 \n \n \n \n \n \n \n \n Power supply wires.\xa0電源線。 \n \n In addition to the motherboard needing power to function, peripherals need power to function, too. The power supply provides additional connectors for peripherals used throughout the computer system. The oldest style connector is the Molex connector and is used for PATA hard drives, PATA CD/DVD drives, and extra cooling fans. The Molex is a four-pin connector that is usually one of the largest connectors. A mini-Molex or Berg connector is a four-pin connector that is rather small and only used for floppy disk drives, specifically the 3.5-inch variant of drive. SATA devices use SATA power cables, which are 15-pin L-shaped connectors. PCIe power connectors (peripheral component interconnect express) are six-pin or eight-pin connectors that are used to provide additional power to PCIe video cards at 12 VDC. Finally, if you run out of connectors of a certain type, there are conversion cables to make a Molex into SATA, or Molex into PCIe. Additionally, there exist Y-connectors for Molex that allow a single Molex to be split into two Molex connectors. As you remember, power supplies convert AC to DC power to provide power to the devices. These connectors have either +/-3.3 VDC, +/- 5 VDC, or +/- 12 VDC. \n \n 除了主板需要電源才能工作之外，外圍設備也需要電源才能工作。電源為整個計算機系統中使用的外圍設備提供了額外的連接器。最古老的連接器是Molex連接器，用於PATA硬盤驅動器，PATA CD / DVD驅動器和額外的冷卻風扇。 Molex是四針連接器，通常是最大的連接器之一。微型Molex或Berg連接器是一個四針連接器，它很小，僅用於軟盤驅動器，尤其是3.5英寸驅動器。 SATA設備使用SATA電源線，該電源線是15針L形連接器。 PCIe電源連接器（外圍組件互連Express）是六針或八針連接器，用於為12 VDC的PCIe視頻卡提供額外的電源。最後，如果您用完了某種類型的連接器，也可以使用轉換電纜將Molex轉換為SATA，或將Molex轉換為PCIe。此外，還存在用於Molex的Y型連接器，該連接器可將單個Molex分為兩個Molex連接器。您還記得，電源將交流電轉換為直流電，以便為設備供電。這些連接器具有+/- 3.3 VDC，+ /-5 VDC或+/- 12 VDC。 \n \n', 'tags': '', 'url': 'Power Supply Connectors\xa0電源連接器(P.40).html'}, {'title': 'Remove A Power Supply\xa0卸下電源(P.41)', 'text': '\n Learning objective 學習目標 \n • Disassemble and reassemble computers in the most common case designs. \n \xa0 \xa0在最常見的案例設計中，拆卸並重新組裝計算機。 \n •\xa0Recommend and install an appropriate power supply given specific hardware to be powered. \n \xa0 根據要供電的特定硬件，建議並安裝適當的電源。 \n • \xa0 Test power supplies to ascertain proper functioning. \n \xa0 測試電源以確定功能正常。 \n \n To remove the power supply, first you must power down the computer. Next, you want to verify the power switch is in the off position, and disconnect the power cord from the wall and from the machine. You can then open the case by removing the screens, and then disconnect all power supply cables from all the devices in the computer. Next, you will remove all the screws holding the PSU in place and lift or slide out the power supply from the workstation. \n \n \n Power supply unit.\xa0\xa0供電單元。 \n \n Replace A Power Supply\xa0更換電源 \n \n To replace a PSU, you would need to verify the proper wattage for the new power supply and slide the power supply into the case. You then need to screw the power supply into place and connect all the power supply cables to the various internal components. Next, you should check the voltage setting and make sure it is set to 110 VAC for North America or 230 VAC for European/Asian countries. Connect your power cord to the power supply and turn on the computer. If the computer works properly, you can then close the case and secure the enclosure with screws. \n \n 要更換PSU，您需要驗證新電源的合適功率，並將電源滑入機箱。 然後，您需要將電源固定到位，並將所有電源電纜連接到各種內部組件。 接下來，您應該檢查電壓設置，並確保將其設置為北美的110 VAC或歐洲/亞洲國家的230 VAC。 將電源線連接到電源，然後打開計算機。 如果計算機正常運行，則可以合上機箱並用螺釘固定機箱。 \n \n Test a Power Supply\xa0測試電源 \n \n In order to test a PSU, you can use either a multimeter or a power supply tester. While a multimeter would work, you must be able to know the exact pinout for each type of connector and the amount of voltage to expect from each pin. Instead, it is much simpler to buy one of many different computer power supply testers on the market today. Small LEDs light up to let you know if the power feeds are working correctly. The motherboard power tester also beeps to let you know it is receiving the correct amount of power. This device is a must for anyone who wants to be able to test power supplies quickly and easily. To use it, simply hook up the motherboard power connector (20+4 connector) to the right side of the tester. Next, hook up the power connector for the device (SATA, Molex, Berg, etc.) to the left hand side of the tester. The lights will show up green if you are receiving the proper voltages (3, 5, 12 VDC). \n \n 為了測試PSU，可以使用萬用表或電源測試儀。 儘管萬用表可以工作，但您必須能夠知道每種連接器的確切引腳排列以及每個引腳的預期電壓量。 相反，購買當今市場上許多不同的計算機電源測試儀之一要簡單得多。 小型LED會亮起，以告知電源是否正常工作。 主板電源測試儀還會發出嗶嗶聲，以通知您它正在接收正確數量的電源。 對於希望能夠快速輕鬆地測試電源的任何人來說，此設備都是必需的。 要使用它，只需將主板電源連接器（20 + 4連接器）連接到測試儀的右側即可。 接下來，將設備（SATA，Molex，Berg等）的電源連接器連接到測試儀的左側。 如果您接受適當的電壓（3、5、12 VDC），則指示燈將呈綠色亮起。 \n \n \n Power supply tester.\xa0\xa0電源測試儀。 \n \n \n', 'tags': '', 'url': 'Remove A Power Supply\xa0卸下電源(P.41).html'}, {'title': 'HW2', 'text': '', 'tags': '', 'url': 'HW2.html'}, {'title': 'Pc Software', 'text': '', 'tags': '', 'url': 'Pc Software.html'}, {'title': 'PCS 9 Windows Vista, 7, 8.1, and 10 Specific Control Panel Utilities (Windows Vista，7、8.1和10特定的控制面板實用程序)', 'text': 'Learning objective 學習目標 \n •\xa0 Given a scenario, use Windows Vista, Windows 7, Windows 8.1, and Windows 10 Control Panel utilities. \n \xa0 \xa0在給定方案的情況下，請使用Windows Vista，Windows 7，Windows 8.1和Windows 10控制面板實 用程序。 \n Overview 總覽 \n \n The Control Panel is the main location used by a technician to adjust hardware and user interface settings in Windows. While many of the Control Panel utilities are the same in the various versions of the Windows operating system, each version of Windows typically introduces new Control Panel utilities as well. Here is a table listing some of these features and utilities that were launched under specific Windows versions. \n \n 控制面板是技術人員在Windows中用於調整硬件和用戶界面設置的主要位置。 儘管Windows操作系統的各個版本中的許多“控制面板”實用程序都是相同的，但每個Windows版本通常也會引入新的“控制面板”實用程序。 下表列出了在特定Windows版本下啟動的某些功能和實用程序。 \n \n \n \n \n Windows Vista \n Windows 7 \n Windows 8.1 \n \n \n \n Categories — Control Panel utilities organized into Categories \n 類別-按類別分類的控制面板實用程序 \n \n \n Action Center \n 重要訊息中心 \n \n \n PC Settings — select Control Panel settings available from the Charms Bar \n PC設置-從右側邊欄中選擇可用的控制面板設置 \n \n \n \n \n Pen and Input Devices \n 觸控筆及輸入裝置 \n \n \n HomeGroup \n 家庭群組(家用群組) \n \n \n Family Safety \n 家庭安全 \n \n \n \n \n Printers \n 印表機 \n \n \n RemoteApps and Desktop Connections \n 遠端桌面連線應用程式 \n \n \n File History \n 歷史文件 \n \n \n \n \n Problem Reports and Solutions \n 問題報告和解決方案 \n \n \n Troubleshooting \n 故障排除 \n \n \n Storage Spaces \n 儲存空間 \n \n \n \n \n \n \n Work Folders \n 工作資料夾 \n \n \n \n \n \n In our discussion below, you will see that some features migrate to different utilities with releases of new Windows versions. \n \n 在下面的討論中，您會看到隨著Windows新版本的發布，某些功能會遷移到不同的實用程序。 \n \n', 'tags': '', 'url': 'PCS 9 Windows Vista, 7, 8.1, and 10 Specific Control Panel Utilities (Windows Vista，7、8.1和10特定的控制面板實用程序).html'}, {'title': 'Windows Vista', 'text': '\n Pen and Input Devices\xa0 觸控筆及輸入裝置 \n \n \n The Pen and Input Devices utility in Windows Vista is used to provide settings for when the workstation is used as a tablet device or has an add-on tablet with a touchscreen monitor. The name of the utility was changed to Pen and Touch for Windows 7, Windows 8.1, and Windows 10, but otherwise remains mostly unchanged. The Pen Options tab provides options to configure various actions for single-tap, double-tap, press and hold, and other gestures. The Pointer Options tab provides options for configuring dynamic feedback and pen cursors. The Flicks tab provides options to configure pen gestures to navigate the operating system and edit documents. \n Windows Vista中的“觸控筆及輸入設備”實用程序用於為工作站用作平板電腦設備或帶有觸摸屏顯示器的附加平板電腦提供設置。 對於Windows 7，Windows 8.1和Windows 10，該實用程序的名稱已更改為Pen and Touch，但在其他方面幾乎保持不變。 “筆選項”選項卡提供的選項可配置用於單擊，雙擊，按住並保持其他手勢的各種操作。 指針選項選項卡提供用於配置動態反饋和筆形光標的選項。 “輕拂”選項卡提供了一些選項，可以配置筆手勢來導航操作系統和編輯文檔。 \n \n \n Printers 印表機 \n Windows Vista separates the Printers utility from Printers and Faxes as it was in Windows XP. As you would expect, Printers is used to add, set up, configure, and remove local and networked printers from the computer. From this utility, the administrator can run the Add a Printer Wizard (top menu bar), open up a print spooler by double clicking the printer in order to pause or remove a print job, or share the printer with other users. Networked printers can be added by using the wizard or can be manually configured using the IP address or the printer name. \n Windows Vista與Windows XP一樣，將Printers實用程序與Printers and Faxes分開。 如您所料，印表機用於添加、設置、配置和從計算機中刪除本地和網絡印表機。 管理員可以從該實用程序運行“添加印表機嚮導”（頂部菜單欄），通過雙擊印表機打開列印後台處理程序以暫停或刪除列印作業，或與其他用戶共享印表機。 可以使用嚮導添加網絡印表機，也可以使用IP地址或印表機機名稱手動配置網絡印表機。 \n Starting with Windows 7, the Printers utility became bundled with Devices and Printers as it included all hardware peripheral devices such as digital cameras, scanners, and Bluetooth-connected devices. \n 從Windows 7開始，印表機實用程序與設備和印表機捆綁在一起，因為它包含所有硬件外圍設備，例如數位相機，掃描儀和連接藍牙的設備。 \n \n \n Problem Reports and Solutions\xa0問題報告和解決方案 \n \n Introduced in Windows Vista, Problem Reports and Solutions provides a convenient way to view and manage problem reports and receive solutions to a problem. The utility lists any problems that have occurred with Microsoft or third-party programs, as well as any current solutions that are ready for installation. \n \n \n Windows Vista中引入的問題報告和解決方案提供了一種方便的方式來查看和管理問題報告以及接收問題的解決方案。 該實用程序列出了Microsoft或第三方程序出現的所有問題，以及準備安裝的任何當前解決方案。 \n This utility has since been migrated to the Maintenance section of the Windows 7, Windows 8.1, and Windows 10 Action Center. \n 此實用程序此後已遷移到Windows 7，Windows 8.1和Windows 10操作中心的“維護”部分。 \n \n \n \n', 'tags': '', 'url': 'Windows Vista.html'}]};