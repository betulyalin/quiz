const questionsHard = [
  {
    question: "Benim için en ideal tatil süresi kaç gündür?",
    answers: ["3 gün", "5 gün", "7 gün", "10 gün"],
    correct_answer: "7 gün"
  },
  {
    question: "Bir işe başlarken beni en çok motive eden şey nedir?",
    answers: ["Hedef", "Takdir", "Merak", "Rekabet"],
    correct_answer: "Merak"
  },
  {
    question: "En çok zorlandığım konu hangisi?",
    answers: ["Plan yapmak", "Sabırlı olmak", "Erken kalkmak", "Hayır demek"],
    correct_answer: "Erken kalkmak"
  },
  {
    question: "Sosyal ortamda genelde nasıl davranırım?",
    answers: ["Hemen konuşurum", "Önce gözlemlerim", "Sessiz kalırım", "Grubu yönetirim"],
    correct_answer: "Önce gözlemlerim"
  },
  {
    question: "Yeni bir hobiye başlarken önce ne yaparım?",
    answers: ["Araştırma yaparım", "Hemen denerim", "Video izlerim", "Birinden öğrenirim"],
    correct_answer: "Araştırma yaparım"
  },
  {
    question: "Bir karar verirken hangisi daha ağır basar?",
    answers: ["Mantık", "Duygu", "Risk", "Tavsiye"],
    correct_answer: "Mantık"
  },
  {
    question: "Hangi ortamda daha rahat çalışırım?",
    answers: ["Sessiz", "Hafif müzikli", "Kalabalık", "Açık hava"],
    correct_answer: "Sessiz"
  },
  {
    question: "Beni en çok strese sokan durum hangisidir?",
    answers: ["Son dakika işler", "Kalabalık", "Belirsizlik", "Tekrarlayan işler"],
    correct_answer: "Son dakika işler"
  },
  {
    question: "Bir konuda uzmanlaşmak için genelde hangi yolu seçerim?",
    answers: ["Düzenli pratik", "Yoğun kısa çalışma", "Deneme yanılma", "Kurs alırım"],
    correct_answer: "Düzenli pratik"
  },
  {
    question: "En çok önem verdiğim değer hangisidir?",
    answers: ["Güven", "Özgürlük", "Başarı", "Huzur"],
    correct_answer: "Güven"
  },
  {
    question: "Bir arkadaşlıkta en çok neye değer veririm?",
    answers: ["Dürüstlük", "Sadakat", "Eğlence", "Destek"],
    correct_answer: "Dürüstlük"
  },
  {
    question: "Benim için 'başarı' ne anlama geliyor?",
    answers: ["Çok para kazanmak", "Mutlu olmak", "İnsanlara yardım etmek", "Sürekli öğrenmek"],
    correct_answer: "Mutlu olmak"
  },
  {
    question: "Hayatımda verdiğim en zor karar neyle ilgiliydi?",
    answers: ["Kariyer", "İlişkiler", "Aile", "Eğitim"],
    correct_answer: "İlişkiler"
  },
  {
    question: "Kendimle ilgili en çok gurur duyduğum özellik nedir?",
    answers: ["Dayanıklılığım", "Empati yeteneğim", "Mizah anlayışım", "Merakım"],
    correct_answer: "Empati yeteneğim"
  },
  {
    question: "Eğer geçmişe dönebilseydim, hangi tavsiyeyi kendime verirdim?",
    answers: ["'Daha çok risk al'", "'İnsanlara daha az güven'", "'Anın tadını çıkar'", "'Daha çok ders çalış'"],
    correct_answer: "'Anın tadını çıkar'"
  },
  {
    question: "Hayat felsefemi özetleyen cümle hangisi olabilir?",
    answers: ["'Her şeyin bir nedeni vardır'", "'Carpe Diem'", "'Zorluklar seni güçlendirir'", "'Olduğu kadar, olmadığı kader'"],
    correct_answer: "'Olduğu kadar, olmadığı kader'"
  },
  {
    question: "Beni gerçekten ne sinirlendirir?",
    answers: ["Haksızlık", "Yalan söylenmesi", "Bencillik", "Yavaş internet"],
    correct_answer: "Haksızlık"
  },
  {
    question: "İnsanlarda en çok takdir ettiğim özellik hangisidir?",
    answers: ["Zeka", "Nezaket", "Cesaret", "Samimiyet"],
    correct_answer: "Samimiyet"
  },
  {
    question: "Gelecek 5 yıl içinde en büyük hedefim nedir?",
    answers: ["Yeni bir dil öğrenmek", "Dünyayı gezmek", "Kendi işimi kurmak", "Daha sağlıklı yaşamak"],
    correct_answer: "Dünyayı gezmek"
  },
  {
    question: "Hayatım bir kitap olsaydı adı ne olurdu?",
    answers: ["Beklenmedik Yolculuk", "Sakin Bir Kaos", "Deneme ve Yanılma Sanatı", "Bir Garip Macera"],
    correct_answer: "Deneme ve Yanılma Sanatı"
  },
  {
    question: "Hangi konuda tavsiye vermekte iyiyimdir?",
    answers: ["Film/Dizi", "Teknoloji", "İlişkiler", "Gezilecek yerler"],
    correct_answer: "Film/Dizi"
  },
  {
    question: "Bir hata yaptığımda ilk tepkim ne olur?",
    answers: ["Kabul edip düzeltmeye çalışırım", "Savunmaya geçerim", "Görmezden gelirim", "Kendime çok kızarım"],
    correct_answer: "Kabul edip düzeltmeye çalışırım"
  },
  {
    question: "Beni en çok ne heyecanlandırır?",
    answers: ["Yeni bir yer görmek", "Yeni bir şey öğrenmek", "Sevdiğim insanlarla vakit geçirmek", "Bir hedefe ulaşmak"],
    correct_answer: "Yeni bir yer görmek"
  },
  {
    question: "Yalnız kalmaya ihtiyacım olduğunda ne yaparım?",
    answers: ["Müzik dinlerim", "Doğada yürüyüşe çıkarım", "Sadece uzanıp düşünürüm", "Yaratıcı bir şeyle uğraşırım"],
    correct_answer: "Müzik dinlerim"
  },
  {
    question: "Hayatımdaki en büyük dönüm noktası neydi?",
    answers: ["Üniversiteye başlamak", "İlk kez tek başıma seyahat etmek", "Önemli bir ilişki", "Farklı bir şehre taşınmak"],
    correct_answer: "Üniversiteye başlamak"
  },
  {
    question: "Hangi korkumla yüzleşmek isterdim?",
    answers: ["Topluluk önünde konuşma", "Başarısızlık", "Yalnızlık", "Belirsizlik"],
    correct_answer: "Başarısızlık"
  },
  {
    question: "Sezgilerime ne kadar güvenirim?",
    answers: ["Her zaman güvenirim", "Genellikle güvenirim", "Nadiren güvenirim", "Mantığıma daha çok güvenirim"],
    correct_answer: "Genellikle güvenirim"
  },
  {
    question: "Eleştiriyle nasıl başa çıkarım?",
    answers: ["Yapıcıysa dikkate alırım", "Kişisel algılarım", "Genellikle umursamam", "Savunmacı davranırım"],
    correct_answer: "Yapıcıysa dikkate alırım"
  },
  {
    question: "Benim için 'macera' ne demektir?",
    answers: ["Planlanmamış bir yolculuk", "Yeni bir yetenek öğrenmek", "Konfor alanının dışına çıkmak", "Ekstrem sporlar yapmak"],
    correct_answer: "Konfor alanının dışına çıkmak"
  },
  {
    question: "Hayatımda en çok minnettar olduğum şey nedir?",
    answers: ["Ailem ve arkadaşlarım", "Sağlığım", "Öğrenme fırsatlarım", "Sahip olduğum özgürlük"],
    correct_answer: "Ailem ve arkadaşlarım"
  }
];

export default questionsHard;
