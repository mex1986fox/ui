<template>
	<layout>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<span class="ui-header ui-header_1"> Карточки </span>
					<br>
					<span class="ui-header ui-header_2"> Объявления </span>
				</div>
				<div class="col_6 col_offset-3 col-phone_6 col-phone_offset-0">
					<div class="row">
						<div class="col-12">
							<div v-for="(val, key) in ads"
							     :key="key"
							     class="wg-content-frame">
								<wg-card-ad :object="val">
								</wg-card-ad>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col_12">
					<span class="ui-header ui-header_2"> Фотографии </span>
				</div>
				<div class="col_6 col_offset-3 col-phone_6 col-phone_offset-0">
					<div class="row">
						<div class="col-12">
							<div class="wg-content-frame">
								<wg-card-photo>

								</wg-card-photo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>
<script>
export default {
  name: "pg-cards",
  data() {
    return {
      showMenu: false,
      ads: [
        {
          id: 1,
          date: "25/17/2018",
          link: "/link_ad",
          city: "Кемерово",
          region: "Кемеровсая область",
          brand: "Chevrolet",
          model: "Camaro",
          year: "2008",
          price: "152000",
          fuel: "бензин",
          volume: "2.4",
          helm: "левый",
          mileage: "250000",
          transmission: "автомат",
          drive: "передний",
          description:
            "Этот автомобиль можно приобрести по более выгодной цене на аукционе. Еженедельные аукционы проходят каждую субботу в 16:00 на 19 км автодороги Новокузнецк – Ленинск- Кузнецкий. Rукцион – это возможность выгодно приобрести автомобиль, принимая непосредственное участие в формировании его цены. По указанной в объявлении цене можно приобрести автомобиль без аукциона. Автомобиль доступен для осмотра и тест- драйва ежедневно с 9:00 до 20:00 на 19 км автодороги Новокузнецк – Ленинск- Кузнецкий.",
          likes: 25536,
          dislikes: 4800,
          comments: 562,
          user: {
            id: 12,
            nickname: "Mini_Guliver",
            name: "Alisochka",
            surname: "Frolova",
            avatar: "/public/img/avatar.jpg"
          },
          slide: [
            { src: "/public/img/cam1.jpg" },
            { src: "/public/img/cam2.jpg" },
            { src: "/public/img/cam3.jpg" },
            { src: "/public/img/cam4.jpg" },
            { src: "/public/img/cam5.jpg" }
          ],
          slide_navigation: [
            { src: "/public/img/cam1.jpg" },
            { src: "/public/img/cam2.jpg" },
            { src: "/public/img/cam3.jpg" },
            { src: "/public/img/cam4.jpg" },
            { src: "/public/img/cam5.jpg" }
          ]
        },
        {
          id: 1,
          date: "25/17/2018",
          link: "/link_ad",
          city: "Кемерово",
          region: "Кемеровсая область",
          brand: "Chevrolet",
          model: "Camaro",
          year: "2008",
          price: "152000",
          fuel: "бензин",
          volume: "2.4",
          helm: "левый",
          mileage: "250000",
          transmission: "автомат",
          drive: "передний",
          description:
            "Этот автомобиль можно приобрести по более выгодной цене на аукционе. Еженедельные аукционы проходят каждую субботу в 16:00 на 19 км автодороги Новокузнецк – Ленинск- Кузнецкий. Rукцион – это возможность выгодно приобрести автомобиль, принимая непосредственное участие в формировании его цены. По указанной в объявлении цене можно приобрести автомобиль без аукциона. Автомобиль доступен для осмотра и тест- драйва ежедневно с 9:00 до 20:00 на 19 км автодороги Новокузнецк – Ленинск- Кузнецкий.",
          likes: 25536,
          dislikes: 4800,
          comments: 562,
          user: {
            id: 12,
            nickname: "Mini_Guliver",
            name: "Alisochka",
            surname: "Frolova",
            avatar: "/public/img/avatar.jpg"
          },
          slide: [
            { src: "/public/img/cam1.jpg" },
            { src: "/public/img/cam2.jpg" },
            { src: "/public/img/cam3.jpg" },
            { src: "/public/img/cam4.jpg" },
            { src: "/public/img/cam5.jpg" }
          ],
          slide_navigation: [
            { src: "/public/img/cam1.jpg" },
            { src: "/public/img/cam2.jpg" },
            { src: "/public/img/cam3.jpg" },
            { src: "/public/img/cam4.jpg" },
            { src: "/public/img/cam5.jpg" }
          ]
        },
        {
          id: 1,
          date: "25/17/2018",
          link: "/link_ad",
          city: "Кемерово",
          region: "Кемеровсая область",
          brand: "Chevrolet",
          model: "Camaro",
          year: "2008",
          price: "152000",
          fuel: "бензин",
          volume: "2.4",
          helm: "левый",
          mileage: "250000",
          transmission: "автомат",
          drive: "передний",
          description:
            "Этот автомобиль можно приобрести по более выгодной цене на аукционе. Еженедельные аукционы проходят каждую субботу в 16:00 на 19 км автодороги Новокузнецк – Ленинск- Кузнецкий. Rукцион – это возможность выгодно приобрести автомобиль, принимая непосредственное участие в формировании его цены. По указанной в объявлении цене можно приобрести автомобиль без аукциона. Автомобиль доступен для осмотра и тест- драйва ежедневно с 9:00 до 20:00 на 19 км автодороги Новокузнецк – Ленинск- Кузнецкий.",
          likes: 25536,
          dislikes: 4800,
          comments: 562,
          user: {
            id: 12,
            nickname: "Mini_Guliver",
            name: "Alisochka",
            surname: "Frolova",
            avatar: "/public/img/avatar.jpg"
          },
          slide: [
            { src: "/public/img/cam1.jpg" },
            { src: "/public/img/cam2.jpg" },
            { src: "/public/img/cam3.jpg" },
            { src: "/public/img/cam4.jpg" },
            { src: "/public/img/cam5.jpg" }
          ],
          slide_navigation: [
            { src: "/public/img/cam1.jpg" },
            { src: "/public/img/cam2.jpg" },
            { src: "/public/img/cam3.jpg" },
            { src: "/public/img/cam4.jpg" },
            { src: "/public/img/cam5.jpg" }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>