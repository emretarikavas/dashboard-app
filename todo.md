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

[x] //FIXME: usersData da giriş yapan kullanıcı farklı olsa bile ilk kullanıcının bilgileri geliyor
[] //TODO: Calendar'a animasyon ekle
[] //TODO: Listeleri kendi içinde scroll et
[] //TODO: Sidebar mobile geçtiğinde sadece iconlar gözüksün
[] //TODO: dropdownlara Outside click ekle

TotalBox bileşenimde senden şunları yapmanı istiyorum

1. kullanıcı hangi departmanla giriş yaptıysa billingData.json da o departmana ait verileri baz al müdür hariç

2. giriş yapan kullanıcı eğer müdür ise bilingdata.json dosyasındaki tüm verileri baz al

3. billingData.json dosyasındaki status durumu gelir ise componenti dediklerime göre güncelle tabii ki bunları billingData.json dosyasındaki department bilgisine bakarak yap

- h3 de Toplam Kesilen Fatura yazsın
- yine IncomeIcon bileşeni kullanılsın
- h5 de status bilgisi gelir olan tüm faturaların amount verisinin toplamını al ve utils içindeki format fonksiyonundan geçir
  -h6 da ise status bilgisi gelir olan faturaların toplamını yaz

4. billingData.json dosyasındaki status durumu gider ise componenti dediklerime göre güncelle tabii ki bunları billingData.json dosyasındaki department bilgisine bakarak yap

- h3 de Toplam Ödenen Fatura yazsın
- IncomeIcon yerine ExpenseIcon bileşeni kullanılsın
- h5 de status bilgisi gider ama expense_status bilgisi Ödendi olan tüm faturaların amount verisinin toplamını al ve utils içindeki format fonksiyonundan geçir
  -h6 da ise status bilgisi gider olan ama expense_status bilgisi Ödendi olan faturaların toplamını yaz

bunun verilerini sadece dışardan prop vererek değiştirmek istiyorum bileşeni ona göre hazırla
