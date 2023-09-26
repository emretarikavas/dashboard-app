[x] //FIXME : Login Page de ki bugları düzelt ve ss aldığın görsellere göre tekrardan ufak bir tasarlama yap
[x] //FIXME : Login Pagede otomatik tamamlamada inputların bg si beyaza dönüyor
[x] //FIXME : Vercel bugfix
[x] //FIXME : Login Pagede boşluğu biraz arttır

[x]: //TODO: Navbar yap
[x]: //TODO: Sidebar yap

[x] //TODO : Renk paletini tekrardan düzenle
[x] //TODO : Billing apisini tekrardan yazdır

[x] //TODO : HomePage genel grid yapısını oluştur
[x] //TODO : Box ları çıkart
[x] //TODO: Her departmana ayrı veriler çıkart

[] //FIXME: usersData da giriş yapan kullanıcı farklı olsa bile ilk kullanıcının bilgileri geliyor
[] //TODO: Calendar'a animasyon ekle
[] //TODO: Listeleri kendi içinde scroll et
[] //TODO : Sidebar mobile geçtiğinde sadece iconlar gözüksün
[] //TODO: dropdownlara Outside click ekle

ExpenseBarChart ve IncomeBarChart bileşenlerimde şöyle bir şey olsun istiyorum

1. billingData.json dosyasından veriler alınsın ExpenseBarChart için departman ve Gider bilgisi IncomeBarChart içinse yine departman ve Gelir bilgisi alınsın

2. Benim Dropdown2 bileşenimde bir datePicker var. Bu datePicker da tarih veya tarih aralığı seçtiğimde ona göre grafiklerin değerleri değişsin

3. seçtiğim tarih aralığı eğer 7 gün veya 7 günün altındaysa pazartesiden cumaya kadar grafiğin altında yazsın ve tüm günler gözüksün mesela sadece cuma günü veri var diye sadece cuma gününü gösterme tüm günleri göster ama sadece cuma gününün barı artsın diğerlerinin barı 0 kalsın

4. seçtiğim tarih aralığı 7 günden fazla 30 günden az ise 4 tane bar olsun ve barların altında 1. hafta 2.hafta 3.hafta ve 4. hafta yazsın 3. maddede barlar hakkında söylediğim şeyler bunun içinde geçerli

5. eğer 30 günden fazla ise artık ocaktan aralığa kadar grafik aylara bölünsün 12 tane bar olsun hangisinde veya hangilerinde veriler varsa o barlar yüksek olsun ama diğer aylar silinmesin yine aynı kalsın yani 12 barın altında ocaktan aralığa kadar yazsın

bunu benim iki bileşenimden birinde uygula
