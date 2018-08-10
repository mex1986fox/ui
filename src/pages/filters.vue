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
									<wg-filter-ad @onHide="
								     showFilterAds=false
								     ">

									</wg-filter-ad>
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
      showFilterAds: false
    };
  }
};
</script>
