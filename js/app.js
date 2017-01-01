var presentazioneData = {
  title_presentation:"TO TRAVEL IS TO LIVE",
  descr_presentation:"You Don't Need Magic to Desappear, All you need is a destination."
};

var galleryTravelSlides={
	slides:[
			{
				path_img:"img/1.jpg",
				titolo_luogo:"Auckland",
				descrizione_luogo:"Capitale finanziaria Nuova Zelanda"
			},
			{
				path_img:"img/2.jpg",
				titolo_luogo:"London",
				descrizione_luogo:"Capitale finanziaria UK"
			},
			{
				path_img:"img/3.jpg",
				titolo_luogo:"Tokyo",
				descrizione_luogo:"Metropoli del sol Levante"
			},
			{
				path_img:"img/4.jpg",
				titolo_luogo:"Roma",
				descrizione_luogo:"La Città Eterna"
			},
			{
				path_img:"img/5.jpg",
				titolo_luogo:"New York",
				descrizione_luogo:"La Città dei Grattacieli"
			},
			{
				path_img:"img/6.jpg",
				titolo_luogo:"Dubai",
				descrizione_luogo:"Il paese degli emiri e del lusso."
			}
    ]
};

var presentazioneSito = new Vue({
  el: '#presentazione_sito',
  data:presentazioneData
});

var galleryTravelGallery = new Vue({
	el:"#travel_gallery",
	data:galleryTravelSlides 
});

