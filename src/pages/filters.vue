<template>
	<layout>
		<div class="container">
			<div class="row">

				<div class="col-12">
					<span class="ui-header ui-header_1"> Фильтры </span>
					<br>
					<span class="ui-header ui-header_2"> Объявления </span>
				</div>
				<div class="col_12">
					<button @click="showFilterAds=true"
					        class="ui-button">
						Показать фильтр объявлений
					</button>
				</div>
				<div class="col_12">
					<ui-blind :show="showFilterAds"
					          @onHide="showFilterAds=false"
					          animate="right"
					          style="background-color: rgba(255, 255, 255, 0);">
						<div class="container">
							<div class="row">
								<div class="col_5 col_offset-7 col-tablet_8 col-tablet_offset-4 col-phone_6 col-phone_offset-0">
									<wg-filter-add @onHide="
								     showFilterAds=false
								     ">

									</wg-filter-add>
								</div>
							</div>
						</div>

					</ui-blind>
				</div>
				<div class="col_12">
					<button @click="showFormAdd=true"
					        class="ui-button">
						Показать форму подачи объявления
					</button>
				</div>
				<div class="col_12">
					<ui-blind :show="showFormAdd"
					          @onHide="showFormAdd=false"
					          animate="top"
					          style="background-color: rgba(255, 255, 255, 0);">
						<div class="container">
							<div class="row">
								<div class="col_4 col_offset-8 col-tablet_8 col-tablet_offset-4 col-phone_6 col-phone_offset-0">
									<wg-form-add @onHide="
								     showFormAdd=false
								     ">

									</wg-form-add>
								</div>
							</div>
						</div>

					</ui-blind>
				</div>

			</div>
		</div>
	</layout>
</template>
<script>
export default {
  name: "wg-filters",
  data() {
    return {
      showFilterAds: false,
			showFormAdd: false
    };
  }
};
</script>
