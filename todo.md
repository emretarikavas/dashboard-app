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

HomePage2 sayfamdaki DropdownBox bileşenimde senden yapmanı istediğim şeyler var

ilk olarak departmanları listelemeni istiyorum. children.title a Departman children.content de bir menü açılsın eğer kullanıcının giriş yaptığı departman eğer Müdür ise diğer departmanların verilerine ulaşabilsin değilse giriş yapan kullanıcı sadece kendi departmanına ulaşabilsin

2. olarak istediğim children.title da Dönem yazsın. children.content de Tarih aralığı seç yazsın menü açıldığında ise son 7 gün, son 30 gün ve son 1 yıl olarak listelensin ve tıkladığında veriler ona göre güncellensin

bu iki isteğimi tek bileşen halinde yap prop lar ile göndereyim contextlerimi kontrol etmeyi unutma. UsersData ve BillingData json dosyalarıma göre haraket et. son olarak DropdownBox bileşenini select option şeklinde yapma divler ile yap çünkü ben stillendirmek istiyorum
